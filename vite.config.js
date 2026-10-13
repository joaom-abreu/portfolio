import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const sourceDirectory = fileURLToPath(new URL("./src", import.meta.url));
const apiProxyTarget = process.env.API_PROXY_TARGET;

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": sourceDirectory,
    },
  },
  server: {
    proxy: apiProxyTarget ? { "/api": apiProxyTarget } : undefined,
  },
  test: {
    include: ["src/**/*.test.js", "api/**/*.test.js"],
  },
});
