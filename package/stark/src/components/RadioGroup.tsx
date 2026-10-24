"use client";

import React, { forwardRef, useId } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils.js";
import ChoiceControl from "./ChoiceControl.js";
import Stack from "./molecules/Stack.js";
import Text from "./molecules/Text.js";

export interface RadioGroupOption {
  value: string;
  label: string;
  helpText?: string;
  disabled?: boolean;
}

export interface RadioGroupProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "children" | "defaultValue"> {
  options: RadioGroupOption[];
  label?: string;
  helpText?: string;
  error?: boolean;
  required?: boolean;
  horizontal?: boolean;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

const groupStyles = cva("min-w-0", {
  variants: { disabled: { true: "text-disabled", false: "text" } },
});

const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  ({ options, label, helpText, error = false, disabled = false, required = false,
    horizontal = false, value, defaultValue, onValueChange, name, id, className,
    "aria-describedby": describedBy, "aria-invalid": invalid, ...props }, ref) => {
    const generatedId = useId();
    const groupId = id ?? generatedId;
    const description = [describedBy, helpText ? `${groupId}-help` : undefined].filter(Boolean).join(" ") || undefined;
    return (
      <fieldset {...props} id={groupId} ref={ref} name={name} disabled={disabled}
        aria-invalid={invalid ?? (error || undefined)} aria-describedby={description}
        className={cn(groupStyles({ disabled }), className)}>
        {label && <legend className="mb-8px p-0"><Text weight="medium" className={disabled ? "text-disabled" : undefined}>{label}</Text></legend>}
        <Stack horizontal={horizontal} gap={horizontal ? "16px" : undefined} className={horizontal ? "flex-wrap" : undefined}>
          {options.map((option, index) => (
            <ChoiceControl key={option.value} kind="radio" id={`${groupId}-${index}`}
              name={name ?? groupId} form={props.form} value={option.value} label={option.label} helpText={option.helpText}
              checked={value === undefined ? undefined : value === option.value}
              defaultChecked={value === undefined ? defaultValue === option.value : undefined}
              disabled={disabled || option.disabled} required={required} error={error}
              aria-invalid={invalid ?? (error || undefined)} aria-describedby={description}
              onChange={event => { if (event.target.checked) onValueChange?.(event.target.value); }} />
          ))}
        </Stack>
        {helpText && <Text id={`${groupId}-help`} size="caption" className={cn("mt-8px block", disabled ? "text-disabled" : error ? "text-danger" : "text-subtle")}>{helpText}</Text>}
      </fieldset>
    );
  }
);

RadioGroup.displayName = "RadioGroup";
export default RadioGroup;
