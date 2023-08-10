module.exports = {
	// -0
	root: true,
	// -0
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier',
		'plugin:storybook/recommended'
	],
	// -0
	parser: '@typescript-eslint/parser',
	// -0
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		project: ['./tsconfig.json'],
		extraFileExtensions: ['.svelte']
	},
	// -0
	plugins: ['@typescript-eslint'],
	// -0
	ignorePatterns: ['*.js', '*.cjs', '*.spec.ts'],
	// -0
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	// -0
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	// -0
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	// -1
	//  NEW - eslint ne gere pas le app.d.ts (global types)
	globals: {
		// 1 FRAME - UI
		I_ui__menu: 'writable',
		T_ui__dynvariant: 'writable',
		// 1 TOUCHER-TERRE
		I_STORE__FORM: 'writable',
		T_DOMAIN: 'writable',
		T_ENTITIES: 'writable',
		T_DTOS: 'writable',
		I_ENTITY__post: 'writable',
		I_ENTITY__event: 'writable',
		I_ENTITY__uiinputValue: 'writable',
		I_ENTITY: 'writable',
		I_DTO__post: 'writable',
		I_DTO__event: 'writable',
		I_DTO__formInput: 'writable'
	},
	// -1
	rules: {
		// 'require-await': 'error',
		// ---
		// CALMER TYPAGE 1
		// ---
		'@typescript-eslint/no-explicit-any': 0 // TODO - remettre pour parfaire
		// ---
		// "require-jsdoc ": 0,
		// "valid-jsdoc": 0,
		// "max-len": 0
		// 'object-curly-newline': [
		// 	'all',
		// 	{
		// 		ObjectExpression: 'always',
		// 		ObjectPattern: { multiline: true },
		// 		ImportDeclaration: 'never',
		// 		ExportDeclaration: { multiline: true, minProperties: 3 }
		// 	}
		// ],
		// curly: 'all'
		// 'brace-style': ['error', 'Stroustrup']
	}
	// -2
};
