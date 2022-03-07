const fs = require('fs')
const path = require('path')

function postData() {
  const files = fs.readdirSync(path.join('posts-doc'))
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')

    return {
      slug
    }
  })

  return `export const docSlugs = ${JSON.stringify(posts)}`
}

try {
  fs.readdirSync('cache')
} catch (error) {
  fs.mkdirSync('cache')
}

fs.writeFile('cache/cachedDocSlug.js', postData(), function (err) {
  if (err) return console.log(err)
  console.log('🖨️  Doc slugs cached 🖨️')
})
