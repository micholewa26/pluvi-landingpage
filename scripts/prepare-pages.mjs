import { copyFile, mkdir, writeFile } from 'node:fs/promises';

// Give each public route a real entry document, including direct visits and reloads.
const routes = ['o-nas', 'system', 'pompy', 'konfigurator', 'kontakt', 'polityka-prywatnosci', 'regulamin'];
for (const route of routes) {
  await mkdir(`dist/${route}`, { recursive: true });
  await copyFile('dist/index.html', `dist/${route}/index.html`);
}
await copyFile('dist/index.html', 'dist/404.html');
await writeFile('dist/.nojekyll', '');
console.log(`Prepared ${routes.length} page entries and a fallback.`);
