"use client";
import React, { forwardRef } from "react";
import ChoiceControl, { type ChoiceProps } from "./ChoiceControl.js";
export interface RadioButtonProps extends Omit<ChoiceProps, "onChange"> {
  onChange?: (checked: boolean) => void;
}
const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ onChange, ...props }, ref) => (
    <ChoiceControl
      {...props}
      ref={ref}
      kind="radio"
      onChange={(event) => onChange?.(event.target.checked)}
    />
  ),
);
RadioButton.displayName = "RadioButton";
export default RadioButton;
