import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";
import { tempo } from "tempo-devtools/dist/vite";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  const isGitHub = process.env.DEPLOY_TARGET === "github";

  // Set base path depending on environment
  const base = isDev ? "/" : isGitHub ? "/gsai-webv3/" : "/";

  return {
    base,
    server: {
      host: "::", // Accept IPv6 connections
      port: 8080,
      open: true, // Open browser on start
      strictPort: true, // Fail if port is taken
    },
    plugins: [
      react(),
      tempo(),
      isDev && componentTagger(), // Only enable in development
    ].filter(Boolean),
    resolve: {
      preserveSymlinks: true,
      alias: {
        "@": path.resolve(__dirname, "src"),
        three: path.resolve(__dirname, "node_modules/three"),
      },
    },
    build: {
      minify: "esbuild",
      sourcemap: isDev,
    },
    optimizeDeps: {
      include: ["three"],
      entries: ["src/main.tsx", "src/tempobook/**/*"],
    },
  };
});
