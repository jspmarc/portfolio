import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import mdsvexOptions from './mdsvex.config.js';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: [
				vitePreprocess(),
				mdsvex({ ...mdsvexOptions, extensions: ['.svx', '.md'] }),
			],
			extensions: ['.svelte', '.svx', '.md'],
			adapter: adapter({ pages: 'dist', assets: 'dist' }),
			prerender: {
				// `/blog/[slug]` is only reached through links from the post list, so
				// it stays unseen whenever no post is published. Any other unseen
				// route is a real mistake and still fails the build.
				handleUnseenRoutes: ({ routes, message }) => {
					if (routes.every(route => route === '/blog/[slug]')) return;

					throw new Error(message);
				},
			},
		}),
	],
});
