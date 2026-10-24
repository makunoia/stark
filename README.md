# Stark UI

A React component library, Storybook documentation, and Next.js sandbox in one npm workspace.

Use Node.js 24.11 or newer (`nvm use`) and npm 11.

```sh
npm ci
npm run build:package
npm run storybook
# In another terminal:
npm run dev:sandbox
```

`npm run build` builds the library first, then Storybook and the sandbox. `npm run typecheck` checks the public library and sandbox. After building the library, run `npx playwright install chromium --no-shell` once, then `npm test` for visual and interaction regression checks.

See [the package README](package/stark/README.md) for installation in another project and [the migration notes](docs/MODERNIZATION.md) for the component review and compatibility details.

The archived and current components are consolidated into one active library, using the original components’ appearance and retaining compatibility APIs. Storybook groups them by purpose, with one canonical page per component. See [the component guide](docs/COMPONENTS.md) for the mapping and compatibility details.

The sandbox home page links to the login, admin product list, product details, and
edit-form templates. Storybook’s **Templates / Pages** section includes responsive
examples and loading/error/empty states. All demo records are local and reset on
refresh; see the package README for reusable template and table APIs.
