import React, { forwardRef, ReactElement, ButtonHTMLAttributes } from "react";
import Text from "./molecules/Text";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import Lottie from "lottie-react";
import LoadingAnimation from "./assets/Loader.json";
const ButtonStyles = cva(
  [
    "inline-flex shadow rounded-8px h-fit whitespace-nowrap gap-4px items-center justify-center",
    "transition-colors ease-linear",
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
          "bg",
          "hover:bg-hover",
          "active:bg-active",
          "outline outline-subtle",
          "active:ring-selected-subtle",
        ],
        inverse: [
          "bg-inverse",
          "hover:bg-inverse-hover",
          "active:bg-inverse-active",
          "active:ring-selected-subtle",
        ],
        primary: [
          "bg-brand",
          "hover:bg-brand-hover",
          "active:bg-brand-active",
          "active:ring-brand-subtle",
        ],
        info: [
          "bg-info",
          "hover:bg-info-hover",
          "active:bg-info-active",
          "active:ring-info-subtle",
        ],
        success: [
          "bg-success",
          "hover:bg-success-hover",
          "active:bg-success-active",
          "active:ring-success-subtle",
        ],
        warning: [
          "bg-warning",
          "hover:bg-warning-hover",
          "active:bg-warning-active",
          "active:ring-warning-subtle",
        ],
        danger: [
          "bg-danger",
          "hover:bg-danger-hover",
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

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
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
      ButtonStyles({ intent, size, fullWidth, attached, loading, disabled }),
      className
    );

    const labelStyles = cn(LabelStyles({ intent, loading }));
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

        <Text size="body" weight="medium" as="span" className={labelStyles}>
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

Button.displayName = "Button";
export type { ButtonProps };
export default Button;
