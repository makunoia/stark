import React from "react";
import Button from "../Button";
import "react-quill/dist/quill.snow.css";
import InputField from "../InputField";
import RemixIcon from "../molecules/RemixIcon";
import IconButton from "../IconButton";

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
  attachedButton: <IconButton icon={<RemixIcon name="arrow-right-line" />} />,
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
