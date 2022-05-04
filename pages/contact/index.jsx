import dynamic from 'next/dynamic'
import SubSectionHero from '@/components/reusable/SubSectionHero'
import ContactForm from '@/components/contact/ContactForm'
import SEO from '@/components/reusable/SEO'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function ContactPage() {
  return (
    <SEO
      title='greenCSS contact - get in touch'
      description='Contact - the right way to get to know each other. Send a message or email. Get to know greenCSS and we get to know you.'
      url='docs'
      keywords='contact, message, information, exchange'>
      <Layout>
        <div id='contact-index'>
          <SubSectionHero
            header='Contact - the right way to get to know each other.'
            subheader='Whether it is constructive feedback, negative experiences, gratitude, questions, suggestions, feature requests or simply boredom.'
            isContact={true}
            illustration={<ContactForm />}
          />
        </div>
      </Layout>
    </SEO>
  )
}
