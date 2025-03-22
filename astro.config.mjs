import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import dotenv from 'dotenv';
import sanity from "@sanity/astro";
import icon from "astro-icon";
import react from "@astrojs/react";
import { defineConfig, passthroughImageService } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

dotenv.config();

export default defineConfig({
  site: 'https://mosaik-russelsheim.de/',
  image: {
    service: passthroughImageService(),
    domains: ["astro.build"],
    remotePatterns: [{
      protocol: 'https',
      hostname: '**.sanity.io',
    }],
  },
  integrations: [
    sitemap(),
    icon(),
    tailwind(),
    // 👇 Update these lines
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.PUBLIC_SANITY_DATASET,
      useCdn: false, // for static builds
      apiVersion: "2022-03-07",
      studioBasePath: '/studio'
    }), react()
  ],
  adapter: netlify(),
});
