# Component consolidation

Stark has one active component catalog. Storybook groups components by purpose:
Actions, Inputs, Data Display, Layout, Navigation, Feedback, Overlays and Templates.
There is no separate Restored group or active restored-story directory.

The original archive remains an excluded historical reference. Active controls
use the shared action fills, rounded corners, softly filled badges, bordered fields,
selected-value badges and green switch styling. Current capabilities remain
available through the consolidated APIs.

## Shared implementations and compatibility

| Canonical component | Consolidated names and behavior |
| --- | --- |
| Button | One action renderer handles solid, outline and text variants; accepts intent/color, loading/isLoading, legacy presentation types, icons, attachment and link composition |
| IconButton, TextButton | Convenience components use the same action renderer, styles, loading feedback and disabled/link semantics; compact text actions retain their larger hit area |
| Badge | Soft filled/outlined semantic colors, 24px height and 8px side padding; circular/dismissible styles, icon slots and status indicators share one implementation |
| TextField / Input / Textarea | One field layout and native input implementation; TextField routes text/password fields through Input and multiline fields through Textarea; loading, refs, controlled values, label actions, adornments and attached actions are retained |
| Select / Dropdown | One accessible selection engine; Select retains string/number values and onChange, while Dropdown retains string values and onValueChange; both support reset, validation, disabled options and multi-selection |
| Checkbox, RadioButton, Switch | Shared native choice renderer; Checkbox retains mixed and contained states; Switch supports native onChange and boolean onCheckedChange |
| RadioGroup, OptionGroup | Compose the shared native choice controls while retaining their fieldset/string-value and array-value contracts |

`LegacyBadge` is a deprecated alias of Badge. `LegacyButton` and
`LegacyIconButton` are thin adapters that preserve their archived non-submit
default; the canonical Button/IconButton retain native form-submit defaults.
All share one action renderer. `LegacySwitch` adapts its boolean callback. Existing imports keep working; new code should
use Button, IconButton, Badge and Switch with onCheckedChange.

Select encodes typed values internally so numeric `0` and string `"0"` remain
independent selections. FormData receives their original serialized values,
without leaking internal keys. Native required validation and form reset use the
same engine as Dropdown.

## Examples

```tsx
import { Button, Badge, TextField, Select, Switch } from "stark-lib";

<Button variant="outline" color="primary" label="Save" />
<Badge color="success" variant="outline" label="Published" dismissible onDismiss={removeFilter} />
<Badge intent="success" variant="status" appearance="outline" label="Published" />
<TextField label="Email" type="email" loading={checking} error={errorMessage} />
<Select label="Quantity" options={[{ value: 0, label: "None" }, { value: 1, label: "One" }]} />
<Switch label="Notifications" checked={enabled} onCheckedChange={setEnabled} />
```

Storybook includes one page per canonical component plus compatibility examples
on the TextField and Select pages. Previously missing Tooltip, DropdownMenuItem,
DataTable, AdminLayout, PageSection and individual page-template stories are now
included. Providers have dedicated pages demonstrating their hooks.

## Validation and visual review

Run `npm run check` for type checks, production builds and browser regressions.
The catalog contains 191 Storybook examples across 43 pages. Browser regressions
cover compatibility, alignment, motion and composed templates. The tab underline
change preserves the reviewed visual baselines without updates.
The Storybook smoke check visits every active example and requires one source
page per component title, coverage for the public catalog and no Restored group.
Compatibility tests verify badge alias identity, button submit defaults, shared field styling, refs, callbacks,
typed selections, native FormData and reset behavior in both motion modes.
Alignment regressions compare input prefixes and icon centers across all button
sizes, SVG and icon-font content, and badges. Icon slots use explicit unitless
line heights; phone examples no longer carry archived positional offsets.

Visual changes are intentional: flatter bordered buttons, restored corner sizes,
medium-weight badge text that preserves label casing, roomier field spacing, selected-value badges and
green switch states. These also update composed page-template screenshots.
Screenshot differences are reviewed before accepting the new baselines; behavior
assertions remain in place.

TabGroup uses Motion shared layout transitions for the default underline, with a
unique LayoutGroup per instance and a 240ms spring without bounce. Pointer and
touch selection animate position and width through transforms; keyboard and
reduced-motion selection use a static underline. Pill tabs retain their existing
style. The AnimatedUnderline story demonstrates unequal labels and icons.

## Motion review

| Before | After | Why |
| --- | --- | --- |
| Separate button renderers and loaders | Shared action rendering and existing bounded press/hover feedback | All action variants use the same responsive behavior |
| Separate input/password state | One native input and reveal action | Keeps loading geometry, focus and reveal behavior consistent |
| Parallel select implementations | One selection engine with immediate navigation | Preserves keyboard responsiveness, validation and reset |
| Static active tab border | Scoped shared underline with an interruptible spring and static keyboard/reduced-motion path | Tracks the selected tab without changing panel or focus behavior |
| Brand switch fill without original marks | Original success fill and on/off marks with existing interruptible thumb transition | Restores appearance without changing gesture or keyboard state handling |

Verdict: approve. No new layout animation or unbounded transitions; normal and
reduced-motion behavior is verified alongside touch and keyboard interactions.


## Typography ownership

Active component copy uses Text, while native input values and rich editor
content use shared typography styles and tokens. Icon sizing, decorative marks,
layout containers and consumer-supplied content are deliberate exceptions to a
Text-element rule. Text supports semantic tags, typed refs, asChild, inherited
styles and semantic tones. New text-bearing components should use Text or
textStyles instead of introducing another typography scale.

The build preserves module boundaries for tree shaking. Use `stark-lib/text`
for server-compatible typography and `stark-lib/text.css` for a typography-only
stylesheet; the existing full catalog and stylesheet imports remain supported.
Regression checks cover native label activation, semantic heading levels,
composition/ref cleanup, inherited styles, a server-conditions import and a
Text-only bundle budget in addition to the existing visual baselines.


## Select popup styling

Select, Dropdown and Combobox share popup surface and option styles. Single
selection uses a trailing checkmark; multi-selection uses checkable rows that
stay open while toggling. The multi-select footer remains visible while options
scroll, and reports the selection count with Clear selection and Done actions.
`Select` also accepts `showSelectedBadges={false}` for compact forms, matching
Dropdown's existing option. Compact mode shows the first selected value and a
`+N` count inside the trigger. Table filters use this mode with hidden visual
labels; their accessible names and checkable menu options remain available.

Option navigation stays immediate in normal and reduced-motion modes. Shared
rows retain a visible inset keyboard focus ring and 44px minimum touch targets.
Visual review accepts the intentional popup changes; closed fields, Combobox,
and the rest of the component catalog retain their existing baselines.
