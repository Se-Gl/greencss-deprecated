import dynamic from 'next/dynamic'
import Hero from '@/components/LandingPage/Hero'

import { getPosts } from '@/lib/posts'
import { sortByDate } from '@/utils/SortBy'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })
const Presentation = dynamic(() => import('@/components/LandingPage/Presentation'))
const Sponsor = dynamic(() => import('@/components/LandingPage/Sponsor'))
const News = dynamic(() => import('@/components/LandingPage/News'))
const Testimonial = dynamic(() => import('@/components/LandingPage/Testimonial'))
const Newsletter = dynamic(() => import('@/components/LandingPage/Newsletter'))
const Faq = dynamic(() => import('@/components/LandingPage/Faq/Faq'))

export default function HomePage({ posts }) {
  return (
    <div className='overflow-x-hidden'>
      <Layout className='container min-h-100vh relative z-2 bg-white'>
        <Hero />
        <Presentation />
        <Sponsor />
        <News posts={posts} />
        <Testimonial />
        <Newsletter />
        <Faq />
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
