import dynamic from 'next/dynamic'
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { VsStyle } from '@/data/SynatxStyle'
import Layout from '@/components/reusable/Layout'
import { BackButton } from '@/components/reusable/Button'
import Loader from '@/components/logo/Loader'
import SideBar from '../category/SideBar'

const ReactMarkdown = dynamic(() => import('react-markdown').then((mod) => mod.default), {
  ssr: false,
  loading: () => <Loader />
})

export default function SlugComponent({
  title,
  excerpt,
  category,
  cover_image,
  author,
  content,
  slug,
  isBlog,
  keywords,
  posts,
  categories
}) {
  return (
    <Layout
      title={title}
      description={excerpt}
      image={cover_image}
      url={`${isBlog === true ? `blog/${slug}` : `docs/${slug}`}`}
      keywords={`${category},${keywords} omenCSS, css, omen css`}
      author={author}
      className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh'>
      <div className={`grid ${isBlog ? 'grid-col-1 m-auto' : 'grid-col-6 gap-30px'}`}>
        {!isBlog && (
          <div className='grid-col-1 col-span-1 min-h-100vh sm:display-none md:display-none' id='sidebar'>
            <ul>
              <SideBar categories={categories} posts={posts} hasSubcategory={true} />
            </ul>
          </div>
        )}
        <div className='mb-10rem min-w-100per relative col-span-5 sm:col-span-6 md:col-span-6' id={`blog-${slug}`}>
          <BackButton>Back</BackButton>
          <div className='m-auto max-w-75rem mb-10rem'>
            <h1 className='text-80px sm:text-50px'>{title}</h1>
            {isBlog === false ? null : (
              <img src={cover_image} alt={excerpt} className='w-100per rounded-10px mb-50px' />
            )}
            <h2>{excerpt}</h2>
            {/*  eslint-disable  */}
            <ReactMarkdown
              children={content}
              components={{
                a: ({ node, ...props }) => {
                  return (
                    <Link href={props.href}>
                      <a>{props.children[0]}</a>
                    </Link>
                  )
                },
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <>
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, '')}
                        style={VsStyle}
                        language={match[1]}
                        PreTag='div'
                        {...props}
                      />
                    </>
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
      </div>
    </Layout>
  )
}
