import React, {
  FC,
  ReactElement,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { PluginCreator } from "tailwindcss/types/config";

export interface RemixIconProps {
  name: string;
  className?: string;
  onClick?: () => void;
}

export interface TableProps extends React.Component {
  children: ReactNode;
  className: string;
  selectable: boolean;
  loading: boolean;
  isEmpty: boolean;
}

export interface BadgeProps {
  label: string;
  color:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger";
  variant: "solid" | "outline";
  leadingItem?: ReactElement;
  dismissible?: boolean;
  onDismiss?: () => void;
  circular?: boolean;
}

export interface TabProps {
  label: string;
  active: boolean;
  type?: "default" | "pill";
  remixIcon?: string;
  onTabClick: () => void;
}

export interface TabGroupProps {
  tabs: { label: string; remixIcon: string }[];
  type: "default" | "pill";
  activeTab: number;
  handleTabClick: (index: number) => void;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
  variant?: "primary" | "info" | "success" | "danger" | "warning";
  action?: {
    label: string;
    onClick: () => void;
  };
  onClose: () => void;
  icon?: string;
  duration?: number;
}

export interface ComboboxProps {
  label?: string;
  id: string;
  labelAction?: {
    label: string;
    action: () => void;
  };
  options: {
    id: string;
    label: string;
    value: string | number;
    disabled?: boolean;
  }[];
  optional?: boolean;
  helpText?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  onChange: (value: string | number) => void;
  onClear?: () => void;
}

export interface TextFieldProps {
  label?: string;
  value: string;
  id: string;
  name: string;
  readOnly?: boolean;
  required?: boolean;
  labelAction?: {
    label: string;
    action: () => void;
  };
  type?: "text" | "password" | "email" | "number" | "textarea";
  optional?: boolean;
  helpText?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  onClear?: () => void;
  leadingItem?: React.ReactNode; //can either be an icon or a string
  trailingItem?: React.ReactNode; //can either be an icon or a string
  attachedButton?: (
    | {
        type: "solid";
        leadingIcon: string;
      }
    | {
        type: "icon";
        icon: string;
      }
  ) & {
    label: string;
    color:
      | "default"
      | "primary"
      | "secondary"
      | "info"
      | "success"
      | "danger"
      | "warning"
      | "white"
      | "dark";
    onClick: () => void;
  };
}

export interface ModalProps {
  id: string;
  show: boolean;
  title: string;
  caption?: string;
  style?: "default" | "brand" | "danger" | "warning" | "info" | "success";
  children: React.ReactNode;
  centered?: boolean;
  remixIcon?: string;
  icon?: React.ReactNode;
  onClose: () => void;
  size?: "small" | "default" | "large" | "x-large";
  footer?: React.ReactNode;
  primaryButton?: {
    label: string;
    onClick: () => void;
    isLoading: boolean;
  };
  secondaryButton?: {
    label: string;
    onClick: () => void;
    isLoading: boolean;
  };
  tertiaryButton?: {
    label: string;
    message: string;
    onClick: () => void;
    isLoading: boolean;
  };
}

declare module "@eventful-ph/stark" {
  export const Stark: PluginCreator;
  export const Button: FC<ButtonProps>;
  export const RemixIcon: FC<RemixIconProps>;
  export const Alert: FC<AlertProps>;
  export const TextField: FC<TextFieldProps>;
  export const Combobox: FC<ComboboxProps>;
  export const Modal: FC<ModalProps>;
  export const Tab: FC<TabProps>;
  export const TabGroup: FC<TabGroupProps>;
}
