import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess';

export default defineConfig(({ mode }) => {
	const production = mode === 'production';

	return {
		plugins: [
			svelte({
				preprocess: sveltePreprocess({ sourceMap: !production }),
				compilerOptions: {
					// enable run-time checks when not in production
					dev: !production,
				},
				hot: {
					preserveLocalState: true,
				},
			}),
		],
	};
});
