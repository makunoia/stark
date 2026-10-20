import { expect, test } from "@playwright/test";

for (const reducedMotion of ["no-preference", "reduce"] as const) {
  test(`selection feedback reverses smoothly and respects reduced motion (${reducedMotion})`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion });
    await page.goto("/?component=form-controls");
    const input = page.getByRole("checkbox", { name: "Product updates", exact: true });
    const mark = input.locator("..").locator(".stark-checkbox-check");
    const sample = await input.evaluate(element => {
      const input = element as HTMLInputElement;
      const mark = input.parentElement!.querySelector<HTMLElement>(".stark-checkbox-check")!;
      const path = mark.querySelector("path")!;
      const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
      const read = () => ({ opacity: Number(getComputedStyle(mark).opacity), offset: parseFloat(getComputedStyle(path).strokeDashoffset) });
      read();
      input.click();
      const immediatelyChecked = input.checked;
      read();
      const transitions = (reduce ? mark : path).getAnimations() as CSSTransition[];
      for (const animation of transitions) {
        animation.pause();
        animation.currentTime = 45;
      }
      const middle = read();
      input.click();
      return { immediatelyChecked, middle, reversed: read(), properties: transitions.map(animation => animation.transitionProperty) };
    });
    expect(sample.immediatelyChecked).toBe(true);
    if (reducedMotion === "no-preference") {
      expect(sample.properties).toEqual(["stroke-dashoffset"]);
      expect(sample.middle.opacity).toBe(1);
      expect(sample.middle.offset).toBeGreaterThan(0);
      expect(sample.middle.offset).toBeLessThan(100);
      expect(Math.abs(sample.reversed.offset - sample.middle.offset)).toBeLessThan(0.01);
    } else {
      expect(sample.properties).toEqual(["opacity"]);
      expect(sample.middle.opacity).toBeGreaterThan(0);
      expect(sample.middle.opacity).toBeLessThan(1);
      expect(Math.abs(sample.reversed.opacity - sample.middle.opacity)).toBeLessThan(0.01);
      expect(sample.middle.offset).toBe(0);
    }
    await expect(input).not.toBeChecked();
    await expect(mark).toHaveCSS("opacity", "0");
    await page.getByText("Product updates", { exact: true }).click();
    await expect(input).toBeChecked();
    await expect(mark).toHaveCSS("opacity", "1");
    await expect(mark).toHaveCSS("transform", "matrix(1, 0, 0, 1, 0, 0)");
    await expect(mark.locator("path")).toHaveCSS("stroke-dashoffset", "0px");

    const radio = page.getByRole("radio", { name: "Daily", exact: true }).first();
    const dot = radio.locator("..").locator(".stark-radio-dot");
    await page.getByText("Daily", { exact: true }).first().click();
    await expect(radio).toBeChecked();
    await expect(dot).toHaveCSS("transition-property", reducedMotion === "reduce" ? "opacity" : "opacity, transform");
    await expect(dot).toHaveCSS("opacity", "1");
    await expect(dot).toHaveCSS("transform", "matrix(1, 0, 0, 1, 0, 0)");
  });

  test(`keyboard feedback is instant for choices, buttons and fields (${reducedMotion})`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion });
    await page.goto("/?component=form-controls");
    for (const id of ["checkbox-focus", "radio-focus-0", "switch-focus"]) {
      const input = page.locator(`[id="${id}"]`);
      await input.focus();
      await page.keyboard.press("Space");
      await expect(input).toBeChecked();
      const running = await input.evaluate(element => element.nextElementSibling!.getAnimations({ subtree: true }).filter(animation => animation.playState === "running").length);
      expect(running).toBe(0);
      await expect(input.locator("..").locator(".stark-choice-visual")).toHaveCSS("transition-duration", "0s");
    }
    const textarea = page.getByLabel("Bio", { exact: true });
    await textarea.focus();
    await expect(textarea).toHaveCSS("transition-duration", "0s");
    const input = page.getByLabel("Existing Input");
    await input.focus();
    await expect(input.locator("../..")).toHaveCSS("transition-duration", "0s");
    const button = page.getByRole("button", { name: "Existing primary button" });
    await button.focus();
    await page.keyboard.down("Space");
    await expect(button).toHaveCSS("transform", "none");
    await expect(button).toHaveCSS("transition-duration", "0s");
    await page.keyboard.up("Space");
  });

  test(`pointer press stays restrained and attached controls stay aligned (${reducedMotion})`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion });
    await page.goto("/?component=buttons");
    const button = page.getByRole("button", { name: "0-primary-default", exact: true });
    const bounds = (await button.boundingBox())!;
    await button.hover();
    await page.mouse.down();
    await expect(button).toHaveCSS("transform", reducedMotion === "reduce" ? "none" : "matrix(0.98, 0, 0, 0.98, 0, 0)");
    expect(await button.evaluate(element => (element as HTMLElement).offsetWidth)).toBe(Math.round(bounds.width));
    await page.mouse.up();
    await expect(button).toHaveCSS("transform", "none");
    const attached = page.getByRole("button", { name: "Attached", exact: true }).first();
    await attached.hover();
    await page.mouse.down();
    await expect(attached).toHaveCSS("transform", "none");
    await page.mouse.up();
  });
}

