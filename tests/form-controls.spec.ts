import { expect, test } from "@playwright/test";

test("form controls match the Stark visual language", async ({ page }) => {
  await page.goto("/?component=form-controls");
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator("main")).toHaveScreenshot("form-controls.png");
  await page.locator("#textarea-focus").focus();
  await expect(page.locator("main")).toHaveScreenshot("textarea-focus.png");
  await page.locator("#checkbox-focus").focus();
  await expect(page.locator("main")).toHaveScreenshot("checkbox-focus.png");
  await page.locator("#switch-focus").focus();
  await expect(page.locator("main")).toHaveScreenshot("switch-focus.png");
  await page.locator("#radio-focus-0").focus();
  await expect(page.locator("main")).toHaveScreenshot("radio-focus.png");
});

test("labels activate once and uncontrolled controls submit and reset native values", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/?component=form-behavior");
  await page.getByText("News", { exact: true }).click();
  await page.getByText("Push", { exact: true }).click();
  await page.getByText("Weekly", { exact: true }).click();
  await page.getByLabel("Bio", { exact: true }).fill("Updated\nBio");
  await expect(page.getByTestId("counts")).toHaveText(JSON.stringify({ checkbox: 1, switch: 1, radio: 1, textarea: 1 }));
  await page.getByRole("button", { name: "Submit native" }).click();
  await expect(page.getByTestId("submission")).toHaveText(JSON.stringify({ news: "yes", frequency: "weekly", bio: "Updated\nBio" }));
  await page.getByRole("button", { name: "Reset native" }).click();
  await expect(page.getByRole("checkbox", { name: "News", exact: true })).not.toBeChecked();
  await expect(page.getByRole("switch", { name: "Push", exact: true })).toBeChecked();
  await expect(page.getByRole("radio", { name: "Daily", exact: true })).toBeChecked();
  await expect(page.getByLabel("Bio", { exact: true })).toHaveValue("Original");
  await expect(page.getByTestId("counts")).toHaveText(JSON.stringify({ checkbox: 1, switch: 1, radio: 1, textarea: 1 }));
  await page.getByRole("button", { name: "Submit native" }).click();
  await expect(page.getByTestId("submission")).toHaveText(JSON.stringify({ push: "enabled", frequency: "daily", bio: "Original" }));
  expect(errors).toEqual([]);
});

test("controlled values update and can be reset by the owner", async ({ page }) => {
  await page.goto("/?component=form-behavior");
  await page.getByText("Controlled checkbox", { exact: true }).click();
  await page.getByText("Controlled switch", { exact: true }).click();
  await page.getByRole("radio", { name: "Two", exact: true }).check();
  await page.getByLabel("Controlled textarea").fill("Edited");
  await expect(page.getByRole("checkbox", { name: "Controlled checkbox", exact: true })).toBeChecked();
  await expect(page.getByRole("switch", { name: "Controlled switch", exact: true })).toBeChecked();
  await expect(page.getByRole("radio", { name: "Two", exact: true })).toBeChecked();
  await expect(page.getByLabel("Controlled textarea")).toHaveValue("Edited");
  await page.getByRole("button", { name: "Reset controlled" }).click();
  await expect(page.getByRole("checkbox", { name: "Controlled checkbox", exact: true })).not.toBeChecked();
  await expect(page.getByRole("switch", { name: "Controlled switch", exact: true })).not.toBeChecked();
  await expect(page.getByRole("radio", { name: "One", exact: true })).toBeChecked();
  await expect(page.getByLabel("Controlled textarea")).toHaveValue("Initial");
});

