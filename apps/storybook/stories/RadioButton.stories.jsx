import React, { useState } from "react";
import { RadioButton } from "stark-lib";

export default {
  title: "Inputs/RadioButton",
  component: RadioButton,
};

export const DefaultRadioButton = () => {
  const [selectedValues, setSelectedValues] = useState(false);

  const handleRadioButtonChange = (event) => {
    setSelectedValues(event);
  };

  return (
    <div>
      <RadioButton
        id="storybook-checkbox"
        name="storybook-checkbox"
        label={"Radio Option"}
        checked={selectedValues}
        disabled={false}
        onChange={handleRadioButtonChange}
      />
    </div>
  );
};

export const WithHelpText = () => {
  const [selectedValues, setSelectedValues] = useState(false);

  const handleRadioButtonChange = (event) => {
    setSelectedValues(event);
  };

  return (
    <RadioButton
      id="storybook-checkbox"
      name="storybook-checkbox"
      label={"Radio Option"}
      helpText={"This is a radio button"}
      checked={selectedValues}
      disabled={false}
      onChange={handleRadioButtonChange}
    />
  );
};
