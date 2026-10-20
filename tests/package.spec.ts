import { expect, test } from "@playwright/test";
import { createRequire } from "node:module";
import { readFile } from "node:fs/promises";

// Exercise both public module formats; no React copy may be bundled.
test("the distributable exposes matching ESM and CommonJS APIs", async () => {
  const esm = await import("stark-lib");
  const cjs = createRequire(import.meta.url)("stark-lib");
  const components = ["Button", "IconButton", "TextButton", "Input", "Checkbox", "Switch", "RadioGroup", "Textarea", "Text", "Stack"].sort();
  expect(Object.keys(esm).sort()).toEqual(components);
  expect(Object.keys(cjs).sort()).toEqual(components);
  const { renderToString } = await import("react-dom/server");
  const { createElement } = await import("react");
  for (const library of [esm, cjs]) {
    expect(renderToString(createElement(library.Button, { label: "Reusable" }))).toContain("Reusable");
    expect(renderToString(createElement(library.Input, { label: "Email" }))).toContain('type="text"');
    expect(renderToString(createElement(library.Checkbox, { label: "News", defaultChecked: true }))).toContain('type="checkbox"');
    expect(renderToString(createElement(library.Switch, { label: "Push" }))).toContain('role="switch"');
    expect(renderToString(createElement(library.RadioGroup, { label: "Frequency", options: [{ value: "weekly", label: "Weekly" }] }))).toContain("<fieldset");
    expect(renderToString(createElement(library.Textarea, { label: "Bio", defaultValue: "Hello" }))).toContain('rows="4"');
  }
  const source = await readFile(new URL("../package/stark/dist/index.js", import.meta.url), "utf8");
  expect(source.startsWith('"use client";')).toBe(true);
  expect(source).toContain('from "react"');
});
