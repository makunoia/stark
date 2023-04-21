// src/components/stories/Button.stories.js
import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "../Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => (
  <Button {...args} onClick={action("button-click")} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Default Button",
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  secondary: true,
};

export const Success = Template.bind({});
Success.args = {
  label: "Success Button",
  success: true,
};

export const Danger = Template.bind({});
Danger.args = {
  label: "Danger Button",
  danger: true,
};

export const Large = Template.bind({});
Large.args = {
  label: "Large Button",
  large: true,
};

export const Small = Template.bind({});
Small.args = {
  label: "Small Button",
  small: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Button",
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  label: "Loading Button",
  loading: true,
};
