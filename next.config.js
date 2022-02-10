const path = require('path')
const removeImports = require('next-remove-imports')()

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  experimental: {
    urlImports: ['https://source.unsplash.com/random', 'https://res.cloudinary.com']
  }
}

module.exports = (phase, { defaultConfig }) => {
  return removeImports({
    ...defaultConfig
  })
}
