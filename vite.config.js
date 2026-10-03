import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages repository base path
export default defineConfig({
  plugins: [react()],
  base: "/eventease-react/",
  server: {
    port: 5173
  }
});

