import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the build works both at vector-baltic.github.io/vb_landingpage/
// and at the custom domain root (vectorb.one) without changes.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
