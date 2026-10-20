"use client";

import React, { forwardRef, useId } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils.js";
import Stack from "./molecules/Stack.js";
import Text from "./molecules/Text.js";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helpText?: string;
  error?: boolean;
  hideLabel?: boolean;
  optional?: boolean;
  fullWidth?: boolean;
}

const textareaStyles = cva("stark-textarea block w-full min-w-0 resize-y rounded-6px bg px-12px py-12px text-body font-normal text outline-1 placeholder:text-subtle", {
  variants: {
    readOnly: { true: "bg-subtle text-subtle" },
    disabled: { true: "bg-disabled text-disabled" },
  },
});

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label = "Label", helpText, error = false, hideLabel = false, optional = false,
    fullWidth = false, rows = 4, disabled = false, readOnly = false, id, className,
    "aria-describedby": describedBy, "aria-invalid": invalid,
    "aria-label": ariaLabel, "aria-labelledby": labelledBy, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    return (
      <Stack gap="4px" className={cn("min-w-0 max-w-full", fullWidth ? "w-full" : "w-[240px]")}>
        {!hideLabel && <Stack horizontal gap="4px">
          <Text as="label" weight="medium" htmlFor={inputId}>{label}</Text>
          {optional && <Text className="text-subtle">- optional</Text>}
        </Stack>}
        <textarea {...props} ref={ref} id={inputId} rows={rows} disabled={disabled} readOnly={readOnly}
          className={cn(textareaStyles({ readOnly, disabled }), className)}
          aria-label={ariaLabel ?? (hideLabel && !labelledBy ? label : undefined)}
          aria-labelledby={labelledBy} aria-invalid={invalid ?? (error || undefined)}
          aria-describedby={[describedBy, helpText ? `${inputId}-help` : undefined].filter(Boolean).join(" ") || undefined} />
        {helpText && <Text id={`${inputId}-help`} size="caption" className={disabled ? "text-disabled" : error ? "text-danger" : "text-subtle"}>{helpText}</Text>}
      </Stack>
    );
  }
);

Textarea.displayName = "Textarea";
export default Textarea;
