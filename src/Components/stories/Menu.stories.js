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
    sectionTitle: "Choose Item",
    items: [
      {
        href: "#",
        leadingItem: <RemixIcon name="share-fill" />,
        trailingItem: "CTRL+S",
        label: "Share...",
        active: true,
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
        disabled: true,
      },
    ],
  },
];

const GroupedItems = [
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
