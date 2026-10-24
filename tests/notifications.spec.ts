import { expect, test } from "@playwright/test";

for (const reducedMotion of ["no-preference", "reduce"] as const) {
  for (const kind of ["alert", "toast"] as const) {
    test(`${kind} stack reflows and retains exits (${reducedMotion})`, async ({ page }) => {
      await page.emulateMedia({ reducedMotion });
      await page.goto("/?component=restored");
      const notify = page.getByRole("button", { name: "Notify", exact: true });
      await notify.click();
      await notify.click();
      await notify.click();
      const stack = page.locator(".stark-notification-stack").filter({
        has: page.getByRole("button", { name: `Close ${kind}` }),
      });
      const positions = stack.locator(".stark-notification-position");
      await expect(positions).toHaveCount(3);
      await expect.poll(() => positions.last().evaluate(element => getComputedStyle(element).transform)).toBe("none");
      // Let all entrance springs settle before measuring a stack removal.
      await expect.poll(() => stack.locator(".stark-notification-motion").evaluateAll(elements =>
        elements.every(element => Number(getComputedStyle(element).opacity) === 1),
      )).toBe(true);
      const result = await (kind === "alert" ? positions.first() : positions.last()).evaluate(async (first, kind) => {
        const sibling = (kind === "alert" ? first.nextElementSibling : first.previousElementSibling) as HTMLElement;
        const before = sibling.getBoundingClientRect().y;
        (first.querySelector(`button[aria-label="Close ${kind}"]`) as HTMLButtonElement).click();
        // Observe a real intermediate frame, including reduced-motion behavior.
        await new Promise(resolve => setTimeout(resolve, 60));
        return {
          retained: first.isConnected,
          opacity: Number(getComputedStyle(first.querySelector(".stark-notification-motion")!).opacity),
          transform: getComputedStyle(first.querySelector(".stark-notification-motion")!).transform,
          siblingTransform: getComputedStyle(sibling).transform,
          before,
          during: sibling.getBoundingClientRect().y,
        };
      }, kind);
      expect(result.retained).toBe(true);
      expect(result.opacity).toBeGreaterThan(0);
      expect(result.opacity).toBeLessThan(1);
      if (reducedMotion === "reduce") {
        expect(result.siblingTransform).toBe("none");
        expect(result.transform).toBe("none");
      } else {
        expect(result.siblingTransform).not.toBe("none");
      }
      await expect(positions).toHaveCount(2);
      const after = await (kind === "alert" ? positions.first() : positions.last()).evaluate(element => element.getBoundingClientRect().y);
      if (reducedMotion !== "reduce") {
        expect(Math.abs(result.during - result.before)).toBeLessThan(Math.abs(after - result.before));
      }
      // Keyboard dismissal follows the same lifecycle and leaves other items intact.
      await stack.getByRole("button", { name: `Close ${kind}` }).first().focus();
      await page.keyboard.press("Enter");
      await expect(positions).toHaveCount(1);
    });
  }
}

for (const reducedMotion of ["no-preference", "reduce"] as const) {
  test(`notifications support touch dismissal (${reducedMotion})`, async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      hasTouch: true,
      reducedMotion,
    });
    try {
      const page = await context.newPage();
      await page.goto("/?component=restored");
      await page.getByRole("button", { name: "Notify", exact: true }).tap();
      for (const kind of ["alert", "toast"] as const) {
        const close = page.locator(".stark-notification-stack").getByRole("button", { name: `Close ${kind}` });
        await close.tap();
        await expect(close).toHaveCount(0);
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)).toBe(false);
    } finally {
      await context.close();
    }
  });
}
