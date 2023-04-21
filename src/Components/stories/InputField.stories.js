import React from "react";
import { action } from "@storybook/addon-actions";
import InputField from "../InputField";
import Button from "../Button";
import "react-quill/dist/quill.snow.css";
import "remixicon/fonts/remixicon.css";

export default {
  title: "InputField",
  component: InputField,
};

const handleLabelAction = (e) => {
  alert("Label action fired");
};

const Template = (args) => <InputField {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  label: "Text Input",
  id: "text-input",
  type: "text",
  name: "text-input",
  placeholder: "Enter text here",
};

export const TextInputWith_Icons = Template.bind({});
TextInputWith_Icons.args = {
  label: "Username",
  id: "username",
  placeholder: "Enter your username",
  attachedButton: <Button label="Button" />,
  leadingItem: <i className="ri-user-fill" />,
  trailingItem: <i className="ri-check-line" />,
  labelAction: {
    label: "Action",
    action: handleLabelAction,
  },
  helpText: "This can either be your username or email",
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  label: "Email Input",
  id: "email-input",
  type: "email",
  name: "email-input",
  placeholder: "Enter email here",
  helpText: "Use your Google email",
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  label: "Password Input",
  id: "password-input",
  type: "password",
  name: "password-input",
  placeholder: "Enter password",
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  label: "Number Input",
  id: "number-input",
  type: "number",
  name: "masked-input",
  placeholder: "-",
};

export const MaskedInput = Template.bind({});
MaskedInput.args = {
  label: "Masked Input",
  id: "masked-input",
  type: "text",
  mask: "999999",
  name: "masked-input",
  placeholder: "-",
};

export const RichTextInput = Template.bind({});
RichTextInput.args = {
  label: "RichText Input",
  id: "richtext-input",
  type: "richtext",
  name: "richtext-input",
  placeholder: "Enter richtext",
};

// Add additional stories for other variations of InputField.
