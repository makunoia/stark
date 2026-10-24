"use client";
import { textStyles } from "../lib/typography.js";
import Text from "./molecules/Text.js";

import React, { useRef, useState, type ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import type { ButtonProps } from "./Button.js";
import Button from "./Button.js";
import RemixIcon from "./RemixIcon.js";
export interface ModalAction {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
  disabled?: boolean;
  message?: string;
}
export interface ModalProps {
  title: string;
  caption?: string;
  children?: ReactNode;
  size?: "small" | "default" | "large" | "x-large";
  style?: "default" | "brand" | "danger" | "warning" | "info" | "success";
  centered?: boolean;
  remixIcon?: string;
  icon?: ReactNode;
  primaryButton?: ModalAction | null;
  secondaryButton?: ModalAction | null;
  tertiaryButton?: ModalAction | null;
  onClose: () => void;
  show: boolean;
}
export default function Modal({
  title,
  caption,
  children,
  size = "default",
  style = "default",
  centered,
  remixIcon,
  icon,
  primaryButton,
  secondaryButton,
  tertiaryButton,
  onClose,
  show,
}: ModalProps) {
  const opener = useRef<HTMLElement | null>(null);
  const [instant, setInstant] = useState(false);
  const intent: ButtonProps["intent"] =
    style === "brand" || style === "default" ? "primary" : style;
  const tone = {
    default: "text bg-subtle",
    brand: "text-brand bg-brand-subtle",
    danger: "text-danger bg-danger-subtle",
    warning: "text-warning bg-warning-subtle",
    info: "text-info bg-info-subtle",
    success: "text-success bg-success-subtle",
  }[style];
  const action = (item: ModalAction, secondary = false) => (
    <Button
      type="button"
      variant={secondary ? "outline" : "solid"}
      label={item.label}
      onClick={item.onClick}
      loading={item.isLoading}
      disabled={item.disabled}
      fullWidth={centered}
      intent={secondary ? "default" : intent}
    />
  );
  return (
    <Dialog.Root
      open={show}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay
          data-instant={instant || undefined}
          className="stark-modal-overlay fixed inset-[0px] z-[90] bg-inverse/80"
        />
        <div className="fixed inset-[0px] z-[91] pointer-events-none flex items-center justify-center">
          <Dialog.Content
            data-instant={instant || undefined}
            onOpenAutoFocus={() => {
              opener.current = document.activeElement as HTMLElement | null;
              setInstant(opener.current?.matches(":focus-visible") ?? false);
            }}
            onCloseAutoFocus={(event) => {
              event.preventDefault();
              if (opener.current?.isConnected) opener.current.focus();
            }}
            className={`stark-modal relative pointer-events-auto max-h-[calc(100dvh-32px)] max-w-[calc(100vw-32px)] flex flex-col gap-16px bg-surface rounded-8px border border-subtle shadow-md overflow-auto ${centered ? "" : "mb-[30%]"} ${{ small: "w-[300px]", default: "w-[450px]", large: "w-[600px]", "x-large": "w-[800px]" }[size]}`}
          >
            <div
              className={`flex justify-between gap-16px ${centered ? "p-24px pb-none text-center" : `p-20px pb-12px border-b border-subtle ${tone}`}`}
            >
              <div className="flex flex-col w-full gap-4px">
                {centered && (remixIcon || icon) && (
                  <Text as="span" inherit
                    className={`self-center flex items-center justify-center rounded-[9999px] p-20px mb-10px ${tone}`}
                  >
                    {remixIcon ? <RemixIcon name={remixIcon} /> : icon}
                  </Text>
                )}
                <Text asChild inherit weight="semibold" tone={centered ? "default" : "inherit"}><Dialog.Title>
                  {title}
                </Dialog.Title></Text>
                {caption && (
                  <Text asChild inherit size={centered ? "body" : "caption"} tone="subtle"><Dialog.Description>
                    {caption}
                  </Dialog.Description></Text>
                )}
              </div>
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="stark-icon-target self-start"
                  aria-label="Close dialog"
                >
                  <RemixIcon name="close-line" />
                </button>
              </Dialog.Close>
            </div>
            {children && (
              <div className={textStyles({ inherit: true, size: "body", tone: "subtle", leading: "relaxed", className: "px-20px" })}>
                {children}
              </div>
            )}
            {(primaryButton || secondaryButton || tertiaryButton) && (
              <div
                className={`p-20px pt-none flex gap-16px ${centered ? "flex-col" : "items-center justify-between"}`}
              >
                {tertiaryButton && (
                  <div className="flex gap-2px items-center text-body text-subtle">
                    <Text inherit>{tertiaryButton.message}</Text>
                    <Button
                      label={tertiaryButton.label}
                      onClick={tertiaryButton.onClick}
                    />
                  </div>
                )}
                <div className={`flex gap-8px ${centered ? "w-full" : ""}`}>
                  {centered && secondaryButton && action(secondaryButton, true)}
                  {primaryButton && action(primaryButton)}
                  {!centered &&
                    secondaryButton &&
                    action(secondaryButton, true)}
                </div>
              </div>
            )}
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
