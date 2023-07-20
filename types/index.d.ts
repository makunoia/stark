import React, { FC, ReactElement, HTMLProps } from "react";
import { PluginCreator } from "tailwindcss/types/config";

export interface RemixIconProps extends Omit<HTMLProps<HTMLElement>, "ref"> {
  name: string;
  className?: string;
}

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
  id?: string;
  leadingIcon?: ReactElement;
  trailingIcon?: ReactElement;
  variant?: "solid" | "outline" | "text";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "danger"
    | "warning"
    | "white"
    | "dark";
  size?: "small" | "default" | "large";
  isLoading?: boolean;
  fullWidth?: boolean;
  submit?: boolean;
  attached?: boolean;
  onClick?: () => void;
}

export interface AlertProps {
  id: string;
  title?: string;
  message: string;
  intent?: "primary" | "info" | "success" | "danger" | "warning";
  action?: {
    label: string;
    onClick: () => void;
  };
  onClose: () => void;
  icon?: string;
  duration?: number;
}

declare module "@eventful-ph/stark" {
  export const Stark: PluginCreator;
  export const Button: FC<ButtonProps>;
  export const RemixIcon: FC<RemixIconProps>;
  export const Alert: FC<AlertProps>;
}
