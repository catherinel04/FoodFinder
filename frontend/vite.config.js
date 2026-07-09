import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // Lets the frontend call "/api/..." and Vite forwards it to Express,
      // so you don't run into CORS during local dev.
      "/api": "http://localhost:4000",
    },
  },
});
