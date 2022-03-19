import { useEffect, useState } from 'react'
import { Button } from './Button'

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
        <div className='fixed bottom-0per left-0per min-h-10vh w-100vw bg-purple-5 z-99' id='cookie-banner'>
          <div className='flex sm:block sm:px-15px py-25px max-w-60rem m-auto'>
            <span className='text-30px my-auto mr-25px sm:mr-0px' onClick={cookie}>
              🍪
            </span>
            <p className='mb-0px text-15px'>
              By clicking the cookie or “OK”, you agree to the storing of cookies on your device to enhance site
              navigation, analyze site usage, and assist in our UI/UX efforts.
            </p>
            <Button className='ml-25px sm:ml-0px sm:mt-25px' onClick={cookie} id='close-toast'>
              OK
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
