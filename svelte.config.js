import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: null,
			precompress: false,
		}),
		prerender: {
			default: true
		},
		vite: {
			server: {
				fs: {
					// Allow serving files from one level up to the project root
					allow: ['..'],
				},
			},
		}
	}
};

export default config;
