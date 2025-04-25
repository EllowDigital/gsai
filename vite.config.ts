
import { defineConfig, type ConfigEnv, type PluginOption } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  const isDev = mode === "development";
  const isGitHub = process.env.DEPLOY_TARGET === "github";
  const base = isDev ? "/" : isGitHub ? "/gsai-webv3/" : "/";

  const plugins: PluginOption[] = [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon_io/favicon.ico",
        "favicon_io/apple-touch-icon.png",
        "favicon_io/favicon-32x32.png",
        "favicon_io/favicon-16x16.png",
      ],
      manifest: {
        name: "Ghatak Sports Academy India",
        short_name: "GSAI",
        description:
          "Train in martial arts at Ghatak Sports Academy, India's leading martial arts and self-defense school.",
        start_url: base,
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#ff4500",
        icons: [
          {
            src: "/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/favicon_io/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            src: "/favicon_io/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "/favicon_io/favicon.ico",
            sizes: "any",
            type: "image/x-icon",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "document",
            handler: "NetworkFirst",
            options: {
              cacheName: "html-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 24 * 60 * 60,
              },
            },
          },
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "CacheFirst",
            options: {
              cacheName: "image-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              },
            },
          },
        ],
      },
    }),
  ];

  // Dev-only enhancements
  if (isDev) {
    try {
      const { tempo } = await import("tempo-devtools/dist/vite");
      plugins.push(tempo() as PluginOption);
    } catch {
      console.warn("⚠️ tempo-devtools not found. Skipping...");
    }

    plugins.push(componentTagger() as PluginOption);
  }

  return {
    base,
    plugins,
    resolve: {
      preserveSymlinks: true,
      alias: {
        "@": path.resolve(__dirname, "src"),
        three: path.resolve(__dirname, "node_modules/three"),
      },
    },
    server: {
      host: "::",
      port: 8080,
      open: true,
      strictPort: true,
    },
    build: {
      outDir: "dist",
      emptyOutDir: true,
      minify: "esbuild",
      sourcemap: isDev,
    },
    optimizeDeps: {
      include: ["three"],
      entries: ["src/main.tsx", "src/tempobook/**/*"],
    },
  };
});
