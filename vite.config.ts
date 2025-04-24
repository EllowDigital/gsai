import { defineConfig } from "vite"; // Import defineConfig from Vite
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";

export default defineConfig(async ({ mode }) => {
  const isDev = mode === "development"; // Check if the environment is development
  const isGitHub = process.env.DEPLOY_TARGET === "github"; // Check if deployment target is GitHub
  const base = isDev ? "/" : isGitHub ? "/gsai-webv3/" : "/"; // Set base URL for correct path resolution

  // Plugins array with dynamic import of tempo-devtools
  const plugins = [react()]; // Add React plugin

  if (isDev) {
    try {
      // Dynamically import tempo-devtools during development if it exists
      const { tempo } = await import("tempo-devtools/dist/vite");
      plugins.push(tempo());
    } catch {
      console.warn("⚠️ tempo-devtools not found, skipping...");
    }

    plugins.push(componentTagger()); // Add lovable-tagger plugin for component tagging
  }

  return {
    base, // Ensure correct base path
    server: {
      host: "::", // Allow for IPv6
      port: 8080, // Set server port to 8080
      open: true, // Automatically open the browser
      strictPort: true, // Ensure the server uses the exact port specified
    },
    plugins, // Include all configured plugins
    resolve: {
      preserveSymlinks: true, // Avoid issues with symlinked modules
      alias: {
        "@": path.resolve(__dirname, "src"), // Create alias for src directory
        three: path.resolve(__dirname, "node_modules/three"), // Alias for three.js
      },
    },
    build: {
      minify: "esbuild", // Use esbuild for minification
      sourcemap: isDev, // Enable sourcemaps only in development
    },
    optimizeDeps: {
      include: ["three"], // Pre-bundle three.js for faster dev builds
      entries: ["src/main.tsx", "src/tempobook/**/*"], // Include specific entry points
    },
  };
});
