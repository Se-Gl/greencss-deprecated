import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../../components/reusable/Layout'
import { BackButton } from '../../components/reusable/Button'

export default function BlogPostPage({
  frontmatter: { title, excerpt, category, date, cover_image, author },
  content,
  slug
}) {
  return (
    <Layout
      title={title}
      description={excerpt}
      keywords={`${category}, omenCSS, css, omen css`}
      author={author}
      className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh'>
      <div className='mb-10rem min-w-100per'>
        <BackButton>Back</BackButton>
        <div className='m-auto max-w-50rem mb-10rem'>
          <h1 className='font-bold text-50px mb-50px leading-120per'>{title}</h1>
          <p className='text-25px font-normal mt-25px'>{excerpt}</p>
        </div>
      </div>
    </Layout>
  )
}

// get slug
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))
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
  const markdownMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')

  const { data: frontmatter, content } = matter(markdownMeta)
  return {
    props: {
      frontmatter,
      content,
      slug
    }
  }
}
