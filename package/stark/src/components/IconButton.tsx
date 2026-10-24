"use client";
import React, { forwardRef, type ReactElement } from "react";
import ActionControl, { type ActionProps } from "./ActionControl.js";
export interface IconButtonProps extends Omit<
  ActionProps,
  "leadingIcon" | "trailingIcon"
> {
  icon?: ReactElement;
}
const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, label, ...props }, ref) => (
    <ActionControl
      {...props}
      ref={ref}
      iconOnly={icon ?? <span />}
      label={label}
      aria-label={
        props["aria-label"] ?? (typeof label === "string" ? label : undefined)
      }
    />
  ),
);
IconButton.displayName = "IconButton";
export default IconButton;
