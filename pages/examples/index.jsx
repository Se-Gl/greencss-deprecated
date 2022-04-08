import BrandCard from '@/components/brand/BrandCard'
import HandCrafted from '@/components/icon/Animation/Handcrafted'
import Layout from '@/components/reusable/Layout'
import SubSectionHero from '@/components/reusable/SubSectionHero'

export default function ExamplesIndexPage() {
  const examples = [
    {
      title: 'Hero Section',
      link: '/examples/hero'
    },
    {
      title: 'Animation',
      link: '/examples/animation'
    }
  ]

  return (
    <>
      <Layout
        className='container min-h-100vh relative z-2'
        title='Handmade, crafted examples by omenCSS'
        description='The collaboration of design and code plays an important role, especially in web development. Check the full selection, explore countless examples such as animations or tutorial examples.'
        url='examples'
        keywords='Examples, Animation, handmade css animation, tutorial examples, omen css'
        id='examples-index'>
        <div id='examples-index'>
          <SubSectionHero
            header='Handmade, crafted examples'
            subheader='Nowadays, a beautiful website is easy to create - if you use omenCSS. However, bringing a web application alive is more difficult.'
            illustration={<HandCrafted />}
          />
          <div className='pb-100px'>
            <p>
              The collaboration of design and code plays an important role, especially in web development. The keyword
              for this process is &quot;learning by doing&quot;. Check the example cards below in order to obtain a
              visual impression of all projects, tutorials or animations.
            </p>
            <div className='m-auto grid grid-col-2 gap-30px sm:gap-15px sm:grid-col-1 md:grid-col-1'>
              {examples
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((example, index) => (
                  <BrandCard title={example.title} link={example.link} key={index} />
                ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
