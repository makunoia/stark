"use client";

import React, { forwardRef } from "react";
import ChoiceControl, { type ChoiceProps } from "./ChoiceControl.js";

export interface CheckboxProps extends ChoiceProps {
  indeterminate?: boolean;
  contained?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ contained, ...props }, ref) => (
    <div
      className={
        contained
          ? "stark-choice-contained w-fit rounded-4px border border-subtle bg-surface p-8px"
          : "contents"
      }
    >
      <ChoiceControl {...props} kind="checkbox" ref={ref} />
    </div>
  ),
);

Checkbox.displayName = "Checkbox";
export default Checkbox;
