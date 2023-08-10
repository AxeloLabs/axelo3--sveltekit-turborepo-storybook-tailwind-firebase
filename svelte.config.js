import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// -0
	// 0 AXEL MONOREPOS
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	// 0 ORIG
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	// preprocess: [
	// 	preprocess({
	// 		postcss: true
	// 	})
	// ],
	// -1
	prerender: {
		entries: [
			'/',
			'/acceuil',
			'/la-demarche',
			'/blog',
			'/events',
			'/cms/acceuil',
			'/cms/la-demarche',
			'/cms/blog',
			'/cms/events',
			'/login',
			'/cms',
			'/cms/profile',
			'/z/debug',
			'/z/debug/grid',
			'/z/debug/theme-color',
			'/z/debug/theme-elevation',
			'/z/debug/theme-typo',
			'/z/scripts'
		]
	},
	// -3
	kit: {
		// 3
		adapter: adapter(),
		// https://github.com/sveltejs/kit/issues/1650
		// adapter: adapterStatic({
		//   pages: 'build',
		//   assets: 'build',
		//   fallback: 'index.html',
		//   precompress: false
		// }),
		// -0
		// -0 ALIAS
		// -0
		alias: {
			// routes: 'src/routes',
			// ui: 'src/components/toucherterre',
			// stores: 'src/stores',
			// lib: 'src/lib',
			// libfirebase: 'src/lib/db/firebase',
			// libutils: 'src/lib/utils',
			$config: 'src/0-config',
			$datasets: 'src/0-config/datasets',
			$stores: 'src/stores',
			$utils: 'src/lib/utils',
			$db: 'src/lib/db/firebase',
			$ui: 'src/lib/components',
			$tests: 'tests',
			$unit: 'tests/unit',
			$e2e: 'tests/e2e'
		}
		// -0
		// -0
		// -0
	}
};

export default config;
