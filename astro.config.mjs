import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: "https://terra.coreyburns.ca",
  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  adapter: cloudflare(),
});