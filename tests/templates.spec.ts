import { expect, test, type Page } from "@playwright/test";

const fixture = (path = "/admin/products", extra = "") => `/?component=templates&path=${encodeURIComponent(path)}${extra}`;
const rows = (page: Page) => page.locator("tbody tr");

for (const controlled of [false, true]) {
  test(`table search, filters, sorting and pagination${controlled ? " with controlled state" : ""}`, async ({ page }) => {
    await page.goto(fixture("/admin/products", controlled ? "&controlled" : ""));
    await expect(page.locator(".stark-table-filters label")).toHaveCount(0);
    await expect(rows(page)).toHaveCount(10);
    await page.getByRole("button", { name: "Next page", exact: true }).click();
    await expect(page.getByText("Page 2 of 3", { exact: true })).toBeVisible();
    await page.getByRole("searchbox").fill("lamp");
    await expect(page.getByRole("status")).toHaveText("6 results");
    await expect(page.getByText("Page 1 of 1", { exact: true })).toBeVisible();
    await page.locator(".stark-table-filters").getByRole("button", { name: "Status", exact: true }).click();
    await page.getByRole("menuitemcheckbox", { name: "Active", exact: true }).click(); await page.keyboard.press("Escape");
    await expect(page.getByRole("status")).toHaveText("3 results");
    await expect(page.locator(".stark-table-filters .stark-badge")).toHaveCount(0);
    for (const filter of await page.locator(".stark-table-filters .stark-dropdown").all()) {
      expect((await filter.boundingBox())!.height).toBe((await filter.locator(".stark-dropdown-trigger").boundingBox())!.height);
    }
    await page.getByRole("combobox", { name: "Category", exact: true }).click();
    await page.getByRole("option", { name: "Lighting", exact: true }).click();
    await page.getByRole("button", { name: "Price", exact: false }).click();
    await expect(page.getByRole("columnheader", { name: "Price" })).toHaveAttribute("aria-sort", "ascending");
    await expect(rows(page).first()).toContainText("$129.00");
    await page.getByRole("button", { name: "Clear filters", exact: true }).click();
    await expect(page.getByRole("status")).toHaveText("30 results");
    await page.getByRole("combobox", { name: "Rows per page", exact: true }).click();
    await page.getByRole("option", { name: "25", exact: true }).click();
    await expect(rows(page)).toHaveCount(25);
    await page.getByRole("searchbox").fill("STK-0030");
    await expect(rows(page)).toHaveCount(1);
    await expect(rows(page).first()).toContainText("Ripple tea mug");
    await page.getByRole("searchbox").fill("nothing matches");
    await expect(page.getByRole("status").last()).toContainText("No results");
  });
}

for (const reducedMotion of ["no-preference", "reduce"] as const) {
  for (const width of [390, 1440]) {
    test(`filter reset keeps layout stable at ${width}px (${reducedMotion})`, async ({ page }) => {
      await page.setViewportSize({ width, height: 1000 });
      await page.emulateMedia({ reducedMotion });
      await page.goto(fixture());
      const reset = page.getByRole("button", { name: "Clear filters", exact: true });
      const search = page.getByRole("searchbox");
      const geometry = () => page.locator(".stark-table-toolbar, .stark-table-toolbar input, .stark-table-filters, thead").evaluateAll(elements => elements.map(element => {
        const { x, y, width, height } = element.getBoundingClientRect();
        return { x, y, width, height };
      }));
      await expect(reset).toHaveCount(0);
      const before = await geometry();
      await search.focus();
      await page.keyboard.type("lamp");
      await expect(reset).toHaveCSS("transition-duration", "0s");
      await expect(reset).toBeVisible();
      expect(await geometry()).toEqual(before);
      await reset.focus();
      await page.keyboard.press("Enter");
      await expect(search).toBeFocused();
      await expect(search).toHaveValue("");
      await expect(reset).toHaveCount(0);
      expect(await geometry()).toEqual(before);
      await page.locator(".stark-table-filters").getByRole("button", { name: "Status", exact: true }).click();
      await page.getByRole("menuitemcheckbox", { name: "Active", exact: true }).click();
      await expect(reset).toHaveCSS("transition-duration", reducedMotion === "reduce" ? "0s" : "0.12s");
      await reset.evaluate(element => Promise.all(element.getAnimations().map(animation => animation.finished)));
      await expect(reset).toHaveCSS("opacity", "1");
      await page.keyboard.press("Escape");
      await expect(reset).toBeVisible();
      expect(await geometry()).toEqual(before);
      await reset.click();
      await expect(page.getByRole("status")).toHaveText("30 results");
      expect(await geometry()).toEqual(before);
    });
  }
}

