/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  // 'class' strategy lets us toggle .light on <html> for theming
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      // All colors reference CSS custom properties so dark/light toggle works
      // without touching component markup. Opacity modifiers (e.g. bg-surface/40)
      // work because we store raw RGB channels in the variables.
      colors: {
        background:    'rgb(var(--c-bg)    / <alpha-value>)',
        surface:       'rgb(var(--c-surface) / <alpha-value>)',
        stroke:        'rgb(var(--c-stroke) / <alpha-value>)',
        accent:        'rgb(var(--c-accent) / <alpha-value>)',
        'accent-light':'rgb(var(--c-accent-light) / <alpha-value>)',
        'accent-violet':'rgb(var(--c-accent-violet) / <alpha-value>)',
        foreground:    'rgb(var(--c-fg)    / <alpha-value>)',
        muted:         'rgb(var(--c-muted) / <alpha-value>)',
        faint:         'rgb(var(--c-faint) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
