"use client";

import React, { forwardRef } from "react";
import ChoiceControl, { type ChoiceProps } from "./ChoiceControl.js";

export interface SwitchProps extends ChoiceProps {}

const Switch = forwardRef<HTMLInputElement, SwitchProps>((props, ref) => (
  <ChoiceControl {...props} kind="switch" ref={ref} />
));

Switch.displayName = "Switch";
export default Switch;
