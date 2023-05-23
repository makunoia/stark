import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import RemixIcon from "./RemixIcon";

const Badge = ({
  label,
  variant = "default",
  type = "solid",
  leadingItem,
  dismissible,
  onDismiss,
  circular = false,
}) => {
  const colorClasses = {
    default:
      type === "outline"
        ? "bg-fill-default text-black border border-outline-default"
        : "bg-white text-black border border-outline-default",
    primary:
      type === "outline"
        ? "bg-primary-muted text-primary-base border border-primary-base"
        : "bg-primary-base text-white border border-primary-base",
    secondary:
      type === "outline"
        ? "bg-secondary-muted text-secondary-base border border-secondary-base"
        : "bg-secondary-base text-white border border-secondary-base",
    success:
      type === "outline"
        ? "bg-success-muted text-success-base border border-success-base"
        : "bg-success-base text-white border border-success-base",
    info:
      type === "outline"
        ? "bg-info-muted text-info-base border border-info-base"
        : "bg-info-base text-white border border-info-base",
    warning:
      type === "outline"
        ? "bg-warning-muted text-warning-base border border-warning-base"
        : "bg-warning-base text-black border border-warning-base",
    danger:
      type === "outline"
        ? "bg-danger-muted text-danger-base border border-danger-base"
        : "bg-danger-base text-white border border-danger-base",
  };

  const sizeClasses = {
    default: "text-[12px] py-4px px-8px w-fit",
  };

  return (
    <div
      className={clsx(
        `flex flex-row items-center justify-center gap-2px ${
          circular ? "rounded-16px" : "rounded-4px"
        }`,
        colorClasses[variant],
        sizeClasses.default
      )}
    >
      {leadingItem && (
        <span className="text-[16px] h-[16px] flex justify-between items-center overflow-clip mr-2px">
          {leadingItem}
        </span>
      )}
      <span className="text-body font-medium whitespace-nowrap">{label}</span>
      {dismissible && (
        <button
          className="text-[16px] w-[16px] h-[16px] flex justify-between items-center font-bold outline-none"
          onClick={
            onDismiss
              ? onDismiss
              : () =>
                  console.log(
                    "Add dismiss functionality (supply a function to onDismiss prop)"
                  )
          }
        >
          <RemixIcon name="close-fill" />
        </button>
      )}
    </div>
  );
};

Badge.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
  ]),
  type: PropTypes.oneOf(["solid", "outline"]),
  leadingItem: PropTypes.node,
  dismissible: PropTypes.bool,
  circular: PropTypes.bool,
  onDismiss: PropTypes.func,
};

export default Badge;
