import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Button from "./Button";
import RemixIcon from "./molecules/RemixIcon";
import ModalWrapper from "./molecules/ModalWrapper";

const Modal = ({
  title,
  caption,
  children,
  size,
  style,
  centered,
  remixIcon,
  icon,
  primaryButton,
  secondaryButton,
  tertiaryButton,
  onClose,
  show,
}) => {
  useEffect(() => {
    if (show) {
      window.addEventListener("keydown", keyDownEsc);
    }

    return function cleanup() {
      window.removeEventListener("keydown", keyDownEsc);
    };
  }, [show, onClose]);

  const keyDownEsc = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const closeModalHandler = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalSizes = {
    small: "w-[300px]",
    default: "w-[450px]",
    large: "w-[600px]",
    "x-large": "w-[800px]",
  };

  const modalStyle = {
    default: `text-black ${centered ? "" : "bg-fill-default"}`,
    brand: `text-primary-base ${centered ? "" : "bg-primary-muted"}`,
    danger: `text-danger-base ${centered ? "" : "bg-danger-muted"}`,
    warning: `text-warning-base ${centered ? "" : "bg-warning-muted"}`,
    info: `text-info-base ${centered ? "" : "bg-info-muted"}`,
    success: `text-success-base ${centered ? "" : "bg-success-muted"}`,
  };

  const iconStyle = {
    brand: "text-primary-base bg-primary-muted border border-primary-base/60",
    info: "text-info-base bg-info-muted border border-info-base/60",
    success: "text-success-base bg-success-muted border border-success-base/60",
    warning: "text-warning-base bg-warning-muted border border-warning-base/60",
    danger: "text-danger-base bg-danger-muted border border-danger-base/60",
  };

  const modal = (
    <div
      onMouseDown={(e) => e.stopPropagation()}
      className={`flex flex-col gap-16px bg-white rounded-8px border border-outline-default shadow-lg overflow-clip ${modalSizes[size]}`}
    >
      <div
        className={`card-header flex flex-row gap-16px justify-between w-full p-20px align-top ${
          style ? modalStyle[style] : modalStyle["default"]
        } border-b border-outline-default pb-12px ${
          !caption ? "items-center" : "items-start"
        }`}
      >
        <div className="flex flex-col w-full gap-2px">
          <div className="text-h6 font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis">
            {title}
          </div>
          <div className="text-caption text-copy-caption leading-snug">
            {caption}
          </div>
        </div>
        <RemixIcon
          name="close-line"
          className="text-[20px] text-gray-700 hover:text-gray-900 transition-all ease-in h-[20px] w-fit cursor-pointer items-center flex pb-4px"
          onClick={onClose}
        />
      </div>
      {children && (
        <div className="px-20px text-body text-copy-caption leading-relaxed">
          {children}
        </div>
      )}
      <div
        className={`card-footer p-20px pt-0 flex flex-row justify-between items-center w-full`}
      >
        {tertiaryButton && (
          <div className="flex flex-row items-center gap-2px">
            <span className="text-body text-copy-caption">
              {tertiaryButton.message}
            </span>
            <Button
              type="text"
              variant="info"
              label={tertiaryButton.label}
              onClick={tertiaryButton.onClick}
            ></Button>
          </div>
        )}
        <div className="flex flex-row gap-4px">
          {secondaryButton && (
            <Button
              type="outline"
              fullWidth
              label={secondaryButton.label}
              onClick={secondaryButton.onClick}
              isLoading={secondaryButton.isLoading}
            />
          )}
          {primaryButton && (
            <Button
              type="solid"
              variant={
                style === "brand" || style === "default" || !style
                  ? "primary"
                  : style
              }
              fullWidth
              label={primaryButton.label}
              onClick={primaryButton.onClick}
              isLoading={primaryButton.isLoading}
            />
          )}
        </div>
      </div>
    </div>
  );

  const modal_centered = (
    <div
      onMouseDown={(e) => e.stopPropagation()}
      className={`flex flex-col gap-16px bg-white rounded-8px border border-outline-default shadow-lg overflow-clip ${modalSizes[size]}`}
    >
      <div
        className={`card-header flex flex-row justify-between w-full p-24px pb-0 align-top items-center text-center  ${
          !caption ? "items-center" : "items-start"
        }`}
      >
        <div className="flex flex-col w-full gap-4px">
          {(icon || remixIcon) && (
            <div
              className={`flex items-center justify-center p-20px mb-10px self-center rounded-full h-24px w-24px text-h3 ${
                iconStyle[
                  style === "brand" || style === "default" || !style
                    ? "brand"
                    : style
                ]
              }`}
            >
              {icon ? icon : <RemixIcon name={remixIcon} />}
            </div>
          )}
          <div className="text-h6 text-black font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis h-fit">
            {title}
          </div>
          <div className="text-body text-copy-caption leading-relaxed px-16px">
            {caption}
          </div>
        </div>
      </div>
      <div className="card-footer p-20px pt-0 flex flex-col justify-between gap-16px items-center w-full">
        <div className="flex flex-row gap-8px w-full">
          {secondaryButton && (
            <Button
              type="outline"
              fullWidth
              label={secondaryButton.label}
              onClick={secondaryButton.onClick}
              isLoading={secondaryButton.isLoading}
            />
          )}
          {primaryButton && (
            <Button
              type="solid"
              variant={
                style === "brand" || style === "default" || !style
                  ? "primary"
                  : style
              }
              fullWidth
              label={primaryButton.label}
              onClick={primaryButton.onClick}
              isLoading={primaryButton.isLoading}
            />
          )}
        </div>
        {/* <div className="flex flex-row items-center gap-2px">
          <span className="text-body text-black">Need anything from me?</span>
          <Button type="text" label="Get help" variant="info"></Button>
        </div> */}
      </div>
    </div>
  );

  const wrapped_modal = (
    <ModalWrapper show={show} onClick={closeModalHandler}>
      {centered ? modal_centered : modal}
    </ModalWrapper>
  );

  return ReactDOM.createPortal(wrapped_modal, document.body);
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(["small", "default", "large", "x-large"]),
  onClose: PropTypes.func,
  style: PropTypes.oneOf([
    "default",
    "brand",
    "danger",
    "warning",
    "info",
    "success",
  ]),
  centered: PropTypes.bool,
  remixIcon: PropTypes.string,
  icon: PropTypes.node,
  primaryButton: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
    isLoading: PropTypes.bool,
  }),
  secondaryButton: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
    isLoading: PropTypes.bool,
  }),
  tertiaryButton: PropTypes.shape({
    message: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    isLoading: PropTypes.bool,
  }),
};

Modal.defaultProps = {
  caption: "",
  size: "default",
  onClose: () => {},
  centered: false,
  primaryButton: {
    label: "Primary Button",
    onClick: () => alert("Primary Button clicked"),
  },
  secondaryButton: {
    label: "Secondary Button",
    onClick: () => alert("Secondary Button clicked"),
  },
  // remixIcon: "question-mark",
  // style: "brand",
  // icon: <RemixIcon name="question-mark" />,
  // tertiaryButton: {
  //   message: "Need help?",
  //   label: "Yes please",
  //   onClick: () => alert("Tertiary Button clicked"),
  // },
};

export default Modal;