test("hover colors interpolate and field transitions stay bounded", async ({ page }) => {
  await page.goto("/?component=buttons");
  const button = page.getByRole("button", { name: "0-primary-default", exact: true });
  const initial = await button.evaluate(element => getComputedStyle(element).backgroundColor);
  await button.evaluate(element => {
    element.addEventListener("pointerenter", () => {
      // Sample inside the browser event so scheduling on a slow test worker
      // cannot accidentally miss the entire 120ms hover transition.
      getComputedStyle(element).backgroundColor;
      const transition = (element.getAnimations() as CSSTransition[]).find(animation => animation.transitionProperty === "background-color");
      if (transition) { transition.pause(); transition.currentTime = 55; }
      (element as HTMLElement).dataset.midColor = getComputedStyle(element).backgroundColor;
    }, { once: true });
  });
  await button.hover();
  const middle = await button.getAttribute("data-mid-color");
  expect(middle).not.toBe(initial);
  await button.evaluate(element => element.getAnimations().forEach(animation => animation.finish()));
  const hovered = await button.evaluate(element => getComputedStyle(element).backgroundColor);
  expect(middle).not.toBe(hovered);
  await page.mouse.move(0, 0);
  await expect(button).toHaveCSS("background-color", initial);

  await page.goto("/?component=form-controls");
  await expect(page.getByLabel("Bio", { exact: true })).toHaveCSS("transition-property", "outline-color, background-color");
  await expect(page.getByLabel("Existing Input").locator("../..")).toHaveCSS("transition-property", "outline-color, background-color");
  const disabled = page.getByRole("checkbox", { name: "Selected and disabled", exact: true });
  await expect(disabled.locator("..").locator(".stark-checkbox-check")).toHaveCSS("transition-duration", "0s");
});

test("touch does not leave hover colors behind", async ({ browser }) => {
  const context = await browser.newContext({ hasTouch: true, isMobile: true, viewport: { width: 1100, height: 1000 } });
  try {
    const page = await context.newPage();
    await page.goto("/?component=buttons");
    const button = page.getByRole("button", { name: "0-primary-default", exact: true });
    const initial = await button.evaluate(element => getComputedStyle(element).backgroundColor);
    await button.tap();
    await expect(button).toHaveCSS("background-color", initial);
    await expect(button).toHaveCSS("transform", "none");
    await page.goto("/?component=form-controls");
    const selected = page.getByRole("checkbox", { name: "Selected", exact: true });
    const visual = selected.locator("..").locator(".stark-choice-visual");
    const selectedColor = await visual.evaluate(element => getComputedStyle(element).backgroundColor);
    const input = page.getByRole("checkbox", { name: "Product updates", exact: true });
    await page.getByText("Product updates", { exact: true }).tap();
    await expect(input).toBeChecked();
    await expect(input.locator("..").locator(".stark-choice-visual")).toHaveCSS("background-color", selectedColor);
  } finally {
    await context.close();
  }
});
