# faizkhairi.github.io

Personal portfolio site for Faiz Khairi, deployed at [faizkhairi.github.io](https://faizkhairi.github.io/).

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- ESLint + Vitest

## Local development

```bash
npm ci
npm run dev       # start dev server
npm run lint      # lint
npm run test      # run unit tests
npm run build     # type-check (tsc -b) + production build
npm run preview   # preview the production build locally
```

## Content

All profile, about, project, and skills content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts). Edit that file to add or update projects; no other file needs to change for content updates.

## Deploy

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages.
