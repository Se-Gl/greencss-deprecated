import DropDown from '../../components/animation/DropDown'
import Layout from '../../components/reusable/Layout'

export default function AnimationPage() {
  return (
    <Layout className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh'>
      <div className='mt-20rem min-w-100per relative'>
        <DropDown />
      </div>
    </Layout>
  )
}