test("mixed state does not force checked and native activation clears it", async ({ page }) => {
  await page.goto("/?component=form-behavior");
  const mixed = page.getByRole("checkbox", { name: "Mixed checkbox", exact: true });
  await expect(mixed).toBeChecked({ indeterminate: true });
  expect(await mixed.evaluate((input: HTMLInputElement) => input.checked)).toBe(false);
  const mixedChecked = page.getByRole("checkbox", { name: "Mixed checked checkbox", exact: true });
  await expect(mixedChecked).toBeChecked({ indeterminate: true });
  expect(await mixedChecked.evaluate((input: HTMLInputElement) => input.checked)).toBe(true);
  await mixed.focus();
  await page.keyboard.press("Space");
  await expect(mixed).toBeChecked();
  expect(await mixed.evaluate((input: HTMLInputElement) => input.indeterminate)).toBe(false);
});

test("native keyboard navigation skips disabled radios and generated names isolate groups", async ({ page }) => {
  await page.goto("/?component=form-behavior");
  const news = page.getByRole("checkbox", { name: "News", exact: true });
  await news.focus();
  await page.keyboard.press("Space");
  await expect(news).toBeChecked();
  await page.keyboard.press("Tab");
  await expect(page.getByRole("switch", { name: "Push", exact: true })).toBeFocused();
  await page.keyboard.press("Space");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("radio", { name: "Daily", exact: true })).toBeFocused();
  await page.keyboard.press("ArrowDown");
  await expect(page.getByRole("radio", { name: "Weekly", exact: true })).toBeFocused();
  await expect(page.getByRole("radio", { name: "Weekly", exact: true })).toBeChecked();
  await page.keyboard.press("ArrowDown");
  await expect(page.getByRole("radio", { name: "Daily", exact: true })).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.getByLabel("Bio", { exact: true })).toBeFocused();
  await page.getByRole("radio", { name: "A two", exact: true }).check();
  await expect(page.getByRole("radio", { name: "B one", exact: true })).toBeChecked();
});

test("descriptions, required validation, disabled fields and forwarded refs work", async ({ page }) => {
  await page.goto("/?component=form-behavior");
  for (const [label, help] of [["News", "Checkbox help"], ["Push", "Switch help"], ["Bio", "Textarea help"]]) {
    const input = page.getByLabel(label, { exact: true });
    const ids = (await input.getAttribute("aria-describedby"))!.split(" ");
    expect(ids).toHaveLength(2);
    await expect(page.locator(`[id="${ids[0]}"]`)).toHaveText("External guidance");
    await expect(page.locator(`[id="${ids[1]}"]`)).toHaveText(help);
  }
  const radioDescription = (await page.getByRole("radio", { name: "Daily", exact: true }).getAttribute("aria-describedby"))!.split(" ");
  expect(radioDescription).toHaveLength(3);
  await expect(page.getByLabel("News", { exact: true })).toHaveAttribute("aria-invalid", "true");
  for (const label of ["Inherited disabled checkbox", "Inherited disabled switch", "Inherited radio", "Inherited disabled textarea", "Never"]) {
    await expect(page.getByLabel(label, { exact: true })).toBeDisabled();
  }
  await expect(page.getByText("Inherited disabled checkbox", { exact: true })).toHaveCSS("color", "rgb(214, 216, 222)");
  await expect(page.getByText("Checkbox help", { exact: true })).toHaveCSS("color", "rgb(209, 79, 71)");
  for (const [button, label, tag] of [["Focus checkbox", "News", "INPUT"], ["Focus switch", "Push", "INPUT"], ["Focus group", "Daily", "FIELDSET"], ["Focus textarea", "Bio", "TEXTAREA"]]) {
    await page.getByRole("button", { name: button, exact: true }).click();
    await expect(page.getByLabel(label, { exact: true })).toBeFocused();
    await expect(page.getByTestId("ref-tag")).toHaveText(tag);
  }
  await expect(page.getByLabel("Hidden bio")).toHaveAccessibleName("Hidden bio");
  await expect(page.getByLabel("Read only", { exact: true })).toHaveAttribute("readonly", "");
  expect(await page.getByTestId("narrow").locator("textarea").evaluate(element => element.getBoundingClientRect().width)).toBe(180);

  await page.goto("/?component=required-controls");
  await page.getByRole("button", { name: "Submit required" }).click();
  await expect(page.getByTestId("required-submitted")).toHaveText("false");
  for (const label of ["Agreement", "Required switch", "First", "Second", "Required bio"]) {
    expect(await page.getByLabel(label, { exact: true }).evaluate((element: HTMLInputElement | HTMLTextAreaElement) => element.validity.valueMissing)).toBe(true);
  }
  await page.getByText("Agreement", { exact: true }).click();
  await page.getByText("Required switch", { exact: true }).click();
  await page.getByRole("radio", { name: "Second", exact: true }).check();
  await page.getByLabel("Required bio").fill("Hello");
  await page.getByRole("button", { name: "Submit required" }).click();
  await expect(page.getByTestId("required-submitted")).toHaveText("true");
});