test("current-page selection, mixed state, cross-page selection, bulk updates and query reset", async ({ page }) => {
  await page.goto(fixture());
  await page.getByLabel("Select row product-1", { exact: true }).check();
  await expect(page.getByLabel("Select current page")).toHaveJSProperty("indeterminate", true);
  await page.getByLabel("Select current page").check();
  await expect(page.getByRole("status")).toHaveText("30 results · 10 selected");
  await page.getByRole("button", { name: "Next page", exact: true }).click();
  await expect(page.getByLabel("Select current page")).not.toBeChecked();
  await page.getByLabel("Select row product-11", { exact: true }).check();
  await expect(page.getByRole("status")).toHaveText("30 results · 11 selected");
  await page.getByRole("button", { name: "Publish", exact: true }).click();
  await expect(page.locator(".stark-notification-stack").getByText("11 products published.", { exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Clear selection", exact: true })).toHaveCount(0);
  await page.getByLabel("Select current page").check();
  await page.getByRole("searchbox").fill("tote");
  await expect(page.getByRole("button", { name: "Publish", exact: true })).toHaveCount(0);
  await expect(page.getByRole("status").last()).not.toContainText("selected");
});

test("column visibility, numeric widths, pointer resize, reset and keyboard focus", async ({ page }) => {
  await page.goto(fixture());
  const trigger = page.getByRole("button", { name: "Columns", exact: true });
  await trigger.focus(); await page.keyboard.press("Enter");
  const dialog = page.getByRole("dialog");
  await expect(dialog.getByLabel("Product", { exact: true })).toBeDisabled();
  await expect(dialog.getByLabel("Actions", { exact: true })).toBeDisabled();
  await dialog.getByLabel("SKU", { exact: true }).uncheck();
  await expect(page.getByRole("columnheader", { name: "SKU" })).toHaveCount(0);
  await dialog.getByLabel("Product width", { exact: true }).fill("400"); await page.keyboard.press("Tab");
  await expect(page.getByRole("columnheader", { name: "Product" })).toHaveCSS("width", "400px");
  await page.keyboard.press("Escape"); await expect(trigger).toBeFocused();
  const resizer = page.locator("th").nth(1).locator(".stark-column-resizer");
  const box = await resizer.boundingBox(); expect(box).not.toBeNull();
  await page.mouse.move(box!.x + box!.width / 2, box!.y + 15); await page.mouse.down(); await page.mouse.move(box!.x + 60, box!.y + 15); await page.mouse.up();
  await expect.poll(async () => (await page.getByRole("columnheader", { name: "Product" }).boundingBox())?.width).toBeGreaterThan(400);
  await trigger.click(); await dialog.getByRole("button", { name: "Reset columns" }).click();
  await expect(page.getByRole("columnheader", { name: "Product" })).toHaveCSS("width", "300px");
  await expect(page.getByRole("columnheader", { name: "SKU" })).toBeVisible();
});

test("login validation, recovery, password reveal and successful navigation", async ({ page }) => {
  await page.goto(fixture("/login"));
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page.getByLabel("Email address")).toBeFocused();
  await expect(page.getByText("Enter a valid email address.")).toBeVisible();
  await page.getByLabel("Email address").fill("alex@example.com");
  await page.getByLabel("Password", { exact: true }).fill("demo-password");
  await page.getByRole("button", { name: "reveal password" }).click();
  await expect(page.getByLabel("Password", { exact: true })).toHaveAttribute("type", "text");
  await page.getByRole("button", { name: "Forgot password?" }).click();
  await expect(page.getByRole("status").filter({ hasText: "Connect your recovery service" })).toBeVisible();
  await page.getByLabel("Remember me").check();
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page.getByRole("button", { name: "Signing in…" })).toBeDisabled();
  await expect(page.getByRole("heading", { name: "Products", exact: true })).toBeVisible();
});

test("login failure preserves entered values", async ({ page }) => {
  await page.goto(fixture("/login", "&loginFailure"));
  await page.getByLabel("Email address").fill("alex@example.com"); await page.getByLabel("Password", { exact: true }).fill("demo-password");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page.getByRole("alert")).toHaveText("Demo sign-in failed. Please try again.");
  await expect(page.getByLabel("Email address")).toHaveValue("alex@example.com");
  await expect(page).toHaveScreenshot("login-error.png", { fullPage: true });
});

