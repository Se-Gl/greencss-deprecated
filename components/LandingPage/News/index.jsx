import dynamic from 'next/dynamic'

const BlogLayout = dynamic(() => import('../../blog/BlogLayout'))
const BlogCard = dynamic(() => import('../../blog/BlogCard'))

export default function News({ posts }) {
  return (
    <div className='my-20rem sm:my-100px md:my-100px' id='recent-news'>
      <h1 className='font-bold text-50px mb-50px'>Recent News</h1>
      <BlogLayout>
        {posts.map((post, index) => (
          <BlogCard key={index} post={post} index={index} />
        ))}
      </BlogLayout>
    </div>
  )
}
