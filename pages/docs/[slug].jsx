import dynamic from 'next/dynamic'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getPosts } from '@/lib/posts'
import { sortAlphabetically } from '@/utils/SortBy'

const SlugComponent = dynamic(() => import('@/components/reusable/SlugComponent'), { ssr: false })
const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })
const DevelopmentToClipboard = dynamic(() => import('@/utils/DevelopmentToClipboard'))

export default function DocsPostPage({
  frontmatter: { title, excerpt, category, date, cover_image, author, isBlog, keywords, plainText },
  content,
  slug,
  posts,
  categories
}) {
  return (
    <Layout
      title={`How to use ${title} CSS class`}
      description={excerpt}
      image={cover_image}
      url={`docs/${slug}`}
      keywords={`${category}, ${keywords} omenCSS, css, omen css`}
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
        posts={posts}
        categories={categories}
        plainText={plainText}
      />
    </Layout>
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
  const posts = getPosts(sortAlphabetically)
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
