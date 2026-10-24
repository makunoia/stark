import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton, RemixIcon, Stack } from "stark-lib";
const meta = {
  title: "Actions/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  args: {
    "aria-label": "Settings",
    icon: <RemixIcon name="settings-3-line" />,
  },
} satisfies Meta<typeof IconButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Outline: Story = {
  args: { variant: "outline", intent: "primary" },
};
export const Text: Story = { args: { variant: "text", intent: "danger" } };
export const Sizes: Story = {
  render: (args) => (
    <Stack horizontal gap="12px">
      {(["small", "default", "large"] as const).map((size) => (
        <IconButton {...args} key={size} size={size} />
      ))}
    </Stack>
  ),
};
export const Loading: Story = { args: { loading: true } };
export const Disabled: Story = { args: { disabled: true } };
export const Attached: Story = { args: { attached: true } };
