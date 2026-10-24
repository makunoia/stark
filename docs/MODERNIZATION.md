# Modernization review

The upgrade targets stable npm releases verified on October 19, 2026: React 19.3.1, Tailwind CSS 4.3.3, Storybook 10.6.2, Next.js 16.4.2, Vite 8.3.4 and TypeScript 7.0.2. The lockfile pins the installed dependency graph. TypeScript 7 handles CLI checks and declarations; the official TypeScript 6 compatibility alias supplies the compiler API used by Next.js and Storybook.

## Component review

| Component | Implementation updates | Compatibility |
| --- | --- | --- |
| Button | Client boundary, busy state, decorative loader semantics, current shadow utility | Existing intent, size, icons, fullWidth, attached, disabled/loading behavior and refs retained |
| IconButton | Same updates, explicit outline width, exported props | Icon dimensions, intent colors and attached styling retained |
| TextButton | Client boundary, busy state, loader semantics, exported props | Existing label, underline, intents, sizes and spacing retained |
| Input | Consumes library-only props, generated stable IDs, help/error associations, className support, password toggle cannot submit forms and respects disabled state | Existing input types, adornments, loading, readOnly, errors, attached actions and input refs retained |
| Text | ReactNode children, native HTML attributes, typed labels, corrected Radix label branch, exported props | Existing elements, font family, sizes, weights, leading and semantic colors retained |
| Stack | Native div attributes, explicit horizontal direction, current grow utility, exported props | Existing default vertical layout, horizontal/asChild, spacing, width and alignment retained |

`forwardRef` stays in place because it remains supported by React 19 and keeps React 18 consumers compatible. The API is not rewritten solely to use React 19's ref-as-prop feature.

## Styling and distribution

Tailwind 4 changes reset styles and shadow/outline names. The migration uses equivalent utilities and compatibility reset rules, preserving Stark's original token values. The plugin explicitly registers separate semantic background, text, border, ring, outline and icon color groups, including opacity modifiers. It remains a small JavaScript plugin because those groups intentionally share names with different values.

The global stylesheet imports Tailwind, tokens and the plugin and registers the built library as a class source. The original WOFF, WOFF2 and TTF font assets and token values are packaged unchanged. The sandbox uses the same bundled Geist font so the sandbox and consuming apps share one font asset.

The old UMD/TypeScript dual build is replaced by an ESM/CommonJS build with external runtime dependencies and standalone declarations. Package exports and the `files` allowlist prevent archived source and development assets from being published. The sandbox now resolves the local workspace package rather than a separately locked npm version. Turbo builds dependencies first. The sandbox uses Next.js’s supported Webpack builder: Turbopack’s PostCSS worker could not bind its internal port in the restricted execution environment. This changes the build path, not the rendered application.

## Regression checks

The visual fixtures cover all three button components across seven intents, three sizes, disabled states, icons and attachment; input variants and focus; every typography size/weight and line-height; and vertical/horizontal stacks. Baseline images come from the original React 18/Tailwind 3 sources, compiled before dependency replacement. Interaction checks cover editing, forwarded input refs, password reveal without submission, loading/disabled controls, help/error associations and Slot composition.

Run `npm run build:package && npm test`. Visual baselines are browser/platform-specific; review screenshot diffs before accepting updates with `npm run test:update`. Playwright traces and diff images are retained on failure.

The original archive folders remain historical references. Their active replacements and migrated stories are now included in the library and Storybook; see [Component consolidation](COMPONENTS.md).

The package is prepared as version 0.2.0 because the Tailwind peer and stylesheet setup change. No package is published and no site is deployed by this migration. Accidentally tracked library and Storybook build outputs are removed from source control; the build and test scripts regenerate them.

Migration references: [Tailwind upgrade guide](https://tailwindcss.com/docs/upgrade-guide), [Storybook migration guide](https://storybook.js.org/docs/releases/migration-guide), and [Microsoft's TypeScript 6/7 compatibility setup](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-60).

## Validation results

- A clean install from the lockfile and package lifecycle rebuild succeeded.
- `npm run check` passed: public component, sandbox and tooling type checks; library, Storybook and sandbox production builds; and all nine Playwright tests on Chromium 156.
- Nine screenshot baselines cover the original component variants, hover, active, keyboard focus and password reveal states. The input focus baseline intentionally removes the unwanted native inner blue outline; the container keeps its focus indicator. Overflow fade behavior is also checked under normal and reduced-motion preferences.
- Both ESM and CommonJS imports render on the server. Package inspection confirms that declarations, styles and all original fonts ship, while archived code does not.
- The built Storybook rendered all six public component stories and its documentation page. The production sandbox accepted input and handled its button action without browser errors.
