import { defineConfig } from "vite";
import nodePolyfills from "vite-plugin-node-polyfills";

export default defineConfig({
  build: {
    target: "es2020", // veya "modules"
  },
  plugins: [nodePolyfills()],
});