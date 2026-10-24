"use client";
import Text from "./molecules/Text.js";

import { textStyles } from "../lib/typography.js";
import React, { type ButtonHTMLAttributes, type ReactNode } from "react";
import RemixIcon from "./RemixIcon.js";
export interface TabProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type"
> {
  label?: ReactNode;
  active?: boolean;
  type?: "default" | "pill";
  remixIcon?: string;
  onTabClick?: () => void;
}
export default function Tab({
  label = "Tab Item",
  active = true,
  type = "default",
  remixIcon,
  onTabClick,
  className = "",
  children,
  ...props
}: TabProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      {...props}
      onClick={onTabClick ?? props.onClick}
      className={`stark-tab flex gap-8px items-center ${textStyles({ inherit: true, size: "body", weight: "semibold" })} w-fit ${type === "pill" ? "py-4px px-8px rounded-4px" : "pb-4px border-b-2"} ${active ? (type === "pill" ? "bg-brand-subtle text-brand" : "border-brand text") : "text-disabled border-transparent"} ${className}`}
    >
      {remixIcon && <RemixIcon name={remixIcon} />}
      <Text as="span" inherit className="py-4px">{label}</Text>
      {children}
    </button>
  );
}
