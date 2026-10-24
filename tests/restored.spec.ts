import { expect, test } from "@playwright/test";
for (const reducedMotion of ["no-preference", "reduce"] as const) {
  test(`restored fields, selections and keyboard interactions (${reducedMotion})`, async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto("/?component=restored");
    await page.getByRole("button", { name: "Show password" }).click();
    await expect(page.getByLabel("Legacy password")).toHaveAttribute(
      "type",
      "text",
    );
    await expect(page.getByLabel("Legacy notes")).toHaveAccessibleDescription(
      "Check this field",
    );
    await page.getByLabel("Phone", { exact: true }).fill("1234567890");
    await expect(page.getByLabel("Phone", { exact: true })).toHaveValue(
      "(123) 456-7890",
    );
    await expect(page.getByLabel("Masked value")).toHaveText("(123) 456-7890");
    await page.getByRole("combobox", { name: "Number", exact: true }).click();
    await page.getByRole("option", { name: "Zero", exact: true }).click();
    await expect(page.getByLabel("Selected number")).toHaveText("number:0");
    await page.getByRole("button", { name: "Multiple numbers" }).click();
    await page.getByRole("menuitemcheckbox", { name: "One", exact: true }).click();
    await page.keyboard.press("Escape");
    await page.getByRole("button", { name: "Dismiss One" }).click();
    await expect(
      page.getByRole("button", { name: "Multiple numbers" }),
    ).toContainText("Select an option");
    await page.getByRole("combobox", { name: "Search numbers" }).fill("One");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    await expect(
      page.getByRole("combobox", { name: "Search numbers" }),
    ).toHaveValue("One");
    await page.getByRole("button", { name: "Clear selection" }).click();
    await expect(
      page.getByRole("combobox", { name: "Search numbers" }),
    ).toHaveValue("");
    await expect(
      page.getByRole("combobox", { name: "Disabled selection" }),
    ).toBeDisabled();
    await expect(
      page.getByRole("combobox", { name: "Disabled search" }),
    ).toBeDisabled();
    await page
      .getByRole("group", { name: "Choices" })
      .getByRole("checkbox", { name: "Zero" })
      .check();
    await expect(
      page
        .getByRole("group", { name: "Choices" })
        .getByRole("checkbox", { name: "Two" }),
    ).toBeDisabled();
    await page.getByRole("tab", { name: "Account" }).focus();
    await page.keyboard.press("ArrowRight");
    await expect(page.getByRole("tab", { name: "Security" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    await expect(page.getByRole("tabpanel")).toHaveText("Security panel");
    await page.getByText("First", { exact: true }).click();
    await expect(page.getByText("First body")).toBeVisible();
    await page
      .getByRole("button", { name: "Reorder First; use up and down arrows" })
      .focus();
    await page.keyboard.press("ArrowDown");
    await expect(page.locator(".card-disclosure").first()).toHaveAttribute(
      "id",
      "second",
    );
    await page.getByRole("button", { name: "Actions", exact: true }).click();
    await expect(
      page.getByRole("menuitem", { name: "Unavailable" }),
    ).toHaveAttribute("aria-disabled", "true");
    await page.keyboard.press("Escape");
    await page.getByRole("button", { name: "Dismiss Restored" }).click();
    await expect(page.getByText("Badge dismissed")).toBeVisible();
    await page.goto("/?component=legacy-switch");
    const legacySwitch = page.getByRole("switch", { name: "Archived switch" });
    await legacySwitch.focus();
    await page.keyboard.press("Space");
    await expect(legacySwitch).toBeChecked();
    await page.keyboard.press("Space");
    await expect(legacySwitch).not.toBeChecked();
    expect(errors).toEqual([]);
  });
  test(`dialog focus and notification lifecycle (${reducedMotion})`, async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion });
    await page.goto("/?component=restored");
    const opener = page.getByRole("button", {
      name: "Open modal",
      exact: true,
    });
    await opener.click();
    await expect(
      page.getByRole("dialog", { name: "Edit record" }),
    ).toBeVisible();
    await expect(page.getByRole("dialog")).toHaveAccessibleDescription(
      "Modal caption",
    );
    await page.getByLabel("Record name").fill("Updated");
    for (let index = 0; index < 7; index++) {
      await page.keyboard.press("Tab");
      await expect(page.getByRole("dialog").locator(":focus")).toHaveCount(1);
    }
    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog")).toHaveCount(0);
    await expect(opener).toBeFocused();
    await page.getByRole("button", { name: "Notify", exact: true }).click();
    await expect(page.getByText("Record saved", { exact: true })).toBeVisible();
    await expect(
      page.getByText("Toast message", { exact: true }),
    ).toBeVisible();
    await page.getByRole("button", { name: "Undo", exact: true }).click();
    await expect(page.getByLabel("Action count")).toHaveText("1");
    const exit = await page
      .getByRole("button", { name: "Close toast" })
      .evaluate(async (button) => {
        const notification = button.closest(".stark-notification")!;
        (button as HTMLButtonElement).click();
        await Promise.resolve();
        return {
          connected: notification.isConnected,
          state: notification.getAttribute("data-state"),
        };
      });
    expect(exit).toEqual({ connected: true, state: "closed" });
    await expect(page.getByText("Toast message", { exact: true })).toHaveCount(
      0,
    );
    await page.getByRole("button", { name: "Timed notification" }).click();
    await expect(page.getByText("Expires", { exact: true })).toBeVisible();
    await expect(page.getByText("Expires", { exact: true })).toHaveCount(0, {
      timeout: 3000,
    });
  });
}
test("rich text editing is observable and read-only fields stay read-only", async ({
  page,
}) => {
  await page.goto("/?component=restored");
  const editor = page.getByRole("textbox", {
    name: "Description",
    exact: true,
  });
  await expect(editor).toHaveText("Initial content");
  await editor.fill("Changed content");
  await expect(page.getByLabel("Editor value")).toContainText(
    "Changed&nbsp;content",
  );
  await expect(
    page.getByRole("textbox", { name: "Read only description" }),
  ).toHaveAttribute("contenteditable", "false");
  await expect(editor).toHaveAccessibleDescription("Formatting supported");
});

