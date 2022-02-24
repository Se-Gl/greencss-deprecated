import Layout from '@/components/reusable/Layout'

export default function BlogIndex() {
  return (
    <Layout
      className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh mb-10rem'
      title='Documentation | omenCSS'
      description='Documentation for the omenCSS library. A classy, responsive and animated CSS library for every framework.'
      url='docs'
      keywords='documentation, information, omencss installation, omen css'>
      <div className='min-w-100per relative'>
        <div className='m-auto max-w-50rem mb-10rem'>
          <h1>Docs page</h1>
        </div>
      </div>
    </Layout>
  )
}
