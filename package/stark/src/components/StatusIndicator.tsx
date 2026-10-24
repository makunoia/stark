import React, { type HTMLAttributes } from "react";
import { cn } from "../lib/utils.js";
export interface StatusIndicatorProps extends HTMLAttributes<HTMLSpanElement> {
  status: "online" | "offline" | "busy" | "away";
  size?: "small" | "default" | "large";
}
export default function StatusIndicator({
  status,
  size = "default",
  className,
  ...props
}: StatusIndicatorProps) {
  return (
    <span
      role="img"
      aria-label={status}
      {...props}
      className={cn(
        "inline-block shrink-0 rounded-[9999px]",
        {
          online: "bg-success",
          offline: "bg-disabled",
          busy: "bg-warning",
          away: "bg-danger",
        }[status],
        {
          small: "w-[4px] h-[4px]",
          default: "w-[8px] h-[8px]",
          large: "w-[16px] h-[16px]",
        }[size],
        className,
      )}
    />
  );
}
