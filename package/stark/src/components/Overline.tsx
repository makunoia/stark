import Text from "./molecules/Text.js";
import React, { type HTMLAttributes, type ReactNode } from "react";
import Tooltip, { type TooltipProps } from "./Tooltip.js";
export interface OverlineProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  tooltip?: Omit<TooltipProps, "children">;
}
export default function Overline({
  label = "Overline",
  children,
  tooltip,
  className = "",
  ...props
}: OverlineProps) {
  return (
    <div {...props} className={`flex flex-col gap-4px ${className}`}>
      <div className="text-caption text-subtle flex items-center gap-8px">
        <Text as="span" inherit weight="bold" className="uppercase tracking-wider">{label}</Text>
        {tooltip && <Tooltip {...tooltip} />}
      </div>
      {children}
    </div>
  );
}
