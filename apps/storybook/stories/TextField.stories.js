import React from "react";
import "react-quill/dist/quill.snow.css";
import TextField from "../components/TextField";
import RemixIcon from "../components/molecules/RemixIcon";
import Select from "../components/Select";
import { useState } from "react";
import Combobox from "../components/Combobox";

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

const Inputs = (args) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { id: "1", value: "rizalPark", label: "Rizal Park" },
    { id: "2", value: "intramuros", label: "Intramuros", disabled: true },
    { id: "3", value: "fortSantiago", label: "Fort Santiago" },
    { id: "4", value: "chocolateHills", label: "Chocolate Hills" },
    { id: "5", value: "tubbatahaReef", label: "Tubbataha Reef" },
    { id: "6", value: "mayonVolcano", label: "Mayon Volcano" },
    { id: "7", value: "banaueRiceTerraces", label: "Banaue Rice Terraces" },
    {
      id: "8",
      value: "puertoPrincesaSubterraneanRiver",
      label: "Puerto Princesa Subterranean River",
    },
  ];

  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div className="flex flex-col gap-4px">
      <div className="flex gap-4px">
        <TextField placeholder="Default" />
        <TextField
          placeholder="Leading"
          leadingItem={
            <RemixIcon name="user-fill" className="text-primary-base" />
          }
        />
        <TextField
          placeholder="Attached Button"
          attachedButton={{
            label: "Search",
            remixIcon: "search-2-line",
          }}
        />
        <TextField type="password" placeholder="Password" />
        <TextField type="number" placeholder="Number" />
      </div>
      <div className="flex gap-4px">
        <Select
          id="my-select"
          options={options}
          value={selectedOption}
          onChange={handleSelectChange}
          placeholder="Choose an option"
          multiple
        />
        <Combobox
          id="example-combobox"
          options={options}
          onChange={handleSelectChange}
          placeholder="Your favorite place to go to date"
        />
      </div>
    </div>
  );
};

export const AllInputs = Inputs.bind({});
