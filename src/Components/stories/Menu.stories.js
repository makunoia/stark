import React from "react";
import Menu from "../Menu";
import "remixicon/fonts/remixicon.css";
import RemixIcon from "../molecules/RemixIcon";

export default {
  title: "Button/Menu",
  component: Menu,
};

const Template = (args) => <Menu {...args} />;

const Items = [
  {
    sectionTitle: "Home",
    items: [
      {
        href: "#",
        leadingItem: <RemixIcon name="share-fill" />,
        trailingItem: "CTRL+S",
        label: "Share...",
      },
      {
        href: "#",
        leadingItem: <RemixIcon name="arrow-right-circle-fill" />,
        label: "Move...",
      },
      {
        href: "#",
        leadingItem: <RemixIcon name="pencil-fill" />,
        label: "Rename...",
      },
    ],
  },
  {
    sectionTitle: "Your account",
    items: [
      {
        href: "#",
        leadingItem: <RemixIcon name="account-circle-fill" />,
        label: "My Profile",
      },
      {
        href: "#",
        leadingItem: <RemixIcon name="delete-bin-fill" />,
        label: "Delete",
        caption: "This can't be undone",
        danger: true,
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
