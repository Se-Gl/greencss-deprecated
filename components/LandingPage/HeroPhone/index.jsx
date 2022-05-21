import { useEffect, useState } from 'react'
import DisplayRangeSlider from './DisplayRangeSlider'

export default function HeroPhone({ loading }) {
  const [dateState, setDateState] = useState(new Date())
  useEffect(() => {
    setInterval(() => {
      setDateState(new Date())
    }, 1000)
  }, [])
  return (
    <div className='w-40rem lg:max-w-31rem sm:display-none md:display-none'>
      <div className='mx-auto'>
        <div
          className={`absolute ${
            loading === false
              ? 'clip-inset-in-top animation-duration-800ms animation-delay-100ms animation-forwards opacity-100per'
              : 'opacity-1per'
          }`}
          style={{ bottom: '10px', left: '115px' }}>
          <div className='bg-greencss rounded-10px w-27rem h-auto px-20px py-10px'>
            <h2 className='text-15px lg:text-13px mb-10px text-white font-600'>
              Calculate your yearly carbon emission
            </h2>
            <span className='text-10px text-white'>
              How much C02 do you produce while you work? Compare your green footprint with other developers
            </span>
          </div>
          <div className='text-greencss font-normal w-25rem mt-10px mb-25px'>
            <span className='text-10px text-black-10'>
              Do something good while you work - for the environment and for yourself by using a sustainable CSS library
              like greenCSS.
            </span>
            <br />
          </div>
          <DisplayRangeSlider
            isDefault={false}
            maxWidth='max-w-90per lg:max-w-80per'
            descriptionClassName='mb-0px text-black-10 text-12px'
          />
        </div>
      </div>

      <div
        id='phone-current-time'
        className='absolute font-bold text-12px cursor-default select-none sm:display-none md:display-none'
        style={{ bottom: '345px', left: '115px' }}>
        {dateState.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: false
        })}
      </div>
    </div>
  )
}
