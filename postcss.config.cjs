const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const tailwindcssNesting = require('tailwindcss/nesting');

const config = {
	plugins: [
		// If you want to use other PostCSS plugins, see the following:
		// https://tailwindcss.com/docs/using-with-preprocessors
		postcssImport(),
		tailwindcssNesting,

		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer
	]
};

module.exports = config;

// postcss.config.js
// module.exports = {
//   plugins: {
//     'postcss-import': {},
//     'tailwindcss/nesting': {},
//     tailwindcss: {},
//     autoprefixer: {},
//   }
// }
