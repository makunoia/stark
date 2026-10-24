import React, { useState } from "react";
import { TabGroup } from "stark-lib";

export default {
  title: "Navigation/TabGroup",
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
      {args.tabs[activeTab].content === undefined && (
        <div className="pt-16px">{args.tabs[activeTab].label} content</div>
      )}
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

// Unequal label widths demonstrate the shared underline resizing as it travels.
export const AnimatedUnderline = Template.bind({});
AnimatedUnderline.args = {
  tabs: [
    { label: "Overview", content: "Overview panel" },
    {
      label: "Team members",
      remixIcon: "group-line",
      content: "Team members panel",
    },
    { label: "Unavailable", disabled: true },
    { label: "Activity", remixIcon: "history-line", content: "Activity panel" },
  ],
};
