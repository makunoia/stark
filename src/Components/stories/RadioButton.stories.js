import React, { useState } from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import RadioButton from "../molecules/RadioButton";

export default {
  title: "Molecule/Radio Button",
  decorators: [withKnobs],
};

export const DefaultRadioButton = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleRadioButtonChange = (event) => {
    setSelectedValues(event.target.checked);
  };

  return (
    <div>
      <RadioButton
        id="storybook-checkbox"
        name="storybook-checkbox"
        label={text("Label", "Radio Option")}
        checked={selectedValues}
        disabled={boolean("Disabled", false)}
        onChange={handleRadioButtonChange}
      />
    </div>
  );
};

export const WithHelpText = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleRadioButtonChange = (event) => {
    setSelectedValues(event.target.checked);
  };

  return (
    <RadioButton
      id="storybook-checkbox"
      name="storybook-checkbox"
      label={text("Label", "Radio Option")}
      helpText={text("Help Text", "This is a radio button")}
      checked={selectedValues}
      disabled={boolean("Disabled", false)}
      onChange={handleRadioButtonChange}
    />
  );
};
