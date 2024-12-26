import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import dotenv from 'dotenv';
import sanity from "@sanity/astro";
import icon from "astro-icon";

dotenv.config();

export default defineConfig({
  integrations: [
    icon(),
    tailwind(),
    // 👇 Update these lines
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.PUBLIC_SANITY_DATASET,
      useCdn: false, // for static builds
    }),
  ],
});
