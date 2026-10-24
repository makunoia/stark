"use client";
import React, {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";
import { Lottie } from "lottie-react";
import LoadingAnimation from "./assets/Loader.json";
import ActionElement from "./ActionElement.js";
import Text from "./molecules/Text.js";
import { cn } from "../lib/utils.js";
export type ActionIntent =
  "default" | "inverse" | "primary" | "info" | "success" | "warning" | "danger";
export type ActionColor = ActionIntent | "secondary" | "dark" | "white";
export type ActionVariant = "solid" | "outline" | "text";
export interface ActionProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "color"
> {
  asChild?: boolean;
  label?: ReactNode;
  intent?: ActionIntent;
  color?: ActionColor | (string & {});
  variant?: ActionVariant | ActionColor;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"] | ActionVariant;
  size?: "default" | "small" | "large";
  leadingIcon?: ReactElement;
  trailingIcon?: ReactElement;
  fullWidth?: boolean;
  loading?: boolean;
  isLoading?: boolean;
  attached?: boolean;
  primary?: boolean;
}
export function resolveIntent(value?: string): ActionIntent {
  return value === "dark" || value === "white"
    ? "inverse"
    : value === "secondary"
      ? "primary"
      : [
            "default",
            "inverse",
            "primary",
            "info",
            "success",
            "warning",
            "danger",
          ].includes(value ?? "")
        ? (value as ActionIntent)
        : "default";
}
const fills = {
  default:
    "bg-surface text border-subtle stark-hover:bg-hover active:bg-active",
  inverse:
    "bg-inverse text-oninverse border-inverse stark-hover:bg-inverse-hover active:bg-inverse-active",
  primary:
    "bg-brand text-onbrand border-brand stark-hover:bg-brand-hover active:bg-brand-active",
  info: "bg-info text-oninfo border-info stark-hover:bg-info-hover active:bg-info-active",
  success:
    "bg-success text-onsuccess border-success stark-hover:bg-success-hover active:bg-success-active",
  warning:
    "bg-warning text-onwarning border-warning stark-hover:bg-warning-hover active:bg-warning-active",
  danger:
    "bg-danger text-ondanger border-danger stark-hover:bg-danger-hover active:bg-danger-active",
};
const foregrounds = {
  default: "text border-subtle stark-hover:bg-hover active:bg-active",
  inverse: "text border-inverse stark-hover:bg-hover active:bg-active",
  primary:
    "text-brand border-brand stark-hover:bg-brand-subtle active:bg-brand-subtle",
  info: "text-info border-info stark-hover:bg-info-subtle active:bg-info-subtle",
  success:
    "text-success border-success stark-hover:bg-success-subtle active:bg-success-subtle",
  warning:
    "text-warning border-warning stark-hover:bg-warning-subtle active:bg-warning-subtle",
  danger:
    "text-danger border-danger stark-hover:bg-danger-subtle active:bg-danger-subtle",
};
const sizes = {
  small: "h-[32px] px-12px py-none",
  default: "h-[var(--stark-control-height)] px-16px py-none",
  large: "h-[48px] px-20px py-none",
};
const iconSizes = {
  small: "h-[32px] w-[32px] p-8px",
  default: "h-[var(--stark-control-height)] w-[var(--stark-control-height)] p-10px",
  large: "h-[48px] w-[48px] p-16px",
};
/** One renderer for solid, outlined, text and icon actions. */
const ActionControl = forwardRef<
  HTMLButtonElement,
  ActionProps & {
    iconOnly?: ReactElement;
    compact?: boolean;
    defaultVariant?: ActionVariant;
  }
>(
  (
    {
      label = "Button",
      intent,
      color,
      variant,
      type,
      primary,
      size = "default",
      leadingIcon,
      trailingIcon,
      fullWidth,
      loading: loadingProp,
      isLoading,
      attached,
      disabled,
      asChild,
      children,
      className,
      iconOnly,
      compact,
      defaultVariant = "solid",
      ...props
    },
    ref,
  ) => {
    const presentation = ["solid", "outline", "text"].includes(variant ?? "")
      ? (variant as ActionVariant)
      : ["solid", "outline", "text"].includes(type ?? "")
        ? (type as ActionVariant)
        : defaultVariant;
    const tone =
      intent ??
      resolveIntent(
        color ??
          (variant && !["solid", "outline", "text"].includes(variant)
            ? (variant as ActionColor)
            : primary
              ? "primary"
              : undefined),
      );
    const loading = loadingProp ?? isLoading ?? false;
    const icon = (element: ReactElement) => (
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 items-center justify-center text-[16px] leading-[1] *:h-[16px] *:w-[16px]",
          loading && "opacity-0",
          size === "small" && !iconOnly && "text-[14px] *:h-[14px] *:w-[14px]",
        )}
      >
        {element}
      </div>
    );
    return (
      <ActionElement
        {...props}
        ref={ref}
        type={
          type === "submit" || type === "reset" || type === "button"
            ? type
            : type
              ? "button"
              : undefined
        }
        asChild={asChild}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        className={cn(
          "stark-button relative inline-flex items-center justify-center gap-8px whitespace-nowrap rounded-[var(--stark-control-radius)] box-border focus-visible:ring-4 focus-visible:ring-selected/80 focus-visible:outline-0 active:ring-4 active:ring-selected-subtle disabled:pointer-events-none",
          iconOnly ? iconSizes[size] : sizes[size],
          fullWidth ? "w-full" : !iconOnly && "w-fit",
          presentation === "solid" ? fills[tone] : foregrounds[tone],
          presentation === "solid" &&
            tone !== "default" &&
            tone !== "inverse" &&
            "stark-button-colored",
          presentation === "text"
            ? "bg-transparent border-none stark-hover:underline"
            : "border",
          presentation === "outline" && "bg-surface",
          (color === "white" || tone === "inverse") &&
            presentation === "text" &&
            "text-oninverse",
          attached &&
            "stark-button-attached rounded-l-none rounded-r-[var(--stark-control-radius)] outline-0 shadow-none focus-visible:ring-0 active:ring-0",
          compact && "stark-text-button-compact px-none py-none h-auto",
          disabled &&
            "bg-disabled text-disabled border-disabled cursor-not-allowed",
          className,
        )}
        renderedContent={
          <>
            {loading && (
              <div aria-hidden="true" className="absolute w-full *:h-[32px]">
                <Lottie src={LoadingAnimation} autoplay loop />
              </div>
            )}
            {iconOnly ? (
              icon(iconOnly)
            ) : (
              <>
                {leadingIcon && icon(leadingIcon)}
                <Text
                  as="span"
                  weight="medium"
                  className={cn("text-inherit", loading && "opacity-0")}
                >
                  {label}
                </Text>
                {trailingIcon && icon(trailingIcon)}
              </>
            )}
          </>
        }
      >
        {children}
      </ActionElement>
    );
  },
);
ActionControl.displayName = "ActionControl";
export default ActionControl;
