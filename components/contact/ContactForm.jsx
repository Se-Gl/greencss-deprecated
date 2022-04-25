import dynamic from 'next/dynamic'
import { useState } from 'react'
import { GreenButton } from '../reusable/Button'
import { useToast } from '@/components/toast/hooks/useToast'

const CaptchaComponent = dynamic(() => import('../captcha/CaptchaComponent'), { ssr: false })
// import CaptchaComponent from '../captcha/CaptchaComponent'

export default function ContactForm() {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  // captcha
  const [verifyCaptcha, setverifyCaptcha] = useState('')
  const [captcha, setCaptcha] = useState([])

  const toast = useToast()

  //   Form validation
  const [errors, setErrors] = useState({})

  //   Setting button text
  const [buttonText, setButtonText] = useState('Send')

  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  const handleValidation = () => {
    let tempErrors = {}
    let isValid = true

    if (fullname.length <= 0 || subject.length <= 0 || message.length <= 0) {
      tempErrors['fullname' || 'subject' || 'message'] = true
      isValid = false
      toast('warning', '☝️ An error has occurred. Please check your input.')
    }
    if (verifyCaptcha != captcha) {
      isValid = false
      toast('warning', '🤔 Are you human? Please verify your captcha')
    }
    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      tempErrors['email'] = true
      isValid = false
      toast('warning', '☝️ Please provide a valid email address.')
    }

    setErrors({ ...tempErrors })
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let isValidForm = handleValidation()

    if (isValidForm) {
      setButtonText('disabled')
      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })

      const { error } = await res.json()
      if (error) {
        setShowSuccessMessage(false)
        setShowFailureMessage(true)
        toast('error', '⚡ Oops! Something went wrong, please try again later.')
        setButtonText('Send')
        // Reset form fields
        setFullname('')
        setEmail('')
        setMessage('')
        setSubject('')
        setverifyCaptcha('')
        return
      }
      setShowSuccessMessage(true)
      toast('success', '🙏 Thank you! Your Message has been delivered.')
      setShowFailureMessage(false)
      setButtonText('Send')
      // Reset form fields
      setFullname('')
      setEmail('')
      setMessage('')
      setSubject('')
      setverifyCaptcha('')
    }
  }

  return (
    <div className='mb-10rem'>
      <form className='rounded-10px shadow-black-5' onSubmit={handleSubmit} id='contact-form'>
        <div className='px-10px flex flex-col'>
          <h3 className='pt-25px'>Send a message</h3>
          <label htmlFor='fullname' className='font-600 mt-25px mb-5px text-15px'>
            Full name<span className='text-red-2'>*</span>
          </label>
          <input
            maxLength='30'
            type='text'
            id='fullname'
            className='border-none text-15px text-black-3 bg-black-10 py-10px'
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value)
            }}
          />

          <label htmlFor='email' className='font-600 mt-25px mb-5px text-15px'>
            E-mail<span className='text-red-2'>*</span>
          </label>
          <input
            maxLength='30'
            type='email'
            id='email'
            className='border-none text-15px text-black-3 bg-black-10 py-10px'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />

          <label htmlFor='subject' className='font-600 mt-25px mb-5px text-15px'>
            Subject<span className='text-red-2'>*</span>
          </label>
          <input
            maxLength='30'
            type='text'
            id='subject'
            className='border-none text-15px text-black-3 bg-black-10 py-10px'
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value)
            }}
          />

          <label htmlFor='message' className='font-600 mt-25px mb-5px text-15px'>
            Message<span className='text-red-2'>*</span>
          </label>
          <textarea
            maxLength='500'
            id='message'
            className='border-none text-15px text-black-3 bg-black-10 py-10px'
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
            }}></textarea>

          <CaptchaComponent
            verifyCaptcha={verifyCaptcha}
            setverifyCaptcha={setverifyCaptcha}
            captcha={captcha}
            setCaptcha={setCaptcha}
          />

          {buttonText == 'Send' && (
            <div className='flex flex-row items-center justify-start my-25px'>
              <GreenButton type='submit' id='submit-button' className='text-greencss hover:text-greencss'>
                {buttonText}
              </GreenButton>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}
