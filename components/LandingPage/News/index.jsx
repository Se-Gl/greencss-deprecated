import dynamic from 'next/dynamic'
import useInView from '@/hooks/InView/scrollView'

const BlogLayout = dynamic(() => import('@/components/blog/BlogLayout'))
const BlogCard = dynamic(() => import('@/components/blog/BlogCard'))

export default function News({ posts }) {
  const [ref, isVisible] = useInView({
    threshold: 0.25,
    unobserveOnEnter: true
  })
  return (
    <section
      ref={ref}
      className={`py-10rem sm:my-0px md:my-0px sm:m-10px md:m-10px ${
        isVisible && 'bg-yellow-10 transition-all transition-duration-800ms'
      }`}
      id='recent-news'>
      <h2 className='max-w-50rem sm:m-10px md:m-10px'>
        There are constant <span className='text-green'>updates</span> in the blog
      </h2>
      <BlogLayout>
        {posts.map((post, index) => (
          <BlogCard key={index} post={post} index={index} />
        ))}
      </BlogLayout>
    </section>
  )
}
