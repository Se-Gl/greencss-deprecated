import Hero from '@/components/LandingPage/Hero'
import News from '@/components/LandingPage/News'
import Presentation from '@/components/LandingPage/Presentation'
import Service from '@/components/LandingPage/Service'
import Support from '@/components/LandingPage/Support'
import Testimonial from '@/components/LandingPage/Testimonial'
import Bubbles from '@/components/reusable/Bubbles'
import Layout from '@/components/reusable/Layout'
import { getPosts } from '@/lib/posts'

export default function HomePage({ posts }) {
  return (
    <div className='overflow-x-hidden'>
      <Layout className='container min-h-100vh relative z-2'>
        <Hero />
        <Presentation />
        <Support />
        <News posts={posts} />
        <Testimonial />
        <Service />
        <Bubbles />
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, 3)
    }
  }
}
