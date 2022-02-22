import DropDown from '@/components/animation/DropDown'
import { BackButton } from '@/components/reusable/Button'
import Layout from '@/components/reusable/Layout'

export default function AnimationPage() {
  return (
    <Layout className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh'>
      <div className='mb-10rem min-w-100per relative'>
        <BackButton>Back</BackButton>
        <div className='m-auto max-w-60rem'>
          <h1 className='font-bold text-50px mb-50px'>omenCSS Animations - example</h1>
          <p className='text-25px font-normal mt-25px'>Explore the range of animations</p>
        </div>
        <DropDown />
      </div>
    </Layout>
  )
}
