import React, { useRef, useState } from "react";
import {
  Input,
  TextField,
  Select,
  Dropdown,
  Button,
  LegacyButton,
  LegacyIconButton,
  IconButton,
  TextButton,
  Badge,
  Switch,
} from "stark-lib";
export function ConsolidatedFixture() {
  const input = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState<
    string | number | (string | number)[]
  >(0);
  const [checked, setChecked] = useState(false);
  const [submitted, setSubmitted] = useState("");
  const [nativeSubmits, setNativeSubmits] = useState(0);
  const [actions, setActions] = useState(0);
  return (
    <main className="flex flex-col gap-16px p-24px max-w-[600px]">
      <Input
        ref={input}
        label="Native field"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        fullWidth
      />
      <TextField
        label="Unified field"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button label="Focus native" onClick={() => input.current?.focus()} />
      <TextField label="Multiline field" type="textarea" defaultValue="Notes" />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(
            JSON.stringify(
              Array.from(new FormData(event.currentTarget).entries()),
            ),
          );
        }}
        className="flex flex-col gap-12px"
      >
        <Select
          label="Typed selection"
          name="typed"
          required
          options={[
            { value: 0, label: "Numeric zero" },
            { value: "0", label: "String zero" },
            { value: 1, label: "Numeric one" },
          ]}
          value={selected}
          onChange={setSelected}
        />
        <Select
          label="Typed multiple"
          name="many"
          options={[
            { value: 0, label: "Numeric zero" },
            { value: "0", label: "String zero" },
            { value: 1, label: "Numeric one" },
          ]}
          multiple
          defaultValue={[0]}
        />
        <Select
          label="Disabled typed"
          name="omitted"
          options={[{ value: 1, label: "One" }]}
          defaultValue={1}
          disabled
        />
        <Dropdown
          label="String selection"
          name="string"
          options={[
            { value: "one", label: "One" },
            { value: "two", label: "Two" },
          ]}
          defaultValue="one"
        />
        <Select
          placeholder="Pending selection"
          name="pending"
          options={[]}
          value={99}
          labelAction={{
            label: "Refresh options",
            action: () => setActions((count) => count + 1),
          }}
        />
        <Button type="submit" label="Submit unified" />
        <Button type="reset" label="Reset unified" />
      </form>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setNativeSubmits((count) => count + 1);
        }}
      >
        <Button label="Native implicit submit" />
        <LegacyButton label="Compatible non-submit" />
        <LegacyIconButton
          label="Compatible non-submit icon"
          icon={<span>×</span>}
        />
        <Button label="Presentation type action" type="outline" />
      </form>
      <output aria-label="Native submissions">{nativeSubmits}</output>
      <output aria-label="Typed callback">
        {typeof selected}:{String(selected)}
      </output>
      <output aria-label="Unified submission">{submitted}</output>
      <Button
        label="Outlined action"
        variant="outline"
        color="primary"
        onClick={() => setActions((count) => count + 1)}
      />
      <Button
        label="Text action"
        variant="text"
        intent="info"
        onClick={() => setActions((count) => count + 1)}
      />
      <IconButton
        label="Icon action"
        variant="outline"
        color="danger"
        icon={<span>×</span>}
        onClick={() => setActions((count) => count + 1)}
      />
      <TextButton
        label="Compact action"
        variant="compact"
        onClick={() => setActions((count) => count + 1)}
      />
      <output aria-label="Unified actions">{actions}</output>
      <Badge
        label="Published"
        variant="status"
        appearance="outline"
        color="success"
      />
      <Badge
        label="Dismissible"
        color="primary"
        variant="outline"
        dismissible
        onDismiss={() => setActions((count) => count + 1)}
      />
      <Switch
        label="Boolean switch"
        checked={checked}
        onCheckedChange={setChecked}
      />
      <output aria-label="Boolean callback">{String(checked)}</output>
    </main>
  );
}
