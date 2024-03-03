# xav-maze

Example front-end using Vue3 and node 20 that uses
the api as discussed on https://www.tvmaze.com/api.

## How to run
Currently you need:
- Node version: v20.11.1
- NPM version: 10.2.4

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Left over work
Due to time restrictions I wasn't able to fully implement everything
I wanted. This is a todo list:

- Create rating filter; we can reuse the same logic from the genre component,
but due time restrictions i left this out.
- Divide the components further:
  - genre filter and search row on dashboard
- Write E2E tests
  - playwright
- Write more unit tests
- Follow the Web Content Accessibility Guidelines (WCAG)
  - Add aria attributes to all components
  - Check and correct tab flow
  - Check color combinations
  - Test with accessibility tools such as Lighthouse
- Check performance issues with search with a large response
  - technically a backend issue with pagination.
- Setup dependency life-cycle pipeline to automatically update dependecies
  - Could be done with dependabot or renovate
- Setup release pipeline to a test and prod server
- Some todo's in the codebase

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
