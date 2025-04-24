import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const isDev = mode === "development";
  const isGitHub = process.env.DEPLOY_TARGET === "github";
  const base = isDev ? "/" : isGitHub ? "/gsai-webv3/" : "/";

  const plugins = [react()];

  // Optional dev-only plugins
  if (isDev) {
    try {
      const { tempo } = await import("tempo-devtools/dist/vite");
      plugins.push(tempo());
    } catch {
      console.warn("⚠️ tempo-devtools not found. Skipping...");
    }

    plugins.push(componentTagger());
  }

  return {
    base,
    plugins,
    resolve: {
      preserveSymlinks: true,
      alias: {
        "@": path.resolve(__dirname, "src"),
        "three": path.resolve(__dirname, "node_modules/three"),
      },
    },
    server: {
      host: "::",           // Support all IPv4/IPv6 interfaces
      port: 8080,           // Custom port for local dev
      open: true,           // Auto-open in browser
      strictPort: true,     // Fail if port is already in use
    },
    build: {
      outDir: "dist",       // Default output
      emptyOutDir: true,    // Clean before build
      minify: "esbuild",    // Fast minifier
      sourcemap: isDev,     // Enable sourcemaps in dev only
    },
    optimizeDeps: {
      include: ["three"],
      entries: ["src/main.tsx", "src/tempobook/**/*"],
    },
  };
});
