"use client";

import React, { forwardRef, useEffect, useId, useImperativeHandle, useRef, useState, type ButtonHTMLAttributes, type ReactNode } from "react";
import * as Select from "@radix-ui/react-select";
import * as Menu from "@radix-ui/react-dropdown-menu";
import { Check, ChevronDown } from "lucide-react";
import Button from "./Button.js";
import TextButton from "./TextButton.js";
import Text from "./molecules/Text.js";
import { cn } from "../lib/utils.js";

export interface DropdownOption { value: string; label: string; disabled?: boolean }
interface DropdownBaseProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "value" | "defaultValue" | "onChange" | "children"> {
  label: string;
  options: DropdownOption[];
  placeholder?: string;
  helpText?: ReactNode;
  error?: boolean;
  hideLabel?: boolean;
  optional?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  containerClassName?: string;
  /** Allow single-select fields to return to the placeholder. Defaults to true. */
  clearable?: boolean;
}
export type DropdownProps = DropdownBaseProps & ({
  multiple?: false;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
} | {
  multiple: true;
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
});

const asArray = (value: string | string[] | undefined) => value === undefined || value === "" ? [] : Array.isArray(value) ? [...new Set(value)] : [value];

/** Single-select uses a listbox; multi-select uses persistent checkable menu items. */
const Dropdown = forwardRef<HTMLButtonElement, DropdownProps>((props, ref) => {
  const { label, options, placeholder = "Select an option", helpText, error = false, hideLabel = false, optional = false, required = false, fullWidth = false, containerClassName, clearable = true, className, id, name, form, disabled = false, multiple = false,
    value: _value, defaultValue: _defaultValue, onValueChange: _onValueChange,
    "aria-describedby": describedBy, "aria-invalid": ariaInvalid, onPointerDown, onKeyDown, ...buttonProps } = props;
  const generatedId = useId();
  const triggerId = id ?? generatedId;
  const trigger = useRef<HTMLButtonElement>(null);
  const native = useRef<HTMLSelectElement>(null);
  const controlled = props.value !== undefined;
  const [internal, setInternal] = useState(() => asArray(props.defaultValue));
  const [open, setOpen] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const values = asArray(controlled ? props.value : internal);
  const selected = options.filter(option => values.includes(option.value));
  const labels = selected.map(option => option.label);
  const display = labels.length ? labels.length > 2 ? `${labels.slice(0, 2).join(", ")} +${labels.length - 2}` : labels.join(", ") : placeholder;
  const validationMessage = invalid ? multiple ? "Select at least one option." : "Select an option." : undefined;
  const message = validationMessage ?? helpText;
  useImperativeHandle(ref, () => trigger.current!, []);

  const defaultSignature = JSON.stringify(props.defaultValue);
  useEffect(() => {
    const owner = native.current?.form;
    if (!owner) return;
    const reset = (event: Event) => queueMicrotask(() => {
      if (event.defaultPrevented) return;
      if (!controlled) setInternal(asArray(props.defaultValue));
      setInvalid(false); setOpen(false);
    });
    owner.addEventListener("reset", reset);
    return () => owner.removeEventListener("reset", reset);
  }, [controlled, defaultSignature, form]);
  useEffect(() => { if (disabled) setOpen(false); }, [disabled]);

  function commit(next: string[]) {
    if (!controlled) setInternal(next);
    setInvalid(false);
    if (props.multiple) props.onValueChange?.(next);
    else props.onValueChange?.(next[0] ?? "");
  }
  const triggerButton = <Button {...buttonProps} type="button" id={triggerId} name={undefined} form={form} ref={trigger} disabled={disabled}
    className={cn("stark-dropdown-trigger justify-between text-left [&:disabled>span]:text-disabled", !labels.length && "[&>span]:text-subtle", !disabled && (error || invalid) && "border-danger", className)} fullWidth label={display} trailingIcon={<ChevronDown aria-hidden="true" />}
    aria-label={buttonProps["aria-label"] ?? label} aria-required={!multiple && required || undefined}
    aria-invalid={ariaInvalid ?? (error || invalid || undefined)}
    aria-describedby={[describedBy, message ? `${triggerId}-help` : undefined].filter(Boolean).join(" ") || undefined}
    data-placeholder={!labels.length || undefined}
    onPointerDown={onPointerDown} onKeyDown={onKeyDown} />;
  const check = (checked: boolean) => <Check aria-hidden="true" style={{ visibility: checked ? "visible" : "hidden" }} />;

  return <div className={cn("stark-dropdown", fullWidth && "stark-dropdown-full", containerClassName)}>
    {!hideLabel && <Text as="label" htmlFor={triggerId} weight="medium">{label}{optional && <span className="text-subtle"> - optional</span>}</Text>}
    {multiple ? <Menu.Root modal={false} open={open} onOpenChange={setOpen}>
      <Menu.Trigger asChild>{triggerButton}</Menu.Trigger>
      <Menu.Portal><Menu.Content className="stark-dropdown-content" sideOffset={6} collisionPadding={12} align="start" aria-label={label}>
        {options.length ? options.map(option => <Menu.CheckboxItem key={option.value} asChild textValue={option.label} checked={values.includes(option.value)} disabled={option.disabled}
          onSelect={event => event.preventDefault()}
          onCheckedChange={checked => commit(checked ? [...values, option.value] : values.filter(value => value !== option.value))}>
          <TextButton type="button" label={option.label} disabled={option.disabled} leadingIcon={check(values.includes(option.value))} fullWidth className="stark-dropdown-option stark-button-attached focus-visible:ring-inset active:ring-inset justify-start whitespace-normal text-left" />
        </Menu.CheckboxItem>) : <Menu.Item disabled className="stark-dropdown-empty">No options available</Menu.Item>}
        <Menu.Separator className="stark-dropdown-separator" />
        <Menu.Item asChild onSelect={() => commit([])} disabled={!values.length}><TextButton type="button" label="Clear selection" disabled={!values.length} fullWidth className="stark-dropdown-option stark-button-attached focus-visible:ring-inset active:ring-inset justify-start whitespace-normal text-left" /></Menu.Item>
        <Menu.Item asChild><TextButton type="button" label="Done" fullWidth className="stark-dropdown-option stark-button-attached focus-visible:ring-inset active:ring-inset justify-start whitespace-normal text-left" /></Menu.Item>
      </Menu.Content></Menu.Portal>
    </Menu.Root> : <Select.Root open={open} onOpenChange={setOpen} disabled={disabled} value={values[0] === undefined ? "" : `value:${values[0]}`} onValueChange={value => commit(value === "empty" ? [] : [value.slice(6)])}>
      <Select.Trigger asChild>{triggerButton}</Select.Trigger>
      <Select.Portal><Select.Content className="stark-dropdown-content" position="popper" sideOffset={6} collisionPadding={12} align="start" aria-label={label}>
        <Select.Viewport>
          {clearable && <Select.Item asChild value="empty" textValue={placeholder}><TextButton type="button" label={<Select.ItemText>{placeholder}</Select.ItemText>} leadingIcon={check(!values.length)} fullWidth className="stark-dropdown-option stark-button-attached focus-visible:ring-inset active:ring-inset justify-start whitespace-normal text-left" /></Select.Item>}
          {options.map(option => <Select.Item key={option.value} asChild value={`value:${option.value}`} textValue={option.label} disabled={option.disabled}>
            <TextButton type="button" label={<Select.ItemText>{option.label}</Select.ItemText>} disabled={option.disabled} leadingIcon={check(values.includes(option.value))} fullWidth className="stark-dropdown-option stark-button-attached focus-visible:ring-inset active:ring-inset justify-start whitespace-normal text-left" />
          </Select.Item>)}
          {!options.length && <div className="stark-dropdown-empty">No options available</div>}
        </Select.Viewport>
      </Select.Content></Select.Portal>
    </Select.Root>}
    {/* Native constraint validation and FormData, with a focusable visible proxy. */}
    <select ref={native} name={name} form={form} multiple={multiple} required={required} disabled={disabled}
      tabIndex={-1} aria-hidden="true" className="stark-dropdown-native" value={multiple ? values : values[0] ?? ""}
      onChange={event => commit(Array.from(event.target.selectedOptions, option => option.value).filter(Boolean))}
      onInvalid={event => {
        event.preventDefault(); setInvalid(true);
        const owner = event.currentTarget.form;
        const first = (Array.from(owner?.elements ?? []) as (HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)[]).find(control => control.willValidate && !control.validity.valid);
        if (!owner || first === event.currentTarget) trigger.current?.focus();
      }}>
      {!multiple && <option value="">{placeholder}</option>}
      {options.map(option => <option key={option.value} value={option.value} disabled={option.disabled}>{option.label}</option>)}
    </select>
    {message && <Text id={`${triggerId}-help`} size="caption" className={error || invalid ? "text-danger" : "text-subtle"}>{message}</Text>}
  </div>;
});
Dropdown.displayName = "Dropdown";
export default Dropdown;
