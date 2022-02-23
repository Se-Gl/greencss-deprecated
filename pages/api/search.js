import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default (req, res) => {
  let posts

  if (process.env.NODE_ENV === 'production') {
    posts = require('../../cache/data').posts
  } else {
    const files = fs.readdirSync(path.join('posts-doc'))

    posts = files.map((filename) => {
      const slug = filename.replace('.md', '')
      const markdownMeta = fs.readFileSync(path.join('posts-doc', filename), 'utf-8')
      const { data: frontmatter } = matter(markdownMeta)

      return {
        slug,
        frontmatter
      }
    })
  }

  const results = posts.filter(
    ({ frontmatter: { title, excerpt, category, classNames, plainText } }) =>
      title.toLowerCase().indexOf(req.query.q) != -1 ||
      excerpt.toLowerCase().indexOf(req.query.q) != -1 ||
      category.toLowerCase().indexOf(req.query.q) != -1 ||
      classNames.toLowerCase().indexOf(req.query.q) != -1 ||
      plainText.toLowerCase().indexOf(req.query.q) != -1
  )
  //   console.log(results.length)
  res.status(200).json(JSON.stringify({ results }))
}
