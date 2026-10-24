import { expect, test, type Locator } from "@playwright/test";
async function aligned(list: Locator) {
  const { tab, line } = await list.evaluate((list) => {
    const active = list.querySelector('[aria-selected="true"]')!;
    return {
      tab: active.getBoundingClientRect().toJSON(),
      line: active
        .querySelector(".stark-tab-indicator")!
        .getBoundingClientRect()
        .toJSON(),
    };
  });
  expect(Math.abs(line.x - tab.x)).toBeLessThan(0.5);
  expect(Math.abs(line.width - tab.width)).toBeLessThan(0.5);
  expect(Math.abs(line.y + line.height - tab.y - tab.height)).toBeLessThan(0.5);
}
for (const reducedMotion of ["no-preference", "reduce"] as const) {
  test(`tab underline tracks selection and respects input and motion preferences (${reducedMotion})`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.emulateMedia({ reducedMotion });
    await page.goto("/?component=tabs");
    await page.evaluate(() => document.fonts.ready);
    const primary = page.getByRole("tablist", { name: "Primary tabs" });
    const secondary = page.getByRole("tablist", { name: "Secondary tabs" });
    await aligned(primary);
    const samples = await primary.evaluate(async (list) => {
      const destination =
        list.querySelectorAll<HTMLButtonElement>('[role="tab"]')[2];
      destination.dispatchEvent(
        new MouseEvent("mousedown", { bubbles: true, button: 0 }),
      );
      const frames: {
        x: number;
        width: number;
        targetX: number;
        targetWidth: number;
      }[] = [];
      const start = performance.now();
      await new Promise<void>((resolve) => {
        function sample() {
          const line = list.querySelector(
            '[aria-selected="true"] .stark-tab-indicator',
          );
          if (line && destination.getAttribute("aria-selected") === "true") {
            const box = line.getBoundingClientRect();
            const target = destination.getBoundingClientRect();
            frames.push({
              x: box.x,
              width: box.width,
              targetX: target.x,
              targetWidth: target.width,
            });
          }
          if (performance.now() - start < 400) requestAnimationFrame(sample);
          else resolve();
        }
        requestAnimationFrame(sample);
      });
      return frames;
    });
    expect(samples.length).toBeGreaterThan(2);
    if (reducedMotion === "reduce") {
      expect(
        samples.every(
          (frame) =>
            Math.abs(frame.x - frame.targetX) < 0.5 &&
            Math.abs(frame.width - frame.targetWidth) < 0.5,
        ),
      ).toBe(true);
    } else {
      expect(
        samples.some((frame) => frame.x > 25 && frame.x < frame.targetX - 1),
      ).toBe(true);
      expect(
        samples.some((frame) => Math.abs(frame.width - frame.targetWidth) > 1),
      ).toBe(true);
    }
    await expect(
      primary.getByRole("tab", { name: "Team members" }),
    ).toHaveAttribute("aria-selected", "true");
    await expect(
      page.getByRole("tabpanel", { name: "Team members" }),
    ).toHaveText("Team panel");
    await expect(async () => aligned(primary)).toPass();
    await aligned(secondary);
    await expect(
      secondary.getByRole("tab", { name: "Overview" }),
    ).toHaveAttribute("aria-selected", "true");
    await primary.getByRole("tab", { name: "Overview" }).focus();
    await page.keyboard.press("ArrowRight");
    await expect(
      primary.getByRole("tab", { name: "Team members" }),
    ).toBeFocused();
    await aligned(primary);
    await expect(primary.getByRole("tab", { name: "Team members" })).toHaveCSS(
      "outline-style",
      "solid",
    );
    await page.keyboard.press("End");
    await expect(primary.getByRole("tab", { name: "Activity" })).toBeFocused();
    await aligned(primary);
    await page.keyboard.press("Home");
    await expect(primary.getByRole("tab", { name: "Overview" })).toBeFocused();
    await aligned(primary);
    // Interrupt a pointer transition while it is still travelling.
    await primary.getByRole("tab", { name: "Activity" }).click();
    await expect(primary.getByRole("tab", { name: "Activity" })).toHaveCSS(
      "outline-style",
      "none",
    );
    await primary.getByRole("tab", { name: "Team members" }).click();
    await expect(primary.getByRole("tab", { name: "Team members" })).toHaveCSS(
      "outline-style",
      "none",
    );
    await expect(async () => aligned(primary)).toPass();
    await page.keyboard.press("ArrowLeft");
    await expect(primary.getByRole("tab", { name: "Overview" })).toBeFocused();
    await expect(primary.getByRole("tab", { name: "Overview" })).toHaveCSS(
      "outline-style",
      "solid",
    );
    await aligned(primary);
    await page
      .getByRole("button", {
        name: "Select activity in Primary tabs",
        exact: true,
      })
      .click();
    await expect(
      primary.getByRole("tab", { name: "Activity" }),
    ).toHaveAttribute("aria-selected", "true");
    await expect(async () => aligned(primary)).toPass();
    const pills = page.getByRole("tablist", { name: "Pill tabs" });
    await pills.getByRole("tab", { name: "Team members" }).click();
    await expect(pills.locator(".stark-tab-indicator")).toHaveCount(0);
    await expect(
      pills.getByRole("tab", { name: "Team members" }),
    ).toHaveAttribute("aria-selected", "true");
    expect(errors).toEqual([]);
  });
}
test("touch selection moves the underline without changing panel behavior", async ({
  browser,
}) => {
  const context = await browser.newContext({
    hasTouch: true,
    viewport: { width: 600, height: 800 },
  });
  const page = await context.newPage();
  await page.goto("/?component=tabs");
  const list = page.getByRole("tablist", { name: "Primary tabs" });
  await list.getByRole("tab", { name: "Activity" }).tap();
  await expect(list.getByRole("tab", { name: "Activity" })).toHaveCSS(
    "outline-style",
    "none",
  );
  await expect(page.getByRole("tabpanel", { name: "Activity" })).toHaveText(
    "Activity panel",
  );
  await expect(async () => aligned(list)).toPass();
  await context.close();
});
