import React, { useEffect, useState } from "react";
import RemixIcon from "./molecules/RemixIcon";
import Button from "./Button";

const Alert = ({
  id,
  title,
  message,
  variant,
  action,
  onClose,
  duration = 3000,
}) => {
  const [timeoutId, setTimeoutId] = useState(null);
  const variantStyles = {
    primary: "text-primary-base",
    success: "text-success-base",
    warning: "text-warning-base",
    danger: "text-danger-base",
    info: "text-info-base",
  };

  const alertVariant = [
    "primary",
    "info",
    "success",
    "danger",
    "warning",
  ].includes(variant)
    ? variant
    : "primary";

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setTimeoutId();
  };

  const handleMouseLeave = () => {
    setTimeoutId(
      setTimeout(() => {
        onClose();
      }, duration)
    );
  };

  const handleToastClose = () => {
    clearTimeout(timeoutId);
    onClose();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, duration);

    setTimeoutId(timeout);

    return () => {
      clearTimeout(timeout);
    };
  }, [duration, onClose]);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-white shadow-md flex flex-row border border-outline-default p-16px rounded-4px max-w-md min-w-[300px] pointer-events-auto"
    >
      <div className="flex flex-row items-start justify-start gap-8px w-full">
        <div
          className={`w-16px h-16px flex justify-center items-center ${variantStyles[alertVariant]}`}
        >
          <RemixIcon name="checkbox-circle-fill" />
        </div>
        <div className="flex flex-col gap-8px">
          <div className="content-container flex flex-col px-4px gap-4px w-full">
            <div className="text-body text-black font-bold">
              {title ? title : "Notification"}
            </div>
            <div className="text-body text-copy-caption leading-[20px]">
              {message}
            </div>
          </div>

          {action && (
            <div className="buttons-container">
              <Button
                label={action?.label}
                onClick={action?.onClick}
                type="text"
                variant={alertVariant}
              />
            </div>
          )}
        </div>
      </div>
      <RemixIcon
        name="close-line"
        className="text-[20px] text-gray-700 hover:text-gray-900 transition-all ease-in h-[20px] w-fit cursor-pointer items-center flex pb-4px"
        onClick={handleToastClose}
      />
    </div>
  );
};

export default Alert;
