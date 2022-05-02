import { GreenButton } from '@/components/reusable/Button'
import { useEffect, useState } from 'react'
import ReusableModal from '../modal/ReusableModal'
import HeroPhone from './HeroPhone'

export default function Hero() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onload = setLoading(false)
    }
  }, [])

  return (
    <section
      id='hero'
      className={`${loading === false ? 'fade-in animate animation-forwards opacity-100per' : 'opacity-1per'}`}>
      <div
        className='m-auto grid gap-30px grid-col-2 sm:grid-col-1 md:grid-col-1 bg-greencss'
        style={{ borderBottomLeftRadius: '100px' }}>
        <div className='col-span-1 h-75vh'>
          <div className='flex sm:max-h-75vh md:max-h-75vh h-75vh'>
            <div className='m-auto max-w-40rem'>
              <h1 className='font-800 text-white text-46px'>A classy way to write sustainable CSS</h1>
              <p className='text-white'>
                Styling CSS reimagined - for everyone. Start to code with zero emission: for your clients, for your
                creativity and for your planet.
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
          <HeroPhone loading={loading} />
        </div>
      </div>
    </section>
  )
}
