import dynamic from 'next/dynamic'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { VsStyle } from '../../data/SynatxStyle'
import Layout from '../../components/reusable/Layout'
import { BackButton } from '../../components/reusable/Button'
import Loader from '../../components/logo/Loader'

const ReactMarkdown = dynamic(() => import('react-markdown').then((mod) => mod.default), {
  ssr: false,
  loading: () => <Loader />
})

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
      <div className='mb-10rem min-w-100per' id={`blog-${slug}`}>
        <BackButton>Back</BackButton>
        <div className='m-auto max-w-75rem mb-10rem'>
          <h1 className='font-bold text-50px mb-50px leading-120per'>{title}</h1>
          <h3>{excerpt}</h3>
          {/*  eslint-disable  */}
          <ReactMarkdown
            children={content}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={VsStyle}
                    language={match[1]}
                    PreTag='div'
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}
          />
          {/* eslint-enable */}
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
