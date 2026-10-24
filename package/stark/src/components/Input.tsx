"use client";
import { textStyles } from "../lib/typography.js";
import React, {
  forwardRef,
  useId,
  useState,
  isValidElement,
  cloneElement,
  type InputHTMLAttributes,
  type ReactNode,
  type ReactElement,
} from "react";
import { Lottie } from "lottie-react";
import LoadingAnimation from "./assets/CircleLoader.json";
import Button, { type ButtonProps } from "./Button.js";
import IconButton from "./IconButton.js";
import RemixIcon from "./RemixIcon.js";
import FieldLayout, { type FieldLabelAction } from "./FieldLayout.js";
import { cn } from "../lib/utils.js";
export type AttachedFieldAction =
  | ReactElement
  | {
      label?: string;
      type?: "icon" | "button";
      icon?: string;
      remixIcon?: string;
      leadingIcon?: string;
      color?: ButtonProps["intent"];
      onClick?: React.MouseEventHandler<HTMLButtonElement>;
    };
export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  fullWidth?: boolean;
  label?: string;
  helpText?: string;
  error?: boolean | string;
  loading?: boolean;
  hideLabel?: boolean;
  optional?: boolean;
  leadingItem?: ReactNode;
  trailingItem?: ReactNode;
  trailingButton?: ButtonProps;
  attachedButton?: AttachedFieldAction;
  labelAction?: FieldLabelAction;
  containerClassName?: string;
  passwordToggleLabel?: string;
}
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      label = "Label",
      placeholder = "Enter text",
      helpText,
      error,
      loading = false,
      disabled,
      readOnly,
      hideLabel,
      optional,
      fullWidth,
      leadingItem,
      trailingItem,
      trailingButton,
      attachedButton,
      labelAction,
      containerClassName,
      passwordToggleLabel = "reveal password",
      className,
      id,
      "aria-describedby": describedBy,
      "aria-invalid": invalid,
      "aria-label": ariaLabel,
      ...props
    },
    ref,
  ) => {
    const generated = useId();
    const inputId = id ?? generated;
    const [reveal, setReveal] = useState(false);
    const message = typeof error === "string" ? error || helpText : helpText;
    let action: ReactNode;
    if (isValidElement(attachedButton))
      action = cloneElement(attachedButton as ReactElement<ButtonProps>, {
        attached: true,
        type: "button",
        disabled:
          disabled ||
          (attachedButton as ReactElement<ButtonProps>).props.disabled,
      });
    else if (attachedButton)
      action =
        attachedButton.type === "icon" ? (
          <IconButton
            attached
            type="button"
            icon={
              <RemixIcon
                name={
                  attachedButton.icon ??
                  attachedButton.remixIcon ??
                  "search-line"
                }
              />
            }
            aria-label={attachedButton.label ?? "Field action"}
            disabled={disabled}
            intent={attachedButton.color}
            onClick={attachedButton.onClick}
          />
        ) : (
          <Button
            attached
            type="button"
            label={attachedButton.label ?? "Action"}
            disabled={disabled}
            intent={attachedButton.color}
            onClick={attachedButton.onClick}
            leadingIcon={
              attachedButton.leadingIcon || attachedButton.remixIcon ? (
                <RemixIcon
                  name={attachedButton.leadingIcon ?? attachedButton.remixIcon!}
                />
              ) : undefined
            }
          />
        );
    else if (trailingButton)
      action = (
        <Button
          {...trailingButton}
          attached
          disabled={disabled || trailingButton.disabled}
        />
      );
    return (
      <FieldLayout
        id={inputId}
        label={label}
        labelAction={labelAction}
        hideLabel={hideLabel}
        optional={optional && type !== "password"}
        helpText={helpText}
        error={error}
        className={cn(
          fullWidth ? "w-full" : "w-fit",
          "min-w-[100px] max-w-full",
          containerClassName,
        )}
      >
        <div
          className={cn(
            "stark-input stark-field-control flex min-h-[var(--stark-control-height)] items-center gap-4px overflow-clip rounded-[var(--stark-control-radius)] border border-subtle bg-surface px-12px",
            textStyles({ inherit: true, size: "body", tone: "default" }),
            readOnly && "bg-subtle text-subtle",
            error && !disabled && "border-danger bg-danger-subtle text-danger",
            disabled && "bg-disabled text-disabled border-disabled",
            (action || type === "password") && "pr-none",
          )}
        >
          {leadingItem && (
            <div
              aria-hidden="true"
              className="stark-input-adornment shrink-0 inline-flex items-center [&>svg]:size-[16px] [&>i]:size-[16px]"
            >
              {leadingItem}
            </div>
          )}
          <div className="relative grow group min-w-[0px]">
            <input
              {...props}
              ref={ref}
              id={inputId}
              placeholder={placeholder}
              type={type === "password" && reveal ? "text" : type}
              disabled={disabled}
              readOnly={readOnly || loading}
              className={cn(
                "w-full h-[calc(var(--stark-control-height)-2px)] block bg-transparent border-none outline-none ring-0 placeholder:text-subtle",
                textStyles({ inherit: true, size: "body", weight: "normal" }),
                loading && "text-subtle/40",
                className,
              )}
              aria-label={ariaLabel ?? (hideLabel ? label : undefined)}
              aria-invalid={invalid ?? (!!error || undefined)}
              aria-busy={loading || undefined}
              aria-describedby={
                [describedBy, message && `${inputId}-help`]
                  .filter(Boolean)
                  .join(" ") || undefined
              }
            />
            <div
              className="stark-input-overflow absolute right-none top-none h-full w-[100px] pointer-events-none group-focus-within:opacity-0 group-hover:opacity-0"
              style={{
                backgroundImage: `linear-gradient(to right, hsl(var(--${disabled ? "bg-disabled" : readOnly ? "bg-subtle" : error ? "bg-danger-subtle" : "bg"}) / 0), hsl(var(--${disabled ? "bg-disabled" : readOnly ? "bg-subtle" : error ? "bg-danger-subtle" : "bg"})))`,
              }}
            />
            {loading && (
              <div
                aria-hidden="true"
                className="absolute top-none right-none mx-8px h-full w-[20px] overflow-hidden flex items-center justify-center"
              >
                <Lottie src={LoadingAnimation} autoplay loop />
              </div>
            )}
          </div>
          {type === "password" ? (
            <button
              type="button"
              disabled={disabled}
              className="stark-icon-target shrink-0 mx-12px"
              aria-label={
                passwordToggleLabel ||
                (reveal ? "Hide password" : "Show password")
              }
              aria-pressed={reveal}
              onClick={() => setReveal((value) => !value)}
            >
              <RemixIcon name={reveal ? "eye-line" : "eye-close-line"} />
            </button>
          ) : (
            <>
              {trailingItem && (
                <div className="stark-input-adornment shrink-0 inline-flex items-center [&>svg]:size-[16px] [&>i]:size-[16px]">
                  {trailingItem}
                </div>
              )}
              {action}
            </>
          )}
        </div>
      </FieldLayout>
    );
  },
);
Input.displayName = "Input";
export default Input;
