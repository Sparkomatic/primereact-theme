# PrimeReact Theme

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
