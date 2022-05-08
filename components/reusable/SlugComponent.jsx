import dynamic from 'next/dynamic'
import Image from 'next/image'
import remarkGfm from 'remark-gfm'
import { BackButton } from '@/components/reusable/Button'
import Loader from '@/components/logo/Loader'
import { HeadingRenderer, LinkRenderer, CodeRenderer } from '@/utils/ElementRenderer'
import ReusableModal from '../modal/ReusableModal'

const ReactMarkdown = dynamic(() => import('react-markdown').then((mod) => mod.default), {
  ssr: false,
  loading: () => <Loader />
})
const Toc = dynamic(() => import('../toc/Toc'))
const SideBar = dynamic(() => import('../category/SideBar'))

export default function SlugComponent({
  title,
  excerpt,
  category,
  cover_image,
  author,
  authorImage,
  content,
  slug,
  isBlog,
  keywords,
  posts,
  categories,
  plainText
}) {
  return (
    <div className={`grid grid-col-12 gap-30px ${isBlog === true && 'mx-auto'}`}>
      {isBlog === false && (
        <div
          className='overflow-y-scroll sticky top-20per max-h-75vh col-span-3 sm:display-none md:display-none'
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#898989 #fdfdfd' }}
          id='sidebar'>
          <ul>
            {isBlog === false && <ReusableModal isSidebar={true} />}
            <SideBar categories={categories} posts={posts} hasSubcategory={true} showSearch={false} />
          </ul>
        </div>
      )}
      <div
        className={`mb-10rem min-w-100per relative ${
          isBlog === false ? 'col-span-9 sm:col-span-12 md:col-span-12' : 'col-span-12'
        }`}
        id={`blog-${slug}`}>
        <div className='flex justify-between sm:mb-50px md:mb-50px'>
          <BackButton>Back</BackButton>
        </div>
        <div className='m-auto max-w-75rem mb-10rem'>
          <div className='my-5rem'>
            <p className='text-greencss font-600 text-15px mb-0px'>{category}</p>
            <h1 className='font-900 mb-15px'>{title}</h1>
            {isBlog && (
              <div className='flex h-40px my-25px'>
                <div className='min-h-40px min-w-40px'>
                  <Image
                    src={authorImage ? `${authorImage}` : '/images/greencss_logo_dark.png'}
                    alt={`A greenCSS Blog by ${author}`}
                    width={40}
                    height={!authorImage ? 50 : 40}
                    className={!authorImage ? '' : 'rounded-50per m-auto'}
                    placeholder='blur'
                    blurDataURL={`/_next/image?url=${authorImage}&w=16&q=1`}
                  />
                </div>
                <p className='block ml-10px my-auto font-bold text-15px'>{author}</p>
              </div>
            )}
            <h2 className='text-20px font-normal'>{excerpt}</h2>
          </div>
          {isBlog === false ? null : (
            <div className='relative h-50rem rounded-10px overflow-hidden mb-50px'>
              <Image
                quality={100}
                layout='fill'
                objectFit='cover'
                src={cover_image}
                alt={excerpt}
                placeholder='blur'
                blurDataURL={`/_next/image?url=${cover_image}&w=16&q=1`}
              />
            </div>
          )}

          <Toc markdownText={content} isBlog={true} />
          {/*  eslint-disable  */}
          <ReactMarkdown
            children={content}
            components={{
              a: LinkRenderer,
              h2: HeadingRenderer,
              h3: HeadingRenderer,
              code: CodeRenderer
            }}
            remarkPlugins={[remarkGfm]}
          />
          {/* eslint-enable */}
        </div>
        {/* TODO: SEO experiment */}
        <div className='absolute bottom-5per z-neg-1 opacity-1per' id='seo-experiment'>
          {plainText}
        </div>
      </div>
    </div>
  )
}
