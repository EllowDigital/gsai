import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";
import viteCompression from "vite-plugin-compression";
import { createHtmlPlugin } from "vite-plugin-html";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig((env) => {
  const isDev = env.mode === "development";
  const isGitHub = process.env.DEPLOY_TARGET === "github";
  const base = isDev ? "/" : isGitHub ? "/gsai-webv3/" : "/";

  const plugins = [
    // React SWC plugin
    react(),

    // PWA configuration
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

    // Production optimizations: Gzip and Brotli compression
    !isDev &&
      viteCompression({
        algorithm: "gzip",
        ext: ".gz",
      }),
    !isDev &&
      viteCompression({
        algorithm: "brotliCompress",
        ext: ".br",
      }),

    // HTML Minification
    createHtmlPlugin({
      minify: !isDev && {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyCSS: true,
        minifyJS: true,
      },
    }),

    // Image optimization (production only)
    !isDev &&
      ViteImageOptimizer({
        jpg: {
          quality: 80,
        },
        png: {
          quality: 80,
        },
        webp: {
          lossless: true,
        },
      }),

    // Copy static files (robots.txt and sitemap.xml)
    viteStaticCopy({
      targets: [
        {
          src: "public/robots.txt",
          dest: "",
        },
        {
          src: "public/sitemap.xml",
          dest: "",
        },
      ],
    }),
  ];

  // Add development-only enhancements (e.g., component tagging)
  if (isDev) {
    plugins.push(componentTagger());
  }

  return {
    base,
    plugins: plugins.filter(Boolean),
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
      minify: isDev ? false : "esbuild",
      sourcemap: isDev,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom"],
            vendor: ["three"],
            // Ensure the path to ui is correct and points to an entry file
            ui: path.resolve(__dirname, "src/components/ui/index.ts"), // Entry file
          },
        },
      },
    },
    optimizeDeps: {
      include: ["three"],
      entries: ["src/main.tsx"],
    },
  };
});
