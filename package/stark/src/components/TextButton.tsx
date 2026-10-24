"use client";
import React, { forwardRef } from "react";
import ActionControl, { type ActionProps } from "./ActionControl.js";
export interface TextButtonProps extends Omit<ActionProps, "variant"> {
  variant?: ActionProps["variant"] | "compact";
}
const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
  ({ variant = "default", ...props }, ref) => (
    <ActionControl
      {...props}
      ref={ref}
      variant="text"
      compact={variant === "compact"}
    />
  ),
);
TextButton.displayName = "TextButton";
export default TextButton;
