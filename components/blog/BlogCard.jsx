import { usePalette } from 'react-palette'
import Loader from '../logo/Loader'
import tinycolor from 'tinycolor2'
import { LinkButton } from '../reusable/Button'
import Link from 'next/link'

export default function BlogCard({ post }) {
  let IMAGE_URL = post.frontmatter.cover_image
  const { data, loading } = usePalette(IMAGE_URL)
  const vibrantColor = data.vibrant
  const color = tinycolor(`${vibrantColor}`)
  const isDark = color.isDark()

  return (
    <div className='col-span-1 grid-flow-row sm:m-10px md:m-10px' id={`${post.frontmatter.title}`}>
      {loading ? (
        <Loader />
      ) : (
        <div
          className={`min-h-50rem w-100per rounded-10px bg-cover bg-no-repeat bg-center ${
            !isDark && 'border-1px border-solid border-dark'
          }`}
          style={{ backgroundImage: `url(${post.frontmatter.cover_image})` }}
          id='bg-image'>
          <div className='flex h-50rem min-h-50per'>
            <Link href={`/blog/${post.slug}`}>
              <div
                style={{ cursor: 'pointer' }}
                className={`relative m-auto max-w-75per w-75per min-h-80per ${isDark && 'bg-light text-dark'} ${
                  !isDark && 'bg-dark text-light'
                }
              `}>
                <h1 className='text-50px font-bold leading-100per'>{post.frontmatter.title}</h1>
                <p className='text-25px font-normal mt-25px'>{post.frontmatter.excerpt}</p>
                <LinkButton
                  className={`absolute bottom-0 mt-50px ${isDark && 'text-dark'} ${!isDark && 'text-light'}`}
                  href={`/blog/${post.slug}`}>
                  Read more
                </LinkButton>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
