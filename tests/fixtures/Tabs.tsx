import React, { useState } from "react";
import { Button, TabGroup } from "stark-lib";
const tabs = [
  { label: "Overview", content: "Overview panel" },
  { label: "Unavailable", disabled: true, content: "Unavailable panel" },
  { label: "Team members", remixIcon: "group-line", content: "Team panel" },
  { label: "Activity", content: "Activity panel" },
];
function Group({
  label,
  type = "default",
}: {
  label: string;
  type?: "default" | "pill";
}) {
  const [active, setActive] = useState(0);
  return (
    <section style={{ display: "grid", gap: 12 }}>
      <TabGroup
        tabs={tabs}
        label={label}
        type={type}
        activeTab={active}
        handleTabClick={setActive}
      />
      <Button
        label={`Select activity in ${label}`}
        onClick={() => setActive(3)}
      />
    </section>
  );
}
export function TabsFixture() {
  return (
    <main style={{ display: "grid", gap: 40, padding: 24 }}>
      <Group label="Primary tabs" />
      <Group label="Secondary tabs" />
      <Group label="Pill tabs" type="pill" />
    </main>
  );
}
