import React from "react";
import clsx from "clsx";
import RemixIcon from "./molecules/RemixIcon";

const Button = ({
  label,
  id,
  leadingIcon,
  trailingIcon,
  type = "solid", //solid, outline, text
  variant = "default", // default, primary, secondary, info, success, danger, warning, dark, outline, text
  size = "default", // small, default, large
  disabled = false,
  loading = false,
  fullWidth = false,
  submit = false,
  attached = false,
  onClick,
  className,
}) => {
  const buttonType =
    type === "outline" ? "outline" : type === "text" ? "text" : "solid";
  const buttonVariant = variant !== "default" ? variant : "default";
  const buttonSize =
    size === "small" ? "small" : size === "large" ? "large" : "default";
  const state = disabled ? "disabled" : loading ? "loading" : "default";

  const sizeClasses = {
    small: "text-sm px-10px py-8px",
    default: "text-base px-12px py-10px",
    large: "text-lg px-16px py-16px",
  };

  const solidButtonClasses = {
    default:
      "bg-fill-default hover:bg-gray-50 border-outline-default active:bg-gray-100",
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
  };

  const outlineButtonClasses = {
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
  };

  const textClasses = {
    default:
      "text-copy-caption group-hover:text-black active:text-gray-800 cursor-pointer",
    primary:
      "text-primary-base group-hover:text-primary-hover active:text-primary-active cursor-pointer",
    secondary:
      "text-secondary-base group-hover:text-secondary-hover active:text-secondary-active cursor-pointer",
    success:
      "text-success-base group-hover:text-success-hover active:text-success-active cursor-pointer",
    danger:
      "text-danger-base group-hover:text-danger-hover active:text-danger-active cursor-pointer",
    info: "text-info-base group-hover:text-info-hover active:text-info-active cursor-pointer",
    warning:
      "text-warning-base group-hover:text-warning-hover active:text-warning-active cursor-pointer",
    white: "text-white cursor-pointer",
    dark: "text-black cursor-pointer",
    disabled: "text-copy-disabled cursor-not-allowed ",
  };

  const stateClasses = {
    default: "cursor-pointer",
    disabled:
      "bg-fill-disabled cursor-not-allowed border-outline-default border",
    loading: "opacity-75 cursor-wait",
  };

  const typeClasses = {
    solid: `font-semibold  ${
      attached ? "border-l rounded-0px" : "rounded-4px outline border"
    } focus:outline-4 focus:outline-focusRing/30 outline-focusRing/0`,
    outline: `font-semibold  ${
      attached ? "border-l rounded-0px" : "rounded-4px outline border"
    } focus:outline-4 focus:outline-focusRing/30 outline-focusRing/0`,
    text: `font-semibold underline-offset-2 hover:underline bg-transparent p-2px rounded-4px border-none focus:outline-4 focus:outline-focusRing/30 outline outline-focusRing/0`,
  };

  return (
    <button
      id={id}
      type={submit ? "submit" : "button"}
      onClick={onClick}
      disabled={state === "disabled" || state === "loading"}
      className={clsx(`relative group justify-center items-center flex font-default transition-colors duration-300 ease-in-out h-fit ${
        typeClasses[buttonType]
      } ${fullWidth ? "w-full" : "w-fit"} ${
        buttonType !== "text" ? sizeClasses[buttonSize] : ""
      } ${
        state === "disabled" //check if the button is disabled
          ? stateClasses["disabled"] //apply disabled design
          : buttonType === "text" //if it's not disabled, and the button's a text button...
          ? textClasses[buttonVariant] //then apply the appropriate color for the button
          : buttonType === "outline" //if it's not a text button but an outline button...
          ? outlineButtonClasses[buttonVariant] //then apply the right style
          : solidButtonClasses[buttonVariant] //if doesn't meet any of the conditions above, it's probably a solid button
      } ${state === "disabled" ? stateClasses["disabled"] : ""} ${className}
     `)}
    >
      <label
        className={clsx(
          `inline-flex gap-4px items-center justify-center text-body whitespace-nowrap transition-all duration-300 ease-in-out ${
            state !== "disabled"
              ? buttonVariant === "default"
                ? textClasses["default"]
                : buttonType === "solid"
                ? textClasses["white"]
                : textClasses[buttonVariant]
              : textClasses["disabled"]
          } ${loading && "opacity-20 cursor-wait"}`
        )}
      >
        {leadingIcon && (
          <div className="text-[16px] flex justify-center items-center h-[16px] w-[16px] relative">
            <div className="absolute ">{React.cloneElement(leadingIcon)}</div>
          </div>
        )}
        <span>{label ?? "Button"}</span>
        {trailingIcon && (
          <div className="text-[16px] flex justify-center items-center h-[16px] w-[16px] relative">
            <div className="absolute">{React.cloneElement(trailingIcon)}</div>
          </div>
        )}
      </label>

      {loading && (
        <span
          className={`absolute cursor-wait top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-8px h-[18px] w-[18px] text-[18px] font-bold 
        ${
          buttonVariant === "default"
            ? textClasses["default"]
            : buttonType === "solid"
            ? textClasses["white"]
            : textClasses[buttonVariant]
        }`}
        >
          <div className="animate-spin">
            <RemixIcon name="loader-fill" />
          </div>
        </span>
      )}
    </button>
  );
};

export default Button;
