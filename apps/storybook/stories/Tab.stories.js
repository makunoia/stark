import React from "react";
import Tab from "@makunoia/stark/components/molecules/Tab";

export default {
  title: "Molecule/Tab",
  component: Tab,
};

const Template = (args) => <Tab {...args} />;
export const DefaultTab = Template.bind({});
DefaultTab.args = {
  label: "Tab Example",
  active: true,
};

export const PillTab = Template.bind({});
PillTab.args = {
  label: "Tab Example",
  type: "pill",
  active: true,
};

export const TabWithIcon = Template.bind({});
TabWithIcon.args = {
  label: "Tab Example",
  type: "pill",
  active: true,
  remixIcon: "user-fill",
};
