import { build } from "esbuild";
import { cp, mkdir, rm, readdir, readFile } from "node:fs/promises";
import { dirname, relative } from "node:path";

const root = new URL("../package/stark/", import.meta.url);
const dist = new URL("dist/", root);
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
async function sourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const groups = await Promise.all(entries.filter(entry => entry.name !== "archive").map(entry => {
    const file = new URL(entry.name + (entry.isDirectory() ? "/" : ""), directory);
    return entry.isDirectory() ? sourceFiles(file) : /\.tsx?$/.test(entry.name) ? [file.pathname] : [];
  }));
  return groups.flat();
}
const entryPoints = await sourceFiles(new URL("src/", root));
for (const [format, extension] of [["esm", "js"], ["cjs", "cjs"]]) {
  await build({
    entryPoints: entryPoints.map(file => ({ in: file, out: relative(new URL("src/", root).pathname, file).replace(/\.tsx?$/, "") })),
    outdir: dist.pathname,
    outbase: new URL("src/", root).pathname,
    outExtension: { ".js": `.${extension}` },
    bundle: true,
    packages: "external",
    platform: "browser",
    target: "es2022",
    format,
    sourcemap: true,
    jsx: "automatic",
    // Keep local module boundaries for tree shaking, while inlining JSON assets.
    plugins: [{ name: "preserve-library-modules", setup(builder) {
      if (format === "cjs") {
        // The input package is ESM, but these neighbours are generated CJS.
        // A virtual source namespace uses __esModule interop for local defaults
        // rather than Node's ESM-to-CJS default-is-module.exports convention.
        builder.onResolve({ filter: /.*/ }, args => args.kind === "entry-point" ? { path: args.path, namespace: "stark-commonjs" } : undefined);
        builder.onLoad({ filter: /.*/, namespace: "stark-commonjs" }, async args => ({
          contents: await readFile(args.path, "utf8"),
          loader: args.path.endsWith(".tsx") ? "tsx" : "ts",
          resolveDir: dirname(args.path),
        }));
      }
      builder.onResolve({ filter: /^\.{1,2}\// }, args => {
        if (args.path.endsWith(".js")) return { path: args.path.replace(/\.js$/, `.${extension}`), external: true };
      });
    } }],
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
for (const name of ["tokens.css", "styles.css", "typography.css", "text.css"]) {
  await cp(new URL(`src/${name}`, root), new URL(name, dist));
}
await cp(new URL("src/fonts/", root), new URL("fonts/", dist), { recursive: true });
console.log("Built Stark ESM, CommonJS, Tailwind plugin and styles.");
await cp(new URL("tailwind.plugin.d.ts", root), new URL("tailwind.plugin.d.ts", dist));
