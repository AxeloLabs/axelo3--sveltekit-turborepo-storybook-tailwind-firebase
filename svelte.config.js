import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// AXEL MONOREPOS
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	// ORIG
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	// preprocess: [
	// 	preprocess({
	// 		postcss: true
	// 	})
	// ],

	kit: {
		adapter: adapter(),
		alias: {
			// routes: 'src/routes',
			// ui: 'src/components/toucherterre',
			// stores: 'src/stores',
			// lib: 'src/lib',
			// libfirebase: 'src/lib/db/firebase',
			// libutils: 'src/lib/utils',
			$src: 'src',
			$const: 'src/0-config',
			$stores: 'src/stores',
			$utils: 'src/lib/utils',

			$components: 'src/lib/components'
		}
	}
};

export default config;
