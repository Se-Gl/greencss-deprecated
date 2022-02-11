const path = require('path')
const removeImports = require('next-remove-imports')()

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  experimental: {
    urlImports: ['res.cloudinary.com']
  }
}

module.exports = (phase, { defaultConfig }) => {
  return removeImports({
    ...defaultConfig
  })
}
