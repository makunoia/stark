"use client";

import React, {
  forwardRef,
  useCallback,
  useId,
  useImperativeHandle,
  useRef,
} from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils.js";
import Text from "./molecules/Text.js";

export interface ChoiceProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "children" | "size"
> {
  label?: string;
  helpText?: string;
  error?: boolean;
}

interface ChoiceControlProps extends ChoiceProps {
  kind: "checkbox" | "radio" | "switch";
  indeterminate?: boolean;
}

const rowStyles = cva(
  "stark-choice relative flex min-h-[44px] min-w-[44px] max-w-full items-start py-12px",
  {
    variants: {
      kind: {
        checkbox: "gap-8px",
        radio: "gap-8px",
        switch: "gap-12px py-10px",
      },
    },
  },
);

// Native inputs own selection and reset behavior. CSS reads their actual state,
// including uncontrolled changes, instead of maintaining a second React state.
const ChoiceControl = forwardRef<HTMLInputElement, ChoiceControlProps>(
  (
    {
      kind,
      label,
      helpText,
      error = false,
      indeterminate = false,
      id,
      className,
      "aria-describedby": describedBy,
      "aria-labelledby": labelledBy,
      "aria-invalid": invalid,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const inputRef = useRef<HTMLInputElement | null>(null);
    // Set mixed state during attachment so initially mixed controls do not play
    // an entrance animation after their first paint.
    const attachInput = useCallback(
      (input: HTMLInputElement | null) => {
        inputRef.current = input;
        if (input) input.indeterminate = indeterminate;
      },
      [indeterminate],
    );
    useImperativeHandle(ref, () => inputRef.current!, []);

    return (
      <Text as="label" inherit htmlFor={inputId} className={rowStyles({ kind })}>
        <input
          {...props}
          ref={attachInput}
          id={inputId}
          type={kind === "radio" ? "radio" : "checkbox"}
          role={kind === "switch" ? "switch" : props.role}
          className={cn(
            "stark-choice-input absolute left-0 z-10 m-0 cursor-inherit opacity-0",
            kind === "switch"
              ? "top-10px h-[24px] w-[40px]"
              : "top-12px h-[20px] w-[20px]",
            className,
          )}
          aria-labelledby={
            labelledBy ??
            (label && !props["aria-label"] ? `${inputId}-label` : undefined)
          }
          aria-describedby={
            [describedBy, helpText ? `${inputId}-help` : undefined]
              .filter(Boolean)
              .join(" ") || undefined
          }
          aria-invalid={invalid ?? (error || undefined)}
        />
        <Text as="span" inherit
          aria-hidden="true"
          className={cn("stark-choice-visual shrink-0", `stark-${kind}`)}
        >
          {kind === "checkbox" && (
            <>
              <span className="stark-checkbox-mark stark-checkbox-check">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-full w-full"
                >
                  <path pathLength="100" d="m5 10 3 3 7-7" />
                </svg>
              </span>
              <span className="stark-checkbox-mark stark-checkbox-mixed">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-full w-full"
                >
                  <path d="M5 10h10" />
                </svg>
              </span>
            </>
          )}
          {kind === "radio" && <span className="stark-radio-dot" />}
          {kind === "switch" && (
            <span className="stark-switch-thumb">
              <span className="stark-switch-off">×</span>
              <span className="stark-switch-on">✓</span>
            </span>
          )}
        </Text>
        {(label || helpText) && (
          <Text as="span" inherit className="stark-choice-copy flex min-w-[0px] flex-col gap-4px">
            {label && (
              <Text
                id={`${inputId}-label`}
                weight="medium"
                leading="tight"
                className={cn(
                  "stark-choice-label",
                  kind === "switch" && "leading-[24px]",
                )}
              >
                {label}
              </Text>
            )}
            {helpText && (
              <Text
                id={`${inputId}-help`}
                size="caption"
                tone="subtle" className="stark-choice-help"
              >
                {helpText}
              </Text>
            )}
          </Text>
        )}
      </Text>
    );
  },
);

ChoiceControl.displayName = "ChoiceControl";
export default ChoiceControl;
