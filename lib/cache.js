const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

function postData() {
  const files = fs.readdirSync(path.join('posts-doc'))
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdownMeta = fs.readFileSync(path.join('posts-doc', filename), 'utf-8')
    const { data: frontmatter } = matter(markdownMeta)

    return {
      slug,
      frontmatter
    }
  })

  const filesBlog = fs.readdirSync(path.join('posts-blog'))
  const blogPosts = filesBlog.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdownMeta = fs.readFileSync(path.join('posts-blog', filename), 'utf-8')
    const { data: frontmatter } = matter(markdownMeta)

    return {
      slug,
      frontmatter
    }
  })

  const combinePosts = [...posts, ...blogPosts]

  return `export const posts = ${JSON.stringify(combinePosts, function (a, b) {
    // lowercase only the body of the md file
    return typeof b === 'string' ? b.toLowerCase() : b
  })
    .replace(/\\n/g, ' ')
    .replace(/\\"/g, '')
    .replace(/\`/g, '')}
    `
}

try {
  fs.readdirSync('cache')
} catch (error) {
  fs.mkdirSync('cache')
}

fs.writeFile('cache/data.js', postData(), function (err) {
  if (err) return console.log(err)
  console.log('🖨️  Posts cached 🖨️')
})
