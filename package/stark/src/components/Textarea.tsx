"use client";
import { textStyles } from "../lib/typography.js";
import React, { forwardRef, useId } from "react";
import FieldLayout, { type FieldLabelAction } from "./FieldLayout.js";
import { cn } from "../lib/utils.js";
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helpText?: string;
  error?: boolean | string;
  hideLabel?: boolean;
  optional?: boolean;
  fullWidth?: boolean;
  labelAction?: FieldLabelAction;
  containerClassName?: string;
}
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label = "Label",
      helpText,
      error,
      hideLabel,
      optional,
      fullWidth,
      rows = 4,
      disabled,
      readOnly,
      id,
      className,
      containerClassName,
      labelAction,
      "aria-describedby": describedBy,
      "aria-invalid": invalid,
      "aria-label": ariaLabel,
      "aria-labelledby": labelledBy,
      ...props
    },
    ref,
  ) => {
    const generated = useId();
    const inputId = id ?? generated;
    const message = typeof error === "string" ? error || helpText : helpText;
    return (
      <FieldLayout
        id={inputId}
        label={label}
        hideLabel={hideLabel}
        optional={optional}
        helpText={helpText}
        error={error}
        labelAction={labelAction}
        className={cn(
          "min-w-[0px] max-w-full",
          fullWidth ? "w-full" : "w-[240px]",
          containerClassName,
        )}
      >
        <textarea
          {...props}
          ref={ref}
          id={inputId}
          rows={rows}
          disabled={disabled}
          readOnly={readOnly}
          aria-label={
            ariaLabel ?? (hideLabel && !labelledBy ? label : undefined)
          }
          aria-labelledby={labelledBy}
          aria-invalid={invalid ?? (!!error || undefined)}
          aria-describedby={
            [describedBy, message && `${inputId}-help`]
              .filter(Boolean)
              .join(" ") || undefined
          }
          className={cn(
            "stark-textarea stark-field-control w-full min-w-[0px] resize-y rounded-[var(--stark-control-radius)] border border-subtle bg-surface p-12px outline-none placeholder:text-subtle",
            textStyles({ inherit: true, size: "body", tone: "default" }),
            readOnly && "bg-subtle text-subtle",
            error && !disabled && "border-danger bg-danger-subtle text-danger",
            disabled && "bg-disabled text-disabled",
            className,
          )}
        />
      </FieldLayout>
    );
  },
);
Textarea.displayName = "Textarea";
export default Textarea;
