import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import Switch from "stark-lib/components/molecules/Switch";

export default {
  title: "Molecule/Switch",
  component: Switch,
  argTypes: {
    id: { control: "text" },
    label: { control: "text" },
    name: { control: "text" },
    helpText: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

const Template = (args) => (
  <Switch {...args} onChange={action("switch toggled")} />
);

export const Toggle = (args) => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <Switch
        id="switch"
        checked={active}
        label="Switch"
        helpText="Click to toggle"
        onChange={() => setActive(!active)}
      />
    </div>
  );
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "Disabled",
  helpText: "This is a disabled toggle",
};
