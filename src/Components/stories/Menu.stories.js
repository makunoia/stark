import React from "react";
import Menu from "../Menu";
import "remixicon/fonts/remixicon.css";

export default {
  title: "Button/Menu",
  component: Menu,
};

const Template = (args) => <Menu {...args} />;

const Items = [
  {
    items: [
      {
        href: "#",
        icon: <i className="ri-home-4-line"></i>,
        label: "Home",
      },
      {
        href: "#",
        icon: <i className="ri-settings-5-line"></i>,
        label: "Settings",
      },
    ],
  },
  {
    items: [
      {
        href: "#",
        icon: <i className="ri-user-3-line"></i>,
        label: "Profile",
      },
      {
        href: "#",
        icon: <i className="ri-logout-box-line"></i>,
        label: "Logout",
      },
    ],
  },
];

const GroupedItems = [
  {
    label: "Group 1",
    items: [
      {
        href: "#",
        icon: <i className="ri-home-4-line"></i>,
        label: "Home",
      },
      {
        href: "#",
        icon: <i className="ri-settings-5-line"></i>,
        label: "Settings",
      },
    ],
  },
  {
    label: "Group 2",
    items: [
      {
        href: "#",
        icon: <i className="ri-user-3-line"></i>,
        label: "Profile",
      },
      {
        href: "#",
        icon: <i className="ri-logout-box-line"></i>,
        label: "Logout",
      },
    ],
  },
];

export const DefaultMenu = Template.bind({});
DefaultMenu.args = {
  label: "Dropdown",
  links: Items,
};

export const GroupedSections = Template.bind({});
GroupedSections.args = {
  label: "Dropdown",
  links: GroupedItems,
};
