import React, { useState } from "react";
import RemixIcon from "./molecules/RemixIcon";
import Button from "./Button";
import IconButton from "./IconButton";
const TextField = ({ label, id, labelAction, //labelAction={{label: "", action: () => console.log("function")}}
type = "text", name, disabled, readOnly, optional = false, required = false, helpText, placeholder, error, leadingItem, //can either be an icon or a string
trailingItem, //can either be an icon or a string
attachedButton, //attach a button
value, }) => {
    const [inputValue, setInputValue] = useState(value ? value : "");
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const inputField = (React.createElement("input", { type: showPassword ? "text" : type, required: required, placeholder: placeholder ? placeholder : "", disabled: disabled, readOnly: readOnly, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur, name: name, value: inputValue, id: id, className: `input w-full h-full py-10px bg-transparent outline-none ${disabled ? "cursor-not-allowed" : ""} ${!leadingItem && "pl-12px"} ${(!attachedButton || !trailingItem) && "pr-12px"}` }));
    const textArea = (React.createElement("textarea", { rows: 3, required: required, placeholder: placeholder ? placeholder : "", disabled: disabled, readOnly: readOnly, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur, name: name, value: inputValue, id: id, className: `resize-none input p-12px rounded-4px text-body outline-none border transition-all ease-in ring  ${isFocused
            ? error
                ? "ring-danger-base/40"
                : "ring-focusRing/40"
            : "ring-focusRing/0"} ${error
            ? "border-danger-base bg-danger-muted text-danger-base placeholder-danger-base/30"
            : "border-outline-default  placeholder-copy-placeholder"} ${disabled
            ? "bg-fill-disabled text-copy-disabled cursor-not-allowed"
            : "bg-white text-black "} ` }));
    return (React.createElement("div", { className: `text-field flex flex-col gap-4px` },
        React.createElement("div", { className: "label-container text-body flex flex-row justify-between items-center" },
            React.createElement("label", { htmlFor: `${id}`, className: "label-text" },
                React.createElement("span", { className: "font-medium capitalize text-black" }, label),
                optional && (React.createElement("span", { className: "label-optional italic text-gray-800" },
                    " ",
                    "- optional"))),
            labelAction && (React.createElement("button", { className: "hover:underline underline-offset-2 text-info-base hover:text-info-hover", onClick: labelAction.action, type: "button" }, labelAction.label))),
        type === "textarea" ? (textArea) : (
        //if not TextArea render MaskedInput or TextField
        React.createElement("div", { className: `flex flex-row gap-4px overflow-clip justify-center items-center rounded-4px text-body outline-none border transition-all ease-in ring  ${isFocused
                ? error
                    ? "ring-danger-base/40"
                    : "ring-focusRing/40"
                : "ring-focusRing/0"} ${error
                ? "border-danger-base bg-danger-muted text-danger-base placeholder-danger-base/30"
                : "border-outline-default placeholder-copy-placeholder bg-white"} ${disabled
                ? "bg-fill-disabled text-copy-disabled cursor-not-allowed"
                : "text-black"} ` },
            leadingItem && ( //prioritize Leading Icon
            React.createElement("div", { className: "w-fit h-[14px] font-semibold text-body ml-12px" }, leadingItem)),
            inputField,
            type !== "password" ? (trailingItem || attachedButton ? (React.createElement("div", { className: `flex flex-row justify-center items-center grow w-fit ${attachedButton ? "gap-12px" : "pr-12px"}` },
                trailingItem && (React.createElement("div", { className: `h-[14px] text-body w-fit` }, trailingItem)),
                attachedButton && (React.createElement("div", { className: "rounded-r-4px w-fit" }, attachedButton.type === "icon" ? (React.createElement(IconButton, { attached: true, icon: React.createElement(RemixIcon, { name: attachedButton.icon }), color: attachedButton.color, onClick: attachedButton.onClick })) : (React.createElement(Button, { attached: true, label: attachedButton.label, color: attachedButton.color, onClick: attachedButton.onClick, leadingIcon: React.createElement(RemixIcon, { name: attachedButton.leadingIcon }) })))))) : ("")) : (React.createElement("div", { className: `w-16px h-[14px] font-semibold text-body min-w-fit pr-12px cursor-pointer`, onClick: togglePasswordVisibility }, showPassword ? (React.createElement(RemixIcon, { name: "eye-line" })) : (React.createElement(RemixIcon, { name: "eye-close-line" })))))),
        (helpText || error) && (React.createElement("p", { className: `flex flex-row gap-4px text-caption ${error ? "text-danger-base" : "text-gray-800"}` },
            error && React.createElement(RemixIcon, { name: "alert-fill" }),
            error ? error : helpText))));
};
export default TextField;
//# sourceMappingURL=TextField.js.map