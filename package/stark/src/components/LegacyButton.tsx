"use client";
import React, { forwardRef } from "react";
import Button, { type ButtonProps } from "./Button.js";
import IconButton, { type IconButtonProps } from "./IconButton.js";
export type LegacyButtonProps = ButtonProps;
export type LegacyIconButtonProps = IconButtonProps;
/** @deprecated Use Button. This adapter only retains the archived non-submit default. */
export const LegacyButton = forwardRef<HTMLButtonElement, LegacyButtonProps>(
  ({ type = "button", ...props }, ref) => (
    <Button {...props} type={type} ref={ref} />
  ),
);
LegacyButton.displayName = "LegacyButton";
/** @deprecated Use IconButton. Shares its renderer and retains the non-submit default. */
export const LegacyIconButton = forwardRef<
  HTMLButtonElement,
  LegacyIconButtonProps
>(({ type = "button", ...props }, ref) => (
  <IconButton {...props} type={type} ref={ref} />
));
LegacyIconButton.displayName = "LegacyIconButton";
