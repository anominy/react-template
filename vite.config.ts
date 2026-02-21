import { defineConfig } from "vite";
import path from "path";
import react from   "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: path.resolve(__dirname, "src"),
  publicDir: path.resolve(__dirname, "img"),
  server: {
    port: 8080,
    strictPort: true
  },
  preview: {
    port: 8080,
    strictPort: true
  },
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    outDir: path.resolve(__dirname, "out"),
    emptyOutDir: true,
    minify: true,
    sourcemap: false
  }
});
