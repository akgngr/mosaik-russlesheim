export const prerender = true;
//@ts-ignore
import { defineConfig } from "sanity";
//@ts-ignore
import { structureTool } from "sanity/structure";

export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [structureTool()],
  schema: {
    types: [],
  },
});
