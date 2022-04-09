import dynamic from 'next/dynamic'
import HeroComponent from '@/components/examples/HeroComponent'
import { BackButton } from '@/components/reusable/Button'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function Hero() {
  return (
    <Layout
      className='container bg-white sm:px-10px md:px-25px lg:px-50px min-h-100vh'
      title='Hero Section Example'
      keywords='hero, hero website, above the fold, hero section'
      description='Hero Section React Nextjs example - created with omenCSS.'
      url='/examples/hero'>
      <div className='flex justify-between sm:mb-50px md:mb-50px'>
        <BackButton>Back</BackButton>
      </div>
      <HeroComponent />
    </Layout>
  )
}
