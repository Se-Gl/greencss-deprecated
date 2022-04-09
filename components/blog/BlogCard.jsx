import Link from 'next/link'
import tinycolor from 'tinycolor2'
import { usePalette } from 'react-palette'
import Loader from '@/components/logo/Loader'
import { LinkButton } from '@/components/reusable/Button'

import useInView from '@/hooks/InView/scrollView'

export default function BlogCard({ post, index }) {
  let IMAGE_URL = post.frontmatter.cover_image
  const { data, loading } = usePalette(IMAGE_URL)
  const vibrantColor = data.vibrant
  const color = tinycolor(`${vibrantColor}`)
  const isDark = color.isDark()

  const [ref, isVisible] = useInView({
    threshold: 0.25,
    unobserveOnEnter: true
  })

  let animationStagger = isVisible
    ? `opacity-100per fade-in animate animation-forwards animation-delay-${(index + 1) * 2}00ms`
    : 'opacity-0per'

  return (
    <>
      <div ref={ref} id={`${post.slug}`} className={animationStagger} style={{ opacity: 0 }}>
        <div className='col-span-1 grid-flow-row sm:m-10px md:m-10px mb-25px'>
          {loading ? (
            <Loader />
          ) : (
            <div
              className={`min-h-40rem w-100per rounded-10px bg-cover bg-no-repeat bg-center ${
                isDark && 'border-1px border-solid border-dark'
              }`}
              style={{ backgroundImage: `url(${post.frontmatter.cover_image})`, backgroundColor: `${vibrantColor}` }}
              id='blog-card'>
              <div className='flex h-40rem min-h-50per'>
                <Link href={`${post.frontmatter.isBlog ? `/blog/${post.slug}` : `/docs/${post.slug}`}`} passHref>
                  <div
                    className={`cursor-pointer relative m-auto max-w-75per w-75per min-h-80per p-20px ${
                      !isDark && 'bg-white text-black'
                    } ${isDark && 'bg-black text-white'}
              `}>
                    <h2 className='text-50px font-bold leading-100per'>
                      {post.frontmatter.title.length >= 20
                        ? `${post.frontmatter.title.slice(0, 20)} ...`
                        : post.frontmatter.title}
                    </h2>
                    <h3 className='text-25px font-normal mt-25px'>
                      {post.frontmatter.excerpt.length >= 90
                        ? `${post.frontmatter.excerpt.slice(0, 90)} ...`
                        : post.frontmatter.excerpt}
                    </h3>
                    <LinkButton
                      id={`button-${post.slug}`}
                      className={`absolute bottom-0per my-15px transition-all transition-duration-500ms ${
                        isDark && 'text-white hover:text-black-10 active:hover:text-black-7'
                      }`}
                      href={`/blog/${post.slug}`}>
                      Read more
                    </LinkButton>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
