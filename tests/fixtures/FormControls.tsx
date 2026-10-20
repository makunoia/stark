import React, { useRef, useState } from "react";
import { Button, Checkbox, Input, RadioGroup, Stack, Switch, Text, Textarea } from "stark-lib";

const options = [
  { value: "daily", label: "Daily", helpText: "A digest at the end of each day." },
  { value: "weekly", label: "Weekly", helpText: "One summary every Monday." },
  { value: "never", label: "Never", disabled: true },
];

export function FormControlsVisual() {
  return <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
    <section>
      <Text as="h2" size="lead" weight="bold">Checkbox</Text>
      <Checkbox id="checkbox-focus" label="Product updates" helpText="Receive news and announcements." />
      <Checkbox label="Selected" defaultChecked />
      <Checkbox label="Mixed" indeterminate />
      <Checkbox label="Mixed and checked" indeterminate defaultChecked />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Selected and disabled" disabled defaultChecked />
      <Checkbox label="Accept the terms" error helpText="Accept the terms to continue." />
    </section>
    <section>
      <Text as="h2" size="lead" weight="bold">Switch</Text>
      <Switch id="switch-focus" label="Push notifications" helpText="Get notified when a project changes." />
      <Switch label="Enabled" defaultChecked />
      <Switch label="Disabled" disabled />
      <Switch label="Enabled and disabled" disabled defaultChecked />
      <Switch label="Sync preferences" error helpText="This preference could not be saved." />
    </section>
    <section>
      <RadioGroup id="radio-focus" name="frequency" label="Email frequency" options={options} defaultValue="weekly" />
      <RadioGroup label="Horizontal" horizontal options={[{ value: "one", label: "One" }, { value: "two", label: "Two" }]} />
    </section>
    <section>
      <RadioGroup label="Disabled group" options={options} disabled defaultValue="weekly" />
      <RadioGroup label="Choose a frequency" options={options} error helpText="Select an option to continue." />
    </section>
    <Textarea id="textarea-focus" label="Bio" optional defaultValue={"Product designer\nBuilding thoughtful tools with Stark."} helpText="A short introduction for your profile." />
    <Textarea label="Error" error helpText="Keep your bio under 500 characters." />
    <Textarea label="Disabled bio" disabled defaultValue="Managed by your organization." />
    <Textarea label="Read-only bio" readOnly defaultValue="Managed by your organization." />
    <div style={{ gridColumn: "1 / -1" }}><Textarea label="Full width" fullWidth /></div>
    <Input label="Existing Input" defaultValue="Compare field styling" />
    <Button label="Existing primary button" intent="primary" />
  </div>;
}