for (const reducedMotion of ["no-preference", "reduce"] as const) {
  test(`touch reorder and responsive restored layout (${reducedMotion})`, async ({
    browser,
  }) => {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      hasTouch: true,
      reducedMotion,
    });
    const page = await context.newPage();
    try {
      await page.goto("/?component=restored");
      await page.getByRole("button", { name: "More information" }).tap();
      await expect(page.getByRole("tooltip")).toHaveText("Helpful details");
      await page.keyboard.press("Escape");
      const handle = page.getByRole("button", {
        name: "Reorder First; use up and down arrows",
      });
      await handle.scrollIntoViewIfNeeded();
      const first = await handle.boundingBox();
      const second = await page.locator("#second").boundingBox();
      expect(first).not.toBeNull();
      expect(second).not.toBeNull();
      const session = await context.newCDPSession(page);
      const x = first!.x + first!.width / 2;
      const y = first!.y + first!.height / 2;
      await session.send("Input.dispatchTouchEvent", {
        type: "touchStart",
        touchPoints: [{ x, y }],
      });
      for (let step = 1; step <= 10; step++) {
        await session.send("Input.dispatchTouchEvent", {
          type: "touchMove",
          touchPoints: [{ x, y: y + ((second!.height + 12) * step) / 10 }],
        });
      }
      await session.send("Input.dispatchTouchEvent", {
        type: "touchEnd",
        touchPoints: [],
      });
      await expect(page.locator(".card-disclosure").first()).toHaveAttribute(
        "id",
        "second",
      );
      await page.getByRole("button", { name: "Actions", exact: true }).tap();
      await expect(
        page.getByRole("menuitem", { name: "View record" }),
      ).toBeVisible();
      await page.keyboard.press("Escape");
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      );
      expect(overflow).toBe(false);
    } finally {
      await context.close();
    }
  });
  for (const width of [1100, 390]) {
    test(`restored visual baseline (${reducedMotion}, ${width})`, async ({
      page,
    }) => {
      await page.setViewportSize({ width, height: 1000 });
      await page.emulateMedia({ reducedMotion });
      await page.goto("/?component=restored");
      await expect(
        page.getByRole("textbox", { name: "Description", exact: true }),
      ).toHaveText("Initial content");
      await page.evaluate(() => document.fonts.ready);
      await expect(page).toHaveScreenshot(
        `restored-${width}-${reducedMotion}.png`,
        { fullPage: true },
      );
    });
  }
}