test("details, edit validation, failure recovery, save and cancel share in-memory data", async ({ page }) => {
  await page.goto(fixture());
  await page.getByRole("link", { name: "Details for Everyday canvas tote" }).click();
  await expect(page.getByRole("heading", { name: "Everyday canvas tote", exact: true })).toBeVisible();
  await page.getByLabel("Published", { exact: true }).check();
  await expect(page.locator(".stark-detail-title")).toContainText("Active");
  await page.locator(".stark-notification-stack").getByRole("button", { name: "Close toast" }).click();
  await expect(page.locator(".stark-notification-stack .stark-notification")).toHaveCount(0);
  await page.getByRole("link", { name: "Edit product" }).click();
  await page.getByLabel("Product name", { exact: true }).fill("");
  await page.getByLabel("Price (USD)").fill("-1"); await page.getByLabel("Available stock", { exact: true }).fill("1.5");
  await page.getByRole("button", { name: "Save changes" }).click();
  await expect(page.getByRole("alert")).toBeFocused();
  await expect(page).toHaveScreenshot("form-errors.png", { fullPage: true });
  await expect(page.getByLabel("Product name", { exact: true })).toHaveAttribute("aria-invalid", "true");
  await page.getByRole("link", { name: "Enter a product name." }).click();
  await expect(page.getByLabel("Product name", { exact: true })).toBeFocused();
  await page.getByLabel("Product name", { exact: true }).fill("Updated canvas tote"); await page.getByLabel("Price (USD)").fill("42.50"); await page.getByLabel("Available stock", { exact: true }).fill("25");
  await page.getByLabel("Simulate a save failure once").check(); await page.getByRole("button", { name: "Save changes" }).click();
  await expect(page.getByRole("button", { name: "Saving…" })).toBeDisabled();
  await expect(page.getByRole("alert")).toContainText("Demo save failed");
  await expect(page).toHaveScreenshot("form-save-error.png", { fullPage: true }); await expect(page.getByLabel("Product name", { exact: true })).toHaveValue("Updated canvas tote");
  await page.getByRole("button", { name: "Save changes" }).click();
  await expect(page.getByRole("heading", { name: "Updated canvas tote", exact: true })).toBeVisible();
  await expect(page.locator(".stark-notification-stack").getByText("Product saved.", { exact: false })).toBeVisible();
  await page.getByRole("link", { name: "Edit product" }).click(); await page.getByLabel("Product name", { exact: true }).fill("Discarded title"); await page.getByRole("button", { name: "Cancel", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Updated canvas tote", exact: true })).toBeVisible();
  await page.getByRole("link", { name: "All products", exact: false }).click();
  await expect(rows(page).first()).toContainText("Updated canvas tote");
  await page.reload(); await expect(rows(page).first()).toContainText("Everyday canvas tote");
});

test("detail header remains below the top navigation while scrolling", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 700 });
  await page.goto(fixture("/admin/products/product-1"));
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await expect.poll(async () => Math.round((await page.locator(".stark-detail-header").boundingBox())!.y)).toBe(56);
  await expect(page.locator(".stark-admin-topbar")).toHaveCSS("top", "0px");
});

