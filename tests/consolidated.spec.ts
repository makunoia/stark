import { expect, test } from "@playwright/test";
test("badge compatibility name references the canonical component", async () => {
  const library = await import("stark-lib");
  expect(library.LegacyBadge).toBe(library.Badge);
});
for (const reducedMotion of ["no-preference", "reduce"] as const) {
  test(`consolidated fields, values, callbacks and native forms (${reducedMotion})`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.emulateMedia({ reducedMotion });
    await page.goto("/?component=consolidated");
    await page
      .getByLabel("Unified field", { exact: true })
      .fill("Shared value");
    await expect(page.getByLabel("Native field")).toHaveValue("Shared value");
    const style = (label: string) =>
      page
        .getByLabel(label, { exact: true })
        .locator("../..")
        .evaluate((element) => {
          const css = getComputedStyle(element);
          return [
            css.borderRadius,
            css.backgroundColor,
            css.borderColor,
            css.minHeight,
          ];
        });
    expect(await style("Unified field")).toEqual(await style("Native field"));
    await page.getByRole("button", { name: "Focus native" }).click();
    await expect(page.getByLabel("Native field")).toBeFocused();
    await page.getByLabel("Multiline field").fill("Updated notes");
    await expect(page.getByLabel("Multiline field")).toHaveValue(
      "Updated notes",
    );
    await page.getByRole("button", { name: "Submit unified" }).click();
    expect(
      JSON.parse(await page.getByLabel("Unified submission").innerText()),
    ).toEqual([
      ["typed", "0"],
      ["many", "0"],
      ["string", "one"],
      ["pending", "99"],
    ]);
    await page
      .getByRole("combobox", { name: "Typed selection", exact: true })
      .click();
    await page
      .getByRole("option", { name: "String zero", exact: true })
      .click();
    await expect(page.getByLabel("Typed callback")).toHaveText("string:0");
    await page
      .getByRole("combobox", { name: "Typed selection", exact: true })
      .click();
    await page
      .getByRole("option", { name: "Numeric one", exact: true })
      .click();
    await expect(page.getByLabel("Typed callback")).toHaveText("number:1");
    await page
      .getByRole("button", { name: "Typed multiple", exact: true })
      .click();
    await page
      .getByRole("menuitemcheckbox", { name: "String zero", exact: true })
      .click();
    await page.keyboard.press("Escape");
    await page.getByRole("button", { name: "Submit unified" }).click();
    expect(
      JSON.parse(await page.getByLabel("Unified submission").innerText()),
    ).toEqual([
      ["typed", "1"],
      ["many", "0"],
      ["many", "0"],
      ["string", "one"],
      ["pending", "99"],
    ]);
    await page.getByRole("button", { name: "Reset unified" }).click();
    await expect(
      page.getByRole("button", { name: "Typed multiple", exact: true }),
    ).toContainText("Numeric zero");
    await expect(
      page.getByRole("button", { name: "Dismiss String zero" }),
    ).toHaveCount(0);
    for (const name of [
      "Compatible non-submit",
      "Compatible non-submit icon",
      "Presentation type action",
    ])
      await page.getByRole("button", { name, exact: true }).click();
    await expect(page.getByLabel("Native submissions")).toHaveText("0");
    await page
      .getByRole("button", { name: "Native implicit submit", exact: true })
      .click();
    await expect(page.getByLabel("Native submissions")).toHaveText("1");
    for (const name of [
      "Outlined action",
      "Text action",
      "Icon action",
      "Compact action",
    ])
      await page.getByRole("button", { name, exact: true }).click();
    await expect(page.getByLabel("Unified actions")).toHaveText("4");
    await page.getByRole("button", { name: "Dismiss Dismissible" }).click();
    await expect(page.getByLabel("Unified actions")).toHaveText("5");
    const toggle = page.getByRole("switch", { name: "Boolean switch" });
    await toggle.focus();
    await page.keyboard.press("Space");
    await expect(toggle).toBeChecked();
    await expect(page.getByLabel("Boolean callback")).toHaveText("true");
    await expect(
      page.getByRole("combobox", { name: "Pending selection" }),
    ).toBeVisible();
    await page.getByRole("button", { name: "Refresh options" }).click();
    await expect(page.getByLabel("Unified actions")).toHaveText("6");
    expect(errors).toEqual([]);
  });
}
