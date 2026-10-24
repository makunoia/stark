"use client";
import Text from "./molecules/Text.js";

import { textStyles } from "../lib/typography.js";
import React, { useId, useState } from "react";
import {
  Combobox as Primitive,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from "@headlessui/react";
import FieldLayout from "./FieldLayout.js";
import RemixIcon from "./RemixIcon.js";
import type { SelectProps } from "./Select.js";
export interface ComboboxProps extends Omit<
  SelectProps,
  "multiple" | "value" | "defaultValue" | "onChange" | "showSelectedBadges"
> {
  value?: string | number | null;
  defaultValue?: string | number;
  onChange?: (value: string | number) => void;
  onClear?: () => void;
}
export default function Combobox({
  id,
  label,
  labelAction,
  options,
  optional,
  helpText,
  placeholder,
  error,
  disabled,
  name,
  value,
  defaultValue = "",
  onChange,
  onClear,
  className,
}: ComboboxProps) {
  const generated = useId();
  const fieldId = id ?? generated;
  const [internal, setInternal] = useState<string | number>(defaultValue);
  const [query, setQuery] = useState("");
  const selected = value ?? internal;
  const filtered = options.filter((option) =>
    option.label.toLowerCase().includes(query.toLowerCase()),
  );
  const commit = (next: string | number | null) => {
    if (value === undefined) setInternal(next ?? "");
    onChange?.(next ?? "");
    setQuery("");
  };
  return (
    <FieldLayout
      id={fieldId}
      label={label}
      labelAction={labelAction}
      optional={optional}
      helpText={helpText}
      error={error}
      className={className}
    >
      <Primitive<string | number>
        value={selected}
        onChange={commit}
        disabled={disabled}
        name={name}
        onClose={() => setQuery("")}
      >
        <div className="relative">
          <ComboboxInput
            id={fieldId}
            aria-label={label ?? placeholder ?? "Search options"}
            aria-invalid={!!error || undefined}
            aria-describedby={helpText || error ? `${fieldId}-help` : undefined}
            placeholder={placeholder}
            autoComplete="off"
            displayValue={(item: string | number) =>
              options.find((option) => option.value === item)?.label ?? ""
            }
            onChange={(event) => setQuery(event.target.value)}
            className={`stark-combobox-input stark-field-control w-full h-[var(--stark-control-height)] py-none pl-12px pr-40px rounded-[var(--stark-control-radius)] border ${textStyles({ inherit: true, size: "body" })} ${error ? "border-danger bg-danger-subtle text-danger" : "border-subtle bg-surface"} disabled:bg-disabled disabled:text-disabled`}
          />
          {(query || selected !== "") && (
            <button
              type="button"
              disabled={disabled}
              aria-label="Clear selection"
              className="stark-icon-target absolute right-12px top-1/2 -translate-y-1/2"
              onClick={() => {
                commit("");
                onClear?.();
              }}
            >
              <RemixIcon name="close-fill" />
            </button>
          )}
        </div>
        <ComboboxOptions
          anchor="bottom start"
          className="stark-options stark-combobox-options w-[var(--input-width)] [--anchor-gap:4px]"
        >
          {filtered.length ? (
            filtered.map((option) => (
              <ComboboxOption
                key={option.id ?? option.value}
                value={option.value}
                disabled={option.disabled}
                className={textStyles({ inherit: true, className: "stark-option stark-combobox-option" })}
              >
                <Text inherit>{option.label}</Text>
              </ComboboxOption>
            ))
          ) : (
            <Text as="div" inherit size="body" tone="subtle" className="p-8px">No results</Text>
          )}
        </ComboboxOptions>
      </Primitive>
    </FieldLayout>
  );
}
