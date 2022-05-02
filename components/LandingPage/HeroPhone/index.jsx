import { useEffect, useState, useContext } from 'react'
import { GreenButton } from '@/components/reusable/Button'
import DisplayRangeSlider from './DisplayRangeSlider'
import DonationContext from '@/utils/DonationContext'

export default function HeroPhone({ loading }) {
  const { prediction, finalPrize } = useContext(DonationContext)
  let ceiledPrice = Math.ceil(finalPrize)

  const [dateState, setDateState] = useState(new Date())
  useEffect(() => {
    setInterval(() => {
      setDateState(new Date())
    }, 1000)
  }, [])
  return (
    <div
      className='absolute w-40rem lg:max-w-31rem sm:display-none md:display-none px-10px'
      style={{ bottom: '0px', left: '50px' }}>
      <div className='mx-auto text-center lg:mx-auto'>
        <div
          className={`${
            loading === false
              ? 'clip-inset-in-top animation-duration-800ms animation-delay-100ms animation-forwards opacity-100per'
              : 'opacity-1per'
          }`}>
          <h2 className='text-30px mb-10px'>Calculate your carbon emission</h2>
        </div>
        <DisplayRangeSlider maxWidth='max-w-92per lg:max-w-80per' />
        {prediction && (
          <GreenButton
            hasLink={true}
            isDefault={false}
            href='#donation'
            id='linkedbutton-phone'
            className='mt-100px lg:mt-5px'>
            {ceiledPrice > 0 ? `donate USD ${ceiledPrice}$ to zero emission` : 'contribute'}
          </GreenButton>
        )}
      </div>

      <div
        id='phone-current-time'
        className='absolute font-bold text-15px cursor-default select-none sm:display-none md:display-none'
        style={{ top: '-60px', left: '30px' }}>
        {dateState.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: false
        })}
      </div>
    </div>
  )
}
