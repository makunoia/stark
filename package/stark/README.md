# Stark UI

React components with semantic design tokens and Tailwind CSS 4 styling. Supports React 18.2 and React 19. The workspace uses React 19 for development and verification.

## Installation

```sh
npm install stark-lib react react-dom tailwindcss
```

Configure Tailwind 4 with your framework's integration (`@tailwindcss/postcss` for Next.js or `@tailwindcss/vite` for Vite), then import the library stylesheet in your global CSS:

```css
@import "stark-lib/styles.css";
```

This includes Tailwind, Stark's theme, design tokens, font and component class detection. Do not import Tailwind a second time. No Tailwind JavaScript configuration or `content` path is required. See the Tailwind [Vite](https://tailwindcss.com/docs/installation/using-vite) and [PostCSS](https://tailwindcss.com/docs/installation/using-postcss) installation guides.

```tsx
import { Button, Input, Stack, Text } from "stark-lib";
import type { ButtonProps, InputProps } from "stark-lib";

export function Example() {
  return (
    <Stack gap="16px">
      <Text size="lead" weight="bold">Welcome</Text>
      <Input label="Email" type="email" fullWidth />
      <Button label="Continue" intent="primary" />
    </Stack>
  );
}
```

The public components are `Button`, `IconButton`, `TextButton`, `Input`, `Checkbox`, `RadioGroup`, `Switch`, `Textarea`, `Text`, and `Stack`. Their existing variant names, dimensions and semantic tokens are retained. Give icon-only buttons an `aria-label`. Set button `type="button"` or `type="submit"` explicitly inside forms as appropriate.

## Form controls

```tsx
import { Checkbox, RadioGroup, Switch, Textarea } from "stark-lib";

<Checkbox name="news" label="Product updates" defaultChecked />
<Switch name="push" label="Push notifications" helpText="Get project updates." />
<RadioGroup name="frequency" label="Email frequency" defaultValue="weekly"
  options={[{ value: "daily", label: "Daily" }, { value: "weekly", label: "Weekly" }]} />
<Textarea name="bio" label="Bio" optional fullWidth helpText="Introduce yourself." />
```

Checkbox and Switch accept native input attributes, input refs, `checked`/`defaultChecked`, and native `onChange` events. RadioGroup accepts unique string option values, `value`/`defaultValue`, and `onValueChange(value)`; its ref points to the fieldset. Native radio keyboard navigation, required validation, form submission, and uncontrolled form reset are retained. When controlling values, update them in your form's `onReset` handler as well.

All four controls support `label`, `helpText`, and boolean `error`, which colors the help text as an error message. Caller-provided `aria-describedby` IDs are combined with generated descriptions. Provide an `aria-label` or `aria-labelledby` when omitting a visible label. Textarea also supports Input's `hideLabel`, `optional`, and `fullWidth` conventions, native textarea attributes, and a textarea ref; its defaults are four rows, 240px width constrained to its container, and vertical resizing. Use `className` on the native input or textarea for overrides; RadioGroup's `className` applies to the fieldset.

Checkbox's `indeterminate` sets the native mixed state without changing `checked`; user activation clears the mixed state as with a native checkbox. For a controlled select-all checkbox, derive and update both props from your selected items. Pointer and touch selection draw the checkbox tick along its path in 180ms, like a handwritten check; mixed marks and radio dots use a short fade and scale. Switches have a 150ms thumb transition. Buttons and fields use brief hover color transitions, with light press feedback on standalone buttons and selection controls. Keyboard selection is instant. Reduced motion uses a fade for the checkbox tick and keeps color feedback while removing press scaling and switch travel animations.

## Customization

Override the existing HSL tokens after the import:

```css
@import "stark-lib/styles.css";

:root {
  --brand-600: 252.54deg 40.12% 32.75%;
  --corner-8px: 8px;
}
```

Use `className` for utility overrides. The semantic background and text colors intentionally differ: `bg-brand` and `text-brand` refer to separate tokens. The shipped plugin preserves this distinction in Tailwind 4.

For integrations that manage theme registration themselves, `stark-lib/tailwind.plugin` exports `Stark` and `libraryPath`, and `stark-lib/tokens.css` exposes the raw tokens. The old `stark-lib/dist/tokens.css` path remains available.

## Developing

From the repository root, run `npm ci`, then `npm run build:package`. The package ships ESM, CommonJS, declaration files, styles and local fonts. React remains an external peer dependency. `npm pack --workspace=stark-lib` builds and packages the distributable for testing in another project.

Tailwind 4 requires modern browsers (Safari 16.4+, Chrome 111+, Firefox 128+). Node.js 24.11+ is required for this repository's tooling.
