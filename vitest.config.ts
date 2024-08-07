import path from 'path'
import react from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
});
