import { useState } from 'react'
import { Button } from '../reusable/Button'
import { useToast } from '../../components/toast/hooks/useToast'

export default function ContactForm() {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

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
      setButtonText('Sending')
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
        return
      }
      setShowSuccessMessage(true)
      toast('success', '🙏 Thankyou! Your Message has been delivered.')
      setShowFailureMessage(false)
      setButtonText('Send')
      // Reset form fields
      setFullname('')
      setEmail('')
      setMessage('')
      setSubject('')
    }
  }

  return (
    <div className='m-auto sm:max-w-60rem md:max-w-60rem mb-10rem'>
      <h2 className='mt-50px'>Contact form</h2>
      <form className='rounded-10px bg-light shadow-black-5' onSubmit={handleSubmit} id='contact-form'>
        <div className='px-10px flex flex-col'>
          <h3 className='pt-25px'>Send a message</h3>
          <label htmlFor='fullname' className='text-black-5 mt-25px mb-5px text-15px'>
            Full name<span className='text-red-2'>*</span>
          </label>
          <input
            maxLength='30'
            type='text'
            id='fullname'
            className='bg-transparent border-1px border-black-5 text-15px text-black-3 border-x-0px border-top-0px'
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value)
            }}
          />

          <label htmlFor='email' className='text-black-5 mt-25px mb-5px text-15px'>
            E-mail<span className='text-red-2'>*</span>
          </label>
          <input
            maxLength='30'
            type='email'
            id='email'
            className='bg-transparent border-1px border-black-5 text-15px text-black-3 border-x-0px border-top-0px'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />

          <label htmlFor='subject' className='text-black-5 mt-25px mb-5px text-15px'>
            Subject<span className='text-red-2'>*</span>
          </label>
          <input
            maxLength='30'
            type='text'
            id='subject'
            className='bg-transparent border-1px border-black-5 text-15px text-black-3 border-x-0px border-top-0px'
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value)
            }}
          />

          <label htmlFor='message' className='text-black-5 mt-25px mb-5px text-15px'>
            Message<span className='text-red-2'>*</span>
          </label>
          <textarea
            maxLength='500'
            id='message'
            className='bg-transparent border-1px border-black-5 text-15px text-black-3 border-x-0px border-top-0px'
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
            }}></textarea>

          <div className='flex flex-row items-center justify-start'>
            <Button type='submit' className='mt-50px mb-25px' id='submit-button'>
              {buttonText}
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
