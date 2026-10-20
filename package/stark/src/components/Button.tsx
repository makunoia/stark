"use client";

import React, { forwardRef, ReactElement, ButtonHTMLAttributes } from "react";
import Text from "./molecules/Text.js";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils.js";
import { Lottie } from "lottie-react";
import LoadingAnimation from "./assets/Loader.json";
import ActionElement from "./ActionElement.js";
const ButtonStyles = cva(
  [
    "inline-flex rounded-8px h-fit whitespace-nowrap gap-4px items-center justify-center",
    "stark-button",
    "focus-visible:ring-4 focus-visible:ring-offset-0 focus-visible:ring-selected/80 focus-visible:outline-0",
    "active:ring-4 active:ring-offset-0 active:outline-0",
    "disabled:pointer-events-none",
    "box-border",
  ],
  {
    variants: {
      size: {
        default: "p-12px h-[40px]",
        small: "p-8px h-[32px]",
        large: "p-16px h-[48px]",
      },
      intent: {
        default: [
          "bg",
          "stark-hover:bg-hover",
          "active:bg-active",
          "border border-subtle",
          "active:ring-selected-subtle",
        ],
        inverse: [
          "bg-inverse",
          "stark-hover:bg-inverse-hover",
          "active:bg-inverse-active",
          "active:ring-selected-subtle",
        ],
        primary: [
          "bg-brand",
          "stark-hover:bg-brand-hover",
          "active:bg-brand-active",
          "active:ring-brand-subtle",
        ],
        info: [
          "bg-info",
          "stark-hover:bg-info-hover",
          "active:bg-info-active",
          "active:ring-info-subtle",
        ],
        success: [
          "bg-success",
          "stark-hover:bg-success-hover",
          "active:bg-success-active",
          "active:ring-success-subtle",
        ],
        warning: [
          "bg-warning",
          "stark-hover:bg-warning-hover",
          "active:bg-warning-active",
          "active:ring-warning-subtle",
        ],
        danger: [
          "bg-danger",
          "stark-hover:bg-danger-hover",
          "active:bg-danger-active",
          "active:ring-danger-subtle",
        ],
      },
      disabled: {
        true: "cursor-not-allowed active:ring-0",
        false: "cursor-pointer",
      },
      loading: {
        true: "relative pointer-events-none",
        false: "",
      },
      fullWidth: {
        true: "w-full items-center",
        false: "w-fit",
      },
      attached: {
        true: "stark-button-attached rounded-l-none rounded-r-4px outline-0 shadow-none focus-visible:ring-0 active:ring-0",
      },
    },
    defaultVariants: {
      size: "default",
      intent: "default",
      fullWidth: false,
    },
    //use compound variants for disable
    compoundVariants: [
      {
        size: ["default", "large", "small"],
        intent: ["default"],
        disabled: true,
        class: [
          "bg-disabled",
          "text-disabled",
          "stark-hover:bg-disabled active:bg-disabled",
        ],
      },
      {
        size: ["default", "large", "small"],
        intent: ["inverse"],
        disabled: true,
        class: [
          "bg-inverse-disabled",
          "text-oninverse-disabled",
          "stark-hover:bg-inverse-disabled active:bg-inverse-disabled",
        ],
      },
      {
        size: ["default", "large", "small"],
        intent: ["primary"],
        disabled: true,
        class: [
          "bg-brand-disabled",
          "text-onbrand-disabled",
          "stark-hover:bg-brand-disabled active:bg-brand-disabled",
        ],
      },
      {
        size: ["default", "large", "small"],
        intent: ["info"],
        disabled: true,
        class: [
          "bg-info-disabled",
          "text-oninfo-disabled",
          "stark-hover:bg-info-disabled active:bg-info-disabled",
        ],
      },
      {
        size: ["default", "large", "small"],
        intent: ["success"],
        disabled: true,
        class: [
          "bg-success-disabled",
          "text-onsuccess-disabled",
          "stark-hover:bg-success-disabled active:bg-success-disabled",
        ],
      },
      {
        size: ["default", "large", "small"],
        intent: ["warning"],
        disabled: true,
        class: [
          "bg-warning-disabled",
          "text-onwarning-disabled",
          "stark-hover:bg-warning-disabled active:bg-warning-disabled",
        ],
      },
      {
        size: ["default", "large", "small"],
        intent: ["danger"],
        disabled: true,
        class: [
          "bg-danger-disabled",
          "text-ondanger-disabled",
          "stark-hover:bg-danger-disabled active:bg-danger-disabled",
        ],
      },
    ],
  }
);

const LabelStyles = cva("", {
  variants: {
    intent: {
      default: "text",
      inverse: "text-oninverse",
      primary: "text-onbrand",
      info: "text-oninfo",
      success: "text-onsuccess",
      warning: "text-onwarning",
      danger: "text-ondanger",
    },
    loading: {
      true: "opacity-0",
      false: "",
    },
  },
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Render a single child link with the component’s content and interaction styles. */
  asChild?: boolean;
  label: string;
  intent?:
    | "default"
    | "inverse"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger";
  size?: "default" | "small" | "large";
  leadingIcon?: ReactElement;
  trailingIcon?: ReactElement;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  attached?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label = "Button",
      intent = "default",
      size = "default",
      leadingIcon,
      trailingIcon,
      fullWidth = false,
      disabled = false,
      loading = false,
      attached = false,
      className,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const styles = cn(
      ButtonStyles({ intent, size, fullWidth, attached, loading, disabled }),
      className
    );

    const labelStyles = cn(LabelStyles({ intent, loading }));
    return (
      <ActionElement
        asChild={asChild}
        className={styles}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        ref={ref}
        {...props}
        renderedContent={<>
        {loading && (
          <div aria-hidden="true" className="absolute w-full *:h-[32px]">
            <Lottie src={LoadingAnimation} autoplay loop />
          </div>
        )}
        {leadingIcon && (
          <div className={cn(loading && "opacity-0", "*:w-[14px] *:h-[14px]")}>
            {leadingIcon}
          </div>
        )}

        <Text size="body" weight="medium" as="span" className={labelStyles}>
          {label}
        </Text>
        {trailingIcon && (
          <div className={cn(loading && "opacity-0", "*:w-[14px] *:h-[14px]")}>
            {trailingIcon}
          </div>
        )}
        </>}
      >{children}</ActionElement>
    );
  }
);

Button.displayName = "Button";
export type { ButtonProps };
export default Button;
