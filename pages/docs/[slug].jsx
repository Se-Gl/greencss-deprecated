import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SlugComponent from '@/components/reusable/SlugComponent'
import { getPosts } from '@/lib/posts'

export default function BlogPostPage({
  frontmatter: { title, excerpt, category, date, cover_image, author, isBlog, keywords, toc },
  content,
  slug,
  posts,
  categories
}) {
  return (
    <SlugComponent
      title={title}
      excerpt={excerpt}
      category={category}
      keywords={keywords}
      date={date}
      cover_image={cover_image}
      author={author}
      content={content}
      slug={slug}
      isBlog={isBlog}
      posts={posts}
      categories={categories}
      toc={toc}
    />
  )
}

// get slug
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts-doc'))
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))
  //   console.log(paths)
  return {
    paths,
    fallback: false
  }
}

// get blog post
export async function getStaticProps({ params: { slug } }) {
  const posts = getPosts()
  const categories = posts.map((post) => post.frontmatter.category)
  const uniqueCategories = [...new Set(categories)]
  const markdownMeta = fs.readFileSync(path.join('posts-doc', slug + '.md'), 'utf-8')

  const { data: frontmatter, content } = matter(markdownMeta)
  return {
    props: {
      posts,
      categories: uniqueCategories,
      frontmatter,
      content,
      slug
    }
  }
}
