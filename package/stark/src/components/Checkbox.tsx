"use client";

import React, { forwardRef } from "react";
import ChoiceControl, { type ChoiceProps } from "./ChoiceControl.js";

export interface CheckboxProps extends ChoiceProps {
  indeterminate?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => (
  <ChoiceControl {...props} kind="checkbox" ref={ref} />
));

Checkbox.displayName = "Checkbox";
export default Checkbox;
