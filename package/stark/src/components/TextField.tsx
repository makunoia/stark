"use client";
import React, { forwardRef } from "react";
import Input, { type InputProps } from "./Input.js";
import Textarea from "./Textarea.js";
export interface TextFieldProps extends Omit<InputProps, "type" | "onChange"> {
  type?: InputProps["type"] | "textarea";
  rows?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}
const TextField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextFieldProps
>(
  (
    {
      type = "text",
      label = "",
      fullWidth = true,
      placeholder = "",
      rows = 3,
      className,
      ...props
    },
    ref,
  ) => {
    if (type === "textarea") {
      const {
        leadingItem: _leading,
        trailingItem: _trailing,
        trailingButton: _trailingButton,
        attachedButton: _attached,
        loading: _loading,
        passwordToggleLabel: _passwordLabel,
        ...native
      } = props;
      return (
        <Textarea
          {...(native as React.ComponentProps<typeof Textarea>)}
          ref={ref as React.Ref<HTMLTextAreaElement>}
          label={label}
          fullWidth={fullWidth}
          placeholder={placeholder}
          rows={rows}
          className="resize-none"
          containerClassName={className ?? props.containerClassName}
        />
      );
    }
    return (
      <Input
        {...props}
        passwordToggleLabel={props.passwordToggleLabel ?? ""}
        type={type}
        ref={ref as React.Ref<HTMLInputElement>}
        label={label}
        fullWidth={fullWidth}
        placeholder={placeholder}
        containerClassName={className ?? props.containerClassName}
      />
    );
  },
);
TextField.displayName = "TextField";
export default TextField;
