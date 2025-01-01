import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import dotenv from 'dotenv';
import sanity from "@sanity/astro";
import icon from "astro-icon";
import react from "@astrojs/react";
import { defineConfig, passthroughImageService } from 'astro/config';
dotenv.config();
import cloudflare from '@astrojs/cloudflare';

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
      useCdn: true, // for static builds
      withCredentials: false, 
      apiVersion: "2022-03-07",
      studioBasePath: '/studio'
    }), react()
  ],
  output: 'static',
  adapter: cloudflare({
     imageService: 'cloudflare'
  }),
});
