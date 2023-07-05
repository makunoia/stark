import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import RemixIcon from "./molecules/RemixIcon";

const Button = ({
  label,
  id,
  leadingIcon,
  trailingIcon,
  type = "solid",
  variant = "default",
  size = "default",
  disabled = false,
  isLoading = false,
  fullWidth = false,
  submit = false,
  attached = false,
  onClick,
  className,
}) => {
  const buttonType = type === "outline" || type === "text" ? type : "solid";
  const validVariants = [
    "default",
    "primary",
    "secondary",
    "info",
    "success",
    "danger",
    "warning",
    "dark",
    "white",
  ];
  const buttonVariant = validVariants.includes(variant) ? variant : "default";
  const buttonSize = size === "small" || size === "large" ? size : "default";
  const state = disabled ? "disabled" : isLoading ? "loading" : "default";

  const sizeClasses = {
    small: "text-caption px-8px py-4px",
    default: "text-body px-12px py-10px",
    large: "text-body px-16px py-16px",
  };

  const buttonClasses = {
    solid: {
      default:
        "bg-white hover:bg-gray-50 border-outline-default active:bg-gray-100",
      primary:
        "bg-primary-base hover:bg-primary-hover active:bg-primary-active border-primary-base hover:border-primary-hover",
      secondary:
        "bg-secondary-base hover:bg-secondary-hover active:bg-secondary-active border-secondary-base hover:border-secondary-hover",
      success:
        "bg-success-base hover:bg-success-hover active:bg-secondary-active border-success-base hover:border-success-hover",
      danger:
        "bg-danger-base hover:bg-danger-hover active:bg-danger-active border-danger-base hover:border-danger-hover",
      info: "bg-info-base hover:bg-info-hover active:bg-info-active border-info-base hover:border-info-hover",
      warning:
        "bg-warning-base hover:bg-warning-hover active:bg-warning-active border-warning-base hover:border-warning-hover",
      dark: "bg-black hover:bg-gray-900 active:bg-gray-800 border-black",
    },
    outline: {
      default:
        "bg-white hover:bg-gray-50 border-outline-default active:bg-gray-100",
      primary:
        "bg-white hover:bg-primary-muted border-primary-base hover:border-primary-hover active:border-primary-active",
      secondary:
        "bg-white hover:bg-secondary-muted border-secondary-base hover:border-secondary-hover active:border-secondary-active",
      success:
        "bg-white hover:bg-success-muted border-success-base hover:border-success-hover active:border-success-active",
      danger:
        "bg-white hover:bg-danger-muted border-danger-base hover:border-danger-hover active:border-danger-active",
      info: "bg-white hover:bg-info-muted border-info-base hover:border-info-hover active:border-info-active",
      warning:
        "bg-white hover:bg-warning-muted border-warning-base hover:border-warning-hover active:border-warning-active",
      dark: "bg-white border-gray-800 hover:bg-gray-100 hover:border-black active:border-black",
    },
    text: {
      default:
        "text-copy-caption hover:bg-gray-50 active:text-gray-800 cursor-pointer",
      primary:
        "text-primary-base hover:bg-primary-muted active:text-primary-active cursor-pointer",
      secondary:
        "text-secondary-base hover:bg-secondary-muted active:text-secondary-active cursor-pointer",
      success:
        "text-success-base hover:bg-success-muted active:text-success-active cursor-pointer",
      danger:
        "text-danger-base hover:bg-danger-muted active:text-danger-active cursor-pointer",
      info: "text-info-base hover:bg-info-muted active:text-info-active cursor-pointer",
      warning:
        "text-warning-base hover:bg-warning-muted active:text-warning-active cursor-pointer",
      white: "text-white cursor-pointer",
      dark: "text-black cursor-pointer",
      disabled: "text-copy-disabled cursor-not-allowed",
    },
  };

  const stateClasses = {
    default: "cursor-pointer",
    disabled:
      "bg-fill-disabled cursor-not-allowed border-outline-default border",
    loading: "opacity-75 cursor-wait",
  };

  const typeClasses = {
    solid: `font-semibold ${
      attached ? "border-l rounded-0px" : "rounded-4px outline border"
    } focus:outline-4 focus:outline-focusRing/30 outline-focusRing/0`,
    outline: `font-semibold ${
      attached ? "border-l rounded-0px" : "rounded-4px outline border"
    } focus:outline-4 focus:outline-focusRing/30 outline-focusRing/0`,
    text: `font-semibold bg-transparent p-4px rounded-4px border-none focus:outline-4 focus:outline-focusRing/30 outline outline-focusRing/0`,
  };

  const buttonClass = buttonClasses[buttonType][buttonVariant];
  const sizeClass = sizeClasses[buttonSize];
  const textClass =
    state === "disabled"
      ? buttonClasses.text.disabled
      : buttonType === "text"
      ? buttonClasses.text[buttonVariant]
      : "";
  const stateClass = stateClasses[state];
  const combinedClasses = clsx(
    "relative group justify-center items-center flex font-default transition-colors duration-300 ease-in-out h-fit",
    typeClasses[buttonType],
    buttonClass,
    fullWidth ? "w-full" : "w-fit",
    buttonType !== "text" ? sizeClass : "",
    stateClass,
    textClass,
    className
  );

  return (
    <button
      id={id}
      type={submit ? "submit" : "button"}
      onClick={onClick}
      disabled={state === "disabled" || state === "loading"}
      className={combinedClasses}
    >
      <label
        className={clsx(
          "inline-flex gap-4px items-center justify-center text-body whitespace-nowrap transition-all duration-300 ease-in-out",
          state !== "disabled"
            ? buttonVariant === "default"
              ? buttonClasses.text.default
              : buttonType === "solid"
              ? buttonClasses.text.white
              : buttonClasses.text[buttonVariant]
            : textClass,
          isLoading && "opacity-20 cursor-wait"
        )}
      >
        {leadingIcon && (
          <div className="text-[16px] flex justify-center items-center h-[16px] w-[16px] relative">
            <div className="absolute">{React.cloneElement(leadingIcon)}</div>
          </div>
        )}
        <span className="tracking-wide select-none">{label ?? "Button"}</span>
        {trailingIcon && (
          <div className="text-[16px] flex justify-center items-center h-[16px] w-[16px] relative">
            <div className="absolute">{React.cloneElement(trailingIcon)}</div>
          </div>
        )}
      </label>

      {isLoading && (
        <span
          className={clsx(
            "absolute cursor-wait top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-8px h-[18px] w-[18px] text-[18px] font-bold",
            state !== "disabled"
              ? buttonVariant === "default" //is the button default?
                ? buttonClasses.text.default //if the button is default, apply default color style (copy-caption)
                : buttonType === "solid" //is the button solid?
                ? buttonClasses.text.white //if the button is solid, apply color style (text-white)
                : buttonClasses.text[buttonVariant] //if it's not solid, apply the appropriate color style (info, success, etc...)
              : textClass
          )}
        >
          <div className="animate-spin">
            <RemixIcon name="loader-fill" />
          </div>
        </span>
      )}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  leadingIcon: PropTypes.element,
  trailingIcon: PropTypes.element,
  type: PropTypes.oneOf(["solid", "outline", "text"]),
  variant: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "info",
    "success",
    "danger",
    "warning",
    "white",
    "dark",
  ]),
  size: PropTypes.oneOf(["small", "default", "large"]),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  fullWidth: PropTypes.bool,
  submit: PropTypes.bool,
  attached: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
