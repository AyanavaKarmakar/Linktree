import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  // site: "https://AyanavaKarmakar.github.io",
  // base: "/LinkTree",
  integrations: [tailwind()],
  output: "server",
  adapter: vercel(),
});
