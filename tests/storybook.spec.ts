import { expect, test } from "@playwright/test";
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, resolve, sep } from "node:path";
const root = resolve("apps/storybook/storybook-static");
test("the consolidated Storybook catalog covers each component without duplicate pages", async ({
  page,
}) => {
  test.skip(
    !existsSync(resolve(root, "index.json")),
    "Run npm run build:storybook to verify the built stories.",
  );
  test.setTimeout(240_000);
  const mime: Record<string, string> = {
    ".html": "text/html",
    ".js": "application/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".woff2": "font/woff2",
    ".woff": "font/woff",
    ".svg": "image/svg+xml",
    ".png": "image/png",
  };
  const server = createServer(async (request, response) => {
    const file = resolve(
      root,
      "." + new URL(request.url!, "http://localhost").pathname,
    );
    if (!file.startsWith(root + sep)) {
      response.writeHead(403).end();
      return;
    }
    try {
      const target = (await stat(file)).isDirectory()
        ? resolve(file, "index.html")
        : file;
      response.setHeader(
        "Content-Type",
        mime[extname(target)] ?? "application/octet-stream",
      );
      response.end(await readFile(target));
    } catch {
      response.writeHead(404).end();
    }
  });
  await new Promise<void>((done) => server.listen(0, "127.0.0.1", done));
  const address = server.address();
  if (!address || typeof address === "string")
    throw new Error("Missing server address");
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const index = JSON.parse(await readFile(resolve(root, "index.json"), "utf8"));
  const stories = Object.values(
    index.entries as Record<
      string,
      { id: string; type: string; title: string; importPath: string }
    >,
  ).filter((entry) => entry.type === "story");
  const titles = new Set(stories.map((story) => story.title));
  expect([...titles].some((title) => title.startsWith("Restored/"))).toBe(
    false,
  );
  const required = [
    "Actions/Button",
    "Actions/IconButton",
    "Actions/TextButton",
    "Actions/Menu",
    "Data Display/Badge",
    "Data Display/Avatar",
    "Data Display/Overline",
    "Data Display/StatusIndicator",
    "Data Display/RemixIcon",
    "Data Display/Text",
    "Data Display/DataTable",
    "Inputs/TextField",
    "Inputs/Textarea",
    "Inputs/Select",
    "Inputs/Combobox",
    "Inputs/MaskedInput",
    "Inputs/RichTextField",
    "Inputs/Checkbox",
    "Inputs/Switch",
    "Inputs/RadioButton",
    "Inputs/RadioGroup",
    "Inputs/OptionGroup",
    "Layout/Card",
    "Layout/Stack",
    "Layout/AdminLayout",
    "Navigation/Tab",
    "Navigation/TabGroup",
    "Navigation/DropdownMenuItem",
    "Overlays/Modal",
    "Overlays/Tooltip",
    "Feedback/Alert",
    "Feedback/Banner",
    "Feedback/Toast",
    "Feedback/AlertProvider",
    "Feedback/ToastProvider",
    "Templates/LoginTemplate",
    "Templates/ListPageTemplate",
    "Templates/DetailPageTemplate",
    "Templates/FormPageTemplate",
    "Templates/PageSection",
  ];
  for (const title of required)
    expect(titles.has(title), `${title} needs a story`).toBe(true);
  for (const title of titles)
    expect(
      new Set(
        stories
          .filter((story) => story.title === title)
          .map((story) => story.importPath),
      ).size,
      `${title} has competing pages`,
    ).toBe(1);
  try {
    for (const story of stories) {
      await page.goto(
        `http://127.0.0.1:${address.port}/iframe.html?id=${story.id}&viewMode=story`,
      );
      await expect
        .poll(
          () =>
            page
              .locator("#storybook-root")
              .evaluate((element) => element.childElementCount),
          { message: story.id },
        )
        .toBeGreaterThan(0);
      await expect(page.locator(".sb-errordisplay")).not.toBeVisible();
      expect(errors, story.id).toEqual([]);
    }
  } finally {
    server.closeAllConnections();
    await new Promise<void>((done) => server.close(() => done()));
  }
});
