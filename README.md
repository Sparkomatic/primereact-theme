# PrimeReact Theme

## Design System Theming Approach: Custom Theme Layer with Token Mapping

### Why This Approach?

For a robust, scalable, and maintainable production design system, we use a **custom theme layer that maps design tokens (from Figma or another source) to the actual CSS/SCSS used by each PrimeReact component**. This approach is inspired by modern design system best practices (e.g., Material, Atlassian, IBM Carbon) and ensures:

- **Single source of truth:** All design decisions (colors, spacing, typography, etc.) are defined as tokens, ideally exported from Figma or a design token manager.
- **Component-level control:** Each component (e.g., InputText, InputNumber) can have unique tokens for padding, color, etc., matching the design system precisely.
- **Scalability:** Easy to update, extend, or automate as the design system grows or as new components are added.
- **Maintainability:** Changes in design tokens automatically propagate to the theme, reducing manual overrides and technical debt.
- **Future-proofing:** The system can adapt to changes in PrimeReact or even be ported to other UI libraries.

### How This Guides Problem-Solving

- **All theming and styling work should start from the design tokens.**
- **Do not rely on global or shared SCSS variables for all components.** Instead, map tokens to each component as needed.
- **Automate the mapping:** Use scripts or tools (e.g., Style Dictionary) to generate the required SCSS/CSS for each component from the tokens.
- **Avoid ad-hoc CSS selector overrides** unless absolutely necessary (e.g., for third-party or legacy components).
- **Document mappings and decisions** so the system remains transparent and easy to maintain.

### Implementation Overview

1. **Define tokens** in a central location (e.g., `tokens/tokens.json`).
2. **Map tokens to component styles** in a mapping file (e.g., `theme-mapping/theme-mapping.ts`).
3. **Generate SCSS/CSS** for each component using a build script (e.g., `scripts/generate-css.ts`).
4. **Import the generated theme** in your app.
5. **Update tokens and mappings** as the design system evolves.

---

## Demo: Per-Component, Per-Variant Theming Proof of Concept

### Overview

The demo app (`demo/` folder) now uses a **per-component, per-variant theming approach**. All theming is handled by `component-theme.css`, which defines CSS custom properties (variables) for each PrimeReact component and variant (e.g., primary, secondary, success buttons, etc.).

- **The old `theme-override.css` file is deprecated and has been removed.**
- **No global or root-level CSS variables are used for theming.**
- **All component styling is now explicit and local to each component class.**

### How It Works

- Each component (Button, InputText, Dropdown, Checkbox, TabView, Calendar, etc.) has its own CSS variables defined in `component-theme.css`.
- Button variants (primary, secondary, success, info, warning, danger) each have unique background and hover colors, set via variables.
- You can experiment by editing `component-theme.css` and changing the variable values for any component or variant. Changes will be reflected immediately in the demo UI.
- This structure simulates the output of a real design token-to-component mapping pipeline, and is ready to be automated in the future.

### Example

```css
/* Button - Per Severity */
.p-button {
  --button-bg: #A855F7; /* Primary */
  --button-text: #fff;
  --button-bg-hover: #9333ea;
  --button-bg-active: #7c3aed;
  background: var(--button-bg) !important;
  color: var(--button-text) !important;
  border-color: var(--button-bg) !important;
}
.p-button.p-button-secondary {
  --button-bg: #6b7280;
  --button-bg-hover: #4b5563;
  --button-bg-active: #374151;
}
/* ...etc. */
```

### Next Steps

- To extend this proof of concept, add more variables or components to `component-theme.css`.
- When ready, replace the hardcoded values with generated output from your design token pipeline.

---

A theme package for PrimeReact, powered by design tokens and component mapping.

## Installation

```sh
npm install primereact-theme
```

## Usage

1. Import the generated CSS in your app's main style file:
   ```css
   @import 'primereact-theme/dist/theme.css';
   ```
2. (Optional) Use the tokens or mapping in your build process.

## Development

- Edit `tokens/tokens.json` to update design tokens.
- Edit `theme-mapping/theme-mapping.ts` to map tokens to component variables.
- Run `npm run build` to generate `dist/theme.css`.
- Use the `demo/` app to test your theme.

## Contributing

Pull requests welcome! Please open an issue first to discuss major changes.
