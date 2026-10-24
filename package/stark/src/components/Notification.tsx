"use client";
import Text from "./molecules/Text.js";
import React, { createContext, useContext, type ReactNode } from "react";
import * as Primitive from "@radix-ui/react-toast";
import { textStyles, type TextTone } from "../lib/typography.js";
import RemixIcon from "./RemixIcon.js";
// Keep Radix content mounted while the provider's Motion wrapper finishes its exit.
export const NotificationPresenceContext = createContext(false);
export type NotificationVariant =
  "default" | "primary" | "info" | "success" | "warning" | "danger";
export interface NotificationProps {
  id?: string;
  title?: string;
  message?: ReactNode;
  variant?: NotificationVariant;
  action?: { label: string; onClick: () => void };
  onClose?: () => void;
  icon?: string;
  duration?: number;
}
const tones: Record<NotificationVariant, TextTone> = {
  default: "inverse", primary: "primary", info: "info", success: "success", warning: "warning", danger: "danger",
};
const border = {
  default: "border-inverse",
  primary: "border-brand",
  info: "border-info",
  success: "border-success",
  warning: "border-warning",
  danger: "border-danger",
};
const backgrounds = {
  default: "bg-surface",
  primary: "bg-surface",
  info: "bg-info-subtle/30",
  success: "bg-success-subtle/30",
  warning: "bg-warning-subtle/30",
  danger: "bg-danger-subtle/30",
};
const icons = {
  default: "notification-2-fill",
  primary: "notification-2-fill",
  info: "information-fill",
  success: "checkbox-circle-fill",
  warning: "alert-fill",
  danger: "close-circle-fill",
};
export default function Notification({
  kind,
  id,
  title,
  message,
  variant = kind === "alert" ? "primary" : "default",
  action,
  onClose,
  icon,
  duration = 3000,
}: NotificationProps & { kind: "alert" | "toast" }) {
  const alert = kind === "alert";
  const retainForExit = useContext(NotificationPresenceContext);
  return (
    <Primitive.Provider
      duration={duration > 0 ? duration : Infinity}
      label={alert ? "Alert" : "Notification"}
    >
      <Primitive.Root
        forceMount={retainForExit ? true : undefined}
        id={id ? `${kind}-${id}` : undefined}
        type="foreground"
        onOpenChange={(open) => {
          if (!open) onClose?.();
        }}
        className={`stark-notification pointer-events-auto list-none flex border rounded-4px max-w-md max-w-full ${alert ? `p-16px gap-8px min-w-[min(300px,100%)] shadow-sm ${backgrounds[variant]} ${variant === "primary" ? "border-subtle" : border[variant]}` : `min-h-40px shadow-md overflow-clip ${variant === "default" ? "bg-inverse" : "bg-surface"} ${border[variant]}`}`}
      >
        {(alert || variant !== "default") && (
          <span
            aria-hidden="true"
            className={`${alert ? "" : "pl-10px self-center"} ${textStyles({ inherit: true, tone: tones[variant] })}`}
          >
            <RemixIcon name={icon ?? icons[variant]} />
          </span>
        )}
        <div
          className={`flex min-w-[0px] grow ${alert ? "flex-col gap-4px px-4px" : "items-center gap-8px px-12px"}`}
        >
          {(title || alert) && (
            <Text asChild inherit size="body" weight="bold" tone={alert ? "default" : tones[variant]}><Primitive.Title>
              {title ?? "Notification"}
            </Primitive.Title></Text>
          )}
          <Text asChild inherit size="body" tone={!alert && variant === "default" ? "inverse" : "subtle"}><Primitive.Description
            className={`min-w-[0px] ${alert ? "leading-[20px]" : "truncate"}`}
          >
            {message}
          </Primitive.Description></Text>
          {action && (
            <Primitive.Action altText={action.label} asChild>
              <button
                type="button"
                className={textStyles({ inherit: true, size: "body", tone: !alert && variant === "default" ? "inverse" : tones[variant], className: "underline shrink-0" })}
                onClick={action.onClick}
              >
                <Text inherit>{action.label}</Text>
              </button>
            </Primitive.Action>
          )}
        </div>
        <Primitive.Close asChild>
          <button
            type="button"
            aria-label={`Close ${kind}`}
            className={`stark-icon-target ${alert ? "self-start" : "self-center mx-8px"} ${variant === "default" && !alert ? "text-oninverse" : "text-subtle"}`}
          >
            <RemixIcon name="close-line" />
          </button>
        </Primitive.Close>
      </Primitive.Root>
      <Primitive.Viewport className="stark-notification-viewport" />
    </Primitive.Provider>
  );
}
