import dynamic from 'next/dynamic'
import Hero from '@/components/LandingPage/Hero'
import News from '@/components/LandingPage/News'
import Presentation from '@/components/LandingPage/Presentation'
import Service from '@/components/LandingPage/Service'
import Support from '@/components/LandingPage/Support'
import Testimonial from '@/components/LandingPage/Testimonial'
import { getPosts } from '@/lib/posts'
import Newsletter from '@/components/LandingPage/Newsletter'
import { sortByDate } from '@/utils/SortBy'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function HomePage({ posts }) {
  return (
    <div className='overflow-x-hidden'>
      <Layout className='container min-h-100vh relative z-2 bg-white'>
        <Hero />
        <Presentation />
        <Support />
        <News posts={posts} />
        <Testimonial />
        <Service />
        <Newsletter />
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts(sortByDate, 'posts-blog').slice(0, 3)
    }
  }
}
