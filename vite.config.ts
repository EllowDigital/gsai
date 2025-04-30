import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate", // Automatically update the service worker
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
        start_url: "/",
        scope: "/", // Ensure PWA is in the scope of the whole site
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#ff4500",
        icons: [
          {
            src: "favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "favicon_io/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            src: "favicon_io/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "favicon_io/favicon.ico",
            sizes: "48x48",
            type: "image/x-icon",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "document", // Handle HTML requests
            handler: "NetworkFirst",
            options: {
              cacheName: "html-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24, // Cache for 1 day
              },
            },
          },
          {
            urlPattern: ({ request }) => request.destination === "image", // Handle image requests
            handler: "CacheFirst",
            options: {
              cacheName: "image-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // Cache for 30 days
              },
            },
          },
        ],
      },
    }),
    componentTagger(), // For component tagging (if you're using it for static analysis or SEO)
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "src"), // Alias for easy imports from src directory
      three: path.resolve(__dirname, "node_modules/three"), // Alias for three.js
    },
  },
  server: {
    host: true, // Enable network access for some browsers
    port: 8080, // Set port to 8080
    open: true, // Automatically open the browser
    strictPort: true, // Ensure the server only runs on the specified port
  },
  build: {
    outDir: "dist", // Build output directory
    emptyOutDir: true, // Clear the dist directory before building
    minify: "esbuild", // Use esbuild for minification
    sourcemap: true, // Enable source maps for debugging
  },
  optimizeDeps: {
    include: ["three"], // Optimize three.js for faster startup
    entries: ["src/main.tsx", "src/tempobook/**/*"], // Pre-bundle specific entry points
  },
});
