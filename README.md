# Morrow

Morrow is a responsive product landing page built with React, TypeScript, Vite and Tailwind CSS v4. Its visual foundation follows the project guidance in `DESIGN.md`, with original product storytelling and interface illustrations.

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

- `src/App.tsx` contains the page sections and interactive workflow.
- `src/App.css` contains responsive page styling and product preview details.
- `src/index.css` loads Tailwind, defines design tokens and registers Cursor Gothic.
- `src/assets/fonts` contains the supplied font files.

Tailwind CSS v4 is integrated through the Vite plugin. Hugeicons uses the free Stroke Rounded set. JetBrains Mono is the code font fallback; it can be provided locally when the font files are available.
