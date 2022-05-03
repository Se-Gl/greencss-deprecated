import dynamic from 'next/dynamic'
import DropDown from '@/components/animation/DropDown'
import { BackButton } from '@/components/reusable/Button'
import LayoutTitle from '@/components/reusable/LayoutTitle'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function AnimationPage() {
  return (
    <LayoutTitle title='CSS Animations by greenCSS'>
      <Layout
        className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh'
        description='Explore the range of animations. Enter your preferred animation, the animation duration and the animation type.'
        url='docs/animation/example'
        keywords='Animation, css animation, reusable animation, omen css'>
        <div className='mb-10rem min-w-100per relative'>
          <BackButton>Back</BackButton>
          <div className='m-auto max-w-60rem'>
            <h1>greenCSS Animations - example</h1>
            <p>Explore the range of animations</p>
          </div>
          <DropDown />
        </div>
      </Layout>
    </LayoutTitle>
  )
}
