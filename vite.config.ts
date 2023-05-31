/// <reference types="vitest" />

import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	// -------------------------------------------------------
	server: {
		port: process.env.HISTOIRE ? 6006 : 5173
	},
	// -------------------------------------------------------
	plugins: [sveltekit()],
	// -------------------------------------------------------
	// ORIG -> I put it in sveltekit
	// resolve: {
	// 	alias: {
	// 		$components: path.resolve('./src/lib/components'),
	// 		// $src: path.resolve('./src')
	// 	}
	// },
	// -------------------------------------------------------
	test: {
		// ...
		globals: true,
		reporters: ['dot'],
		silent: true,
		environment: 'jsdom'
	}
	// -------------------------------------------------------
};

export default config;
