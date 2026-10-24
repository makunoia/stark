"use client";

import React, {
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import * as Select from "@radix-ui/react-select";
import * as Menu from "@radix-ui/react-dropdown-menu";
import { Check, ChevronDown } from "lucide-react";
import Button from "./Button.js";
import TextButton from "./TextButton.js";
import Text from "./molecules/Text.js";
import Badge from "./Badge.js";
import type { FieldLabelAction } from "./FieldLayout.js";
import { cn } from "../lib/utils.js";
import { textStyles } from "../lib/typography.js";

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}
interface DropdownBaseProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "value" | "defaultValue" | "onChange" | "children"
> {
  label: string;
  options: DropdownOption[];
  placeholder?: string;
  helpText?: ReactNode;
  error?: boolean | string;
  labelAction?: FieldLabelAction;
  /** Show removable badges below a multi-select; false uses a compact in-control summary. */
  showSelectedBadges?: boolean;
  hideLabel?: boolean;
  optional?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  containerClassName?: string;
  /** Allow single-select fields to return to the placeholder. Defaults to true. */
  clearable?: boolean;
  /** Preserve typed adapter values in native form submissions. */
  formValue?: (value: string) => string;
}
export type DropdownProps = DropdownBaseProps &
  (
    | {
        multiple?: false;
        value?: string;
        defaultValue?: string;
        onValueChange?: (value: string) => void;
      }
    | {
        multiple: true;
        value?: string[];
        defaultValue?: string[];
        onValueChange?: (value: string[]) => void;
      }
  );

const asArray = (value: string | string[] | undefined) =>
  value === undefined || value === ""
    ? []
    : Array.isArray(value)
      ? [...new Set(value)]
      : [value];

