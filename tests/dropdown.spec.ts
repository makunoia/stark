import { expect, test, type Page } from "@playwright/test";
const openSingle = (page: Page, name: string) => page.getByRole("combobox", { name, exact: true });
const openMulti = (page: Page, name: string) => page.getByRole("button", { name, exact: true });

test.beforeEach(async ({ page }) => { await page.goto("/?component=dropdown"); });

test("single-select supports keyboard navigation, typeahead, clearing and focus restoration", async ({ page }) => {
  const field = openSingle(page, "Single category");
  await field.focus(); await page.keyboard.press("ArrowDown");
  await expect(page.getByRole("listbox")).toBeVisible();
  await page.keyboard.press("h"); await expect(page.getByRole("option", { name: "Homeware", exact: true })).toBeFocused(); await page.keyboard.press("Enter");
  await expect(field).toContainText("Homeware"); await expect(field).toBeFocused();
  await field.click(); await expect(page.getByRole("option", { name: "Unavailable", exact: true })).toHaveAttribute("aria-disabled", "true");
  await page.getByRole("option", { name: "Select an option", exact: true }).click();
  await expect(field).toContainText("Select an option");
  await field.click(); await page.keyboard.press("End"); await expect(page.getByRole("option", { name: "Homeware", exact: true })).toBeFocused(); await page.keyboard.press("Enter");
  await expect(field).toContainText("Homeware");
});

test("multi-select toggles independently, stays open, supports clearing and Escape", async ({ page }) => {
  const field = openMulti(page, "Multiple categories");
  await field.click();
  await expect(page.getByRole("menuitemcheckbox", { name: "Accessories", exact: true })).toHaveAttribute("aria-checked", "true");
  await page.getByRole("menuitemcheckbox", { name: "Lighting", exact: true }).click();
  await expect(page.getByRole("menu")).toBeVisible();
  await expect(field).toContainText("Accessories, Lighting");
  await page.getByRole("menuitemcheckbox", { name: "Accessories", exact: true }).click();
  await expect(field).toContainText("Lighting");
  await page.getByRole("menuitem", { name: "Clear selection", exact: true }).click();
  await expect(field).toContainText("Select an option"); await expect(field).toBeFocused();
  await field.focus(); await page.keyboard.press("Enter");
  await page.keyboard.press("h"); await expect(page.getByRole("menuitemcheckbox", { name: "Homeware", exact: true })).toBeFocused(); await page.keyboard.press("Space");
  await expect(page.getByRole("menuitemcheckbox", { name: "Homeware", exact: true })).toHaveAttribute("aria-checked", "true");
  await page.keyboard.press("Escape"); await expect(field).toBeFocused();
});

test("controlled updates, disabled states, descriptions, ref forwarding and empty options", async ({ page }) => {
  await page.getByRole("button", { name: "Set controlled values" }).click();
  await expect(openSingle(page, "Controlled category")).toContainText("Accessories");
  await expect(openMulti(page, "Controlled categories")).toContainText("Accessories, Lighting");
  await expect(openSingle(page, "Disabled category")).toBeDisabled(); await expect(openMulti(page, "Disabled categories")).toBeDisabled();
  await expect(openSingle(page, "Invalid category")).toHaveAttribute("aria-invalid", "true");
  await page.getByRole("button", { name: "Focus dropdown" }).click(); await expect(openSingle(page, "Single category")).toBeFocused();
  const ids = (await openSingle(page, "Single category").getAttribute("aria-describedby"))!.split(" ");
  for (const id of ids) await expect(page.locator(`[id="${id}"]`)).toBeVisible();
  await openSingle(page, "Empty category").click(); await expect(page.getByText("No options available", { exact: true })).toBeVisible();
});

test("native form validation, repeated multi values, disabled omission and reset", async ({ page }) => {
  await page.getByRole("button", { name: "Submit selections" }).click();
  await expect(page.getByLabel("Submitted values")).toHaveText("");
  await expect(openSingle(page, "Required category")).toBeFocused();
  await openSingle(page, "Required category").click(); await page.getByRole("option", { name: "Lighting", exact: true }).click();
  await openMulti(page, "Required categories").click(); await page.getByRole("menuitemcheckbox", { name: "Accessories", exact: true }).click(); await page.getByRole("menuitemcheckbox", { name: "Homeware", exact: true }).click(); await page.keyboard.press("Escape");
  await openSingle(page, "Single category").click(); await page.getByRole("option", { name: "Homeware", exact: true }).click();
  await page.getByRole("button", { name: "Submit selections" }).click();
  const submitted = JSON.parse(await page.getByLabel("Submitted values").innerText()) as [string, string][];
  expect(submitted).toContainEqual(["single", "homeware"]); expect(submitted.filter(([key]) => key === "required-multi")).toEqual([["required-multi", "accessories"], ["required-multi", "homeware"]]);
  expect(submitted.some(([key]) => key.startsWith("disabled"))).toBe(false);
  await page.getByRole("button", { name: "Reset selections" }).click();
  await expect(openSingle(page, "Single category")).toContainText("Accessories"); await expect(openMulti(page, "Multiple categories")).toContainText("Accessories");
  await expect(openSingle(page, "Controlled category")).toContainText("Lighting"); await expect(openMulti(page, "Controlled categories")).toContainText("Homeware");
  await expect(openSingle(page, "Required category")).toContainText("Select an option"); await expect(openMulti(page, "Required categories")).toContainText("Select an option");
});

