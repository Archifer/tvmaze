# xav-maze

Example front-end using Vue3 and node 20 that uses
the api as discussed on https://www.tvmaze.com/api.

## Architecture
The codebase has the following architecture:
- Vue3
- Typescript
- SCSS
- Uses vite for testing

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

* There is a "[Vue warn]: Failed to resolve component: RouterLink" warning on two unit tests,
did not have the time to resolve this.

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Performed work
- Dashboard
  - Nav item to home page called "XAV TV MAZE".
  - Genre filter component for currently loaded tv series.
  - Rating filter to set minimum required rating value.
  - Search function which overwrites the dashboard defaults shown shows.
  - Dashboard loads by default the first 10 tv-series id's for
  the serie cards.
  - Series preview card component which displays basic information
  on a show.
  - Series details page that uses the route param for getting
  the requested series information.
  - A button to request 10 more shows on the dashboard using the
  upcoming 10 id values.
  - Requests to an undefined page get rerouted to a 404 page.

## Left over work
Due to time restrictions I wasn't able to fully implement everything
I wanted. This is a todo list:

- Write E2E tests
  - playwright
- Write more unit tests
  - for each remaining component
    - unit test filter where you mock the api responses
  - for each view
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
- fix fade in animation of modal
- better mobile alignment nav item and filter buttons on dashboard
- Some todo's in the codebase
