# Cursor

A minimal React, TypeScript, Vite and Tailwind CSS starting point.

## Getting started

```sh
npm install
npm run dev
```

## Project checks

```sh
npm run typecheck
npm run lint
npm run build
```

## Structure

- `src/App.tsx` is the application entry component.
- `src/main.tsx` mounts React and loads the global stylesheet.
- `src/index.css` loads Tailwind, defines the design tokens and registers local fonts.
- `src/assets/fonts` contains the supplied Cursor Gothic font files.

Tailwind CSS v4 is integrated through the Vite plugin. Use the theme variables defined in
`src/index.css` for project colors, type, spacing and shape. JetBrains Mono is the code font
fallback and can be provided locally when the font files are available.