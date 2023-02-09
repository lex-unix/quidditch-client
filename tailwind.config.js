const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true
  },
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['var(--font-cinzel)'],
        newsreader: ['var(--font-newsreader)']
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
