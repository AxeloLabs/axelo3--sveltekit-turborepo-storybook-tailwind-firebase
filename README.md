<div align="center">

# SVELTEKIT + STORYBOOK + CHROMATIC + MATERIAL DESIGN + SASS + TAILWIND

[![Powered By Sveltekit](https://img.shields.io/badge/powered%20by-svelte-FF3C02.svg?style=flat&logo=svelte)](https://kit.svelte.dev/) [![Language: TypeScript](https://img.shields.io/badge/language-typescript-blue.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/) [![ECMAScript: 2019](https://img.shields.io/badge/ES-9-F7DF1E.svg?style=flat&logo=javascript)](https://github.com/tc39/ecma262) [![Tailwindcss](https://img.shields.io/badge/Tailwindcss-CSS--Framework-%2338B2AC?logo=tailwindcss)](https://tailwindcss.com) [![Postcss](https://img.shields.io/badge/Postcss-style-%23DD3A0A?style=flat&logo=postcss)](https://postcss.org) [![SCSS](https://img.shields.io/badge/SCSS-Style-%23CC6699?style=flat&logo=sass)](https://sass-lang.com/) [![StorybookJS](https://img.shields.io/badge/Storybook-UI--Webcomponent--tool-%23FF4785?style=flat&logo=storybook)](https://storybook.js.org/) [![Jest](https://img.shields.io/badge/Jest-Unit--Testing--Framework-%23C21325?style=flat&logo=jest)](https://jestjs.io/) [![Prettier](https://img.shields.io/badge/Prettier-code--formatter-%23F7B93E?style=flat&logo=prettier)](https://prettier.io/) [![Eslint](https://img.shields.io/badge/Eslint-linter-%234B32C3?style=flat&logo=eslint)](https://eslint.org/) [![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat&logo=license)](https://github.com/navneetsharmaui/sveltekit-blog/blob/main/LICENSE)

WEB-AGENCY MONOREPO (9 juin 2023)

![AXELO 6](https://github.com/nzaero/axelo3-sveltekit-turborepo-storybook-tailwind-firebase/blob/main/DOC/d.png)

</div>

LIVE DEMO HERE: <https://y-toucherterre.web.app/acceuil>

This is an App shell with 2 layouts (app + cms).  
It is tested with storybook and chromatic.



### Stack

0. Typescript
1. Sveltekit
2. Firebase Hosting
3. Firebase Firestore
4. Jest / Vitest / Playwright
5. Material Design (SASS) / Tailwind

### 1) FEATURES

1. Design System with Material (SMUI)
2. Typescript, Tailwind, Sveltekit out of the box
3. Firebase (free hosting and firestore quotas)
4. App shell with 2 layouts (app + cms)

### 2) SETUP

`pnpm exec dev`
`pnpm exec build`
`pnpm exec deploy`

## 📦️ Install

```

degit regnou/axelo3
pnpm i

```

## 📜 Development

```

pnpm story:dev

```

## 📜 Production

```

pnpm story:build
pnpm story:preview

```

## ⛵️ Deploying

You can use any SvelteKit adapter that deploys to a target that supports a [Node.js](https://nodejs.org/) runtime.

If you don't have a full-stack hosting solution you can provision a serverless PostgreSQL database provider using [Railway](https://railway.app/) or [Supabase](https://supabase.com/) and host your frontend on [Vercel](https://vercel.com/) starting at no cost.

```bash
pnpm exec build
```

You can also preview the build.

```bash
pnpm exec preview
```

## Cleanup

To remove `node_modules` and `build` files

```
pnpm clean
```

## Documentation

Please see [the documentation](https://kit.svelte.dev/docs) for information about getting started and developing with SvelteKit.

### Packages

| Package                                         | Changelog                                        |
| ----------------------------------------------- | ------------------------------------------------ |
| [@sveltejs/kit](packages/kit)                   | [Changelog](packages/kit/CHANGELOG.md)           |
| [create-svelte](packages/create-svelte)         | [Changelog](packages/create-svelte/CHANGELOG.md) |
| [@sveltejs/adapter-node](packages/adapter-node) | [Changelog](packages/adapter-node/CHANGELOG.md)  |

The SvelteKit community also makes additional [SvelteKit adapters available for use](https://sveltesociety.dev/components#adapters).

## 💫 License

- Code and Contributions have **MIT License**

_Copyright (c) 2021 [Navneet Sharma](http://github.com/navneetsharmaui) ([@asnavneetsharma](https://twitter.com/asnavneetsharma))_

[MIT](https://github.com/sveltejs/kit/blob/master/LICENSE)

## :100: :fire: Project LightHouse Report

![sveltekit-starter-lighthouse-report](https://user-images.githubusercontent.com/11630812/115241377-5d485d80-a13e-11eb-8667-611770992c28.png)

![Genesis](https://github.com/nzaero/cosmos3-unix-dev-conf/blob/main/__DOC__/1-img/genesis.webp)
