import React from "react";
import Tab from "./molecules/Tab";
const TabGroup = ({ tabs, type = "default", activeTab, handleTabClick, }) => {
    const TabClickHandler = (index) => {
        handleTabClick(index);
    };
    return (React.createElement("div", { className: `flex justify-center w-fit ${type === "default" ? "gap-16px" : "gap-4px"}` }, tabs === null || tabs === void 0 ? void 0 : tabs.map((tab, index) => (React.createElement(Tab, { key: index, label: tab.label, remixIcon: tab === null || tab === void 0 ? void 0 : tab.remixIcon, type: type ? type : "default", active: index === activeTab, onTabClick: () => TabClickHandler(index) })))));
};
export default TabGroup;
//# sourceMappingURL=TabGroup.js.map