for (const preference of ["no-preference", "reduce"] as const) {
  test(`mobile navigation, touch sizing and overlay motion (${preference})`, async ({ browser }) => {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true, reducedMotion: preference });
    const page = await context.newPage();
    await page.goto(fixture());
    const trigger = page.getByRole("button", { name: "Open navigation", exact: true });
    await trigger.tap();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    if (preference === "reduce") await expect(dialog).toHaveCSS("transform", "none");
    await page.screenshot({ path: test.info().outputPath(`navigation-${preference}.png`) });
    await page.keyboard.press("Escape"); await expect(trigger).toBeFocused();
    await trigger.focus(); await page.keyboard.press("Enter"); await expect(dialog).toHaveCSS("transition-duration", "0s");
    await dialog.getByRole("link", { name: "Form template" }).click(); await expect(dialog).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "Edit product", exact: true })).toBeVisible();
    await page.getByRole("button", { name: "Cancel", exact: true }).click();
    await expect(page.locator(".stark-detail-columns")).toHaveCSS("grid-template-columns", "358px");
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.goto(fixture());
    const toolbarBefore = await page.locator(".stark-table-toolbar").boundingBox();
    await page.getByRole("searchbox").fill("lamp");
    const reset = page.getByRole("button", { name: "Clear filters", exact: true });
    expect((await reset.boundingBox())!.height).toBeGreaterThanOrEqual(44);
    expect(await page.locator(".stark-table-toolbar").boundingBox()).toEqual(toolbarBefore);
    await reset.tap();
    await expect(page.getByRole("searchbox")).toHaveValue("");
    expect(await page.locator(".stark-table-toolbar").boundingBox()).toEqual(toolbarBefore);
    await page.getByRole("button", { name: "Columns", exact: true }).tap();
    const columns = page.getByRole("dialog");
    if (preference === "reduce") await expect(columns).toHaveCSS("transform", "none");
    await columns.getByLabel("Product width", { exact: true }).fill("350"); await page.keyboard.press("Enter"); await page.keyboard.press("Escape");
    await expect(page.getByRole("columnheader", { name: "Product" })).toHaveCSS("width", "350px");
    await page.getByRole("button", { name: "Columns", exact: true }).tap();
    await page.getByRole("dialog").getByLabel("Product width", { exact: true }).fill("200"); await page.keyboard.press("Enter"); await page.keyboard.press("Escape");
    const handle = page.locator("th").nth(1).locator(".stark-column-resizer");
    await handle.scrollIntoViewIfNeeded();
    const box = (await handle.boundingBox())!;
    const session = await context.newCDPSession(page);
    const point = { x: box.x + box.width / 2, y: box.y + 20 };
    await session.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [point] });
    await session.send("Input.dispatchTouchEvent", { type: "touchMove", touchPoints: [{ x: point.x + 40, y: point.y }] });
    await session.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
    await expect.poll(async () => (await page.getByRole("columnheader", { name: "Product" }).boundingBox())?.width).toBeGreaterThan(200);
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await context.close();
  });
}

test("empty, loading, no-results, error retry and unknown product states", async ({ page }) => {
  for (const [variant, message] of [["empty", "Your collection starts here."], ["loading", "Loading records…"], ["no-results", "No results match"]]) {
    await page.goto(fixture("/admin/products", `&variant=${variant}`)); await expect(page.getByText(message, { exact: false })).toBeVisible();
  }
  await page.goto(fixture("/admin/products", "&variant=error")); await expect(page.getByRole("alert")).toContainText("couldn’t load");
  await page.getByRole("button", { name: "Try again" }).click(); await expect(rows(page)).toHaveCount(10);
  await page.goto(fixture("/admin/products/missing")); await expect(page.getByRole("heading", { name: "Product not found" })).toBeVisible();
});

