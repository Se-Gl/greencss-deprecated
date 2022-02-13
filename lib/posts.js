import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '@/utils/SortByDate'

export function getPosts(origin = 'posts') {
  const files = fs.readdirSync(path.join(origin))
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(path.join(origin, filename), 'utf-8')
    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  return posts.sort(sortByDate)
}
