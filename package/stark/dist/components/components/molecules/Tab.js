import RemixIcon from "./RemixIcon";
import React from "react";
const Tab = ({ label, active = true, type = "default", remixIcon, onTabClick = () => console.log("No OnClick event."), }) => {
    const typeStyle = {
        default: "pb-4px border-b-[2px]",
        pill: "py-4px px-8px rounded-4px",
    };
    return (React.createElement("div", { className: `flex flex-row gap-8px justify-center items-center text-body font-semibold cursor-pointer w-fit transition-colors ease-in-out hover:text-primary-base ${typeStyle[type]} ${active
            ? type === "default"
                ? " border-primary-base text-black"
                : type === "pill" && "bg-primary-muted text-primary-base"
            : "text-gray-400 border-b-transparent"}`, onClick: onTabClick },
        remixIcon && (React.createElement("div", { className: "h-full flex items-center" }, remixIcon && React.createElement(RemixIcon, { name: remixIcon, className: "text-body" }))),
        React.createElement("div", { className: `py-4px` }, label ? label : "Tab Item")));
};
export default Tab;
//# sourceMappingURL=Tab.js.map