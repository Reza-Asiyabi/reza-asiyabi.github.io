/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#0b0b12',
        surface: '#12121c',
        stroke: '#1e1e2e',
        accent: '#6366f1',
        'accent-light': '#818cf8',
        'accent-violet': '#a78bfa',
        foreground: '#e2e8f0',
        muted: '#94a3b8',
        faint: '#475569',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
