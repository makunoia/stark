import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, Stack, RemixIcon } from "stark-lib";
const meta = {
  title: "Data Display/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: { label: "Badge" },
  argTypes: {
    variant: { options: ["solid", "outline", "status"], control: "select" },
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
  },
} satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Outline: Story = {
  args: { variant: "outline", intent: "success" },
};
export const Circular: Story = { args: { circular: true, color: "primary" } };
export const LeadingIcon: Story = {
  args: { leadingIcon: <RemixIcon name="price-tag-3-line" /> },
};
export const TrailingIcon: Story = {
  args: { trailingIcon: <RemixIcon name="arrow-right-up-line" /> },
};
export const BothIcons: Story = {
  args: {
    leadingItem: <RemixIcon name="price-tag-3-line" />,
    trailingIcon: <RemixIcon name="check-line" />,
  },
};
export const Status: Story = {
  args: { variant: "status", intent: "success", label: "Published" },
};
export const StatusOutline: Story = {
  args: {
    variant: "status",
    appearance: "outline",
    intent: "success",
    label: "Published",
  },
};
export const Intents: Story = {
  render: () => (
    <Stack horizontal gap="12px" className="flex-wrap">
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
        <Badge key={intent} label={intent} intent={intent} />
      ))}
    </Stack>
  ),
};
export const Dismissible: Story = {
  render: function Example(args) {
    const [visible, setVisible] = useState(true);
    return visible ? (
      <Badge
        {...args}
        label="Filter"
        color="primary"
        dismissible
        onDismiss={() => setVisible(false)}
      />
    ) : (
      <button onClick={() => setVisible(true)}>Restore badge</button>
    );
  },
};
