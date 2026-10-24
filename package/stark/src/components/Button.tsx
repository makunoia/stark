"use client";
import React, { forwardRef } from "react";
import ActionControl, { type ActionProps } from "./ActionControl.js";
export interface ButtonProps extends ActionProps {}
const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <ActionControl {...props} ref={ref} />
));
Button.displayName = "Button";
export default Button;
