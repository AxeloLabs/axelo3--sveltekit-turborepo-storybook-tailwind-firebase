MATERIALDESIGN @mdi/js

<!-- https://pictogrammers.com/library/mdi/ -->

"flexsearch": "^0.7.31",
"jsdom": "^20.0.3",
"shiki-es": "^0.2.0",
"vscode-oniguruma": "^1.7.0",
"vscode-textmate": "^9.0.0",
"c8": "^7.13.0",
"@testing-library/jest-dom": "^5.16.5",
"@testing-library/svelte": "^3.2.2",

# Histoire Svelte

This is a [histoire.dev](https://histoire.dev) demo book using [svelte.dev](https://svelte.dev)

## Install

```
degit oneezy/histoire-svelte
pnpm i
```

## Development

```
pnpm story:dev
```

## Production

```
pnpm story:build
pnpm story:preview
```

## Cleanup

To remove `node_modules` and `build` files

```
pnpm clean
```

<!-- ------------------- historie delete -->

"story": "svelte-kit sync && histoire dev",
"story:build": "svelte-kit sync && histoire build",
"story:preview": "svelte-kit sync && histoire preview",
"story:dev-orig": "histoire dev --port 6006",
"story:build-orig": "histoire build",
"story:preview-orig": "histoire preview --port 6006",

"histoire": "^0.16.1",
"@histoire/controls": "^0.16.1",
"@histoire/plugin-svelte": "^0.16.1",

/_
sm 640px @media (min-width: 640px) { ... }
md 768px @media (min-width: 768px) { ... }
lg 1024px @media (min-width: 1024px) { ... }
xl 1280px @media (min-width: 1280px) { ... }
2xl 1536px @media (min-width: 1536px) { ... }
_/

// histoire: {
// plugins: [HstSvelte()],
// setupFile: '/histoire.setup.js',
// tree: {
// groups: [
// {
// id: 'top',
// title: ''
// }
// ]
// },
// theme: {
// title: 'Oneezy DJAX',
// logo: {
// square: '/static/assets/1.png',
// light: '/static/assets/1.png',
// dark: '/static/assets/1.png'
// },
// logoHref: '/',
// colors: {
// gray: defaultColors.emerald,
// primary: defaultColors.blue
// }
// }
// },
