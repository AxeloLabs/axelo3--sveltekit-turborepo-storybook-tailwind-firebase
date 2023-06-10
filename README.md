<div align="center">

# Javascript Enterprise Stack

Axelo 3

![Lint](https://github.com/nzaero/cosmos3-unix-dev-conf/blob/main/8-doc/icon/badge-lint-passing.svg)

</div>

This is a [webagency.app](https://www.webagency.app) demo book using [svelte.dev](https://svelte.dev)

Design System with Material (SMUI)
Typescript, Tailwind, Sveltekit out of the box
Firebase (free hosting and firestore quotas)
App shell with 2 layouts (app + cms)

## ❤️ The Stack

## The Stack

Every part of the **SvelteKit Enterprise Stack** is optimized to go blazingly fast to please stakeholders and uses:

- ☕️ JavaScript
- 📜 TypeScript
- ⚡️ Svelte
- 🧑‍🎨 Figma

- [Prisma](https://www.prisma.io/) for the database
- [Lucia](https://lucia-auth.com/) for authentication
- [Tailwind](https://tailwindcss.com/) for styling with automatic class sorting and [Skeleton UI](https://www.skeleton.dev/) for the UI components
- [Stripe](https://stripe.com/) for payments
- [sveltekit-superforms](https://github.com/ciscoheat/sveltekit-superforms) make working with forms easy
- [Lucide](https://lucide.dev/) for beautiful and consistent icons
- [TypeScript](https://www.typescriptlang.org/), [Prettier](https://prettier.io/), [ESLint](https://eslint.org/), [Playwright](https://playwright.dev/) and [Vitest](https://vitest.dev/) for testing configured

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
pnpm run build
```

You can also preview the build.

```bash
pnpm run preview
```

## Cleanup

To remove `node_modules` and `build` files

```
pnpm clean
```

## Overview

The Fastest Way to Build Svelte Apps

- 💨 Blazing-Fast Production Sites
- 🛠️ SSR, SPA, SSG, and In-Between
- ⚡️ Instantly Visible Code Changes
- 🔩 Existing Universe of Plugins
- 🔑 Fully Typed APIs

## Documentation

Please see [the documentation](https://kit.svelte.dev/docs) for information about getting started and developing with SvelteKit.

### Packages

| Package                                         | Changelog                                        |
| ----------------------------------------------- | ------------------------------------------------ |
| [@sveltejs/kit](packages/kit)                   | [Changelog](packages/kit/CHANGELOG.md)           |
| [create-svelte](packages/create-svelte)         | [Changelog](packages/create-svelte/CHANGELOG.md) |
| [@sveltejs/adapter-node](packages/adapter-node) | [Changelog](packages/adapter-node/CHANGELOG.md)  |

The SvelteKit community also makes additional [SvelteKit adapters available for use](https://sveltesociety.dev/components#adapters).

## Supporting Svelte

Svelte is an MIT-licensed open source project with its ongoing development made possible entirely by fantastic volunteers. If you'd like to support their efforts, please consider:

- [Becoming a backer on Open Collective](https://opencollective.com/svelte).

Funds donated via Open Collective will be used for compensating expenses related to Svelte's development such as hosting costs. If sufficient donations are received, funds may also be used to support Svelte's development more directly.

## License

[MIT](https://github.com/sveltejs/kit/blob/master/LICENSE)

![Cosmos](https://raw.githubusercontent.com/nzaero/cosmos3-unix-dev-conf/main/8-doc/img/genesis.webp)

-- 9 juin 2023  
-- Axel Regnoult
