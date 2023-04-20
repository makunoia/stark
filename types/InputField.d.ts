import * as React from "react";

type InputType =
  | "text"
  | "password"
  | "number"
  | "email"
  | "textarea"
  | "richtext";

type InputFieldProps = {
  label: string;
  id: string;
  labelAction?: {
    label: string;
    action: () => void;
  };
  type?: InputType;
  name?: string;
  disabled?: boolean;
  readOnly?: boolean;
  optional?: boolean;
  required?: boolean;
  helpText?: string;
  placeholder?: string;
  error?: string;
  leadingItem?: React.ReactNode | string;
  trailingItem?: React.ReactNode | string;
  attachedButton?: React.ReactElement;
  mask?: string;
  value?: string;
};

declare const InputField: React.FC<InputFieldProps>;

export default InputField;
export { InputFieldProps };