test("Stark link buttons preserve anchors and suppress disabled link actions", async ({ page }) => {
  const link = page.getByRole("link", { name: "Button link", exact: true });
  await expect(link).toHaveClass(/stark-button/); await expect(link).toHaveAttribute("href", "#link-target"); await expect(link.locator("button")).toHaveCount(0);
  const disabled = page.getByRole("link", { name: "Disabled link", exact: true });
  await expect(disabled).toHaveAttribute("aria-disabled", "true"); await expect(disabled).toHaveAttribute("tabindex", "-1");
  await disabled.dispatchEvent("click"); await expect(page.getByLabel("Disabled clicks")).toHaveText("0"); await expect(page).not.toHaveURL(/disabled-target/);
  await page.getByRole("link", { name: "Text button link", exact: true }).click(); await expect(page).toHaveURL(/#link-target$/);
});

for (const reducedMotion of ["no-preference", "reduce"] as const) {
  test(`touch selection and immediate feedback (${reducedMotion})`, async ({ browser }) => {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true, reducedMotion });
    const page = await context.newPage(); await page.goto("/?component=dropdown");
    await openSingle(page, "Single category").tap(); await page.getByRole("option", { name: "Lighting", exact: true }).tap(); await expect(openSingle(page, "Single category")).toContainText("Lighting");
    await openMulti(page, "Multiple categories").tap(); await page.getByRole("menuitemcheckbox", { name: "Homeware", exact: true }).tap();
    await expect(page.getByRole("menuitemcheckbox", { name: "Homeware", exact: true })).toHaveAttribute("aria-checked", "true");
    await expect(page.getByRole("menu")).toHaveCSS("animation-name", "none");
    await expect(page.getByRole("menuitemcheckbox", { name: "Homeware", exact: true })).toHaveCSS("transition-duration", "0s");
    await expect(page).toHaveScreenshot(`dropdown-multi-touch-${reducedMotion}.png`);
    await context.close();
  });
}

test("dropdown visual states and single-select popup", async ({ page }) => {
  await expect(page).toHaveScreenshot("dropdown-states.png", { fullPage: true });
  await openSingle(page, "Single category").click(); await expect(page.getByRole("listbox")).toHaveScreenshot("dropdown-single-options.png");
});

for (const reducedMotion of ["no-preference", "reduce"] as const) {
  test(`Dropdown presses keep their size and scrolling focus rings stay visible (${reducedMotion})`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion });
    for (const multiple of [false, true]) {
      await page.goto("/?component=dropdown&overflow");
      const trigger = page.locator(".stark-dropdown-trigger").nth(multiple ? 1 : 0);
      const before = (await trigger.boundingBox())!;
      await trigger.hover(); await page.mouse.down();
      await expect(trigger).toHaveCSS("transform", "none");
      await expect(trigger).not.toHaveCSS("transition-property", /transform/);
      expect((await trigger.boundingBox())!.width).toBe(before.width);
      await page.mouse.up(); await page.keyboard.press("Escape");
      await expect(trigger).toHaveCSS("transform", "none");
      await trigger.focus(); await page.keyboard.press("Enter");
      const popup = page.getByRole(multiple ? "menu" : "listbox");
      await expect(popup).toBeVisible();
      await page.keyboard.press("Home");
      const first = multiple ? page.getByRole("menuitemcheckbox", { name: "Option 01", exact: true }) : page.getByRole("option", { name: "Select an option", exact: true });
      await expect(first).toBeFocused(); await expect(first).toBeInViewport();
      await expect(first).toHaveCSS("box-shadow", /inset/);
      await expect(popup).toHaveScreenshot(`dropdown-${multiple ? "multi" : "single"}-focus-top-${reducedMotion}.png`);
      await page.keyboard.press("End");
      const last = multiple ? page.getByRole("menuitem", { name: "Done", exact: true }) : page.getByRole("option", { name: "Option 40", exact: true });
      await expect(last).toBeFocused(); await expect(last).toBeInViewport();
      await expect(last).toHaveCSS("box-shadow", /inset/);
      await expect(popup).toHaveScreenshot(`dropdown-${multiple ? "multi" : "single"}-focus-bottom-${reducedMotion}.png`);
      await page.keyboard.press("Escape"); await expect(trigger).toBeFocused();
    }
  });
}