/** Single-select uses a listbox; multi-select uses persistent checkable menu items. */
const SelectControl = forwardRef<HTMLButtonElement, DropdownProps>(
  (props, ref) => {
    const {
      label,
      options,
      placeholder = "Select an option",
      helpText,
      error = false,
      hideLabel = false,
      optional = false,
      required = false,
      fullWidth = false,
      containerClassName,
      clearable = true,
      labelAction,
      showSelectedBadges = true,
      formValue,
      className,
      id,
      name,
      form,
      disabled = false,
      multiple = false,
      value: _value,
      defaultValue: _defaultValue,
      onValueChange: _onValueChange,
      "aria-describedby": describedBy,
      "aria-invalid": ariaInvalid,
      onPointerDown,
      onKeyDown,
      ...buttonProps
    } = props;
    const generatedId = useId();
    const triggerId = id ?? generatedId;
    const trigger = useRef<HTMLButtonElement>(null);
    const native = useRef<HTMLSelectElement>(null);
    const controlled = props.value !== undefined;
    const [internal, setInternal] = useState(() => asArray(props.defaultValue));
    const [open, setOpen] = useState(false);
    const [instant, setInstant] = useState(true);
    const [invalid, setInvalid] = useState(false);
    const values = asArray(controlled ? props.value : internal);
    const selected = options.filter((option) => values.includes(option.value));
    const labels = selected.map((option) => option.label);
    const display = labels.length
      ? labels.length > 2
        ? `${labels.slice(0, 2).join(", ")} +${labels.length - 2}`
        : labels.join(", ")
      : placeholder;
    const validationMessage = invalid
      ? multiple
        ? "Select at least one option."
        : "Select an option."
      : undefined;
    const message =
      validationMessage ??
      (typeof error === "string" ? error || helpText : helpText);
    useImperativeHandle(ref, () => trigger.current!, []);

    const defaultSignature = JSON.stringify(props.defaultValue);
    useEffect(() => {
      const owner = native.current?.form;
      if (!owner) return;
      const reset = (event: Event) =>
        queueMicrotask(() => {
          if (event.defaultPrevented) return;
          if (!controlled) setInternal(asArray(props.defaultValue));
          setInvalid(false);
          setOpen(false);
        });
      owner.addEventListener("reset", reset);
      return () => owner.removeEventListener("reset", reset);
    }, [controlled, defaultSignature, form]);
    useEffect(() => {
      if (disabled) setOpen(false);
    }, [disabled]);

    function commit(next: string[]) {
      if (!controlled) setInternal(next);
      setInvalid(false);
      if (props.multiple) props.onValueChange?.(next);
      else props.onValueChange?.(next[0] ?? "");
    }
    const triggerButton = (
      <Button
        {...buttonProps}
        type="button"
        id={triggerId}
        name={undefined}
        form={form}
        ref={trigger}
        disabled={disabled}
        className={cn(
          "stark-dropdown-trigger px-12px [&>span]:font-normal justify-between text-left [&:disabled>span]:text-disabled",
          !labels.length && "[&>span]:text-subtle",
          !disabled && (error || invalid) && "border-danger",
          className,
        )}
        fullWidth
        label={multiple && !showSelectedBadges && labels.length > 0 ? (
          <span className="flex min-w-[0px] items-center gap-4px">
            <span className="min-w-[0px] truncate">{labels[0]}</span>
            {labels.length > 1 && <span className="shrink-0 font-medium tabular-nums">{` +${labels.length - 1}`}</span>}
          </span>
        ) : display}
        trailingIcon={<ChevronDown aria-hidden="true" />}
        aria-label={buttonProps["aria-label"] ?? label}
        aria-required={required || undefined}
        aria-invalid={ariaInvalid ?? (!!error || invalid || undefined)}
        aria-describedby={
          [describedBy, message ? `${triggerId}-help` : undefined]
            .filter(Boolean)
            .join(" ") || undefined
        }
        data-placeholder={!labels.length || undefined}
        onPointerDown={event => { setInstant(false); onPointerDown?.(event); }}
        onKeyDown={event => { setInstant(true); onKeyDown?.(event); }}
      />
    );
    const optionClassName = textStyles({ inherit: true, size: "body", className: "stark-option stark-dropdown-option" });

    return (
      <div
        className={cn(
          "stark-dropdown",
          fullWidth && "stark-dropdown-full",
          containerClassName,
        )}
      >
        {(!hideLabel || labelAction) && (
          <div className="stark-select-label flex items-center justify-between">
            {!hideLabel && (
              <Text as="label" htmlFor={triggerId} weight="medium">
                {label}
                {optional && (
                  <Text as="span" inherit tone="subtle" className="italic"> - optional</Text>
                )}
              </Text>
            )}
            {labelAction && (
              <button
                type="button"
                className="text-body text-info hover:underline"
                onClick={labelAction.action}
              >
                <Text inherit>{labelAction.label}</Text>
              </button>
            )}
          </div>
        )}
        {multiple ? (
          <Menu.Root modal={false} open={open} onOpenChange={setOpen}>
            <Menu.Trigger asChild>{triggerButton}</Menu.Trigger>
            <Menu.Portal>
              <Menu.Content
                className="stark-options stark-dropdown-content"
                data-instant={instant || undefined}
                sideOffset={4}
                collisionPadding={12}
                align="start"
                aria-label={label}
              >
                <Menu.Group className="stark-dropdown-list">
                  {options.length ? options.map((option) => (
                    <Menu.CheckboxItem
                      key={option.value}
                      asChild
                      textValue={option.label}
                      checked={values.includes(option.value)}
                      disabled={option.disabled}
                      onSelect={(event) => event.preventDefault()}
                      onCheckedChange={(checked) => commit(
                        checked ? [...values, option.value] : values.filter((value) => value !== option.value),
                      )}
                    >
                      <button type="button" disabled={option.disabled} className={optionClassName}>
                        <span className="stark-dropdown-check" aria-hidden="true">
                          <Menu.ItemIndicator><Check /></Menu.ItemIndicator>
                        </span>
                        <Text inherit className="stark-option-label">{option.label}</Text>
                      </button>
                    </Menu.CheckboxItem>
                  )) : (
                    <Text asChild inherit size="body" tone="subtle">
                      <Menu.Item disabled className="stark-dropdown-empty">No options available</Menu.Item>
                    </Text>
                  )}
                </Menu.Group>
                <div className="stark-dropdown-footer">
                  <Text inherit size="caption" tone="subtle" className="stark-dropdown-summary" aria-live="polite" aria-atomic="true">
                    {values.length} selected
                  </Text>
                  <Menu.Item asChild onSelect={() => commit([])} disabled={!values.length}>
                    <TextButton
                      type="button"
                      label="Clear selection"
                      disabled={!values.length}
                      size="small"
                      className="stark-dropdown-action stark-button-attached focus-visible:ring-inset active:ring-inset"
                    />
                  </Menu.Item>
                  <Menu.Item asChild>
                    <Button
                      type="button"
                      label="Done"
                      size="small"
                      variant="outline"
                      className="stark-dropdown-action stark-button-attached focus-visible:ring-inset active:ring-inset"
                    />
                  </Menu.Item>
                </div>
              </Menu.Content>
            </Menu.Portal>
          </Menu.Root>
        ) : (
          <Select.Root
            open={open}
            onOpenChange={setOpen}
            disabled={disabled}
            value={values[0] === undefined ? "" : `value:${values[0]}`}
            onValueChange={(value) =>
              commit(value === "empty" ? [] : [value.slice(6)])
            }
          >
            <Select.Trigger asChild>{triggerButton}</Select.Trigger>
            <Select.Portal>
              <Select.Content
                className="stark-options stark-dropdown-content"
                data-instant={instant || undefined}
                position="popper"
                sideOffset={4}
                collisionPadding={12}
                align="start"
                aria-label={label}
              >
                <Select.Viewport className="stark-dropdown-list">
                  {clearable && (
                    <Select.Item value="empty" textValue={placeholder} className={optionClassName}>
                      <Select.ItemText><Text inherit className="stark-option-label">{placeholder}</Text></Select.ItemText>
                      <Select.ItemIndicator className="stark-dropdown-selected" aria-hidden="true"><Check /></Select.ItemIndicator>
                    </Select.Item>
                  )}
                  {options.map((option) => (
                    <Select.Item
                      key={option.value}
                      value={`value:${option.value}`}
                      textValue={option.label}
                      disabled={option.disabled}
                      className={optionClassName}
                    >
                      <Select.ItemText><Text inherit className="stark-option-label">{option.label}</Text></Select.ItemText>
                      <Select.ItemIndicator className="stark-dropdown-selected" aria-hidden="true"><Check /></Select.ItemIndicator>
                    </Select.Item>
                  ))}
                  {!options.length && (
                    <Text as="div" inherit size="body" tone="subtle" className="stark-dropdown-empty">No options available</Text>
                  )}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        )}
        {multiple && showSelectedBadges && selected.length > 0 && (
          <div className="flex flex-wrap gap-4px">
            {selected.map((option) => (
              <Badge
                key={option.value}
                label={option.label}
                color="primary"
                dismissible={!disabled}
                onDismiss={() =>
                  commit(values.filter((value) => value !== option.value))
                }
              />
            ))}
          </div>
        )}
        {formValue &&
          name &&
          values.map((value) => (
            <input
              key={value}
              type="hidden"
              name={name}
              form={form}
              disabled={disabled}
              value={formValue(value)}
            />
          ))}
        {/* Native constraint validation and FormData, with a focusable visible proxy. */}
        <select
          ref={native}
          name={formValue ? undefined : name}
          form={form}
          multiple={multiple}
          required={required}
          disabled={disabled}
          tabIndex={-1}
          aria-hidden="true"
          className="stark-dropdown-native"
          value={multiple ? values : (values[0] ?? "")}
          onChange={(event) =>
            commit(
              Array.from(
                event.target.selectedOptions,
                (option) => option.value,
              ).filter(Boolean),
            )
          }
          onInvalid={(event) => {
            event.preventDefault();
            setInvalid(true);
            const owner = event.currentTarget.form;
            const first = (
              Array.from(owner?.elements ?? []) as (
                HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
              )[]
            ).find(
              (control) => control.willValidate && !control.validity.valid,
            );
            if (!owner || first === event.currentTarget)
              trigger.current?.focus();
          }}
        >
          {!multiple && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        {message && (
          <Text
            id={`${triggerId}-help`}
            size="caption"
            className={error || invalid ? "text-danger" : "text-subtle"}
          >
            {message}
          </Text>
        )}
      </div>
    );
  },
);
SelectControl.displayName = "SelectControl";
export default SelectControl;
