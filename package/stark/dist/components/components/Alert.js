import React, { useEffect, useState } from "react";
import RemixIcon from "./molecules/RemixIcon";
import Button from "./Button";
const Alert = ({ id, title, message, variant, action, onClose, icon, duration = 3000, }) => {
    const [timeoutId, setTimeoutId] = useState();
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
    ].includes(variant)
        ? variant
        : "primary";
    const handleMouseEnter = () => {
        clearTimeout(timeoutId);
    };
    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            onClose();
        }, duration);
        setTimeoutId(timeout);
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
    return (React.createElement("div", { id: `alert-${id}`, className: `${borderStyles[alertIntent]} ${bgStyles[alertIntent]} shadow-md flex flex-row border p-16px rounded-4px max-w-md min-w-[300px] pointer-events-auto`, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
        React.createElement("div", { className: "flex flex-row items-start justify-start gap-8px w-full" },
            React.createElement("div", { className: `w-16px h-16px flex justify-center items-center ${textStyles[alertIntent]}` },
                React.createElement(RemixIcon, { name: icon ? icon : `${iconNames[alertIntent]}` })),
            React.createElement("div", { className: "flex flex-col gap-8px" },
                React.createElement("div", { className: "content-container flex flex-col px-4px gap-4px w-full" },
                    React.createElement("div", { className: "text-body text-black font-bold" }, title ? title : "Notification"),
                    React.createElement("div", { className: "text-body text-copy-caption leading-[20px]" }, message)),
                action && (React.createElement("div", { className: "buttons-container" },
                    React.createElement(Button, { label: action === null || action === void 0 ? void 0 : action.label, onClick: action === null || action === void 0 ? void 0 : action.onClick, variant: "text", color: alertIntent }))))),
        React.createElement(RemixIcon, { name: "close-line", className: "text-[20px] text-gray-700 hover:text-gray-900 transition-all ease-in h-[20px] w-fit cursor-pointer items-center flex pb-4px", onClick: handleToastClose })));
};
export default Alert;
//# sourceMappingURL=Alert.js.map