import React from "react";
import "react-quill/dist/quill.snow.css";
import TextField from "../TextField";
import RemixIcon from "../molecules/RemixIcon";

export default {
  title: "Input/Text Field",
  component: TextField,
};

const handleLabelAction = (e) => {
  alert("Label action fired");
};

const Template = (args) => <TextField {...args} />;

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
  leadingItem: <RemixIcon name="user-fill" className="text-primary-base" />,
  trailingItem: (
    <span className="flex whitespace-nowrap font-normal gap-4px text-success-base">
      Username available
      <RemixIcon name="check-line" className="text-success-base font-bold" />
    </span>
  ),
  labelAction: {
    label: "Action",
    action: handleLabelAction,
  },
  helpText: "This can either be your username or email",
};

export const TextInputWith_AttachedButton = Template.bind({});
TextInputWith_AttachedButton.args = {
  label: "Username",
  id: "username",
  placeholder: "Enter your username",
  attachedButton: {
    label: "Search",
    remixIcon: "search-2-line",
  },
  leadingItem: <RemixIcon name="user-fill" className="text-black" />,
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
  leadingItem: <RemixIcon name="key-fill" className="text-name" />,
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  label: "Number Input",
  id: "number-input",
  type: "number",
  name: "masked-input",
  placeholder: "-",
};
