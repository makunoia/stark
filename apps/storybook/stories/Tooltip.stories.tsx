import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip, Button } from "stark-lib";
const meta = {
  title: "Overlays/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: { content: "Helpful context" },
} satisfies Meta<typeof Tooltip>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Top: Story = { args: { position: "top" } };
export const CustomTrigger: Story = {
  args: { children: <Button label="More information" /> },
};
