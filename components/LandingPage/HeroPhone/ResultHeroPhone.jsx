import { useContext } from 'react'
import DonationContext from '@/utils/DonationContext'
import Loader from '@/components/logo/Loader'
import VisualChart from '../CalculateFootprint/VisualChart'
import useWindowDimensions from '@/utils/WindowDimensions'

export default function ResultHeroPhone({ loading }) {
  const { width } = useWindowDimensions()
  const { calculate, finalPrize } = useContext(DonationContext)
  let ceiledPrice = Math.ceil(finalPrize)

  let adjustBgColor =
    (calculate <= 1 && 'text-greencss') ||
    (calculate <= 50 && 'text-yellow') ||
    (calculate <= 500 && 'text-red') ||
    (calculate >= 501 && 'text-magenta')

  return (
    <>
      {calculate > 1 ? (
        <>
          <div
            className='absolute z-10 w-25rem clip-inset-in-top animation-duration-800ms animation-forwards'
            style={{ bottom: `${width > 1500 ? '480px' : '620px'}`, left: `${width > 1500 ? '450px' : '125px'}` }}>
            <h2 className='text-20px'>Your personal carbon emission score</h2>
            <div className='font-normal'>
              <span className={`${adjustBgColor} font-bold text-15px`}>{calculate}</span>
              <span className='text-15px'> kg CO2 per year</span>
              <br />
              <span className='text-15px font-bold'>USD{ceiledPrice}</span>
              <span className='text-15px'>$ to compensate</span>
            </div>
          </div>
          <div
            className='absolute z-10 w-30rem clip-inset-in-top animation-duration-800ms animation-forwards'
            style={{ bottom: `${width > 1500 ? '255px' : '400px'}`, left: `${width > 1500 ? '450px' : '125px'}` }}>
            <VisualChart
              data={calculate}
              descriptionClassName='mb-0px text-10px mb-0px'
              percentClassName='mb-0px text-black text-center text-10px font-600'
              isHero={true}
            />
            <div className='mt-10px'>
              <span className='text-black-10'>
                The displayed result compares your CO2 usage with an average consumer and developer.
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          {loading === false ? (
            <div className='opacity-33per select-none'>
              <div
                className='absolute z-10 fade-in animation-duration-500ms'
                style={{ bottom: '500px', left: '600px' }}>
                <Loader />
                <span className='text-black-10 text-center ml-neg-30px'>Waiting for your input</span>
              </div>{' '}
              <div
                className='absolute z-10 fade-in animation-duration-500ms'
                style={{ bottom: '290px', left: '600px' }}>
                <Loader />
                <span className='text-black-10 text-center ml-neg-30px'>Waiting for your input</span>
              </div>
            </div>
          ) : null}
        </>
      )}
    </>
  )
}
