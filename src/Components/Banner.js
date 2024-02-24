import React from "react";
import RemixIcon from "./molecules/RemixIcon";
import Button from "./Button";

const Banner = ({ title, message, variant = "default", action }) => {
  const fillStyles = {
    default: "bg-white",
    primary: "bg-primary-muted",
    info: "bg-info-muted",
    success: "bg-success-muted",
    warning: "bg-warning-muted",
    danger: "bg-danger-muted",
  };

  const iconStyles = {
    default: "text-primary-base",
    info: "text-info-base",
    success: "text-success-base",
    warning: "text-warning-base",
    danger: "text-danger-base",
  };

  const textStyles = {
    default: "text-primary-base",
    info: "text-info-base",
    success: "text-success-base",
    warning: "text-warning-base",
    danger: "text-danger-base",
  };

  const closeIconStyles = {
    default: "text-black",
    info: "text-info-active hover:text-info-hover",
    success: "text-success-active hover:text-success-hover",
    warning: "text-warning-active hover:text-warning-hover",
    danger: "text-danger-active hover:text-danger-hover",
  };

  const borderStyles = {
    default: "border-outline-default",
    info: "border-info-active",
    success: "border-success-active",
    warning: "border-warning-active",
    danger: "border-danger-active",
  };

  return (
    <div
      className={`p-24px border flex flex-row gap-16px rounded-8px relative ${fillStyles[variant]} ${borderStyles[variant]}`}
    >
      <RemixIcon
        name="information-fill"
        className={`text-h3 transition-all ease-in h-[20px] w-fit cursor-pointer items-center flex ${
          variant && iconStyles[variant]
        }`}
        onClick={() => console.log("close alert")}
      />
      <div className={`content-container flex flex-col gap-16px mr-24px`}>
        <div className="flex flex-col gap-4px">
          <span
            className={`font-bold text-body-lg text-black ${textStyles[variant]}`}
          >
            {title}
          </span>
          <p className={`text-body text-copy-caption`}>{message}</p>
        </div>

        <div className="buttons-container flex justify-start items-center gap-12px">
          <Button type="solid" color={variant} label="Primary action" />
          <Button variant="text" color={variant} label="Secondary action" />
        </div>
      </div>

      <RemixIcon
        name="close-line"
        className={`text-[20px] transition-all ease-in h-[20px] w-fit cursor-pointer items-center flex pb-4px absolute right-12px top-16px ${
          variant ? closeIconStyles[variant] : "text-gray-700"
        }`}
        onClick={() => console.log("close alert")}
      />
    </div>
  );
};

export default Banner;
