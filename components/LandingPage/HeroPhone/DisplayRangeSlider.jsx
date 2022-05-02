import { useEffect, useContext } from 'react'
import RangeSlider from '../CalculateFootprint/RangeSlider'
import DonationContext from '@/utils/DonationContext'
import CoTwo from '../CalculateFootprint/CoTwo'

export default function DisplayRangeSlider({ maxWidth = '' }) {
  const { calculate, valueHour, valueWatt, setValueWatt, setValueHour } = useContext(DonationContext)

  let adjustBgColor =
    (calculate <= 1 && 'text-greencss') ||
    (calculate <= 50 && 'text-yellow') ||
    (calculate <= 500 && 'text-red') ||
    (calculate >= 501 && 'text-magenta')
  // map RangeSlider
  const sliders = [
    {
      description: 'How many watts does your computer consume?',
      slider: <RangeSlider unit='W' max={1000} step={50} value={valueWatt} setValue={setValueWatt} />
    },
    {
      description: 'How many hours per week do you work?',
      slider: <RangeSlider unit='h' max={100} value={valueHour} setValue={setValueHour} />
    }
  ]

  // save set values to localstorage
  useEffect(() => {
    localStorage.setItem('valueWatt', JSON.stringify(valueWatt))
  }, [valueWatt])
  useEffect(() => {
    localStorage.setItem('valueHour', JSON.stringify(valueHour))
  }, [valueHour])

  return (
    <div className='m-auto sm:m-0px'>
      {sliders.map((slider, index) => (
        <div key={index} className={maxWidth}>
          <p className='mb-0px text-black-10 text-15px'>{slider.description}</p>
          {slider.slider}
        </div>
      ))}
      <p className='text-black-10 mb-0px'>
        You produce{' '}
        <span className={`${adjustBgColor} text-20px font-600`} id='calculation-result'>
          {calculate}kg
        </span>{' '}
        <CoTwo />
        per year.*
      </p>
      <span className='text-black-10 text-10px'>*Data without guarantee. It is intended as a guidance only.</span>
    </div>
  )
}
