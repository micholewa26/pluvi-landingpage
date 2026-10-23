import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Actions overrides the base with the path configured for GitHub Pages.
// Local builds default to the domain root, including nested route entry documents.
export default defineConfig({
  base: "/",
  plugins: [react()],
});
