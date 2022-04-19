import dynamic from 'next/dynamic'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Loader from '@/components/logo/Loader'

const SlugComponent = dynamic(() => import('@/components/reusable/SlugComponent'), {
  ssr: false,
  loading: () => <Loader />
})
const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })
const DevelopmentToClipboard = dynamic(() => import('@/utils/DevelopmentToClipboard'))

export default function BlogPostPage({
  frontmatter: { title, excerpt, category, date, cover_image, author, isBlog, keywords },
  content,
  slug
}) {
  return (
    <Layout
      title={title}
      description={excerpt}
      image={cover_image}
      url={`blog/${slug}`}
      keywords={`${category}, ${keywords} greenCSS, css, omen css`}
      author={author}
      className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh'
      hasCanonical={true}>
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
    </Layout>
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
