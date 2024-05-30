import React, { useState } from "react";
import Select from "@makunoia/stark-ui/components/Select";

export default {
  title: "Input/Select",
  component: Select,
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

  const handleLabelAction = (e) => {
    alert("Label action fired");
  };

  return (
    <div>
      <Select
        label="My Select Label"
        id="my-select"
        options={options}
        value={selectedOption}
        onChange={handleSelectChange}
        placeholder="Choose an option"
        labelAction={{
          label: "Action",
          action: handleLabelAction,
        }}
      />
    </div>
  );
};

export const Multiple = () => {
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

  const handleLabelAction = (e) => {
    alert("Label action fired");
  };

  return (
    <div>
      <Select
        label="My Select Label"
        id="my-select"
        options={options}
        value={selectedOption}
        onChange={handleSelectChange}
        placeholder="Choose an option"
        labelAction={{
          label: "Action",
          action: handleLabelAction,
        }}
        multiple
      />
    </div>
  );
};
