import React, { useEffect, useState, FC } from "react";
import RemixIcon from "./molecules/RemixIcon";
import Button from "../../Button";
// import { AlertProps } from "stark-types";
import { cva } from "class-variance-authority";

const Alert = ({
  id,
  title,
  message,
  variant,
  action,
  onClose,
  icon,
  duration = 3000,
}) => {
  const [timeoutId, setTimeoutId] = useState<number | undefined>();

  const styles = {
    iconNames: {
      primary: "notification-2-fill",
      info: "information-fill",
      success: "checkbox-circle-fill",
      warning: "alert-fill",
      danger: "close-circle-fill",
    },
    textStyles: {
      primary: "text-primary-base",
      success: "text-success-base",
      warning: "text-warning-base",
      danger: "text-danger-base",
      info: "text-info-base",
    },
    borderStyles: {
      primary: "border-outline-default ",
      success: "border-success-base/60",
      warning: "border-warning-base/60",
      danger: "border-danger-base/60",
      info: "border-info-base/60",
    },
    bgStyles: {
      primary: "bg-white",
      success: "bg-success-muted/30",
      warning: "bg-warning-muted/30",
      danger: "bg-danger-muted/30",
      info: "bg-info-muted/30",
    },
  };

  const { iconNames, textStyles, bgStyles, borderStyles } = styles;

  const alertIntent = [
    "primary",
    "info",
    "success",
    "danger",
    "warning",
  ].includes(variant as string)
    ? variant
    : "primary";

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      onClose();
    }, duration);
    setTimeoutId(timeout as unknown as number);
  };

  const handleToastClose = () => {
    clearTimeout(timeoutId);
    onClose();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, duration);

    setTimeoutId(timeout as unknown as number);

    return () => {
      clearTimeout(timeout);
    };
  }, [duration, onClose]);

  return (
    <div
      id={`alert-${id}`}
      className={`${borderStyles[alertIntent as string]} ${
        bgStyles[alertIntent as string]
      } shadow-md flex flex-row border p-16px rounded-4px max-w-md min-w-[300px] pointer-events-auto`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-row items-start justify-start gap-8px w-full">
        <div
          className={`w-16px h-16px flex justify-center items-center ${
            textStyles[alertIntent as string]
          }`}
        >
          <RemixIcon
            name={icon ? icon : `${iconNames[alertIntent as string]}`}
          />
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
              {/* <Button
                label={action?.label}
                onClick={action?.onClick}
                variant="text"
                color={alertIntent}
              /> */}
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
