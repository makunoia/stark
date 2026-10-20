import { useState } from "react";
import { Checkbox, Stack } from "stark-lib";

export default {
  title: "Inputs/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: { label: "Email updates", helpText: "Receive product news and announcements." },
  parameters: { layout: "padded" },
};

export const Default = {};
export const Checked = { args: { defaultChecked: true } };
export const Mixed = { args: { indeterminate: true, label: "Select all notifications", helpText: "Some notifications are selected." } };
export const Error = { args: { error: true, required: true, label: "Accept the terms", helpText: "Accept the terms to continue." } };
export const Disabled = {
  render: args => <Stack><Checkbox {...args} disabled /><Checkbox {...args} disabled defaultChecked label="Selected and disabled" /></Stack>,
};
export const Controlled = {
  render: function ControlledCheckbox(args) {
    const [checked, setChecked] = useState(false);
    return <Checkbox {...args} checked={checked} onChange={event => setChecked(event.target.checked)} />;
  },
};
