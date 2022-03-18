import dynamic from 'next/dynamic'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Loader from '@/components/logo/Loader'

const SlugComponent = dynamic(() => import('@/components/reusable/SlugComponent'), { loading: () => <Loader /> })
const DevelopmentToClipboard = dynamic(() => import('@/utils/DevelopmentToClipboard'))

export default function BlogPostPage({
  frontmatter: { title, excerpt, category, date, cover_image, author, isBlog, keywords },
  content,
  slug
}) {
  return (
    <>
      <DevelopmentToClipboard content={content} />
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
    </>
  )
}

// get slug
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts-blog'))
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
  const markdownMeta = fs.readFileSync(path.join('posts-blog', slug + '.md'), 'utf-8')

  const { data: frontmatter, content } = matter(markdownMeta)
  return {
    props: {
      frontmatter,
      content,
      slug
    }
  }
}
