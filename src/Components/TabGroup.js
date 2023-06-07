import React, { useState } from "react";
import Tab from "./molecules/Tab";

const TabGroup = ({ tabs, type = "default", activeTab, handleTabClick }) => {
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
          onClick={() => handleTabClick(index)}
        />
      ))}
    </div>
  );
};

export default TabGroup;