for (const reducedMotion of ["no-preference", "reduce"] as const) {
  test(`switch motion is interruptible and keyboard activation is instant (${reducedMotion})`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion });
    await page.goto("/?component=form-controls");
    const input = page.getByRole("switch", { name: "Push notifications", exact: true });
    const thumb = input.locator("..").locator(".stark-switch-thumb");
    await page.getByText("Push notifications", { exact: true }).click();
    await expect(input).toBeChecked();
    await expect(thumb).toHaveCSS("transition-duration", reducedMotion === "reduce" ? "0s" : "0.15s");
    await expect(thumb).toHaveCSS("transform", "matrix(1, 0, 0, 1, 16, 0)");
    // Reverse while the thumb is moving, checking continuity before it settles.
    const samples = await input.evaluate(async element => {
      const input = element as HTMLInputElement;
      const thumb = input.parentElement!.querySelector<HTMLElement>(".stark-switch-thumb")!;
      const x = () => new DOMMatrix(getComputedStyle(thumb).transform).m41;
      input.click();
      await new Promise(resolve => setTimeout(resolve, 45));
      const before = x();
      input.click();
      const after = x();
      return { before, after, checked: input.checked };
    });
    expect(samples.checked).toBe(true);
    if (reducedMotion === "no-preference") {
      expect(samples.before).toBeGreaterThan(0);
      expect(samples.before).toBeLessThan(16);
      expect(Math.abs(samples.after - samples.before)).toBeLessThan(1);
    } else {
      expect(samples.before).toBe(0);
      expect(samples.after).toBe(16);
    }
    await input.focus();
    await page.keyboard.press("Space");
    await expect(input).not.toBeChecked();
    await expect(thumb).toHaveCSS("transition-duration", "0s");
    await expect(thumb).toHaveCSS("transform", "matrix(1, 0, 0, 1, 0, 0)");
    await expect(input.locator("..").locator(".stark-choice-visual")).toHaveCSS("outline-color", "rgb(62, 140, 255)");
    await expect(page.locator("main")).toHaveScreenshot(`form-controls-${reducedMotion}.png`);
  });
}

test("touch labels activate all selection controls once with usable targets", async ({ browser }) => {
  const context = await browser.newContext({ hasTouch: true, isMobile: true, viewport: { width: 1100, height: 1000 } });
  const page = await context.newPage();
  await page.goto("/?component=form-behavior");
  for (const label of ["News", "Push", "Weekly"]) {
    const input = page.getByLabel(label, { exact: true });
    const bounds = await input.locator("..").boundingBox();
    expect(bounds!.height).toBeGreaterThanOrEqual(44);
    expect(bounds!.width).toBeGreaterThanOrEqual(44);
    await page.getByText(label, { exact: true }).tap();
  }
  await expect(page.getByTestId("counts")).toHaveText(JSON.stringify({ checkbox: 1, switch: 1, radio: 1, textarea: 0 }));
  await expect(page.getByLabel("News", { exact: true })).toBeChecked();
  await expect(page.getByLabel("Push", { exact: true })).not.toBeChecked();
  await expect(page.getByLabel("Weekly", { exact: true })).toBeChecked();
  await context.close();
});
