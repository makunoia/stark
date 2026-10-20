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

The public primitive components are `Button`, `IconButton`, `TextButton`, `Input`, `Checkbox`, `RadioGroup`, `Switch`, `Textarea`, `Dropdown`, `Text`, and `Stack`. Their existing variant names, dimensions and semantic tokens are retained. Give icon-only buttons an `aria-label`. Set button `type="button"` or `type="submit"` explicitly inside forms as appropriate.

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

Shadows communicate elevation on floating menus and raised surfaces such as cards.
Controls stay flat: buttons, dropdown triggers, and switch thumbs have no decorative
shadow. Focus rings remain visible to indicate keyboard focus.

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

## Page templates

`LoginTemplate`, `AdminLayout`, `ListPageTemplate`, `DetailPageTemplate`,
`FormPageTemplate`, and `PageSection` compose existing Stark controls into reusable
pages. Each exports a corresponding `*Props` type. Slots accept React content;
all templates accept `className`. They have no routing, authentication, or product
data dependency. See **Templates / Pages** in Storybook and the connected Next.js
sandbox (`/login`, `/admin/products`, `/admin/products/product-1`, and its `/edit`
route) for complete examples.

```tsx
import { AdminLayout, DetailPageTemplate, PageSection } from "stark-lib";

<AdminLayout
  branding={<strong>My workspace</strong>}
  navigation={[{ label: "Workspace", items: [
    { label: "Products", href: "/products", active: true },
  ] }]}
  breadcrumb="Products"
>
  <DetailPageTemplate title="Canvas tote"
    image={<img src="/tote.jpg" alt="" />}
    backLink={<a href="/products">All products</a>}
    actions={<a href="/products/tote/edit">Edit product</a>}
    supportingContent={<PageSection title="Publishing">Your controls</PageSection>}
  >
    <PageSection title="Overview">Your content</PageSection>
  </DetailPageTemplate>
</AdminLayout>
```

`AdminLayout` provides a 240px desktop sidebar and 64px sticky top bar. Below
1024px its navigation becomes a modal with focus trapping, Escape dismissal, and
focus restoration. Use `renderLink` to supply your framework's link component;
forward its anchor props and `onClick` so mobile navigation closes on selection.
The main content has a skip link. `DetailPageTemplate` uses a 2:1 grid that stacks
below 1024px. Its sticky header defaults to the portal's top-bar offset; outside a
portal it defaults to zero. Override `stickyOffset` when embedding under another
header. Omit `supportingContent` for a single column and `image` for a placeholder.

`LoginTemplate` owns email/password validation and temporary pending/error state.
Its `onSubmit({ email, password, rememberMe })` may return a promise; reject with
an `Error` to display a failure. `submitting` and `error` allow application-owned
states. Supply `branding`, `supportingContent`, `recoveryLink`, and `footer` for
custom content. The branding panel hides below 1024px. Connect your own auth and
recovery services; the template stores no credentials.

`FormPageTemplate` is a native form with `title`, `description`, `backLink`,
`feedback`, `actions`, and `onSubmit`. Its `submitting` prop disables the content
fieldset; disable action-slot buttons while submitting as well. `PageSection`
groups fields or content with optional `title`, `description`, and `actions`.
Validation and persistence belong to the consuming application. The demo shows
an error summary, field errors, save failure/retry, and successful navigation.

### Data table

`DataTable<T>` uses TanStack Table v8 with Stark controls and a semantic HTML table.
Supply `data`, `columns: DataTableColumnDef<T>[]`, and a stable `getRowId`. Column
IDs must be unique; `__stark_selection` is reserved. Headers should be strings for
readable column-settings labels. Add `enableHiding: false` to identity/action
columns and `enableSorting: false` to action columns.

```tsx
import { useState } from "react";
import { DataTable, type DataTableColumnDef, type DataTableState } from "stark-lib";

type Item = { id: string; name: string; status: string };
const columns: DataTableColumnDef<Item>[] = [
  { accessorKey: "name", header: "Name", size: 300, enableHiding: false },
  { accessorKey: "status", header: "Status", filterFn: "equalsString" },
];

function ProductTable({ products }: { products: Item[] }) {
  const [state, setState] = useState<DataTableState>({});
  return <DataTable data={products} columns={columns} getRowId={row => row.id}
    caption="Products" searchLabel="Search products"
    searchPredicate={(row, query) => row.name.toLowerCase().includes(query.toLowerCase())}
    filters={[{ columnId: "status", label: "Status", options: [
      { value: "Active", label: "Active" }, { value: "Draft", label: "Draft" },
    ] }]}
    enableSelection state={state} onStateChange={setState}
    bulkActions={(selected, clear) => <button type="button" onClick={() => {
      console.log(selected); clear();
    }}>Apply action</button>}
  />;
}
```

