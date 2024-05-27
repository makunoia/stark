"use client";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import RemixIcon from "./molecules/RemixIcon";
import ModalWrapper from "./molecules/ModalWrapper";
const Modal = ({ title, caption, children, size = "default", style, centered, remixIcon, icon, primaryButton, secondaryButton, tertiaryButton, onClose, show, }) => {
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
    const modal = (React.createElement("div", { onMouseDown: (e) => e.stopPropagation(), className: `max-w-[100vw] mb-[30%] flex flex-col gap-16px bg-white rounded-8px border border-outline-default shadow-lg overflow-clip ${modalSizes[size]}` },
        React.createElement("div", { className: `card-header flex flex-row gap-16px justify-between w-full p-20px align-top ${style ? modalStyle[style] : modalStyle["default"]} border-b border-outline-default pb-12px ${!caption ? "items-center" : "items-start"}` },
            React.createElement("div", { className: "flex flex-col w-full gap-2px" },
                React.createElement("div", { className: "text-body-lg font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis" }, title),
                React.createElement("div", { className: "text-caption text-copy-caption" }, caption)),
            React.createElement(RemixIcon, { name: "close-line", className: "text-[20px] text-gray-700 hover:text-gray-900 transition-all ease-in h-[20px] w-fit cursor-pointer items-center flex pb-4px", onClick: onClose })),
        children && (React.createElement("div", { className: "px-20px text-body text-copy-caption leading-relaxed" }, children)),
        React.createElement("div", { className: `card-footer p-20px pt-0 flex flex-row  items-center w-full ${tertiaryButton ? "justify-between" : "justify-start"}` },
            tertiaryButton && (React.createElement("div", { className: "flex flex-row items-center gap-2px" },
                React.createElement("span", { className: "text-body text-copy-caption" }, tertiaryButton.message),
                React.createElement(Button, { variant: "text", color: "info", label: tertiaryButton.label, onClick: tertiaryButton.onClick }))),
            React.createElement("div", { className: "flex flex-row gap-4px" },
                primaryButton && (React.createElement(Button, { variant: "solid", color: style === "brand" || style === "default" || !style
                        ? "primary"
                        : style, fullWidth: true, label: primaryButton.label, onClick: primaryButton.onClick, isLoading: primaryButton.isLoading })),
                secondaryButton && (React.createElement(Button, { variant: "outline", fullWidth: true, label: secondaryButton.label, onClick: secondaryButton.onClick, isLoading: secondaryButton.isLoading }))))));
    const modal_centered = (React.createElement("div", { onMouseDown: (e) => e.stopPropagation(), className: `max-w-[100vw] flex flex-col gap-16px bg-white rounded-8px border border-outline-default shadow-lg overflow-clip ${modalSizes[size]}` },
        React.createElement("div", { className: `card-header flex flex-row justify-between w-full p-24px pb-0 align-top items-center text-center  ${!caption ? "items-center" : "items-start"}` },
            React.createElement("div", { className: "flex flex-col w-full gap-4px" },
                (icon || remixIcon) && (React.createElement("div", { className: `flex items-center justify-center p-20px mb-10px self-center rounded-full h-24px w-24px text-h3 ${iconStyle[style === "brand" || style === "default" || !style
                        ? "brand"
                        : style]}` }, !remixIcon ? icon : React.createElement(RemixIcon, { name: remixIcon }))),
                React.createElement("div", { className: "text-h6 text-black font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis h-fit" }, title),
                React.createElement("div", { className: "text-body text-copy-caption leading-relaxed px-16px" }, caption))),
        React.createElement("div", { className: "card-footer p-20px pt-0 flex flex-col justify-between gap-16px items-center w-full" },
            React.createElement("div", { className: "flex flex-row gap-8px w-full" },
                secondaryButton && (React.createElement(Button, { variant: "outline", fullWidth: true, label: secondaryButton.label, onClick: secondaryButton.onClick, isLoading: secondaryButton.isLoading })),
                primaryButton && (React.createElement(Button, { variant: "solid", color: style === "brand" || style === "default" || !style
                        ? "primary"
                        : style, fullWidth: true, label: primaryButton.label, onClick: primaryButton.onClick, isLoading: primaryButton.isLoading }))))));
    const wrappedModal = (React.createElement(ModalWrapper, { show: show, onClick: closeModalHandler }, centered ? modal_centered : modal));
    return ReactDOM.createPortal(wrappedModal, document.body);
};
export default Modal;
//# sourceMappingURL=Modal.js.map