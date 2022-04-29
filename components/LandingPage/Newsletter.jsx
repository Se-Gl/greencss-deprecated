import { useState } from 'react'
import useInView from '@/hooks/InView/scrollView'
import { useToast } from '@/components/toast/hooks/useToast'
import { GreenButton } from '../reusable/Button'
import Section from '../reusable/Section'

export default function Newsletter() {
  const [mail, setMail] = useState('')
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  const [ref, isVisible] = useInView({
    threshold: 0.25,
    unobserveOnEnter: true
  })

  const subscribe = () => {
    setLoading(true)
    fetch('api/newsletter', {
      method: 'PUT',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${process.env.SENDGRID_API_KEY}` },
      body: JSON.stringify({
        mail: mail
      })
    }).then((result) => {
      if (result.status === 200) {
        toast('success', `🙏 Thank you! Your email has been succesfully added to the mailing list.`)
        // setLoading(false)
      } else {
        toast('error', `⚡ Oops! There was a problem with your subscription, please try again or contact us`)
        setLoading(false)
      }
    })
  }
  return (
    <Section id='newsletter' background='bg-purple-10'>
      <div className='relative flex min-h-75vh w-100per text-white bg-black rounded-20px'>
        <div className='m-auto max-w-50rem'>
          <h2 className='font-bold text-50px pb-50px mb-0px'>
            There’s more than being <span className='text-greencss'>up-to-date</span>
          </h2>
          <p className='text-white'>
            Stay informed by getting help about the latest greenCSS updates. Find new CSS tutorials that will help you
            grow as a developer and scale your business.
          </p>

          {!loading && (
            <div className='flex justify-center sm:block'>
              <input
                onChange={(e) => {
                  setMail(e.target.value)
                }}
                maxLength='30'
                type='email'
                id='email'
                placeholder='Your E-Mail'
                className='border-none text-15px text-white bg-black-3 p-10px w-100per'></input>
              <div className='ml-25px'>
                <GreenButton onClick={subscribe} isDefault={false} isReverse={true}>
                  Newsletter
                </GreenButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}
