# Larissa Portfolio

A clean portfolio website built with React, TypeScript, Vite, Framer Motion, and Lucide icons.

## Stack

- React
- TypeScript
- Vite
- Framer Motion
- Lucide React

## Sections included

- Hero / homepage intro
- Services I Provide
- Tools Behind My Work
- Latest Projects
- Academic and Professional Journey
- Contact section
- Footer

## Before you run it

Move your profile image into the `public` folder and name it:

```bash
public/profile.jpeg
```

The site is already set up to load that image here:

```ts
photo: '/profile.jpeg'
```

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Then open the local Vite URL shown in your terminal.

## Build for production

```bash
npm run build
```

## Project structure

```bash
larissa-portfolio-scratch/
├── public/
│   └── profile.jpeg
├── src/
│   ├── components/
│   │   └── ThemeToggle.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Notes

- The contact form is UI-only for now. It does not submit to a backend yet.
- The color palette uses muted olive and warm gold accents instead of red.
- All content is easy to edit from `src/data/portfolio.ts`.

## Customize quickly

### Edit text/content

Update:

```bash
src/data/portfolio.ts
```

### Edit layout/styles

Update:

```bash
src/App.tsx
src/index.css
```

## Deploy

You can deploy this easily on:

- Vercel
- Netlify
- GitHub Pages

