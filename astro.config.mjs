import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { site } from "./site.config.mjs";

// Design implementation: site origin is intentionally configured in site.config.mjs only.
export default defineConfig({
  output: "static",
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true,
    },
  },
  ...(site
    ? {
        site,
        integrations: [sitemap()],
      }
    : {}),
});
