import { useState } from "react";
import { Switch, Stack } from "stark-lib";

export default {
  title: "Inputs/Switch",
  component: Switch,
  tags: ["autodocs"],
  args: { label: "Push notifications", helpText: "Get notified when a project changes." },
  parameters: { layout: "padded" },
};

export const Default = {};
export const Enabled = { args: { defaultChecked: true } };
export const Error = { args: { error: true, helpText: "This preference could not be saved. Try again." } };
export const Disabled = {
  render: args => <Stack><Switch {...args} disabled /><Switch {...args} disabled defaultChecked label="Enabled and disabled" /></Stack>,
};
export const Controlled = {
  render: function ControlledSwitch(args) {
    const [checked, setChecked] = useState(false);
    return <Switch {...args} checked={checked} onChange={event => setChecked(event.target.checked)} />;
  },
};

export const BooleanCallback = { render: function Example(args) { const [checked, setChecked] = useState(false); return <Switch {...args} checked={checked} onCheckedChange={setChecked} />; } };
