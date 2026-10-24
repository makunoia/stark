"use client";
import Text from "./molecules/Text.js";

import React, { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import RemixIcon from "./RemixIcon.js";
import { cn } from "../lib/utils.js";
import type { NotificationVariant } from "./Notification.js";
export interface BannerProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: string;
  message?: ReactNode;
  variant?: NotificationVariant;
  action?:
    | { label: string; onClick: () => void }
    | { label: string; onClick: () => void }[];
  onClose?: () => void;
}
const Banner = forwardRef<HTMLDivElement, BannerProps>(function Banner({
  title,
  message,
  variant = "default",
  action,
  onClose,
  role = "status",
  className,
  ...props
}, ref) {
  const tone = {
    default: "bg-surface border-subtle text-brand",
    primary: "bg-brand-subtle border-brand text-brand",
    info: "bg-info-subtle border-info text-info",
    success: "bg-success-subtle border-success text-success",
    warning: "bg-warning-subtle border-warning text-warning",
    danger: "bg-danger-subtle border-danger text-danger",
  }[variant];
  const Message = typeof message === "string" || typeof message === "number" ? "p" : "div";
  const actions = action ? (Array.isArray(action) ? action : [action]) : [];
  return (
    <div
      {...props}
      ref={ref}
      role={role}
      className={cn(`p-24px border flex gap-16px rounded-8px relative ${tone}`, className)}
    >
      <RemixIcon aria-hidden="true" name="information-fill" className=" shrink-0" />
      <div className="flex flex-col gap-16px mr-24px">
        <div className="flex flex-col gap-4px">
          {title && <Text as="span" inherit weight="bold">{title}</Text>}
          <Text as={Message} inherit size="body" tone="subtle">{message}</Text>
        </div>
        {actions.length > 0 && (
          <div className="flex gap-12px">
            {actions.map((item, index) => (
              <button
                key={index}
                type="button"
                className="text-body underline"
                onClick={item.onClick}
              >
                <Text inherit>{item.label}</Text>
              </button>
            ))}
          </div>
        )}
      </div>
      {onClose && (
        <button
          type="button"
          className="stark-icon-target absolute right-12px top-16px"
          aria-label="Close banner"
          onClick={onClose}
        >
          <RemixIcon name="close-line" />
        </button>
      )}
    </div>
  );
});
export default Banner;
