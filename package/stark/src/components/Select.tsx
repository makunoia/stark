"use client";
import React from "react";
import SelectControl from "./SelectControl.js";
import type { FieldLabelAction } from "./FieldLayout.js";
export interface SelectOption {
  id?: string | number;
  label: string;
  value: string | number;
  disabled?: boolean;
}
export interface SelectProps {
  id?: string;
  label?: string;
  labelAction?: FieldLabelAction;
  options: SelectOption[];
  multiple?: boolean;
  optional?: boolean;
  helpText?: string;
  placeholder?: string;
  error?: string | boolean;
  disabled?: boolean;
  name?: string;
  required?: boolean;
  value?: string | number | (string | number)[] | null;
  defaultValue?: string | number | (string | number)[];
  onChange?: (value: string | number | (string | number)[]) => void;
  className?: string;
  fullWidth?: boolean;
  clearable?: boolean;
  /** Show removable badges below a multi-select; false uses a compact in-control summary. Defaults to true. */
  showSelectedBadges?: boolean;
}

export default function Select({
  value,
  defaultValue,
  multiple = false,
  onChange,
  options,
  label = "",
  fullWidth = true,
  className,
  ...props
}: SelectProps) {
  const encode = (value: string | number) => `${typeof value}:${value}`;
  const decode = (value: string): string | number => {
    const option = options.find((option) => encode(option.value) === value);
    if (option) return option.value;
    if (value.startsWith("number:")) return Number(value.slice(7));
    if (value.startsWith("string:")) return value.slice(7);
    return "";
  };
  const encodeArray = (value: string | number | (string | number)[]) =>
    (Array.isArray(value) ? value : value === "" ? [] : [value]).map(encode);
  const shared = {
    ...props,
    label: label || props.placeholder || "Select an option",
    hideLabel: !label,
    formValue: (value: string) => String(decode(value)),
    fullWidth,
    containerClassName: className,
    options: options.map((option) => ({
      ...option,
      value: encode(option.value),
    })),
  };
  if (multiple)
    return (
      <SelectControl
        {...shared}
        multiple
        value={value == null ? undefined : encodeArray(value)}
        defaultValue={
          defaultValue === undefined ? undefined : encodeArray(defaultValue)
        }
        onValueChange={(next) => onChange?.(next.map(decode))}
      />
    );
  return (
    <SelectControl
      {...shared}
      value={
        value == null
          ? undefined
          : Array.isArray(value)
            ? value.length
              ? encode(value[0])
              : ""
            : value === ""
              ? ""
              : encode(value)
      }
      defaultValue={
        defaultValue === undefined
          ? undefined
          : Array.isArray(defaultValue)
            ? defaultValue.length
              ? encode(defaultValue[0])
              : ""
            : defaultValue === ""
              ? ""
              : encode(defaultValue)
      }
      onValueChange={(next) => onChange?.(decode(next))}
    />
  );
}
