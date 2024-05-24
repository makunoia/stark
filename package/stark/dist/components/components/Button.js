"use client";
import React from "react";
import RemixIcon from "./molecules/RemixIcon";
import { cn } from "../utils/cn";
const Button = ({ label, id, leadingIcon, trailingIcon, variant = "solid", color = "default", size = "default", disabled = false, isLoading = false, fullWidth = false, submit = false, attached = false, onClick, className, }) => {
    const validVariants = ["solid", "outline", "text"];
    const validColors = [
        "default",
        "primary",
        "secondary",
        "info",
        "success",
        "danger",
        "warning",
        "dark",
        "white",
    ];
    const validSizes = ["default", "small", "large"];
    const buttonVariant = validVariants.includes(variant) ? variant : "solid";
    const buttonColor = validColors.includes(color) ? color : "default";
    const buttonSize = validSizes.includes(size) ? size : "default";
    const state = disabled ? "disabled" : isLoading ? "loading" : "default";
    const sizeClasses = {
        small: "px-8px py-4px",
        default: "px-12px py-10px",
        large: "px-16px py-16px",
    };
    const buttonClasses = {
        solid: {
            default: "bg-white hover:bg-gray-50 border-outline-default active:bg-gray-100",
            primary: `${!disabled &&
                "bg-primary-base hover:bg-primary-hover active:bg-primary-active border-primary-base hover:border-primary-hover"}  `,
            secondary: `${!disabled &&
                "bg-secondary-base hover:bg-secondary-hover active:bg-secondary-active border-secondary-base hover:border-secondary-hover"}`,
            success: `${!disabled &&
                "bg-success-base hover:bg-success-hover active:bg-secondary-active border-success-base hover:border-success-hover"}`,
            danger: `${!disabled &&
                "bg-danger-base hover:bg-danger-hover active:bg-danger-active border-danger-base hover:border-danger-hover"}`,
            info: `${!disabled &&
                "bg-info-base hover:bg-info-hover active:bg-info-active border-info-base hover:border-info-hover"}`,
            warning: `${!disabled &&
                "bg-warning-base hover:bg-warning-hover active:bg-warning-active border-warning-base hover:border-warning-hover"}`,
            dark: "bg-black hover:bg-gray-900 active:bg-gray-800 border-black",
        },
        outline: {
            default: "bg-white hover:bg-gray-50 border-outline-default active:bg-gray-100",
            primary: !disabled &&
                "bg-white hover:bg-primary-muted border-primary-base hover:border-primary-hover active:border-primary-active",
            secondary: !disabled &&
                "bg-white hover:bg-secondary-muted border-secondary-base hover:border-secondary-hover active:border-secondary-active",
            success: !disabled &&
                "bg-white hover:bg-success-muted border-success-base hover:border-success-hover active:border-success-active",
            danger: !disabled &&
                "bg-white hover:bg-danger-muted border-danger-base hover:border-danger-hover active:border-danger-active",
            info: !disabled &&
                "bg-white hover:bg-info-muted border-info-base hover:border-info-hover active:border-info-active",
            warning: !disabled &&
                "bg-white hover:bg-warning-muted border-warning-base hover:border-warning-hover active:border-warning-active",
            dark: "bg-white border-gray-800 hover:bg-gray-100 hover:border-black active:border-black",
        },
        text: {
            default: !disabled &&
                "text-copy-caption hover:bg-gray-50 active:text-gray-800 cursor-pointer",
            primary: !disabled &&
                "text-primary-base hover:bg-primary-muted active:text-primary-active cursor-pointer",
            secondary: !disabled &&
                "text-secondary-base hover:bg-secondary-muted active:text-secondary-active cursor-pointer",
            success: !disabled &&
                "text-success-base hover:bg-success-muted active:text-success-active cursor-pointer",
            danger: !disabled &&
                "text-danger-base hover:bg-danger-muted active:text-danger-active cursor-pointer",
            info: !disabled &&
                "text-info-base hover:bg-info-muted active:text-info-active cursor-pointer",
            warning: !disabled &&
                "text-warning-base hover:bg-warning-muted active:text-warning-active cursor-pointer",
            dark: "text-black hover:bg-gray-100/30 active:text-gray-800 cursor-pointer",
            white: "text-white active:text-gray-800 cursor-pointer",
        },
    };
    const stateClasses = {
        default: "cursor-pointer",
        disabled: "text-copy-disabled bg-fill-disabled cursor-not-allowed border-outline-default border",
        loading: "opacity-75 cursor-wait",
    };
    const variantClasses = {
        solid: `font-semibold ${attached ? "border-l rounded-0px" : "rounded-4px outline border"} focus:outline-4 focus:outline-focusRing/30 outline-focusRing/0`,
        outline: `font-semibold ${attached ? "border-l rounded-0px" : "rounded-4px outline border"} focus:outline-4 focus:outline-focusRing/30 outline-focusRing/0`,
        text: `font-semibold bg-transparent p-4px rounded-4px border-none focus:outline-4 focus:outline-focusRing/30 outline outline-focusRing/0`,
    };
    const buttonClass = buttonClasses[buttonVariant][buttonColor];
    const sizeClass = sizeClasses[buttonSize];
    const textClass = state === "disabled"
        ? "text-copy-disabled cursor-not-allowed"
        : buttonVariant === "solid" && buttonColor !== "default"
            ? "text-white cursor-pointer"
            : buttonClasses.text[buttonColor];
    const stateClass = stateClasses[state];
    const combinedClasses = cn("relative group justify-center items-center flex transition-colors duration-300 ease-in-out h-fit", variantClasses[buttonVariant], buttonClass, fullWidth ? "w-full" : "w-fit", buttonVariant !== "text" && sizeClass, stateClass, textClass, className);
    return (React.createElement("button", { id: id, type: submit ? "submit" : "button", onClick: onClick, disabled: state === "disabled" || state === "loading", className: combinedClasses },
        React.createElement("label", { className: cn(textClass, "inline-flex gap-4px items-center justify-center whitespace-nowrap transition-all duration-300 ease-in-out text-body", isLoading && "opacity-20 cursor-wait") },
            leadingIcon && (React.createElement("div", { className: "text-[16px] flex justify-center items-center h-[16px] w-[16px] relative" },
                React.createElement("div", { className: "absolute" }, React.cloneElement(leadingIcon)))),
            React.createElement("span", { className: "select-none" }, label !== null && label !== void 0 ? label : "Button"),
            trailingIcon && (React.createElement("div", { className: "text-[16px] flex justify-center items-center h-[16px] w-[16px] relative" },
                React.createElement("div", { className: "absolute" }, React.cloneElement(trailingIcon))))),
        isLoading && (React.createElement("span", { className: cn("absolute cursor-wait top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-12px h-[18px] w-[18px] text-[18px] font-bold", textClass) },
            React.createElement("div", { className: "animate-spin" },
                React.createElement(RemixIcon, { name: "loader-fill" }))))));
};
export default Button;
//# sourceMappingURL=Button.js.map