# Stark library development

## Animation skills

Use the installed animations.dev skill pack throughout component development. For each component task, consider whether motion is involved and load the relevant guidance before implementing or changing it.

The skills live under `$CODEX_HOME/skills` (normally `~/.codex/skills`). Read the actual skill files and any relevant companion references:

- `animate/SKILL.md`: motion decisions, purpose, timing, easing and interruptibility.
- `css-animations/SKILL.md`: CSS transitions and animation implementation.
- `motion-react/SKILL.md`: Motion for React when the interaction needs it.
- `animation-accessibility/SKILL.md`: reduced-motion behavior and its verification.
- `animation-performance/SKILL.md`: animation properties, rendering cost and profiling.
- `review-animations/SKILL.md`: review motion changes before completing a component task.

Use the other installed pack skills when relevant, including debugging, gestures, scroll motion, animation opportunities and motion briefs.

Preserve the library's existing appearance, public props, layout and interaction behavior during modernization. Apply motion improvements within the component task's scope; adopting a skill alone is not a request to redesign existing animations.

Prefer purposeful, restrained motion. Use CSS for simple transitions, keep rapidly repeated interactions responsive, and avoid unbounded `transition: all` in new motion code. Verify both normal and reduced-motion behavior whenever changing animations, including loaders. Assess touch and keyboard behavior as well as pointer interactions.

Run the applicable component checks and compare existing visual baselines. For implementation changes, `npm run check` runs type checks, production builds and regression tests. Review unexpected screenshot differences instead of regenerating baselines to hide them.

Keep installation tokens and the licensed skill files outside the repository. Reference the locally installed skills rather than copying their contents into project documentation.
