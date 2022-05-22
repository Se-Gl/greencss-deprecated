import dynamic from 'next/dynamic'
import SEO from '@/components/reusable/SEO'
import DefaultHero from '@/components/grid/DefaultHero'
import AboutTestimonial from '@/components/about/AboutTestimonial'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

const aboutImages = [
  {
    imageURL: '/images/about/wind.webp',
    imageAlt: 'greenCSS wind nature',
    dimensions: 250
  },
  {
    imageURL: '/images/about/water-drop.webp',
    imageAlt: 'greenCSS water drop nature',
    dimensions: 250
  }
]

export default function AboutPage() {
  return (
    <SEO
      title='greenCSS about - get a glimpse'
      description='greenCSS is a global, environmental, sustainable open source, non-profit organization that works to make the world a better and more environmentally friendly way for nature'
      url='docs'
      keywords='about, sustainable open source, competitive development, sustainable programming'>
      <Layout>
        <DefaultHero
          id='about-index'
          header='About greenCSS'
          primaryImageURL='/images/about/footprint.webp'
          primaryImageAlt='sustainable tomato plant'
          primaryDimensions={300}
          mapping={aboutImages}
        />
        <AboutTestimonial />
      </Layout>
    </SEO>
  )
}
