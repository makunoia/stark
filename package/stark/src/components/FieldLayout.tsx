import Text from "./molecules/Text.js";
import { textStyles } from "../lib/typography.js";
import React, { type ReactNode } from "react";
export interface FieldLabelAction {
  label: string;
  action: () => void;
}
export interface FieldLayoutProps {
  id: string;
  label?: string;
  optional?: boolean;
  helpText?: string;
  error?: string | boolean;
  hideLabel?: boolean;
  labelAction?: FieldLabelAction;
  children?: ReactNode;
  className?: string;
}
export default function FieldLayout({
  id,
  label,
  optional,
  helpText,
  error,
  labelAction,
  hideLabel,
  children,
  className = "",
}: FieldLayoutProps) {
  return (
    <div className={`text-field flex flex-col gap-8px ${className}`}>
      {!hideLabel && (label || labelAction) && (
        <div className={textStyles({ inherit: true, size: "body", className: "flex justify-between items-center" })}>
          <div className="inline-flex items-center gap-4px">
            <Text as="label" inherit weight="medium" tone="default" id={`${id}-label`} htmlFor={id}>
              {label}
            </Text>
            {optional && (
              <Text as="span" inherit aria-hidden="true" tone="subtle" className="italic">
                - optional
              </Text>
            )}
          </div>
          {labelAction && (
            <button
              type="button"
              className="stark-field-action text-info hover:underline"
              onClick={labelAction.action}
            >
              <Text inherit>{labelAction.label}</Text>
            </button>
          )}
        </div>
      )}
      {children}
      {((typeof error === "string" && error) || helpText) && (
        <Text as="p" inherit
          id={`${id}-help`}
          size="caption" tone={error ? "danger" : "subtle"}
        >
          {typeof error === "string" ? error || helpText : helpText}
        </Text>
      )}
    </div>
  );
}
