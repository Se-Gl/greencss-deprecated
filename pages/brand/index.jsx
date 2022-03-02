import BrandCard from '@/components/brand/BrandCard'
import BrandBook from '@/components/icon/Brand/BrandBook'
import Layout from '@/components/reusable/Layout'

export default function BrandHome() {
  return (
    <Layout
      className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh mb-10rem'
      title='omenCSS Brand Book | Styleguide | Corporate Identity'
      description='A Brand Book - the right way to get to know a story by exploring a style guide.'
      url='brand'
      keywords='Styleguide, Brand Book, omenCSS, Design, Corporate Identity, omen css'>
      <div className='min-w-100per relative' id='brand-intro'>
        <div className='m-auto max-w-60rem mb-10rem'>
          <h1>A Brand Book - the right way to get to know a story</h1>
          <BrandBook />
          <p>
            All brand features featured in the omenCSS Brand Book or this website are copyrighted. The omenCSS library
            is licensed under the MIT License. If you choose to use logos, designs and/or other brand assets, you
            acknowledge that you sufficiently attribute the specific content.
          </p>
          <h2 className='mt-50px'>The composition</h2>
          <p className='mt-25px'>
            The brand system features four core elements - logo, typography, colours and composition.
          </p>
          <div className='m-auto grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
            <BrandCard title='Logo' link='/brand/logo' />
            <BrandCard title='Typography' link='/brand/typography' />
            <BrandCard title='Colours' link='/brand/colours' />
            <BrandCard title='Composition' link='/brand/composition' />
          </div>
        </div>
      </div>
    </Layout>
  )
}
