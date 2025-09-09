import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    outDir: "build",
    chunkSizeWarningLimit: 2000,
  },
  plugins: [
    tsconfigPaths(),
    react({
      babel: {
        plugins: [
          [
            "react-remove-properties",
            {
              properties: [
                "data-component-id",
                "data-component-path",
                "data-component-line",
                "data-component-file",
                "data-component-name",
                "data-component-content",
              ],
            },
          ],
        ],
      },
    }),
  ],
  server: {
    port: "3333",
    host: "0.0.0.0",
    strictPort: true,
  },
});
