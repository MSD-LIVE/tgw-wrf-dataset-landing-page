import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { optimizeImports } from "carbon-preprocess-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		optimizeImports(),
		preprocess(),
	],
	kit: {
		adapter: adapter(),
		paths: {
			base: ''
		},
		prerender: {
			default: true
		}
	}
};

export default config;
