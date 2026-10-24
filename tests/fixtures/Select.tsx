import React, { useState } from "react";
import { Combobox, Select } from "stark-lib";

const options = [
  { value: "accessories", label: "Accessories" },
  { value: "lighting", label: "Lighting" },
  { value: "unavailable", label: "Unavailable", disabled: true },
  { value: "homeware", label: "Homeware" },
];
export function SelectFixture() {
  const [badges, setBadges] = useState(true);
  const [value, setValue] = useState<(string | number)[]>([0, 1, 2]);
  const manyOptions = Array.from({ length: 30 }, (_, index) => ({
    value: index,
    label: index === 5 ? "An option with a longer label that wraps onto multiple lines" : `Category ${String(index + 1).padStart(2, "0")}`,
    disabled: index === 3,
  }));
  return <main style={{ display: "grid", gap: 28, width: 300, maxWidth: "100%" }}>
    <Select label="Pick a category" options={options} defaultValue="accessories" />
    <Combobox label="Search categories" options={options} defaultValue="accessories" />
    <label><input type="checkbox" checked={badges} onChange={event => setBadges(event.target.checked)} /> Show selected badges</label>
    <Select label="Many categories" multiple options={manyOptions} value={value} onChange={next => setValue(next as (string | number)[])} showSelectedBadges={badges} helpText="Choose as many categories as you need." />
  </main>;
}
