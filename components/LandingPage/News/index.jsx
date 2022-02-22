import dynamic from 'next/dynamic'

const BlogLayout = dynamic(() => import('@/components/blog/BlogLayout'))
const BlogCard = dynamic(() => import('@/components/blog/BlogCard'))

export default function News({ posts }) {
  return (
    <section className='my-20rem sm:my-100px md:my-100px' id='recent-news'>
      <h2>Recent News</h2>
      <BlogLayout>
        {posts.map((post, index) => (
          <BlogCard key={index} post={post} index={index} />
        ))}
      </BlogLayout>
    </section>
  )
}
