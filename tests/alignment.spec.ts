import { expect, test } from "@playwright/test";

for (const reducedMotion of ["no-preference", "reduce"] as const) {
  test(`text prefixes and icon glyphs share the control center (${reducedMotion})`, async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion });
    await page.goto("/?component=alignment");
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByLabel("Contact number")).toHaveValue("917 123 4567");
    for (const field of await page.locator(".stark-input").all()) {
      const input = field.locator("input");
      const inputBox = (await input.boundingBox())!;
      for (const adornment of await field
        .locator(".stark-input-adornment")
        .all()) {
        const box = (await adornment.boundingBox())!;
        expect(
          Math.abs(box.y + box.height / 2 - inputBox.y - inputBox.height / 2),
        ).toBeLessThanOrEqual(0.5);
        await expect(adornment).toHaveCSS(
          "font-size",
          await input.evaluate((el) => getComputedStyle(el).fontSize),
        );
        await expect(adornment).toHaveCSS(
          "line-height",
          await input.evaluate((el) => getComputedStyle(el).lineHeight),
        );
      }
    }
    for (const control of await page
      .locator(".stark-button, .stark-badge")
      .all()) {
      const box = (await control.boundingBox())!;
      for (const icon of await control.locator("svg, i").all()) {
        const iconBox = (await icon.boundingBox())!;
        expect(
          Math.abs(iconBox.y + iconBox.height / 2 - box.y - box.height / 2),
        ).toBeLessThanOrEqual(0.5);
        if (await icon.evaluate((el) => el.tagName === "I")) {
          const metrics = await icon.evaluate((el) => {
            const css = getComputedStyle(el);
            const glyph = getComputedStyle(el, "::before");
            return {
              font: parseFloat(css.fontSize),
              line: parseFloat(css.lineHeight),
              glyphLine: parseFloat(glyph.lineHeight),
              height: el.getBoundingClientRect().height,
            };
          });
          expect(metrics.line).toBe(metrics.font);
          expect(metrics.glyphLine).toBe(metrics.font);
          expect(metrics.height).toBe(metrics.font);
        }
      }
    }
    const badgeHeights = await page.locator(".stark-badge").evaluateAll(elements =>
      elements.map(element => element.getBoundingClientRect().height));
    expect(new Set(badgeHeights).size).toBe(1);
    await page.getByLabel("Contact number").fill("9185551234");
    await expect(page.getByLabel("Contact number")).toHaveValue("918 555 1234");
    await expect(page.locator("main")).toHaveScreenshot(
      `alignment-${reducedMotion}.png`,
    );
  });
}

for (const reducedMotion of ["no-preference", "reduce"] as const) {
  test(`fields and actions share geometry regardless of labels and field states (${reducedMotion})`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion });
    await page.goto("/?component=control-sizing");
    await page.evaluate(() => document.fonts.ready);
    for (const name of ["standard-controls", "template-controls"]) {
      const panel = page.getByTestId(name);
      const controls = panel.locator(".stark-input, .stark-combobox-input, .stark-button:not(.stark-button-attached)");
      const heights = await controls.evaluateAll(elements => elements.map(element => element.getBoundingClientRect().height));
      expect(heights.length).toBeGreaterThan(10);
      expect(new Set(heights).size).toBe(1);
      const fieldHeight = heights[0];
      for (const field of await panel.locator(".stark-input").all()) {
        const box = (await field.boundingBox())!;
        const input = (await field.locator("input").boundingBox())!;
        expect(Math.abs(box.y + box.height / 2 - input.y - input.height / 2)).toBeLessThanOrEqual(0.5);
      }
      const attached = panel.locator(".stark-button-attached");
      const innerHeight = await attached.evaluate(element => element.getBoundingClientRect().height);
      expect(innerHeight).toBe(fieldHeight - 2);
      await expect(attached).toHaveCSS("border-top-left-radius", "0px");
    }
    for (const width of [390, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto("/?component=templates&path=%2Fadmin%2Fproducts");
      const controls = page.locator(".stark-table-toolbar .stark-input, .stark-table-toolbar .stark-button");
      const heights = await controls.evaluateAll(elements => elements.map(element => element.getBoundingClientRect().height));
      expect(new Set(heights).size).toBe(1);
      if (width === 1440) {
        const bottoms = await controls.evaluateAll(elements => elements.map(element => { const box = element.getBoundingClientRect(); return box.bottom; }));
        expect(Math.max(...bottoms) - Math.min(...bottoms)).toBeLessThanOrEqual(0.5);
      }
    }
  });
}
