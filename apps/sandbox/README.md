# Stark sandbox

This Next.js app exercises the built local `stark-lib` package.

From the repository root:

```sh
npm ci
npm run dev:sandbox
```

Open http://localhost:3000. Run `npm run build:sandbox` to verify the production build. Global CSS uses the same `stark-lib/styles.css` entry that a consuming project would use.
