import dynamic from 'next/dynamic'
import HeroComponent from '@/components/examples/HeroComponent'
import { BackButton } from '@/components/reusable/Button'
import LayoutTitle from '@/components/reusable/LayoutTitle'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function Hero() {
  return (
    <LayoutTitle title='Hero Section Example'>
      <Layout
        className='container bg-white sm:px-10px md:px-25px lg:px-50px min-h-100vh'
        keywords='hero, hero website, above the fold, hero section'
        description='Hero Section React Nextjs example - created with greenCSS.'
        url='/examples/hero'>
        <div className='flex justify-between sm:mb-50px md:mb-50px'>
          <BackButton>Back</BackButton>
        </div>
        <HeroComponent />
      </Layout>
    </LayoutTitle>
  )
}
