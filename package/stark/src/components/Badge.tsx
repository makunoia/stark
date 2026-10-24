"use client";
import Text from "./molecules/Text.js";

import React, { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../lib/utils.js";
import {
  resolveIntent,
  type ActionColor,
  type ActionIntent,
} from "./ActionControl.js";
import RemixIcon from "./RemixIcon.js";
interface BaseBadgeProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  "children" | "color"
> {
  label: ReactNode;
  intent?: ActionIntent;
  color?: ActionColor;
  appearance?: "solid" | "outline";
  leadingItem?: ReactNode;
  trailingIcon?: ReactNode;
  circular?: boolean;
  dismissible?: boolean;
  onDismiss?: () => void;
}
export type BadgeProps = BaseBadgeProps &
  (
    | { variant?: "default" | "solid" | "outline"; leadingIcon?: ReactNode }
    | { variant: "status"; leadingIcon?: never }
  );
// Soft filled surfaces keep status colors legible without overpowering nearby text.
const solid = {
  default: "bg-subtle text-subtle border-subtle",
  inverse: "bg-inverse text-oninverse border-inverse",
  primary: "bg-brand-subtle text-[hsl(var(--brand-800))] border-brand-subtle/50",
  info: "bg-info-subtle text-[hsl(var(--blue-800))] border-info-subtle/50",
  success: "bg-success-subtle text-[hsl(var(--green-800))] border-success-subtle/50",
  warning: "bg-warning-subtle text-[hsl(var(--yellow-800))] border-warning-subtle/50",
  danger: "bg-danger-subtle text-[hsl(var(--red-800))] border-danger-subtle/50",
};
const outline = {
  default: "bg-transparent text-subtle border-subtle",
  inverse: "bg-transparent text border-inverse/20",
  primary: "bg-transparent text-[hsl(var(--brand-800))] border-brand-subtle",
  info: "bg-transparent text-[hsl(var(--blue-800))] border-info-subtle",
  success: "bg-transparent text-[hsl(var(--green-800))] border-success-subtle",
  warning: "bg-transparent text-[hsl(var(--yellow-800))] border-warning-subtle",
  danger: "bg-transparent text-[hsl(var(--red-800))] border-danger-subtle",
};
const iconClass =
  "inline-flex h-[12px] w-[12px] shrink-0 items-center justify-center text-[12px] leading-[1] *:h-full *:w-full";
const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      label,
      intent,
      color,
      variant = "solid",
      appearance,
      leadingIcon,
      leadingItem,
      trailingIcon,
      circular,
      dismissible,
      onDismiss,
      className,
      ...props
    },
    ref,
  ) => {
    const tone = intent ?? resolveIntent(color);
    const style = appearance ?? (variant === "outline" ? "outline" : "solid");
    const leading = leadingIcon ?? leadingItem;
    return (
      <Text as="span" inherit
        {...props}
        ref={ref}
        data-variant={variant}
        data-appearance={style}
        className={cn(
          "stark-badge inline-flex min-h-[24px] w-fit max-w-full items-center justify-center gap-[6px] border px-8px py-[3px] font-sans text-caption font-medium leading-[16px] whitespace-nowrap",
          circular ? "rounded-[999px]" : "rounded-[var(--stark-control-radius)]",
          style === "solid" ? solid[tone] : outline[tone],
          className,
        )}
      >
        {variant === "status" ? (
          <span
            aria-hidden="true"
            className="stark-badge-indicator h-[6px] w-[6px] rounded-[999px] bg-current shrink-0"
          />
        ) : leading ? (
          <Text as="span" inherit aria-hidden="true" className={iconClass}>
            {leading}
          </Text>
        ) : null}
        <Text as="span" inherit>{label}</Text>
        {trailingIcon && (
          <Text as="span" inherit aria-hidden="true" className={iconClass}>
            {trailingIcon}
          </Text>
        )}
        {dismissible && (
          <button
            type="button"
            aria-label={`Dismiss ${typeof label === "string" ? label : "badge"}`}
            onClick={onDismiss}
            className="stark-icon-target flex h-[14px] w-[14px] min-h-[0px] min-w-[0px] shrink-0 items-center justify-center rounded-4px text-[12px] leading-[1] opacity-60 stark-hover:opacity-100 focus-visible:opacity-100"
          >
            <RemixIcon name="close-fill" />
          </button>
        )}
      </Text>
    );
  },
);
Badge.displayName = "Badge";
export default Badge;
