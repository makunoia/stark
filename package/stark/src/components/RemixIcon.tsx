import React, { type HTMLAttributes } from "react";
import { cn } from "../lib/utils.js";
export interface RemixIconProps extends HTMLAttributes<HTMLElement> {
  name: string;
}
/** Icon font CSS is included by stark-lib/styles.css. */
export default function RemixIcon({
  name,
  className = "",
  ...props
}: RemixIconProps) {
  return (
    <i
      aria-hidden="true"
      {...props}
      className={cn(
        `ri-${name}`,
        "inline-flex shrink-0 items-center justify-center align-middle leading-[1]",
        className,
      )}
    />
  );
}
