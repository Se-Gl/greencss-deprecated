import dynamic from 'next/dynamic'
import { useState } from 'react'
import { GreenButton } from '../reusable/Button'
import { useToast } from '@/components/toast/hooks/useToast'

const CaptchaComponent = dynamic(() => import('../captcha/CaptchaComponent'), { ssr: false })

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

  const contactItems = [
    {
      htmlFor: 'fullname',
      label: 'Full name',
      maxLength: 30,
      type: 'text',
      value: fullname,
      onChange: (e) => {
        setFullname(e.target.value)
      }
    },
    {
      htmlFor: 'email',
      label: 'E-mail',
      maxLength: 30,
      type: 'email',
      value: email,
      onChange: (e) => {
        setEmail(e.target.value)
      }
    },
    {
      htmlFor: 'subject',
      label: 'Subject',
      maxLength: 30,
      type: 'text',
      value: subject,
      onChange: (e) => {
        setSubject(e.target.value)
      }
    }
  ]

  return (
    <div className='mb-50px bg-white'>
      <form
        className='rounded-10px shadow-small-black-10 sm:shadow-transparent md:shadow-transparent'
        onSubmit={handleSubmit}
        id='contact-form'>
        <div className='px-10px flex flex-col'>
          <h3 className='pt-25px max-w-50per sm:max-w-100per md:max-w-100per'>
            Get in Touch with Us! And send a message
          </h3>
          <p className='text-black-10 text-15px  max-w-50per sm:max-w-100per md:max-w-100per'>
            Whether it is constructive feedback, negative experiences, gratitude, questions, suggestions, feature
            requests or simply boredom.
          </p>
          {contactItems.sort().map((item, index) => {
            return (
              <div key={index} className='w-100per mb-25px'>
                <label htmlFor={item.htmlFor} className='font-600 text-15px'>
                  {item.label}
                  <span className='text-red-2'>*</span>
                </label>
                <input
                  maxLength={item.maxLength}
                  type={item.type}
                  id={item.htmlFor}
                  className='border-solid border-1px border-greencss rounded-5px text-15px text-black-3 text-black font-600 py-10px w-100per'
                  value={item.value}
                  onChange={item.onChange}
                />
              </div>
            )
          })}
          <label htmlFor='message' className='font-600 mb-5px text-15px'>
            Message<span className='text-red-2'>*</span>
          </label>
          <textarea
            maxLength='500'
            id='message'
            className='border-solid border-1px border-greencss rounded-5px text-15px text-black-3 text-black font-600 py-10px'
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
              <GreenButton type='submit' id='submit-button'>
                {buttonText}
              </GreenButton>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}
