import { GreenButton } from '@/components/reusable/Button'
import { useEffect, useState } from 'react'
import ReusableModal from '../modal/ReusableModal'

export default function Hero() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onload = setLoading(false)
    }
  }, [])

  const [dateState, setDateState] = useState(new Date())
  useEffect(() => {
    setInterval(() => {
      setDateState(new Date())
    }, 1000)
  }, [])

  return (
    <section
      id='hero'
      className={`${loading === false ? 'fade-in animate animation-forwards opacity-100per' : 'opacity-1per'}`}>
      <div className='m-auto grid gap-30px grid-col-2 sm:grid-col-1 md:grid-col-1 bg-greencss rounded-20px'>
        <div className='col-span-1 h-75vh'>
          <div className='flex sm:max-h-75vh md:max-h-75vh h-75vh'>
            <div className='m-auto max-w-40rem'>
              <h1 className='font-800 text-white text-63px'>A classy way to write CSS design</h1>
              <p className='text-white'>
                Styling CSS reimagined - for for everyone. Start to code with zero emission: for your creativity and
                your planet.
              </p>
              <div className='flex gap-10px'>
                <ReusableModal isHero={true} />
                <GreenButton
                  hasLink={true}
                  isDefault={false}
                  href='/docs/activate-getting-started'
                  id='linkedbutton'
                  className='text-white'>
                  Install
                </GreenButton>
              </div>
              <img
                src='/images/landingpage/Macbook.webp'
                alt='greenCSS Hero Image MacBook'
                className='display-none md:block md:mt-50px'
              />
            </div>
          </div>
        </div>
        <div className='relative col-span-1 overflow-hidden sm:display-none' id='phone-image'>
          {/* TODO refactor NextJS image */}
          <img
            src='/images/landingpage/phone.webp'
            alt='greenCSS Hero Image Iphone'
            className='h-50rem absolute bottom-0per md:display-none'
          />
          <span
            className={`absolute font-700 text-40px line-height-105per text-center sm:display-none md:display-none max-w-31rem ${
              loading === false
                ? 'clip-inset-in-top animation-duration-800ms animation-delay-100ms animation-forwards opacity-100per'
                : 'opacity-1per'
            }`}
            style={{ bottom: '280px', left: '50px' }}>
            Develop your carbon free Website
          </span>
          <span
            className={`absolute font-regular text-15px text-center sm:display-none md:display-none max-w-31rem ${
              loading === false ? 'fade-in animation-duration-800ms animation-forwards opacity-100per' : 'opacity-1per'
            }`}
            style={{ bottom: '220px', left: '50px' }}>
            Do something good while you work - for the environment and for yourself
          </span>
          <span
            className='absolute font-regular text-15px text-center sm:display-none md:display-none max-w-31rem'
            style={{ bottom: '150px', left: '120px' }}>
            <GreenButton
              hasLink={true}
              isDefault={false}
              href='#donation'
              id='linkedbutton-phone'
              className='text-greencss hover:text-greencss'>
              contribute
            </GreenButton>
          </span>
          <span
            id='phone-current-time'
            className='absolute font-bold text-12px sans cursor-default select-none sm:display-none md:display-none'
            style={{ bottom: '440px', left: '65px' }}>
            {dateState.toLocaleString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: false
            })}
          </span>
        </div>
      </div>
    </section>
  )
}
