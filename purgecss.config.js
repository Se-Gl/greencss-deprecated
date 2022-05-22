module.exports = {
  content: ['pages/**/*.{js,jsx,ts,tsx}', 'components/**/*.{js,jsx,ts,tsx}', 'utils/**/*.{js,jsx,ts,tsx}'],
  css: ['./styles/greenCSS.css'],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  safelist: ['html', 'body'],
  output: './css/green.css'
}
