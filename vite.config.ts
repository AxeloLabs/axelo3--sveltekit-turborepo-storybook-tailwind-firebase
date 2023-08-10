/// <reference types="vitest" />

import { sveltekit } from '@sveltejs/kit/vite';
import { nodeLoaderPlugin } from '@vavite/node-loader/plugin';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	// -1
	server: {
		port: process.env.HISTOIRE ? 6006 : 5173
	},
	// -1
	// plugins: [nodeLoaderPlugin(), sveltekit()], // trying to debug
	plugins: [sveltekit()],
	// ORIG -> I put it in sveltekit
	// resolve: {
	// 	alias: {
	// 		$components: path.resolve('./src/lib/components'),
	// 		// $src: path.resolve('./src')
	// 	}
	// },
	// -1
	test: {
		globals: true,
		reporters: ['dot'],
		silent: true,
		environment: 'jsdom'
		// include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
