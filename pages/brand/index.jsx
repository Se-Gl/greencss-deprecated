import BrandCard from '@/components/brand/BrandCard'
import Layout from '@/components/reusable/Layout'

export default function BrandHome() {
  return (
    <Layout className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh mb-10rem'>
      <div className='min-w-100per relative'>
        <div className='m-auto max-w-60rem mb-10rem'>
          <h1 className=''>A Brand Book - the right way to get to know a story</h1>
          <p className='text-25px font-normal mt-25px'>
            Explore the blog posts, to learn more about the latest tips and tricks. All brand features featured in the
            omenCSS Brand Book or this website are copyrighted. The omenCSS library is licensed under the MIT License.
            If you choose to use logos, designs and/or other brand assets, you acknowledge that you sufficiently
            attribute the specific content.
          </p>
          <h2 className='mt-50px'>The composition</h2>
          <p className='mt-25px'>
            The brand system features four core elements - logo, typography, colours and composition.
          </p>
          <div className='m-auto grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
            <BrandCard title='Logo' link='' />
            <BrandCard title='Typography' link='' />
            <BrandCard title='Colours' link='' />
            <BrandCard title='Composition' link='' />
          </div>
        </div>
      </div>
    </Layout>
  )
}
