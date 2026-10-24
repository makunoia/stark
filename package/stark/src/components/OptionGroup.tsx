"use client";
import Text from "./molecules/Text.js";

import React, { useId } from "react";
import Checkbox from "./Checkbox.js";
import RadioButton from "./RadioButton.js";
export type OptionValue = string | number;
export interface OptionGroupProps {
  id?: string;
  type?: "radio" | "checkbox";
  options: {
    id: OptionValue;
    label: string;
    helpText?: string;
    name?: string;
    disabled?: boolean;
  }[];
  selectedValues?: OptionValue[];
  onChange?: (values: OptionValue[]) => void;
  disabled?: boolean;
  name?: string;
  error?: string;
  horizontal?: boolean;
  className?: string;
  label?: string;
}
export default function OptionGroup({
  id,
  type = "radio",
  options,
  selectedValues = [],
  onChange,
  disabled,
  name,
  error,
  horizontal,
  className = "",
  label = "Options",
}: OptionGroupProps) {
  const generated = useId();
  const groupId = id ?? generated;
  return (
    <div
      id={groupId}
      role={type === "radio" ? "radiogroup" : "group"}
      aria-label={label}
      aria-invalid={!!error || undefined}
      aria-describedby={error ? `${groupId}-error` : undefined}
      className={`flex flex-col gap-16px ${className}`}
    >
      <div
        className={`flex items-start ${horizontal ? "flex-row gap-16px" : "flex-col gap-12px"}`}
      >
        {options.map((option, index) => {
          const checked = selectedValues.includes(option.id);
          const change = (next: boolean) =>
            onChange?.(
              type === "radio"
                ? [option.id]
                : next
                  ? [
                      ...selectedValues.filter((value) => value !== option.id),
                      option.id,
                    ]
                  : selectedValues.filter((value) => value !== option.id),
            );
          const common = {
            id: `${groupId}-${index}`,
            label: option.label,
            helpText: option.helpText,
            disabled: disabled || option.disabled,
            checked,
            value: option.id,
          };
          return type === "radio" ? (
            <RadioButton
              key={option.id}
              {...common}
              name={name ?? groupId}
              onChange={change}
            />
          ) : (
            <Checkbox
              key={option.id}
              {...common}
              name={option.name ?? name}
              onChange={(event) => change(event.target.checked)}
            />
          );
        })}
      </div>
      {error && (
        <Text as="p" inherit id={`${groupId}-error`} size="body" tone="danger">
          {error}
        </Text>
      )}
    </div>
  );
}
