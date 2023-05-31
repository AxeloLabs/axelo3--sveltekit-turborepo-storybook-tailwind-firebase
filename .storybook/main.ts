import type { StorybookConfig } from '@storybook/sveltekit';
const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-svelte-csf',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y'
		// {
		// 	name: '@storybook/addon-styling',
		// 	options: {
		// 		// Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
		// 		// For more details on this addon's options.
		// 		postCss: true
		// 	}
		// }
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},
	docs: {
		autodocs: 'tag'
	},
	staticDirs: ['../static']
};
export default config;
