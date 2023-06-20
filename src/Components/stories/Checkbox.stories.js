import React, { useState } from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import Checkbox from "../molecules/Checkbox";

export default {
  title: "Molecule/Checkbox",
  decorators: [withKnobs],
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
