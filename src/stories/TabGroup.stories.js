import React, { useState } from "react";
import TabGroup from "../components/TabGroup";

export default {
  title: "Navigation/Tab Group",
  component: TabGroup,
};

const Template = (args) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <TabGroup
        tabs={args.tabs}
        type={args.type}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      />
      <div className="pt-16px">{args.tabs[activeTab].label} content</div>
    </div>
  );
};
export const DefaultTabGroup = Template.bind({});
DefaultTabGroup.args = {
  tabs: [{ label: "My Favorites" }, { label: "Stars" }, { label: "Bookmarks" }],
};

export const PillTabGroup = Template.bind({});
PillTabGroup.args = {
  type: "pill",
  tabs: [{ label: "My Favorites" }, { label: "Stars" }, { label: "Bookmarks" }],
};

export const TabGroupWithIcons = Template.bind({});
TabGroupWithIcons.args = {
  tabs: [
    { label: "My Favorites", remixIcon: "heart-fill" },
    { label: "Stars", remixIcon: "star-fill" },
    { label: "Bookmarks", remixIcon: "book-fill" },
  ],
};
