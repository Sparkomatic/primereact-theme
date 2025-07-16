// Run this script with ts-node or compile with tsc
import * as fs from 'fs';
import * as path from 'path';
import { themeMapping } from '../theme-mapping/theme-mapping';

const tokensPath = path.resolve(__dirname, '../tokens/tokens.json');
const outPath = path.resolve(__dirname, '../dist/theme.css');

const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf-8'));

let css = '/* Auto-generated theme.css */\n';

for (const [component, mapping] of Object.entries(themeMapping)) {
  css += `/* ${component} */\n`;
  css += `.${component.toLowerCase()} {\n`;
  for (const [cssProp, tokenKey] of Object.entries(mapping as Record<string, string>)) {
    css += `  --${cssProp}: ${tokens[tokenKey]};\n`;
  }
  css += '}\n\n';
}

fs.writeFileSync(outPath, css);
console.log('theme.css generated!');