Omit `state`/`onStateChange` for internal state, or supply a partial controlled
`state` and handle the next complete state via `onStateChange`. `initialState`
sets uncontrolled defaults. Search and filter changes clear selection and return
to page one. Select-all targets the current page; selected row IDs survive
pagination. The table handles client-side data only; supply the complete dataset.
Rows per page default to 10, with 25 and 50 available. Sorting is single-column and starts in ascending order.

Search, sorting, pagination, column sizing, and column visibility are enabled by
default; toggle `searchable`, `enableSorting`, `enablePagination`,
`enableColumnResizing`, or `enableColumnVisibility`. Selection is opt-in. Columns
resize on release using pointer/touch handles; double-click resets an individual
width. Keyboard users can edit pixel widths in **Columns** (apply with Enter or blur), toggle visibility,
and reset widths/visibility. Set per-column `minSize`, `maxSize`, and `size` for
constraints. Preferences remain in memory. Tables scroll horizontally inside
their container on narrow screens.

Use `loading`, `error`, `onRetry`, `emptyContent`, and `noResultsContent` for state
feedback. `ListPageTemplate` supplies the page `title`, `description`, `actions`,
and optional `toolbar`; the table owns its own search/filter/column toolbar.

Mobile navigation uses short CSS entrance transitions; keyboard-triggered
navigation and the frequently used column settings appear immediately. Reduced
motion removes navigation travel and preserves a brief fade.
There are no animated table updates or looping template loaders.

## Dropdown

`Dropdown` is Stark's selection field. It composes Stark `Button` and `TextButton`
with Radix Select (single selection) or a Radix checkable menu (multiple selection).
Both modes support visible/hidden labels, placeholders, disabled options,
`helpText`, `error`, `required`, native form submission/reset, and a button ref.
Option values must be unique, nonempty strings.

```tsx
import { Dropdown, type DropdownOption } from "stark-lib";

const categories: DropdownOption[] = [
  { value: "accessories", label: "Accessories" },
  { value: "lighting", label: "Lighting" },
  { value: "homeware", label: "Homeware" },
];

<Dropdown label="Category" name="category" options={categories}
  defaultValue="accessories" required clearable={false} fullWidth />

<Dropdown label="Categories" name="categories" options={categories}
  multiple defaultValue={["accessories", "lighting"]} />
```

Single-select `value`, `defaultValue`, and `onValueChange` use a string; an empty
string clears the selection. With `multiple`, they use `string[]`; `[]` clears the
selection. Supply `value`/`onValueChange` for controlled state or `defaultValue` for
uncontrolled state. Uncontrolled fields reset to their defaults on native form
reset. For controlled fields, reset your values in the form's `onReset` handler.
A named multi-select submits repeated entries, available through
`new FormData(form).getAll(name)`. Disabled fields are omitted from submission.
An empty required field prevents submission and focuses the first invalid field.

Single selection closes after choosing an option. Multi-selection stays open
while toggling; use Done, Escape, or an outside click to dismiss. Arrow keys,
Home/End, and typeahead navigate options; Enter/Space select. Disabled options are
skipped. Dropdown triggers do not scale on press. Option focus rings draw inside each item
so they remain visible in scrolling menus. Selection and keyboard navigation are
immediate. `className` styles the trigger; `containerClassName` styles the field
wrapper. `hideLabel` retains an accessible name; descriptions compose with caller
`aria-describedby` IDs.

Templates use single-select Dropdowns for category, publishing status, and page
size, and a multi-select status filter in the product list. Set
`DataTableFilter.multiple: true` for array-valued filters and provide a column
`filterFn` that accepts those arrays. `placeholder` can customize a filter's
unselected label. Column visibility/width controls remain in their own settings
popover because they combine checkboxes and numeric width inputs.

## Button links

`Button` and `TextButton` support `asChild` for navigation actions, sharing their
usual appearance, icons, focus, disabled state, and motion with a single child
anchor or router link. This preserves link semantics without nesting controls.

```tsx
<Button asChild label="Edit product" intent="primary">
  <a href="/products/tote/edit" />
</Button>
<TextButton asChild label="All products">
  <a href="/products" />
</TextButton>
```

The component renders its label/icons inside the child, so child text is not
needed. Pass routing props (such as `href`) to the child. Disabled link buttons
use `aria-disabled`, leave the tab order, and prevent both navigation and click
callbacks. `TextButton.label` also accepts React content for composed controls
such as table sort headings. All actionable buttons in the page templates use
Stark `Button`, `TextButton`, or `IconButton`; sidebar navigation and template
cards retain ordinary link semantics.
