import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { DropdownMenuItem, RemixIcon } from "stark-lib";
const meta = {
  title: "Navigation/DropdownMenuItem",
  component: DropdownMenuItem,
  tags: ["autodocs"],
  args: { label: "Account", link: "#account" },
} satisfies Meta<typeof DropdownMenuItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const WithCaption: Story = {
  args: {
    caption: "Manage your profile",
    leadingItem: <RemixIcon name="user-line" />,
  },
};
export const Active: Story = { args: { active: true } };
export const Disabled: Story = { args: { disabled: true } };
export const Danger: Story = { args: { danger: true, label: "Delete" } };
