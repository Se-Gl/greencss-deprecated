import fs from 'fs'
import path from 'path'

export default (req, res) => {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map((filename) => ({
    slug: {
      slug: filename.replace('.md', '')
    }
  }))

  res.statusCode = 200
  res.json(paths)
}
