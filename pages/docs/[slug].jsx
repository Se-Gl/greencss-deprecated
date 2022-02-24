import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SlugComponent from '@/components/reusable/SlugComponent'

export default function BlogPostPage({
  frontmatter: { title, excerpt, category, date, cover_image, author, isBlog, keywords },
  content,
  slug
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
  const markdownMeta = fs.readFileSync(path.join('posts-doc', slug + '.md'), 'utf-8')

  const { data: frontmatter, content } = matter(markdownMeta)
  return {
    props: {
      frontmatter,
      content,
      slug
    }
  }
}
