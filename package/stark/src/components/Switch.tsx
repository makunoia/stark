"use client";

import React, { forwardRef } from "react";
import ChoiceControl, { type ChoiceProps } from "./ChoiceControl.js";

export interface SwitchProps extends ChoiceProps {
  onCheckedChange?: (checked: boolean) => void;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ onChange, onCheckedChange, ...props }, ref) => (
    <ChoiceControl
      {...props}
      kind="switch"
      ref={ref}
      onChange={(event) => {
        onChange?.(event);
        onCheckedChange?.(event.target.checked);
      }}
    />
  ),
);

Switch.displayName = "Switch";
export default Switch;
