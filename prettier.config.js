/** @type {import('prettier').Config} */
const options = {
  arrowParens: 'avoid',
  singleQuote: true,
  bracketSpacing: true,
  endOfLine: 'lf',
  semi: false,
  tabWidth: 2,
  trailingComma: 'none',
  printWidth: 80,
  plugins: [require('prettier-plugin-tailwindcss')]
}

module.exports = options
