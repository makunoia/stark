import React, { useState } from "react";
import Tab from "./molecules/Tab";
import type { TabGroupProps } from "stark-types";
const TabGroup = ({
  tabs,
  type = "default",
  activeTab,
  handleTabClick,
}: TabGroupProps) => {
  const TabClickHandler = (index: number) => {
    handleTabClick(index);
  };

  return (
    <div
      className={`flex justify-center w-fit ${
        type === "default" ? "gap-16px" : "gap-4px"
      }`}
    >
      {tabs?.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          remixIcon={tab?.remixIcon}
          type={type ? type : "default"}
          active={index === activeTab}
          onTabClick={() => TabClickHandler(index)}
        />
      ))}
    </div>
  );
};

export default TabGroup;
