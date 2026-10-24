import React from "react";
import {
  Badge,
  Dropdown,
  Combobox,
  Button,
  IconButton,
  TextButton,
  Input,
  MaskedInput,
  RemixIcon,
} from "stark-lib";

const svg = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export function AlignmentFixture() {
  return (
    <main style={{ padding: 24, display: "grid", gap: 24, width: 700 }}>
      <MaskedInput
        label="Contact number"
        mask="999 999 9999"
        defaultValue="9171234567"
        leadingItem={<span>+63</span>}
        attachedButton={
          <Button
            label="Contact"
            leadingIcon={<RemixIcon name="phone-line" />}
          />
        }
      />
      <Input
        label="Text adornments"
        defaultValue="123.00"
        leadingItem={<span>PHP</span>}
        trailingItem={<span>each</span>}
        fullWidth
      />
      <Input
        label="Icon adornments"
        defaultValue="hello@example.com"
        leadingItem={<RemixIcon name="mail-line" />}
        trailingItem={svg}
        fullWidth
      />
      {(["small", "default", "large"] as const).map((size) => (
        <div
          key={size}
          style={{ display: "flex", gap: 16, alignItems: "center" }}
        >
          <Button
            size={size}
            label="Contact"
            leadingIcon={<RemixIcon name="phone-line" />}
            trailingIcon={svg}
          />
          <TextButton
            size={size}
            label="Contact"
            leadingIcon={svg}
            trailingIcon={<RemixIcon name="arrow-right-line" />}
          />
          <IconButton
            size={size}
            label={`Call ${size}`}
            icon={<RemixIcon name="phone-line" />}
          />
        </div>
      ))}
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Badge
          label="Contact"
          leadingIcon={<RemixIcon name="phone-line" />}
          trailingIcon={svg}
        />
        <Badge
          label="Contact"
          variant="outline"
          leadingIcon={svg}
          trailingIcon={<RemixIcon name="arrow-right-line" />}
          dismissible
        />
        <Badge
          label="Contact"
          variant="status"
          trailingIcon={<RemixIcon name="check-line" />}
        />
      </div>
    </main>
  );
}

export function ControlSizingFixture() {
  return <main style={{ padding: 24, maxWidth: 900 }}>
    {[false, true].map(template => <section key={String(template)} data-testid={template ? "template-controls" : "standard-controls"} className={template ? "stark-page-section" : undefined} style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16, marginBottom: 24 }}>
      <Input label="Visible label" fullWidth />
      <Input label="Hidden label" hideLabel fullWidth />
      <Input label="Password" type="password" hideLabel fullWidth />
      <Input label="Attached action" hideLabel fullWidth attachedButton={{ label: "Go" }} />
      <Input label="Read only" readOnly hideLabel fullWidth />
      <Input label="Disabled" disabled hideLabel fullWidth />
      <Input label="Loading" loading hideLabel fullWidth />
      <Input label="Invalid" error hideLabel fullWidth />
      <MaskedInput label="Masked" mask="999 999" hideLabel fullWidth />
      <Dropdown label="Choose a value" hideLabel options={[{label: "One", value: "one"}]} fullWidth />
      <Combobox label="Search a value" options={[{label: "One", value: "one"}]} />
      <div style={{ alignSelf: "end", display: "flex", gap: 8 }}><Button label="Apply" /><IconButton aria-label="Add" icon={svg} /></div>
    </section>)}
  </main>;
}
