import { useState } from 'react'
import { LinkButton } from '../reusable/Button'

export default function ContactForm() {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = console.log('sumbitted')
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
            <LinkButton id='submit-button' type='submit' className='my-25px' href='#'>
              Submit
            </LinkButton>
          </div>
        </div>
      </form>
    </div>
  )
}
