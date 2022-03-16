import { useState } from 'react'
import axios from 'axios'
import { useToast } from '@/components/toast/hooks/useToast'
import { Button } from '../reusable/Button'

export default function Newsletter() {
  const [mail, setMail] = useState(null)
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  const subscribe = () => {
    setLoading(true)
    axios
      .put('api/newsletter', {
        mail
      })
      .then((result) => {
        if (result.status === 200) {
          toast('success', `🙏 Thankyou! Your email has been succesfully added to the mailing list.`)
          setLoading(false)
        }
      })
      .catch((err) => {
        toast('error', `⚡ Oops! There was a problem with your subscription, please try again or contact us`)
        setLoading(false)
      })
  }
  return (
    <section className='my-20rem sm:my-100px md:my-100px' id='newsletter'>
      <div className='relative flex min-h-75vh w-100per text-center text-light bg-dark rounded-20px'>
        <div className='m-auto max-w-50rem'>
          <h2 className='font-bold text-50px pb-50px mb-0px'>There’s more than being up-to-date</h2>
          <div className='flex justify-center'>
            <input
              onChange={(e) => {
                setMail(e.target.value)
              }}
              maxLength='30'
              type='email'
              id='email'
              placeholder='Your E-Mail'
              className='border-none text-15px text-black-3 bg-light py-10px w-25rem'></input>
            <Button onClick={subscribe} className={`text-white ml-20px ${loading && 'text-black-5'}`}>
              Newsletter
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
