import dynamic from 'next/dynamic'
import Section from '@/components/reusable/Section'

const BlogLayout = dynamic(() => import('@/components/blog/BlogLayout'))
const BlogCard = dynamic(() => import('@/components/blog/BlogCard'))

export default function News({ posts }) {
  return (
    <Section id='recent-news' background='bg-yellow-10'>
      <h2 className='max-w-50rem sm:m-10px md:m-10px'>
        There are constant <span className='text-greencss'>updates</span> in the blog
      </h2>
      <BlogLayout>
        {posts.map((post, index) => (
          <BlogCard key={index} post={post} index={index} />
        ))}
      </BlogLayout>
    </Section>
  )
}
