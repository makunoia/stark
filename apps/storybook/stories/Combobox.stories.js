import React from "react";
import { useState } from "react";
import Combobox from "stark-lib/components/Combobox";

export default {
  title: "Input / Combobox",
  component: Combobox,
};

export const Default = () => {
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
    <Combobox
      label="Example Combobox"
      id="example-combobox"
      options={options}
      onChange={handleSelectChange}
      placeholder="Your favorite place to go to date"
    />
  );
};
