import Layout from '@/components/reusable/Layout'
import SubSectionHero from '@/components/reusable/SubSectionHero'
import ContactHero from '@/components/icon/Contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'

export default function ContactPage() {
  return (
    <Layout
      title='omenCSS contact - get in touch'
      description='Contact - the right way to get to know each other. Send a message or email. Get to know omenCSS and we get to know you.'
      url='docs'
      keywords='contact, message, information, exchange'>
      <div className='grid grid-col-2 gap-30px'>
        <div className='min-w-100per relative col-span-5 sm:col-span-6 md:col-span-6' id='contact-index'>
          <SubSectionHero
            header='Contact - the right way to get to know each other.'
            subheader='Whether it is constructive feedback, negative experiences, gratitude, questions, suggestions, feature requests or just from boredom. omenCSS is open to any kind of feedback and will promptly process your request.'
            illustration={<ContactHero width='100%' height='100%' />}
          />
          <ContactForm />
        </div>
      </div>
    </Layout>
  )
}
