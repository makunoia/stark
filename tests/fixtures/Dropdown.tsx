import React, { createRef, useState } from "react";
import { Button, Dropdown, TextButton } from "stark-lib";
const options = [{ value: "accessories", label: "Accessories" }, { value: "lighting", label: "Lighting" }, { value: "homeware", label: "Homeware" }, { value: "unavailable", label: "Unavailable", disabled: true }];
export function DropdownFixture() {
  const menuOptions = new URLSearchParams(location.search).has("overflow") ? Array.from({ length: 40 }, (_, index) => ({ value: String(index + 1), label: `Option ${String(index + 1).padStart(2, "0")}` })) : options;
  const [single, setSingle] = useState("lighting");
  const [multi, setMulti] = useState(["homeware"]);
  const [submitted, setSubmitted] = useState<string>("");
  const [clicked, setClicked] = useState(0);
  const ref = createRef<HTMLButtonElement>();
  return <main style={{ padding: 24, maxWidth: 760, fontFamily: "var(--font-sans)" }}>
    <h1>Dropdown examples</h1>
    <form id="dropdown-form" style={{ display: "grid", gap: 24, paddingBlock: 24 }} onReset={() => { setSingle("lighting"); setMulti(["homeware"]); setSubmitted(""); }} onSubmit={event => { event.preventDefault(); setSubmitted(JSON.stringify([...new FormData(event.currentTarget).entries()])); }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
        <Dropdown ref={ref} label="Single category" name="single" defaultValue={menuOptions[0].value} options={menuOptions} helpText="Choose a category." aria-describedby="extra-description" />
        <Dropdown label="Multiple categories" name="multi" multiple defaultValue={[menuOptions[0].value]} options={menuOptions} helpText="Choose any categories." />
        <Dropdown label="Controlled category" name="controlled-single" value={single} onValueChange={setSingle} options={options} />
        <Dropdown label="Controlled categories" name="controlled-multi" multiple value={multi} onValueChange={setMulti} options={options} />
        <Dropdown label="Required category" name="required-single" options={options} required />
        <Dropdown label="Required categories" name="required-multi" multiple options={options} required />
        <Dropdown label="Disabled category" name="disabled-single" defaultValue="accessories" options={options} disabled />
        <Dropdown label="Disabled categories" name="disabled-multi" multiple defaultValue={["homeware"]} options={options} disabled />
        <Dropdown label="Invalid category" options={options} error helpText="Please review this selection." />
        <Dropdown label="Empty category" options={[]} />
      </div>
      <p id="extra-description">Additional description.</p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Button label="Focus dropdown" type="button" onClick={() => ref.current?.focus()} />
        <Button label="Set controlled values" type="button" onClick={() => { setSingle("accessories"); setMulti(["accessories", "lighting"]); }} />
        <Button label="Submit selections" type="submit" intent="primary" />
        <Button label="Reset selections" type="reset" />
      </div>
    </form>
    <output aria-label="Submitted values">{submitted}</output>
    <div style={{ display: "flex", gap: 12, paddingBlock: 24 }}>
      <Button asChild label="Button link" intent="primary"><a href="#link-target" /></Button>
      <TextButton asChild label="Text button link"><a href="#link-target" /></TextButton>
      <Button asChild label="Disabled link" disabled onClick={() => setClicked(previous => previous + 1)}><a href="#disabled-target" tabIndex={0} onClick={() => setClicked(previous => previous + 1)} /></Button>
    </div>
    <output aria-label="Disabled clicks">{clicked}</output>
  </main>;
}
