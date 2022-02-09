import Hero from '../components/LandingPage/Hero'
import News from '../components/LandingPage/News'
import Presentation from '../components/LandingPage/Presentation'
import Service from '../components/LandingPage/Service'
import Support from '../components/LandingPage/Support'
import Testimonial from '../components/LandingPage/Testimonial'
import Bubbles from '../components/reusable/Bubbles'

import Layout from '../components/reusable/Layout'

export default function HomePage() {
  return (
    <div className='overflow-x-hidden'>
      <Layout className='container min-h-100vh relative z-2'>
        <Hero />
        <Presentation />
        <Support />
        <News />
        <Testimonial />
        <Service />
        <Bubbles />
      </Layout>
    </div>
  )
}
