import React, { ReactElement, ButtonHTMLAttributes, forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import Text from "./molecules/Text";
import Lottie from "lottie-react";
import LoadingAnimation from "./assets/Loader.json";

const TextButtonStyles = cva(
  [
    "inline-flex rounded-8px h-fit whitespace-nowrap gap-4px items-center justify-center",
    "transition-colors ease-linear",
    "hover:underline",
    "focus-visible:ring-4 focus-visible:ring-offset-0 focus-visible:ring-selected/80 focus-visible:outline-0",
    "active:ring-4 active:ring-offset-0 active:outline-0",
    "disabled:pointer-events-none ",
  ],
  {
    variants: {
      size: {
        default: "p-12px",
        small: "p-8px",
        large: "p-16px",
      },
      intent: {
        default: [
          "text",
          "hover:bg-hover/60",
          "active:bg-subtle",
          "active:ring-selected-subtle",
        ],
        inverse: [
          "text-oninverse",
          "hover:bg-inverse-subtle/60",
          "hover:text-oninverse",
          "active:bg-inverse-subtle",
          "active:ring-selected-subtle",
        ],
        primary: [
          "text-brand",
          "hover:bg-brand-subtle/60",
          "hover:text-onbrand-hover",
          "active:bg-brand-subtle",
          "active:ring-brand-subtle",
        ],
        info: [
          "text-info",
          "hover:bg-info-subtle/60",
          "hover:text-oninfo-hover",
          "active:bg-info-subtle",
          "active:ring-info-subtle",
        ],
        success: [
          "text-success",
          "hover:bg-success-subtle/60",
          "hover:text-onsuccess-hover",
          "active:bg-success-subtle",
          "active:ring-success-subtle",
        ],
        warning: [
          "text-warning",
          "hover:bg-warning-subtle/60",
          "hover:text-onsuccess-hover",
          "active:bg-warning-subtle",
          "active:ring-warning-subtle",
        ],
        danger: [
          "text-danger",
          "hover:bg-danger-subtle/60",
          "hover:text-onsuccess-hover",
          "active:bg-danger-subtle",
          "active:ring-danger-subtle",
        ],
      },
      disabled: {
        true: "text-disabled cursor-not-allowed active:ring-0",
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
        true: "rounded-l-none rounded-r-4px outline-0 shadow-none focus-visible:ring-0 active:ring-0",
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
          "hover:bg-disabled active:bg-disabled",
        ],
      },
      {
        size: ["default", "large", "small"],
        intent: ["inverse"],
        disabled: true,
        class: [
          "bg-inverse-disabled",
          "text-oninverse-disabled",
          "hover:bg-inverse-disabled active:bg-inverse-disabled",
        ],
      },
      {
        size: ["default", "large", "small"],
        intent: ["primary"],
        disabled: true,
        class: [
          "bg-brand-disabled",
          "text-onbrand-disabled",
          "hover:bg-brand-disabled active:bg-brand-disabled",
        ],
      },
      {
        size: ["default", "large", "small"],
        intent: ["info"],
        disabled: true,
        class: [
          "bg-info-disabled",
          "text-oninfo-disabled",
          "hover:bg-info-disabled active:bg-info-disabled",
        ],
      },
      {
        size: ["default", "large", "small"],
        intent: ["success"],
        disabled: true,
        class: [
          "bg-success-disabled",
          "text-onsuccess-disabled",
          "hover:bg-success-disabled active:bg-success-disabled",
        ],
      },
      {
        size: ["default", "large", "small"],
        intent: ["warning"],
        disabled: true,
        class: [
          "bg-warning-disabled",
          "text-onwarning-disabled",
          "hover:bg-warning-disabled active:bg-warning-disabled",
        ],
      },
      {
        size: ["default", "large", "small"],
        intent: ["danger"],
        disabled: true,
        class: [
          "bg-danger-disabled",
          "text-ondanger-disabled",
          "hover:bg-danger-disabled active:bg-danger-disabled",
        ],
      },
    ],
  }
);

interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "default";
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

const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
  (
    {
      label = "Button",
      variant = "default",
      intent = "default",
      size = "default",
      leadingIcon,
      trailingIcon,
      fullWidth = false,
      disabled = false,
      loading = false,
      attached = false,
      className,
      ...props
    },
    ref
  ) => {
    const styles = cn(
      TextButtonStyles({
        intent,
        size,
        fullWidth,
        attached,
        loading,
        disabled,
      }),
      className
    );
    return (
      <button
        className={styles}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading && (
          <div className="absolute w-full *:h-[32px]">
            <Lottie animationData={LoadingAnimation} />
          </div>
        )}
        {leadingIcon && (
          <div className={cn(loading && "opacity-0", "*:w-[14px] *:h-[14px]")}>
            {leadingIcon}
          </div>
        )}

        <Text
          size={"body"}
          weight="medium"
          as="span"
          className={cn(loading && "opacity-0")}
        >
          {label}
        </Text>
        {trailingIcon && (
          <div className={cn(loading && "opacity-0", "*:w-[14px] *:h-[14px]")}>
            {trailingIcon}
          </div>
        )}
      </button>
    );
  }
);

TextButton.displayName = "Text Button";
export default TextButton;
