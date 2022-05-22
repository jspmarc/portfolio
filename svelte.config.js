import preprocess from 'svelte-preprocess';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import adapter from '@sveltejs/adapter-node';

const filePath = dirname(fileURLToPath(import.meta.url));
const sassPath = `${filePath}/src/lib/style/`;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE'],
		},
	},
};

export default config;
