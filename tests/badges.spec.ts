import { expect, test } from "@playwright/test";

for (const reducedMotion of ["no-preference", "reduce"] as const) {
  test(`badges display icons and leading status indicators (${reducedMotion})`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion });
    await page.goto("/?component=badges");
    await page.evaluate(() => document.fonts.ready);
    const badges = page.locator(".stark-badge");
    await expect(badges).toHaveCount(42);
    for (const badge of await badges.all()) {
      const color = await badge.evaluate(element => getComputedStyle(element).color);
      for (const icon of await badge.locator("svg, i").all()) {
        await expect(icon).toHaveCSS("color", color);
        await expect(icon.locator("..")).toHaveAttribute("aria-hidden", "true");
      }
      // Static labels must not become tab stops or unsolicited live regions.
      expect(await badge.getAttribute("tabindex")).toBeNull();
      expect(await badge.getAttribute("role")).toBeNull();
      expect(await badge.getAttribute("aria-live")).toBeNull();
    }
    for (const intent of ["default", "inverse", "primary", "info", "success", "warning", "danger"]) {
      const status = page.getByTestId(`${intent}-status`);
      const indicator = status.locator(".stark-badge-indicator");
      await expect(indicator).toHaveAttribute("aria-hidden", "true");
      await expect(indicator).toHaveCSS("background-color", await status.evaluate(element => getComputedStyle(element).color));
      expect(await indicator.evaluate(element => element === element.parentElement!.firstElementChild)).toBe(true);
      await expect(page.getByTestId(`${intent}-plain`).locator(".stark-badge-indicator")).toHaveCount(0);
    }
    await expect(page.locator("main")).toHaveScreenshot(`badges-${reducedMotion}.png`);
  });
}
