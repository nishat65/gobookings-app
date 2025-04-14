import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "script-defer",
      pwaAssets: {
        disabled: false,
        config: true,
      },
      manifest: {
        name: "gobookings",
        short_name: "gobookings",
        description:
          "A gobookings application enables users to book trains, flights, and hotels.",
        theme_color: "#ffffff",
        orientation: "portrait-primary",
        display: "standalone",
        icons: [
          {
            src: "favicon_io/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        dir: "ltr",
        start_url: "/",
        background_color: "#ffffff",
        scope: "/",
        lang: "en-US",
        prefer_related_applications: false,
        related_applications: [],
        screenshots: [
          {
            src: "favicon_io/android-chrome-512x512.png",
            type: "image/png",
            sizes: "512x512",
            form_factor: "wide", // Required for desktop
          },
          {
            src: "favicon_io/android-chrome-512x512.png",
            type: "image/png",
            sizes: "512x512",
            form_factor: "narrow",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: false,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
  ],
  envPrefix: "REACT_APP_",
});