for (const width of [1440, 390]) {
  for (const [name, path] of [["index", "/"], ["login", "/login"], ["list", "/admin/products"], ["detail", "/admin/products/product-1"], ["form", "/admin/products/product-1/edit"]]) {
    test(`template visual ${name} at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: width === 390 ? 844 : 1000 }); await page.goto(fixture(path)); await page.evaluate(() => document.fonts.ready);
      if (name === "form" || name === "detail") {
        const header = page.locator(name === "form" ? ".stark-form-page > header" : ".stark-detail-header");
        const back = header.getByRole("link").first();
        const content = await back.locator("span").boundingBox();
        const bounds = await header.boundingBox();
        expect(content!.x).toBe(bounds!.x);
        expect((await back.boundingBox())!.height).toBe(content!.height);
        expect(await back.evaluate(element => getComputedStyle(element, "::before").minHeight)).toBe("44px");
      }
      await expect(page).toHaveScreenshot(`${name}-${width}.png`, { fullPage: true });
    });
  }
}

for (const variant of ["loading", "empty", "no-results", "error"]) {
  test(`list visual state ${variant}`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 }); await page.goto(fixture("/admin/products", `&variant=${variant}`));
    await expect(page).toHaveScreenshot(`list-${variant}.png`, { fullPage: true });
  });
}

test("long title, missing image and optional supporting column", async ({ page }) => {
  await page.goto(fixture("/admin/products/product-1", "&edge")); await expect(page.getByRole("img", { name: "No image" })).toBeVisible();
  await expect(page).toHaveScreenshot("detail-long-title.png", { fullPage: true });
  await page.goto(fixture("/admin/products/product-1", "&edge=single")); await expect(page.getByRole("complementary", { name: "Supporting controls" })).toHaveCount(0);
  await expect(page).toHaveScreenshot("detail-single-column.png", { fullPage: true });
});

for (const reducedMotion of ["no-preference", "reduce"] as const) {
  test(`compact template back links support keyboard navigation (${reducedMotion})`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion });
    await page.goto(fixture("/admin/products/product-1/edit"));
    const back = page.getByRole("link", { name: "← Back to product", exact: true });
    await back.hover();
    await expect(back).toHaveCSS("text-decoration-line", "underline");
    await back.focus();
    await expect(back).toHaveCSS("transform", "none");
    await expect(back).toHaveCSS("box-shadow", /rgb/);
    await page.keyboard.press("Enter");
    await expect(page.locator(".stark-detail-page")).toBeVisible();
    await page.getByRole("link", { name: "← All products", exact: true }).focus();
    await page.keyboard.press("Enter");
    await expect(page.getByRole("heading", { name: "Products", exact: true })).toBeVisible();
    await page.goto(fixture("/admin/products/product-1/edit"));
    const bounds = await back.boundingBox();
    // Click outside the visible ring, inside the enlarged target.
    await page.mouse.click(bounds!.x + bounds!.width / 2, bounds!.y - 4);
    await expect(page.locator(".stark-detail-page")).toBeVisible();
  });
}


for (const reducedMotion of ["no-preference", "reduce"] as const) {
  test(`template feedback uses dismissible notifications across navigation (${reducedMotion})`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion });
    await page.goto(fixture("/admin/products/product-1"));
    await page.getByLabel("Published", { exact: true }).check();
    const notifications = page.locator(".stark-notification-stack");
    await expect(notifications.getByText("Publishing status updated in this demo.", { exact: true })).toBeVisible();
    await page.getByRole("link", { name: "Edit product", exact: true }).click();
    await expect(notifications.getByText("Publishing status updated in this demo.", { exact: true })).toBeVisible();
    await notifications.getByRole("button", { name: "Close toast" }).click();
    await expect(notifications.locator(".stark-notification")).toHaveCount(0);
    await page.getByLabel("Product name", { exact: true }).fill("");
    await page.getByRole("button", { name: "Save changes", exact: true }).click();
    const summary = page.getByRole("alert");
    await expect(summary).toBeFocused();
    await summary.getByRole("link", { name: "Enter a product name.", exact: true }).click();
    await expect(page.getByLabel("Product name", { exact: true })).toBeFocused();
  });
}
