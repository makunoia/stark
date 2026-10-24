import { expect, test } from "@playwright/test";
import { build } from "esbuild";
import { gzipSync } from "node:zlib";
import { readFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";

test("Text preserves semantics, inherited styles, composed refs and events", async ({ page }) => {
  await page.goto("/?component=typography");
  await expect(page.getByRole("heading", { level: 5 })).toHaveText("Fifth-level heading");
  await expect(page.getByRole("heading", { level: 6 })).toHaveText("Sixth-level heading");
  await page.getByText("Full name", { exact: true }).click();
  await expect(page.getByRole("textbox", { name: "Full name" })).toBeFocused();
  const inherited = page.getByTestId("inherited");
  for (const property of ["color", "font-size", "font-weight", "line-height"] as const) {
    const value = await page.getByTestId("parent").evaluate((element, property) => getComputedStyle(element).getPropertyValue(property), property);
    await expect(inherited).toHaveCSS(property, value);
  }
  expect(await page.getByTestId("explicit").evaluate(element => getComputedStyle(element).color)).not.toBe(await inherited.evaluate(element => getComputedStyle(element).color));
  const link = page.getByRole("link", { name: "Composed link" });
  await expect(link).toHaveAccessibleDescription("Child description Parent description");
  await expect(link).toHaveCSS("letter-spacing", "3px");
  await expect(link).toHaveCSS("text-decoration-line", "underline");
  await expect(page.getByLabel("Ref status")).toHaveText("same anchor");
  await expect(page.getByLabel("Cleanup status")).toHaveText("1/0/attached");
  await link.click();
  await expect(page.getByLabel("Event order")).toHaveText("child,parent");
  await page.getByRole("button", { name: "Toggle link" }).click();
  await expect(page.getByLabel("Ref status")).toHaveText("cleared");
  await expect(page.getByLabel("Cleanup status")).toHaveText("1/1/cleared");
});

test("Text entries stay isolated from heavy components", async () => {
  for (const entry of ["stark-lib", "stark-lib/text"]) {
    const result = await build({
      stdin: { contents: `export { Text } from "${entry}";`, resolveDir: process.cwd(), sourcefile: "text-probe.ts" },
      bundle: true, write: false, minify: true, format: "esm", platform: "browser",
      external: ["react", "react-dom", "react/jsx-runtime"], metafile: true, logLevel: "silent",
    });
    const bytes = result.outputFiles[0].contents;
    expect(bytes.byteLength, entry).toBeLessThan(50_000);
    expect(gzipSync(bytes).byteLength, entry).toBeLessThan(16_000);
    const retained = Object.values(result.metafile!.outputs).flatMap(output => Object.entries(output.inputs)).filter(([, data]) => data.bytesInOutput > 0).map(([file]) => file);
    expect(retained.filter(file => /node_modules\/(?:lottie|motion|framer-motion|quill|imask)/.test(file))).toEqual([]);
  }
  const { Text } = await import("stark-lib/text");
  expect((await import("stark-lib")).Text).toBe(Text);
  const require = createRequire(import.meta.url);
  expect(require("stark-lib").Text).toBe(require("stark-lib/text").Text);
  const css = await readFile(new URL("../package/stark/dist/text.css", import.meta.url), "utf8");
  expect(css).not.toMatch(/quill|remixicon/);
});

test("the Text subpath executes under React server conditions without client hooks", () => {
  const result = execFileSync(process.execPath, ["--conditions=react-server", "--input-type=module", "-e", `
    import React from "react";
    import { Text, textStyles } from "stark-lib/text";
    const heading = Text.render({ as: "h6", children: "Server heading" }, null);
    const link = Text.render({ asChild: true, inherit: true, children: React.createElement("a", { href: "/", className: "child" }, "Server link") }, null);
    if (heading.type !== "h6" || link.type !== "a" || link.props.href !== "/" || !textStyles().includes("text-body")) process.exit(1);
    process.stdout.write("server-compatible");
  `], { cwd: process.cwd(), encoding: "utf8" });
  expect(result).toBe("server-compatible");
});

test("standalone typography stylesheet supplies the scale without editor or icon assets", async ({ page }) => {
  const requests: string[] = [];
  page.on("request", request => requests.push(request.url()));
  await page.goto("/text-only.html");
  await expect(page.getByTestId("explicit")).toHaveCSS("font-size", "14px");
  await expect(page.getByTestId("inherited")).toHaveCSS("font-size", "12px");
  await expect(page.getByRole("heading", { level: 5 })).toHaveCSS("font-size", "16px");
  expect(requests.filter(url => /quill|remixicon|lottie/.test(url))).toEqual([]);
});
