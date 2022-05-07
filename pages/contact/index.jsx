import dynamic from 'next/dynamic'
import SubSectionHero from '@/components/grid/SubSectionHero'
import ContactForm from '@/components/contact/ContactForm'
import SEO from '@/components/reusable/SEO'
import DefaultHero from '@/components/grid/DefaultHero'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function ContactPage() {
  return (
    <SEO
      title='greenCSS contact - get in touch'
      description='Contact - the right way to get to know each other.'
      url='docs'
      keywords='contact, message, information, exchange'>
      <Layout>
        <DefaultHero id='contact-index' header='Contact - the right way to get to know each other.' />
        {/* TODO: add map*/}
        <ContactForm />
      </Layout>
    </SEO>
  )
}
