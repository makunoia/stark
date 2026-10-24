import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { LoginTemplate, Button, Input, PageSection, Badge } from "stark-lib";
const meta = {
  title: "Templates/LoginTemplate",
  component: LoginTemplate,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof LoginTemplate>;
export default meta;
type Story = StoryObj;
export const Default: Story = {
  render: () => (
    <LoginTemplate
      branding="Stark"
      supportingContent="A home for your work."
      onSubmit={() => {}}
    />
  ),
};
export const Error: Story = {
  render: () => (
    <LoginTemplate
      branding="Stark"
      error="Unable to sign in. Please try again."
      onSubmit={() => {}}
    />
  ),
};
