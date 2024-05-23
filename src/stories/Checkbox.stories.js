import React, { useState } from "react";
import Checkbox from "../components/molecules/Checkbox";

export default {
  title: "Molecule/Checkbox",
};

export const DefaultCheckbox = () => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      id="storybook-checkbox"
      name="storybook-checkbox"
      label={text("Label", "Checkbox")}
      checked={isChecked}
      disabled={boolean("Disabled", false)}
      onChange={handleCheckboxChange}
    />
  );
};

export const WithHelpText = () => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      id="storybook-checkbox"
      name="storybook-checkbox"
      label={text("Label", "Checkbox")}
      helpText={text("Help Text", "This is a checkbox")}
      checked={isChecked}
      disabled={boolean("Disabled", false)}
      onChange={handleCheckboxChange}
    />
  );
};

export const Contained = () => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      id="storybook-checkbox"
      name="storybook-checkbox"
      label={text("Label", "Checkbox")}
      checked={isChecked}
      disabled={boolean("Disabled", false)}
      onChange={handleCheckboxChange}
      contained
    />
  );
};