export function FormControlsBehavior() {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const switchRef = useRef<HTMLInputElement>(null);
  const groupRef = useRef<HTMLFieldSetElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [counts, setCounts] = useState({ checkbox: 0, switch: 0, radio: 0, textarea: 0 });
  const [submitted, setSubmitted] = useState("");
  const [refTag, setRefTag] = useState("");
  const count = (key: keyof typeof counts) => setCounts(previous => ({ ...previous, [key]: previous[key] + 1 }));
  const [controlledCheck, setControlledCheck] = useState(false);
  const [controlledSwitch, setControlledSwitch] = useState(false);
  const [controlledRadio, setControlledRadio] = useState("one");
  const [controlledText, setControlledText] = useState("Initial");
  const [mixed, setMixed] = useState(true);
  const [mixedChecked, setMixedChecked] = useState(false);
  return <Stack gap="16px">
    <span id="external-help">External guidance</span>
    <form aria-label="Native controls" onSubmit={event => {
      event.preventDefault();
      setSubmitted(JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))));
    }}>
      <Checkbox ref={checkboxRef} label="News" name="news" value="yes" helpText="Checkbox help" aria-describedby="external-help" error onChange={() => count("checkbox")} />
      <Switch ref={switchRef} label="Push" name="push" value="enabled" defaultChecked helpText="Switch help" aria-describedby="external-help" onChange={() => count("switch")} />
      <RadioGroup ref={groupRef} name="frequency" label="Frequency" options={options} defaultValue="daily" helpText="Group help" aria-describedby="external-help" onValueChange={() => count("radio")} />
      <Textarea ref={textareaRef} label="Bio" name="bio" defaultValue="Original" helpText="Textarea help" aria-describedby="external-help" onChange={() => count("textarea")} />
      <Button type="submit" label="Submit native" />
      <Button type="reset" label="Reset native" />
    </form>
    <Stack horizontal gap="8px">
      <Button type="button" label="Focus checkbox" onClick={() => { checkboxRef.current?.focus(); setRefTag(checkboxRef.current?.tagName ?? ""); }} />
      <Button type="button" label="Focus switch" onClick={() => { switchRef.current?.focus(); setRefTag(switchRef.current?.tagName ?? ""); }} />
      <Button type="button" label="Focus group" onClick={() => { groupRef.current?.querySelector("input")?.focus(); setRefTag(groupRef.current?.tagName ?? ""); }} />
      <Button type="button" label="Focus textarea" onClick={() => { textareaRef.current?.focus(); setRefTag(textareaRef.current?.tagName ?? ""); }} />
    </Stack>
    <output data-testid="ref-tag">{refTag}</output>
    <output data-testid="counts">{JSON.stringify(counts)}</output>
    <output data-testid="submission">{submitted}</output>
    <form aria-label="Controlled controls" onReset={() => {
      setControlledCheck(false); setControlledSwitch(false); setControlledRadio("one"); setControlledText("Initial");
    }}>
      <Checkbox label="Controlled checkbox" checked={controlledCheck} onChange={event => setControlledCheck(event.target.checked)} />
      <Switch label="Controlled switch" checked={controlledSwitch} onChange={event => setControlledSwitch(event.target.checked)} />
      <RadioGroup label="Controlled group" value={controlledRadio} onValueChange={setControlledRadio} options={[{ value: "one", label: "One" }, { value: "two", label: "Two" }]} />
      <Textarea label="Controlled textarea" value={controlledText} onChange={event => setControlledText(event.target.value)} />
      <Button type="reset" label="Reset controlled" />
    </form>
    <Checkbox label="Mixed checkbox" indeterminate={mixed} checked={mixedChecked} onChange={event => { setMixed(false); setMixedChecked(event.target.checked); }} />
    <Checkbox label="Mixed checked checkbox" indeterminate defaultChecked />
    <fieldset disabled>
      <legend>Native disabled fieldset</legend>
      <Checkbox label="Inherited disabled checkbox" /><Switch label="Inherited disabled switch" />
      <RadioGroup label="Inherited disabled group" options={[{ value: "inherited", label: "Inherited radio" }]} />
      <Textarea label="Inherited disabled textarea" />
    </fieldset>
    <RadioGroup label="Isolated group A" options={[{ value: "a", label: "A one" }, { value: "b", label: "A two" }]} defaultValue="a" />
    <RadioGroup label="Isolated group B" options={[{ value: "a", label: "B one" }, { value: "b", label: "B two" }]} defaultValue="a" />
    <Textarea label="Hidden bio" hideLabel />
    <Textarea label="Read only" readOnly defaultValue="Cannot edit" />
    <div style={{ width: 180 }} data-testid="narrow"><Textarea label="Narrow bio" /></div>
  </Stack>;
}

export function RequiredControls() {
  const [submitted, setSubmitted] = useState(false);
  return <form onSubmit={event => { event.preventDefault(); setSubmitted(true); }}>
    <Checkbox label="Agreement" required />
    <Switch label="Required switch" required />
    <RadioGroup label="Required group" required options={[{ value: "one", label: "First" }, { value: "two", label: "Second" }]} />
    <Textarea label="Required bio" required />
    <Button type="submit" label="Submit required" />
    <output data-testid="required-submitted">{String(submitted)}</output>
  </form>;
}
