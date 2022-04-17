import { useEffect, useState } from 'react'
import { GreenButton } from './Button'

export default function Cookies() {
  const [cookieBanner, setCookieBanner] = useState(true)
  const getCookie = () => {
    if (typeof window !== 'undefined') {
      const localCookie = localStorage.getItem('cookie')
      if (localCookie) return JSON.parse(localCookie)
    }
    return ''
  }

  useEffect(() => {
    getCookie() == 'accepted' && setCookieBanner(false)
  }, [])

  const cookie = () => {
    localStorage.setItem('cookie', JSON.stringify('accepted'))
    setCookieBanner(false)
  }

  return (
    <>
      {cookieBanner && (
        <div className='fixed bottom-0per left-0per min-h-10vh w-100vw bg-greencss z-99' id='cookie-banner'>
          <div className='flex sm:block sm:px-15px py-25px max-w-60rem m-auto'>
            <span className='text-30px mr-25px sm:mr-0px cursor-pointer my-auto' onClick={cookie}>
              🍪
            </span>
            <p className='mb-0px text-15px text-white'>
              By clicking the cookie or “OK”, you agree to the storing of cookies and/or data in your local storage. You
              agree, that we use google analytics to enhance site navigation and analyze site usage. It helps us to
              improve our UI/UX experience for you.
            </p>
            <div className='justify-center items-center my-auto'>
              <GreenButton className='text-white' onClick={cookie} id='close-toast'>
                OK
              </GreenButton>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
