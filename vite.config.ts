import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    open: true, // Automatically opens browser
    strictPort: true, // Ensures exact port usage
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      three: path.resolve(__dirname, "node_modules/three"), // Properly resolves Three.js
    },
  },
  build: {
    minify: "esbuild",
    sourcemap: mode === "development",
  },
  optimizeDeps: {
    include: ["three"],
  },
}));

