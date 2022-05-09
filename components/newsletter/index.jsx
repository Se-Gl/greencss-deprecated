import { useState } from 'react'
import { useToast } from '@/components/toast/hooks/useToast'
import { GreenButton } from '../reusable/Button'

export default function Newsletter() {
  const [mail, setMail] = useState('')
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  const subscribe = () => {
    !mail ? null : setLoading(true)
    fetch('api/newsletter', {
      method: 'PUT',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${process.env.SENDGRID_API_KEY}` },
      body: JSON.stringify({
        mail: mail
      })
    }).then((result) => {
      if (result.status === 200) {
        toast('success', `🙏 Thank you! Your email has been succesfully added to the mailing list.`)
      } else {
        toast('error', `⚡ Oops! There was a problem with your subscription, please try again or contact us`)
        setLoading(false)
      }
    })
  }

  return (
    <div className='mt-25px'>
      {!loading ? (
        <>
          <input
            onChange={(e) => {
              setMail(e.target.value)
            }}
            maxLength='30'
            type='email'
            id='email'
            placeholder='Your E-Mail'
            className='border-none text-15px text-black bg-white rounded-5px p-10px w-100per'></input>

          <GreenButton onClick={subscribe} isDefault={false} isReverse={true} className='px-0px mt-25px mx-0px'>
            Subscribe
          </GreenButton>
        </>
      ) : (
        <p className='text-15px text-black-10'>Thank you for your subscription.</p>
      )}
    </div>
  )
}
