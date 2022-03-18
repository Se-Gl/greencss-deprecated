import dynamic from 'next/dynamic'
import { BackButton } from '@/components/reusable/Button'
import Loader from '@/components/logo/Loader'
import { HeadingRenderer, LinkRenderer, CodeRenderer } from '@/utils/ElementRenderer'

const ReactMarkdown = dynamic(() => import('react-markdown').then((mod) => mod.default), {
  ssr: false,
  loading: () => <Loader />
})
const Toc = dynamic(() => import('../toc/Toc'))
const Layout = dynamic(() => import('@/components/reusable/Layout'))
const SideBar = dynamic(() => import('../category/SideBar'))

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
      {isBlog === true && (
        <div className='grid-col-1 col-span-1 min-h-100vh sm:display-none md:display-none' id='sidebar'>
          <Toc markdownText={content} isBlog={true} />
        </div>
      )}
      <div className={`grid ${isBlog ? 'grid-col-1 m-auto' : 'grid-col-6 gap-30px'}`}>
        {!isBlog && (
          <div className='grid-col-1 col-span-1 min-h-100vh sm:display-none md:display-none' id='sidebar'>
            <ul>
              <SideBar categories={categories} posts={posts} hasSubcategory={true} />
            </ul>
          </div>
        )}
        <div className='mb-10rem min-w-100per relative col-span-5 sm:col-span-6 md:col-span-6' id={`blog-${slug}`}>
          <div className='flex justify-between sm:mb-50px md:mb-50px'>
            <BackButton>Back</BackButton>
            {isBlog === false && <Toc markdownText={content} isBlog={false} />}
          </div>

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
                a: LinkRenderer,
                h2: HeadingRenderer,
                h3: HeadingRenderer,
                code: CodeRenderer
              }}
            />
            {/* eslint-enable */}
          </div>
        </div>
      </div>
    </Layout>
  )
}
