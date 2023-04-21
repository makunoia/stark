import { ReactElement } from "react";

interface ButtonProps {
  label?: string;
  id?: string;
  leadingIcon?: ReactElement;
  trailingIcon?: ReactElement;
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
  onClick?: () => void;
  className?: string;
}

declare function Button(props: ButtonProps): ReactElement;

export default Button;
