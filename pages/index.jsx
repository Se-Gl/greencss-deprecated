import dynamic from 'next/dynamic'
import Hero from '@/components/LandingPage/Hero'
import News from '@/components/LandingPage/News'
import Presentation from '@/components/LandingPage/Presentation'

import Testimonial from '@/components/LandingPage/Testimonial'
import { getPosts } from '@/lib/posts'
import Newsletter from '@/components/LandingPage/Newsletter'
import { sortByDate } from '@/utils/SortBy'
import Faq from '@/components/LandingPage/Faq/Faq'
import Sponsor from '@/components/LandingPage/Sponsor'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function HomePage({ posts }) {
  return (
    <div className='overflow-x-hidden'>
      <Layout className='container min-h-100vh relative z-2 bg-white'>
        <Hero />
        <Presentation />
        <News posts={posts} />
        <Testimonial />
        <Newsletter />
        <Faq />
        <Sponsor />
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
