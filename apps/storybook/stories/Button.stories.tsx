import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Stack, RemixIcon } from "stark-lib";
const meta = {
  title: "Actions/Button",
  component: Button,
  tags: ["autodocs"],
  args: { label: "Button" },
  argTypes: {
    variant: { options: ["solid", "outline", "text"], control: "select" },
    intent: {
      options: [
        "default",
        "inverse",
        "primary",
        "info",
        "success",
        "warning",
        "danger",
      ],
      control: "select",
    },
    size: { options: ["small", "default", "large"], control: "select" },
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Outline: Story = {
  args: { variant: "outline", intent: "primary" },
};
export const Text: Story = { args: { variant: "text", intent: "info" } };
export const Sizes: Story = {
  render: () => (
    <Stack horizontal align="center" gap="12px">
      {(["small", "default", "large"] as const).map((size) => (
        <Button key={size} size={size} label={size} intent="primary" />
      ))}
    </Stack>
  ),
};
export const Intents: Story = {
  render: () => (
    <Stack gap="12px">
      {(["solid", "outline", "text"] as const).map((variant) => (
        <Stack key={variant} horizontal gap="12px" className="flex-wrap">
          {(
            [
              "default",
              "inverse",
              "primary",
              "info",
              "success",
              "warning",
              "danger",
            ] as const
          ).map((intent) => (
            <Button
              key={intent}
              label={intent}
              intent={intent}
              variant={variant}
            />
          ))}
        </Stack>
      ))}
    </Stack>
  ),
};
export const LeadingIcon: Story = {
  args: {
    label: "Delete",
    intent: "danger",
    leadingIcon: <RemixIcon name="delete-bin-fill" />,
  },
};
export const TrailingIcon: Story = {
  args: {
    label: "Continue",
    trailingIcon: <RemixIcon name="arrow-right-line" />,
  },
};
export const Disabled: Story = { args: { disabled: true, intent: "primary" } };
export const Loading: Story = { args: { loading: true, intent: "primary" } };
export const FullWidth: Story = { args: { fullWidth: true } };
export const Link: Story = {
  render: () => (
    <Button label="View account" asChild>
      <a href="#account">View account</a>
    </Button>
  ),
};
export const ArchivedProps: Story = {
  args: {
    color: "success",
    variant: "outline",
    isLoading: false,
    label: "Saved",
  },
};
