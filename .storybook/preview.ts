import type { Preview } from '@storybook/svelte';
import '../src/app.postcss';

// import '../src/index.css';
// import '../static/smui.css';
import '@splidejs/svelte-splide/css'; // splide - Default theme

// Material Design
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
// import '@fontsource/material-icons';
const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		}
	}
};

export default preview;
