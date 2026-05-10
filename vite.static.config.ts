import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// Pure Vite SPA build for static hosting (GitHub Pages).
// Repo name: accionespedagogicas -> base path /accionespedagogicas/
// Run: npm run build:static  (or: BASE_URL=/ npm run build:static for root domain)
export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: path.resolve(__dirname, "static"),
  base: process.env.BASE_URL || "/accionespedagogicas/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist-static"),
    emptyOutDir: true,
  },
});
