import { useState } from 'react'
import { useToast } from '@/components/toast/hooks/useToast'
import { Button } from '../reusable/Button'

export default function Newsletter() {
  const [mail, setMail] = useState(null)
  const [loading, setLoading] = useState(false)
  const toast = useToast()

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
        toast('success', `🙏 Thankyou! Your email has been succesfully added to the mailing list.`)
        setLoading(false)
      } else {
        toast('error', `⚡ Oops! There was a problem with your subscription, please try again or contact us`)
        setLoading(false)
      }
    })
  }
  return (
    <section className='my-20rem sm:my-100px md:my-100px' id='newsletter'>
      <div className='relative flex min-h-75vh w-100per text-white bg-black rounded-20px'>
        <div className='m-auto max-w-50rem'>
          <h2 className='font-bold text-50px pb-50px mb-0px'>There’s more than being up-to-date</h2>
          <p className='text-black-10'>
            Stay informed by getting help about the latest omenCSS updates. Find new CSS tutorials that will help you
            grow as a developer and scale your business.
          </p>
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
            <Button
              onClick={subscribe}
              className={`text-white ml-20px sm:ml-0px sm:mt-25px ${loading && 'text-black-10'}`}>
              Newsletter
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
