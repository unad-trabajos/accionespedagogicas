import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// Plain SPA build for static hosting (e.g. GitHub Pages).
// Independent from the TanStack Start / Cloudflare config used in dev.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: path.resolve(__dirname, "static"),
  base: process.env.BASE_URL || "/",
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
