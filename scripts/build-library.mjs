import { build } from "esbuild";
import { cp, mkdir, rm } from "node:fs/promises";

const root = new URL("../package/stark/", import.meta.url);
const dist = new URL("dist/", root);
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
for (const [format, extension] of [["esm", "js"], ["cjs", "cjs"]]) {
  await build({
    entryPoints: [new URL("src/index.ts", root).pathname],
    outfile: new URL(`index.${extension}`, dist).pathname,
    bundle: true,
    packages: "external",
    platform: "browser",
    target: "es2022",
    format,
    sourcemap: true,
    jsx: "automatic",
  });
}
await build({
  entryPoints: [new URL("tailwind.plugin.ts", root).pathname],
  outfile: new URL("tailwind.plugin.js", dist).pathname,
  bundle: true,
  packages: "external",
  platform: "node",
  target: "es2022",
  format: "esm",
});
for (const name of ["tokens.css", "styles.css"]) {
  await cp(new URL(`src/${name}`, root), new URL(name, dist));
}
await cp(new URL("src/fonts/", root), new URL("fonts/", dist), { recursive: true });
console.log("Built Stark ESM, CommonJS, Tailwind plugin and styles.");
await cp(new URL("tailwind.plugin.d.ts", root), new URL("tailwind.plugin.d.ts", dist));
