import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import mdsvexOptions from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex({ ...mdsvexOptions, extensions: ['.svx', '.md'] })],
	kit: {
		adapter: adapter({ pages: 'dist', assets: 'dist' }),
		prerender: {
			// Draft posts 404 on purpose (see src/routes/blog/*/+page.ts); skip
			// those pages instead of failing the build, but keep failing on any
			// other broken link.
			handleHttpError: ({ path, message }) => {
				if (path.startsWith('/blog/')) {
					console.warn(`Skipping prerender error for ${path}: ${message}`);
					return;
				}
				throw new Error(message);
			},
		},
	},
	extensions: ['.svelte', '.svx', '.md'],
};

export default config;
