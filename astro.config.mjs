import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import dotenv from 'dotenv';
import sanity from "@sanity/astro";
import icon from "astro-icon";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel";

dotenv.config();

export default defineConfig({
  image: {
    domains: ["astro.build"],
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

  adapter: vercel(),
});
