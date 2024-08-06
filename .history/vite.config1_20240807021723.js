import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/test/",
  plugins: [react()],
  server: {
    port: 80,
    proxy: {
      "/admin": {
        target: "http://localhost:8081",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/admin/, ""),
      },
    },
  },
  build: {
    outDir: "dist1",
  },
});
