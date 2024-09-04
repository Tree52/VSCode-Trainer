import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: { adapter: adapter() },
  /* eslint-disable-next-line no-undef */
  paths: { base: process.env.NODE_ENV === "production" ? "/VSCode-Trainer" : "" },
  preprocess: vitePreprocess(),
};

export default config;
