"use client";
import React, { forwardRef } from "react";
import Switch, { type SwitchProps } from "./Switch.js";
export interface LegacySwitchProps extends Omit<SwitchProps, "onChange"> {
  onChange?: (checked: boolean) => void;
}
/** Retains the archived boolean callback while reusing the native switch. */
export const LegacySwitch = forwardRef<HTMLInputElement, LegacySwitchProps>(
  ({ onChange, ...props }, ref) => (
    <Switch
      {...props}
      ref={ref}
      onChange={(event) => onChange?.(event.target.checked)}
    />
  ),
);
LegacySwitch.displayName = "LegacySwitch";
