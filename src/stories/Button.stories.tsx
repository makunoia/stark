import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "../components/Button";

const meta: Meta<typeof Button> = {
  title: "Button/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Sizes = () => (
  <div className="flex flex-row gap-8px">
    <Button label="Small" size="small" onClick={action("button-click")} />
    <Button label="Default" size="default" onClick={action("button-click")} />
    <Button label="Default" size="large" onClick={action("button-click")} />
  </div>
);

export const Default: Story = {
  args: {
    label: "Default Button",
  },
};

export const Primary: Story = {
  args: {
    label: "Primary Button",
    color: "primary",
  },
};

export const Success: Story = {
  args: {
    label: "Success Button",
    color: "success",
  },
};

export const Info: Story = {
  args: {
    label: "Info Button",
    variant: "outline",
    color: "info",
  },
};

export const Outline: Story = {
  args: {
    label: "Info Button",
    variant: "outline",
    color: "danger",
  },
};

export const Text: Story = {
  args: {
    label: "Info Button",
    variant: "text",
  },
};
