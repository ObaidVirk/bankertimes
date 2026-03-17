import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        banker: {
          navy: '#0d1b2a',
          'navy-light': '#1a2f45',
          'navy-mid': '#162236',
          red: '#c0392b',
          'red-dark': '#a93226',
          'red-light': '#e74c3c',
          gold: '#d4a017',
          'gold-light': '#f0c040',
          gray: '#6b7280',
          'gray-light': '#f3f4f6',
          'gray-dark': '#374151',
          border: '#e5e7eb',
          muted: '#9ca3af',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.15)',
        nav: '0 2px 12px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
}
export default config
