import React, { createRef, useState } from "react";
import { Button, IconButton, TextButton, Input, Text, Stack, type ButtonProps } from "stark-lib";
import { FormControlsVisual, FormControlsBehavior, RequiredControls } from "./FormControls";

const intents = ["default", "inverse", "primary", "info", "success", "warning", "danger"] as const;
const sizes = ["small", "default", "large"] as const;
const icon = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>;
const row: React.CSSProperties = { display: "flex", gap: 20, alignItems: "center", marginBottom: 16 };

function ButtonExample({ kind, label, leadingIcon, trailingIcon, fullWidth, ...props }: ButtonProps & { kind: number }) {
  if (kind === 2) return <IconButton {...props} icon={icon} />;
  const Component = kind === 0 ? Button : TextButton;
  return <Component {...props} label={label} leadingIcon={leadingIcon} trailingIcon={trailingIcon} fullWidth={fullWidth} />;
}

export function Regression({ component }: { component: string }) {
  return <main style={{ padding: 24, width: 1040, boxSizing: "border-box" }}>
    {component === "buttons" && [0, 1, 2].map(index =>
      <section key={index}>
        {sizes.map(size => <div key={size} style={row}>
          {intents.map(intent => <ButtonExample kind={index} key={intent} label="Button" aria-label={`${index}-${intent}-${size}`} intent={intent} size={size} />)}
        </div>)}
        <div style={row}>{intents.map(intent => <ButtonExample kind={index} key={intent} label="Disabled" aria-label={`Disabled ${intent}`} intent={intent} disabled />)}</div>
        <div style={row}>
          <ButtonExample kind={index} label="Icons" aria-label="Icons" leadingIcon={icon} trailingIcon={icon} />
          <ButtonExample kind={index} label="Attached" aria-label="Attached" attached />
          <ButtonExample kind={index} label="Full width" aria-label="Full width" fullWidth />
        </div>
      </section>)}
    {component === "inputs" && <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
      <Input id="plain" label="Plain" defaultValue="Existing value" />
      <Input id="password" label="Password" type="password" defaultValue="secret" />
      <Input id="help" label="Help" helpText="Additional information" />
      <Input id="error" label="Error" error helpText="Please check this value" />
      <Input id="disabled" label="Disabled" disabled defaultValue="Disabled value" />
      <Input id="readonly" label="Read only" readOnly defaultValue="Read only value" />
      <Input id="email" label="Email" type="email" optional leadingItem={icon} trailingItem={icon} />
      <Input id="action" label="Action" type="text" trailingButton={{ label: "Search" }} />
      <Input id="full" label="Full width" fullWidth />
      <Input id="hidden" label="Hidden" hideLabel aria-label="Hidden" />
    </div>}
    {component === "text" && (["caption", "body", "body-large", "lead", "section", "title"] as const).map(size =>
      <div key={size} style={row}>{(["normal", "medium", "semibold", "bold"] as const).map(weight =>
        <Text key={weight} size={size} weight={weight}>{`${size} ${weight}`}</Text>)}</div>)}
    {component === "text" && (["monoline", "tight", "relaxed", "loose"] as const).map(leading =>
      <div key={leading} style={{ width: 280, marginBottom: 16 }}><Text leading={leading}>A longer text example that wraps to verify line height and typography.</Text></div>)}
    {component === "stack" && [false, true].map(horizontal =>
      <Stack key={String(horizontal)} horizontal={horizontal} gap="16px" align="center" className="border p-16px" style={{ marginBottom: 24 }}>
        {[1, 2, 3].map(n => <div key={n} style={{ padding: 12, background: "#eee" }}>Item {n}</div>)}
      </Stack>)}
    {component === "overflow" && <div style={{ width: 320 }}>
      <Input id="overflow" label="Overflowing text" fullWidth defaultValue="This long input value should fade at the right edge until the field is hovered or focused for editing." />
    </div>}
    {component === "behavior" && <Behavior />}
    {component === "input-loading" && <InputLoading />}
    {component === "form-controls" && <FormControlsVisual />}
    {component === "form-behavior" && <FormControlsBehavior />}
    {component === "required-controls" && <RequiredControls />}
  </main>;
}

function InputLoading() {
  const [loading, setLoading] = useState(false);
  return <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16 }}>
    <Button label="Toggle loading" onClick={() => setLoading(value => !value)} />
    <Input label="Plain" loading={loading} defaultValue="Existing value" />
    <Input label="With icons" loading={loading} leadingItem={icon} trailingItem={icon} defaultValue="Existing value" />
    <Input label="With action" loading={loading} trailingButton={{ label: "Search", type: "button" }} defaultValue="Existing value" />
    <Input label="Password" type="password" loading={loading} defaultValue="secret" />
    <div style={{ width: 320 }}><Input label="Full width" loading={loading} fullWidth defaultValue="Existing value" /></div>
  </div>;
}

function Behavior() {
  const ref = createRef<HTMLInputElement>();
  return <form onSubmit={event => { event.preventDefault(); document.body.dataset.submitted = "true"; }}>
    <Input ref={ref} className="text-caption" label="Generated label" helpText="Input help" error optional type="text" trailingItem={icon} trailingButton={{ label: "Action", type: "button" }} />
    <Input label="Password" type="password" defaultValue="secret" />
    <Input label="Disabled password" type="password" disabled defaultValue="hidden" />
    <Input label="Busy input" loading defaultValue="Working" />
    <Button label="Busy button" loading />
    <Button label="Disabled button" disabled />
    <Button label="Focus input" type="button" onClick={() => ref.current?.focus()} />
    <Button label="Submit" type="submit" />
    <Stack asChild gap="8px"><a href="#target">Slotted link</a></Stack>
  </form>;
}
