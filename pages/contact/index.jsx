import dynamic from 'next/dynamic'
import SubSectionHero from '@/components/reusable/SubSectionHero'
import ContactForm from '@/components/contact/ContactForm'
import LayoutTitle from '@/components/reusable/LayoutTitle'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function ContactPage() {
  return (
    <LayoutTitle title='greenCSS contact - get in touch'>
      <Layout
        description='Contact - the right way to get to know each other. Send a message or email. Get to know greenCSS and we get to know you.'
        url='docs'
        keywords='contact, message, information, exchange'>
        <div id='contact-index'>
          <SubSectionHero
            header='Contact - the right way to get to know each other.'
            subheader='Whether it is constructive feedback, negative experiences, gratitude, questions, suggestions, feature requests or simply boredom.'
            isContact={true}
            illustration={<ContactForm />}
          />
        </div>
      </Layout>
    </LayoutTitle>
  )
}
