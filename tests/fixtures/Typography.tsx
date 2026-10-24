import React, { createRef, useCallback, useEffect, useRef, useState } from "react";
import { Text, textStyles } from "stark-lib/text";

export function TypographyFixture() {
  const forwarded = useRef<HTMLAnchorElement>(null);
  const child = useRef<HTMLAnchorElement>(null);
  const cleanupParent = useRef<HTMLAnchorElement>(null);
  const cleanupCounts = useRef({ mounts: 0, cleanups: 0 });
  const [cleanupStatus, setCleanupStatus] = useState("");
  const cleanupRef = useCallback((node: HTMLAnchorElement | null) => {
    if (node) {
      cleanupCounts.current.mounts++;
      return () => { cleanupCounts.current.cleanups++; };
    }
  }, []);
  const [mounted, setMounted] = useState(true);
  const [refs, setRefs] = useState("");
  const [events, setEvents] = useState<string[]>([]);
  useEffect(() => {
    setRefs(mounted && forwarded.current === child.current && !!forwarded.current ? "same anchor" : !mounted && !forwarded.current && !child.current ? "cleared" : "incorrect");
    setCleanupStatus(`${cleanupCounts.current.mounts}/${cleanupCounts.current.cleanups}/${cleanupParent.current ? "attached" : "cleared"}`);
  }, [mounted]);
  return <main>
    <div data-testid="parent" className="text-danger text-caption font-semibold">
      <Text inherit data-testid="inherited">Inherited copy</Text>
      <Text tone="success" data-testid="explicit">Explicit copy</Text>
    </div>
    <Text as="h5" size="body-large">Fifth-level heading</Text>
    <Text as="h6" size="body">Sixth-level heading</Text>
    <Text as="label" htmlFor="text-labelled">Full name</Text>
    <input id="text-labelled" className={textStyles()} />
    <p id="parent-description">Parent description</p><p id="child-description">Child description</p>
    {mounted && <Text asChild inherit ref={forwarded} tone="primary" aria-describedby="parent-description" className="font-bold" style={{ letterSpacing: 2 }} onClick={() => setEvents(previous => [...previous, "parent"])}>
      <a href="#target" ref={child} aria-describedby="child-description" className="underline" style={{ letterSpacing: 3 }} onClick={() => setEvents(previous => [...previous, "child"])}>Composed link</a>
    </Text>}
    {mounted && <Text asChild inherit ref={cleanupParent}><a href="#cleanup" ref={cleanupRef}>Cleanup link</a></Text>}
    <output aria-label="Cleanup status">{cleanupStatus}</output>
    <output aria-label="Ref status">{refs}</output><output aria-label="Event order">{events.join(",")}</output>
    <button type="button" onClick={() => setMounted(value => !value)}>Toggle link</button>
  </main>;
}
// These contracts are checked by the tooling typecheck as well as the browser.
const anchor = createRef<HTMLAnchorElement>();
const heading = createRef<HTMLHeadingElement>();
const validLink = <Text as="a" href="#target" ref={anchor}>Link</Text>;
const validHeading = <Text as="h6" ref={heading}>Heading</Text>;
// @ts-expect-error Native anchor props require choosing the anchor element.
const invalidLink = <Text href="#target">Link</Text>;
// @ts-expect-error Typography values are constrained to the shared scale.
const invalidWeight = <Text weight="heavy">Copy</Text>;
void [validLink, validHeading, invalidLink, invalidWeight];
