// Button.d.ts
import React from "react";

interface ButtonProps {
  label?: string;
  id?: string;
  leadingIcon?: React.ReactElement;
  trailingIcon?: React.ReactElement;
  primary?: boolean;
  secondary?: boolean;
  info?: boolean;
  success?: boolean;
  danger?: boolean;
  warning?: boolean;
  dark?: boolean;
  small?: boolean;
  large?: boolean;
  disabled?: boolean;
  loading?: boolean;
  outline?: boolean;
  text?: boolean;
  fullWidth?: boolean;
  submit?: boolean;
  attached?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}
