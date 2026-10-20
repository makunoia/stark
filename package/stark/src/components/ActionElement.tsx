"use client";

import React, { Children, cloneElement, forwardRef, type ButtonHTMLAttributes, type ReactElement, type ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

interface ActionElementProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  renderedContent: ReactNode;
}

// Share button content and behavior with links without nesting interactive elements.
const ActionElement = forwardRef<HTMLButtonElement, ActionElementProps>(
  ({ asChild, renderedContent, children, disabled, type, onClick, tabIndex, ...props }, ref) => {
    if (!asChild) return <button {...props} type={type} disabled={disabled} onClick={onClick} tabIndex={tabIndex} ref={ref}>{renderedContent}</button>;
    const child = Children.only(children) as ReactElement<{ onClick?: React.MouseEventHandler<HTMLElement>; tabIndex?: number; "aria-disabled"?: React.AriaAttributes["aria-disabled"] }>;
    return <Slot {...props} ref={ref} aria-disabled={disabled || undefined} tabIndex={disabled ? -1 : tabIndex ?? child.props.tabIndex}
      onClick={event => { if (!disabled && !event.defaultPrevented) onClick?.(event as unknown as React.MouseEvent<HTMLButtonElement>); }}>
      {cloneElement(child, { ...(disabled ? { tabIndex: -1, "aria-disabled": true as const } : {}), onClick: event => {
        if (disabled) { event.preventDefault(); event.stopPropagation(); return; }
        child.props.onClick?.(event);
      } }, renderedContent)}
    </Slot>;
  }
);
ActionElement.displayName = "ActionElement";
export default ActionElement;
