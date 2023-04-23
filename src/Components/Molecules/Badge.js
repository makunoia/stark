import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import RemixIcon from "./RemixIcon";

const Badge = ({
  label,
  primary = false,
  secondary = false,
  success = false,
  info = false,
  warning = false,
  danger = false,
  outline = false,
  leadingItem,
  dismissible,
  onDismiss,
  circular = false,
}) => {
  const colorClasses = {
    default: outline
      ? "bg-fill-default text-black border border-outline-default"
      : "bg-white text-black border border-outline-default",
    primary: outline
      ? "bg-primary-muted text-primary-base border border-primary-base"
      : "bg-primary-base text-white border border-primary-base",
    secondary: outline
      ? "bg-secondary-muted text-secondary-base border border-secondary-base"
      : "bg-secondary-base text-white border border-secondary-base",
    success: outline
      ? "bg-success-muted text-success-base border border-success-base"
      : "bg-success-base text-white border border-success-base",
    info: outline
      ? "bg-info-muted text-info-base border border-info-base"
      : "bg-info-base text-white border border-info-base",
    warning: outline
      ? "bg-warning-muted text-warning-base border border-warning-base"
      : "bg-warning-base text-black border border-warning-base",
    danger: outline
      ? "bg-danger-muted text-danger-base border border-danger-base"
      : "bg-danger-base text-white border border-danger-base",
  };

  const sizeClasses = {
    default: "text-[12px] py-4px px-8px",
  };

  const color = primary
    ? "primary"
    : secondary
    ? "secondary"
    : success
    ? "success"
    : info
    ? "info"
    : warning
    ? "warning"
    : danger
    ? "danger"
    : "default";

  const size = "default";

  return (
    <div
      className={clsx(
        `flex flex-row items-center justify-center gap-2px  ${
          circular ? "rounded-16px" : "rounded-4px"
        }`,
        colorClasses[color],
        sizeClasses[size]
      )}
    >
      {leadingItem && (
        <span className="text-[16px] h-[16px] flex justify-between items-center overflow-clip mr-2px">
          {leadingItem}
        </span>
      )}
      <span className="text-body font-medium tracking-wide whitespace-nowrap">
        {label}
      </span>
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
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  outline: PropTypes.bool,
  leadingItem: PropTypes.node,
  dismissible: PropTypes.bool,
};

export default Badge;
