import { useState } from 'react'
import { Button } from '../reusable/Button'

export default function ContactForm() {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  //   Form validation
  const [errors, setErrors] = useState({})

  //   Setting button text
  const [buttonText, setButtonText] = useState('Send')

  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  const handleValidation = () => {
    let tempErrors = {}
    let isValid = true

    if (fullname.length <= 0) {
      tempErrors['fullname'] = true
      isValid = false
    }
    if (email.length <= 0) {
      tempErrors['email'] = true
      isValid = false
    }
    if (subject.length <= 0) {
      tempErrors['subject'] = true
      isValid = false
    }
    if (message.length <= 0) {
      tempErrors['message'] = true
      isValid = false
    }

    setErrors({ ...tempErrors })
    // console.log('errors', errors)
    return isValid
  }

  //   const [form, setForm] = useState(false);

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
        // console.log(error)
        setShowSuccessMessage(false)
        setShowFailureMessage(true)
        setButtonText('Send')

        // Reset form fields
        setFullname('')
        setEmail('')
        setMessage('')
        setSubject('')
        return
      }
      setShowSuccessMessage(true)
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
          {errors?.fullname && <p className='text-red-2 text-10px mb-0px'>Fullname cannot be empty.</p>}
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
          {errors?.email && <p className='text-red-2 text-10px mb-0px'>Email cannot be empty.</p>}
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
          {errors?.subject && <p className='text-red-2 text-10px mb-0px'>Subject cannot be empty.</p>}
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
          {errors?.message && <p className='text-red-2 text-10px mb-0px'>Message body cannot be empty.</p>}
          <div className='flex flex-row items-center justify-start'>
            <Button type='submit' className='mt-50px mb-25px' id='submit-button'>
              {buttonText}
            </Button>
          </div>
        </div>
        <div className='text-left'>
          {showSuccessMessage && (
            <p className='text-green-5 text-15px my-25px'>Thankyou! Your Message has been delivered.</p>
          )}
          {showFailureMessage && <p className='text-red-2'>Oops! Something went wrong, please try again.</p>}
        </div>
      </form>
    </div>
  )
}
