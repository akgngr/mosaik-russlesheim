import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import dotenv from 'dotenv';
import sanity from "@sanity/astro";
import icon from "astro-icon";
import react from "@astrojs/react";
import { defineConfig, passthroughImageService } from 'astro/config';
import vercel from '@astrojs/vercel/static';

dotenv.config();

export default defineConfig({
  image: {
    service: passthroughImageService(),
    domains: ["astro.build"],
    remotePatterns: [{
      protocol: 'https',
      hostname: '**.sanity.io',
    }],
  },
  integrations: [
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
  output: 'static',
  adapter: vercel(),
});
