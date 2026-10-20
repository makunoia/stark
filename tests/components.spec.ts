import { expect, test } from "@playwright/test";

for (const component of ["buttons", "inputs", "text", "stack"]) {
  test(`${component} preserves its appearance`, async ({ page }) => {
    await page.goto(`/?component=${component}`);
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator("main")).toHaveScreenshot(`${component}.png`);
  });
}

test("focus and hover styles retain their appearance", async ({ page }) => {
  await page.goto("/?component=inputs");
  await page.locator("#plain").focus();
  await expect(page.locator("main")).toHaveScreenshot("input-focus.png");
  await page.getByRole("button", { name: "reveal password" }).click();
  await page.mouse.click(5, 5);
  await expect(page.locator("main")).toHaveScreenshot("password-revealed.png");
  await page.goto("/?component=buttons");
  await page.getByRole("button", { name: "0-primary-default", exact: true }).hover();
  await expect(page.locator("main")).toHaveScreenshot("button-hover.png");
  await page.getByRole("button", { name: "0-primary-default", exact: true }).focus();
  await expect(page.locator("main")).toHaveScreenshot("button-focus.png");
  await page.mouse.down();
  await expect(page.locator("main")).toHaveScreenshot("button-active.png");
  await page.mouse.up();
});

test("inputs retain editing, password reveal, loading and form behavior", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/?component=behavior");
  const input = page.getByLabel("Generated label");
  await input.fill("A reusable component");
  await expect(input).toHaveValue("A reusable component");
  await expect(input).toHaveClass(/text-caption/);
  await expect(input).toHaveAttribute("aria-invalid", "true");
  const helpId = await input.getAttribute("aria-describedby");
  await expect(page.locator(`[id="${helpId}"]`)).toHaveText("Input help");
  for (const attribute of ["optional", "trailingItem", "trailingButton"]) {
    expect(await input.getAttribute(attribute)).toBeNull();
  }
  await page.getByRole("button", { name: "Focus input", exact: true }).click();
  await expect(input).toBeFocused();
  const password = page.getByLabel("Password", { exact: true });
  await expect(password).toHaveAttribute("type", "password");
  await page.getByRole("button", { name: "reveal password" }).first().click();
  await expect(password).toHaveAttribute("type", "text");
  await expect(password).toHaveValue("secret");
  expect(await page.locator("body").getAttribute("data-submitted")).toBeNull();
  await page.getByRole("button", { name: "reveal password" }).first().click();
  await expect(password).toHaveAttribute("type", "password");
  await expect(page.getByRole("button", { name: "reveal password" }).last()).toBeDisabled();
  await expect(page.getByLabel("Busy input")).toHaveAttribute("readonly", "");
  await expect(page.getByRole("button", { name: "Busy button" })).toBeDisabled();
  await expect(page.getByRole("button", { name: "Busy button" }).locator("svg")).toBeVisible();
  await expect(page.getByRole("button", { name: "Disabled button" })).toBeDisabled();
  await expect(page.getByRole("link", { name: "Slotted link" })).toHaveClass(/gap-8px/);
  await page.getByRole("button", { name: "Submit", exact: true }).click();
  await expect(page.locator("body")).toHaveAttribute("data-submitted", "true");
  expect(errors).toEqual([]);
});

for (const reducedMotion of ["no-preference", "reduce"] as const) {
  test(`input overflow fades without an inner focus outline (${reducedMotion})`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion });
    await page.goto("/?component=overflow");
    const input = page.getByLabel("Overflowing text");
    const fade = input.locator("..").locator("div").first();
    const container = input.locator("../..");

    expect(await input.evaluate(element => element.scrollWidth > element.clientWidth)).toBe(true);
    await expect(fade).toHaveCSS("background-image", /linear-gradient/);
    await expect(fade).toHaveCSS("pointer-events", "none");
    await expect(fade).toHaveCSS("opacity", "1");

    await input.hover();
    await expect(fade).toHaveCSS("opacity", "0");
    await page.mouse.move(0, 0);
    await expect(fade).toHaveCSS("opacity", "1");

    // Keyboard users retain the container's focus indicator, without a second
    // browser outline drawn inside the editable text area.
    await page.keyboard.press("Tab");
    await expect(input).toBeFocused();
    await expect(input).toHaveCSS("outline-style", "none");
    await expect(container).toHaveCSS("outline-color", "rgb(62, 140, 255)");
    await expect(fade).toHaveCSS("opacity", "0");

    await input.blur();
    await expect(fade).toHaveCSS("opacity", "1");
    await input.click();
    await expect(input).toHaveCSS("outline-style", "none");
  });
}
