# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# Component Overrides and Design Tokens

## How It Works

This project uses a `component-overrides.css` file to provide fine-grained control over the appearance of PrimeReact components (such as Dropdown, Button, Input, etc.) by mapping CSS selectors to design token variables. These variables are defined in the design token export (e.g., `supernova-css-export/tokens.css`) and follow a consistent naming pattern.

## What You Can Do

- **Customize Any Component:** You can override the look and feel of any PrimeReact component by targeting its CSS selectors in `component-overrides.css` and assigning values from your design tokens.
- **Fine-Grained Control:** You can control backgrounds, text colors, borders, focus rings, hover states, disabled states, and more, for each component and state.
- **Design System Consistency:** By using design tokens, you ensure your UI stays consistent and on-brand, and you can update the look globally by changing token values.

## How to Use

1. **Find the Selector:** Identify the CSS selector for the component or state you want to style (e.g., `.p-dropdown-item.p-highlight` for a selected dropdown item).
2. **Map to a Token:** Assign a design token variable to the relevant CSS property. For example:
   ```css
   .p-dropdown-item.p-highlight {
     background: var(--color-components-select-option-selected-background);
     color: var(--color-components-select-option-selected-color);
   }
   ```
3. **Define/Update Tokens:** Make sure the variable is defined in your global tokens file (e.g., `tokens.css`).
4. **Repeat as Needed:** Add more selectors and token mappings for other components and states as required.

## Pros and Cons

**Pros:**
- Extremely flexible and powerful for custom theming.
- Enables full design system integration.
- Easy to update global styles by changing token values.

**Cons:**
- Can become complex and brittle if you need to map many selectors to many tokens.
- Requires knowledge of both PrimeReact’s CSS structure and your design token system.
- May need to update mappings if PrimeReact changes their class names or structure in future releases.

## Tips for Maintainability
- **Group related overrides** together in the CSS file for clarity.
- **Comment your mappings** to explain why a selector/token is used.
- **Keep your token naming consistent** and document any custom tokens you add.
- **Test changes** in the UI to ensure the correct selectors and tokens are being applied.

## Example

```css
.p-dropdown-item.p-highlight, .p-dropdown-item.p-selected {
  background: var(--color-components-select-option-selected-background);
  color: var(--color-components-select-option-selected-color);
}
.p-dropdown:focus, .p-dropdown:focus-within {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-components-select-focus-ring-color);
}
```

## Next Steps
- Commit your changes and review the UI.
- If you need to support more components or states, add new selectors and map them to tokens as needed.
- Consider automating or documenting your mapping strategy for future maintainability.
