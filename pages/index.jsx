import Hero from '../components/LandingPage/Hero'
import Presentation from '../components/LandingPage/Presentation'
import Support from '../components/LandingPage/Support'
import Bubbles from '../components/reusable/Bubbles'

import Layout from '../components/reusable/Layout'

export default function HomePage() {
  return (
    <div className='overflow-x-hidden'>
      <Layout className='container min-h-100vh relative z-2'>
        <Hero />
        <Presentation />
        <Support />
        <Bubbles />
      </Layout>
    </div>
  )
}
