# reza-asiyabi.github.io

Personal portfolio website. Live at [reza-asiyabi.github.io](https://reza-asiyabi.github.io).

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Deployed automatically to GitHub Pages via GitHub Actions on every push to `main`.

## Development

```bash
npm install
npm run dev       # local dev server at http://localhost:4000
npm run build     # production build → dist/
npm run optimize  # convert new images to WebP
```

## Structure

```
src/
  components/   — Hero, About, Experience, Publications, Skills, …
  layouts/      — base HTML shell with theme support
  pages/        — index.astro, gallery.astro, 404.astro
public/
  images/       — WebP images (run npm run optimize after adding new ones)
  files/        — CV PDF
scripts/
  optimize-images.mjs  — batch JPEG/PNG → WebP converter
```
