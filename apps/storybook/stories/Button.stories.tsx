import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "@makunoia/stark/components/Button";
import RemixIcon from "@makunoia/stark/components/molecules/RemixIcon";

const meta: Meta<typeof Button> = {
  title: "Form Elements/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    variant: { control: "select", options: ["solid", "outline", "text"] },
    color: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "info",
        "success",
        "danger",
        "warning",
        "dark",
        "white",
      ],
    },
    size: {
      control: "select",
      options: ["small", "default", "large"],
    },
    disabled: { control: "boolean" },
    isLoading: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Default Button",
  },
};

export const LeadingIcon: Story = {
  render: () => (
    <Button
      leadingIcon={<RemixIcon name="delete-bin-fill" />}
      label="Delete"
      color="danger"
    />
  ),
};

export const TrailingIcon: Story = {
  render: () => (
    <Button
      trailingIcon={<RemixIcon name="delete-bin-fill" />}
      label="Delete"
      color="danger"
    />
  ),
};
