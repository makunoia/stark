import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const StatusIndicator = ({
  status,
  small = false,
  medium = false,
  large = false,
  className,
}) => {
  const statusColors = {
    online: "bg-success-base",
    offline: "bg-gray-500",
    busy: "bg-warning-base",
    away: "bg-danger-base",
  };

  const sizeClasses = {
    small: "w-[4px] h-[4px]",
    medium: "w-[8px] h-[8px]",
    large: "w-[16px] h-[16px]",
  };

  const size = small ? "small" : medium ? "medium" : large ? "large" : "small";

  return (
    <div
      className={clsx(
        "rounded-full",
        statusColors[status],
        sizeClasses[size],
        className
      )}
    ></div>
  );
};

StatusIndicator.propTypes = {
  status: PropTypes.oneOf(["online", "offline", "busy", "away"]).isRequired,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  className: PropTypes.string,
};

export default StatusIndicator;
