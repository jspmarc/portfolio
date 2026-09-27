import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import mdsvexOptions from "./mdsvex.config.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex({ ...mdsvexOptions, extensions: [".svx", ".md"] })],
	kit: { adapter: adapter({ pages: "dist", assets: "dist" }) },
	extensions: [".svelte", ".svx", ".md"],
};

export default config;
