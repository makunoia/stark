import React, { useState } from "react";
import RadioButton from "@makunoia/stark/components/molecules/RadioButton";

export default {
  title: "Molecule/Radio Button",
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
