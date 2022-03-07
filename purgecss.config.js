// module.exports = {
//   content: [
//     '*.{js,jsx,ts,tsx}',
//     'components/*.{js,jsx,ts,tsx}',
//     'components/**/*.{js,jsx,ts,tsx}',
//     'components/**/**/*.{js,jsx,ts,tsx}',
//     'components/**/**/**/*.{js,jsx,ts,tsx}',
//     'pages/*.{js,jsx,ts,tsx}',
//     'pages/**/*.{js,jsx,ts,tsx}',
//     'pages/**/**/*.{js,jsx,ts,tsx}',
//     'pages/**/**/**/*.{js,jsx,ts,tsx}'
//   ],
//   css: ['styles/omencss.css'],
//   defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
//   output: 'css/omen.css'
// }

module.exports = {
  plugins: [
    process.env.NODE_ENV === 'production'
      ? [
          'postcss-flexbugs-fixes',
          [
            'postcss-preset-env',
            {
              autoprefixer: {
                flexbox: 'no-2009'
              },
              stage: 2,
              features: {
                'custom-properties': false
              }
            }
          ],
          [
            '@fullhuman/postcss-purgecss',
            {
              content: ['pages/**/*.{js,jsx,ts,tsx}', 'components/**/*.{js,jsx,ts,tsx}', './data/**/*.{js,jsx,ts,tsx}'],
              css: ['styles/omencss.css'],
              defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
              output: 'css/omen.css',
              safelist: ['html', 'body']
            }
          ]
        ]
      : [
          // No transformations in development
        ]
  ]
}
