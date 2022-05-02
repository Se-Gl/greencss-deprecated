import { useEffect, useState, useContext } from 'react'
import { GreenButton } from '@/components/reusable/Button'
import DisplayRangeSlider from './DisplayRangeSlider'
import DonationContext from '@/utils/DonationContext'

export default function HeroPhone({ loading }) {
  const { prediction, calculate, finalPrize } = useContext(DonationContext)
  let ceiledPrice = Math.ceil(finalPrize)

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
          style={{ bottom: '210px', left: '80px' }}>
          <h2 className='text-18px lg:text-13px mb-10px text-white font-600'>Calculate your carbon emission</h2>
          <div className='text-greencss font-normal mt-60px'>
            <span className='text-30px font-bold'>{calculate}</span>
            <span className='text-15px'>kg CO2 per year</span>
          </div>
          <div className='text-greencss font-normal'>
            <span className='text-30px font-bold'>{ceiledPrice}</span>
            <span className='text-15px'>USD to compensate</span>
          </div>
        </div>
        <div className='absolute' style={{ bottom: '0px', left: '80px' }}>
          <DisplayRangeSlider
            isDefault={false}
            maxWidth='max-w-100per lg:max-w-80per'
            descriptionClassName='mb-0px text-greencss text-12px font-bold'
          />
        </div>
      </div>

      <div
        id='phone-current-time'
        className='absolute font-bold text-15px cursor-default select-none sm:display-none md:display-none'
        style={{ bottom: '425px', left: '80px' }}>
        {dateState.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: false
        })}
      </div>
    </div>
  )
}
