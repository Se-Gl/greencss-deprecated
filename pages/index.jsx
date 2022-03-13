import { useEffect } from 'react'
import Hero from '@/components/LandingPage/Hero'
import News from '@/components/LandingPage/News'
import Presentation from '@/components/LandingPage/Presentation'
import Service from '@/components/LandingPage/Service'
import Support from '@/components/LandingPage/Support'
import Testimonial from '@/components/LandingPage/Testimonial'
import Layout from '@/components/reusable/Layout'
import { getPosts } from '@/lib/posts'
import { useToast } from '@/components/toast/hooks/useToast'

export default function HomePage({ posts }) {
  const toast = useToast()
  const getCookie = () => {
    if (typeof window !== 'undefined') {
      const localCookie = localStorage.getItem('cookie')
      if (localCookie) return JSON.parse(localCookie)
    }
    return ''
  }

  useEffect(() => {
    getCookie() != 'accepted' &&
      toast(
        'cookie',
        '🍪 By clicking “OK” or the checkmark, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our UI/UX efforts.',
        999999
      )
  }, [])

  return (
    <div className='overflow-x-hidden'>
      <div className='relative'>
        <div className='absolute right-0per top-0per'>
          <div id='heroimage' className='w-100vw h-100vh z-99 bg-dark sm:bg-light md:bg-light'></div>
        </div>
      </div>
      <Layout className='container min-h-100vh relative z-2'>
        <Hero />
        <Presentation />
        <Support />
        <News posts={posts} />
        <Testimonial />
        <Service />
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts('posts-blog').slice(0, 3)
    }
  }
}
