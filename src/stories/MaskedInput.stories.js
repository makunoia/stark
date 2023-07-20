import React from "react";
import MaskedInput from "../components/MaskedInput";
import { action } from "@storybook/addon-actions";
import RemixIcon from "../components/molecules/RemixIcon";
import Button from "../components/Button";

export default {
  title: "Input/Masked Input",
  component: MaskedInput,
};

const Template = (args) => <MaskedInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Phone Number",
  id: "phone-number",
  type: "text",
  name: "phoneNumber",
  placeholder: "-",
  mask: "(999) 999-9999",
  leadingItem: <span className="mt-12px">+63</span>,
  trailingItem: <RemixIcon name="question-line" />,
  attachedButton: <Button label="Contact" />,
  labelAction: {
    label: "Reset",
    action: action("Reset button clicked"),
  },
  helpText: "Please provide a valid phone number.",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  ...Default.args,
  readOnly: true,
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  error: "Invalid phone number",
};

export const Optional = Template.bind({});
Optional.args = {
  ...Default.args,
  optional: true,
};
