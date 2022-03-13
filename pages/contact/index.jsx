import Layout from '@/components/reusable/Layout'
import SubSectionHero from '@/components/reusable/SubSectionHero'
import ContactForm from '@/components/contact/ContactForm'

export default function ContactPage() {
  return (
    <Layout
      title='omenCSS contact - get in touch'
      description='Contact - the right way to get to know each other. Send a message or email. Get to know omenCSS and we get to know you.'
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
  )
}
