import React, { Children, cloneElement, createElement, forwardRef, isValidElement, type ComponentPropsWithoutRef, type ReactElement, type ReactNode, type Ref } from "react";
import { textStyles, type TextStyleOptions } from "../../lib/typography.js";
import { cn } from "../../lib/utils.js";

export type TextElement = "span" | "p" | "div" | "a" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "legend" | "small" | "strong" | "em" | "code" | "pre" | "blockquote" | "cite" | "abbr" | "mark" | "sub" | "sup" | "time" | "dt" | "dd" | "li" | "figcaption" | "caption" | "th" | "td" | "summary" | "output";
type OwnProps = TextStyleOptions & { children: ReactNode; asChild?: boolean; htmlFor?: string };
export type TextProps<T extends TextElement = "span"> = OwnProps & { as?: T } & Omit<ComponentPropsWithoutRef<T>, keyof OwnProps | "as">;
type TextComponent = {
  <T extends TextElement = "span">(props: TextProps<T> & { ref?: Ref<HTMLElementTagNameMap[T]> }): React.ReactElement | null;
  displayName?: string;
};

// Hook-free composition also works when a static Text is rendered by an RSC host.
// Refs support both the React 18 callback contract and React 19 cleanup callbacks.
const composedRefCache = new WeakMap<object, WeakMap<object, Ref<HTMLElement>>>();
function composeRefs(parent: Ref<HTMLElement>, child: Ref<HTMLElement>): Ref<HTMLElement> {
  // Stable refs avoid detach/attach cycles when only the text's props change.
  const cached = composedRefCache.get(parent as object)?.get(child as object);
  if (cached) return cached;
  const refs = [parent, child];
  const composed: Ref<HTMLElement> = node => {
    const cleanups = refs.map(ref => {
      if (typeof ref === "function") return ref(node);
      if (ref) ref.current = node;
    });
    if (cleanups.some(cleanup => typeof cleanup === "function")) return () => {
      cleanups.forEach((cleanup, index) => {
        if (typeof cleanup === "function") cleanup();
        else {
          const ref = refs[index];
          if (typeof ref === "function") ref(null);
          else if (ref) ref.current = null;
        }
      });
    };
  };
  let children = composedRefCache.get(parent as object);
  if (!children) {
    children = new WeakMap();
    composedRefCache.set(parent as object, children);
  }
  children.set(child as object, composed);
  return composed;
}
const Text = forwardRef<HTMLElement, TextProps<TextElement>>(function Text({
  as: Component = "span", asChild = false, children, className, size, weight, leading, tone, inherit, variant, ...props
}, ref) {
  const styles = textStyles({ size, weight, leading, tone, inherit, variant, className });
  if (!asChild) return createElement(Component, { ...props, ref, className: styles }, children);
  const child = Children.only(children);
  if (!isValidElement(child) || child.type === React.Fragment) throw new Error("Text asChild requires one non-fragment React element.");
  const element = child as ReactElement<Record<string, unknown> & { ref?: Ref<HTMLElement>; className?: string; style?: React.CSSProperties }>;
  const merged: Record<string, unknown> = { ...props, ...element.props, className: cn(styles, element.props.className) };
  for (const [key, value] of Object.entries(props)) {
    const childValue = element.props[key];
    if (/^on[A-Z]/.test(key) && typeof value === "function") {
      merged[key] = typeof childValue === "function" ? (...args: unknown[]) => { childValue(...args); value(...args); } : value;
    }
  }
  merged.style = { ...props.style, ...element.props.style };
  const describedBy = [element.props["aria-describedby"], props["aria-describedby"]].filter(Boolean).join(" ");
  if (describedBy) merged["aria-describedby"] = [...new Set(describedBy.split(/\s+/))].join(" ");
  // Accessing element.ref in React 19 warns; in React 18 ref isn't in props.
  const childRef = Number(React.version.split(".")[0]) >= 19 ? element.props.ref : (element as unknown as { ref?: Ref<HTMLElement> }).ref;
  if (ref) merged.ref = childRef ? composeRefs(ref, childRef) : ref;
  return cloneElement(element, merged);
}) as TextComponent;
Text.displayName = "Text";
export default Text;
