# vb_landingpage

Landing page for [Vector Baltic](https://vectorb.one) — AI-driven solutions for blue security.

Built with Vite + React + TypeScript + Tailwind CSS + Framer Motion.

## Development

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Editing content

- **All copy** (headlines, solutions, team, contact) lives in [src/data/content.ts](src/data/content.ts).
- **Product screenshot**: overwrite `src/assets/screenshots/osint-agent.webp` (or drop in a PNG and update the import in `src/components/Console.tsx`), then update `SCREENSHOT_SIZE` in that component to the new image's pixel dimensions.
- **Team photos**: `src/assets/team/` (shipped at 256×256 — crop new photos square).
- **Social share image**: `public/og-image.jpg` (1200×630).

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in
[.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site
and deploys it to GitHub Pages.

> In the repo settings, **Pages → Source** must be set to **GitHub Actions**.
