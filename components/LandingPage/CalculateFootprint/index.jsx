import { useState } from 'react'
import Link from 'next/link'
import Section from '@/components/reusable/Section'
import RangeSlider from './RangeSlider'

export default function CalculateFootprint() {
  const [valueWatt, setValueWatt] = useState(0)
  const [valueHour, setValueHour] = useState(0)

  let x = valueWatt
  let y = valueHour
  const calculate = (((parseFloat(x) * parseFloat(y) * 4.2) / 1000) * 12 * 0.474).toFixed(1)

  let adjustBgColor =
    (calculate <= 1 && 'text-greencss') ||
    (calculate <= 50 && 'text-yellow-2') ||
    (calculate <= 500 && 'text-orange') ||
    (calculate >= 501 && 'text-red')

  return (
    <Section id='calculate-footprint' background='bg-orange-10'>
      <div className='relative flex min-h-75vh w-100per text-white bg-black rounded-20px'>
        <div
          className='m-auto grid gap-30px sm:gap-0px grid-col-2 sm:grid-col-1 md:grid-col-1 min-h-66vh overflow-hidden'
          style={{ maxWidth: '110rem' }}>
          <div className='col-span-1 flex sm:mb-10rem md:mb-10rem'>
            <div className='m-auto sm:m-unset max-w-50rem'>
              <h1 className='font-800 text-63px'>
                Calculate your <span className='text-greencss'>green</span> footprint
              </h1>
              <p className='mb-0px text-white'>
                You - as a developer - are usually not even aware of how much CO
                <sub className='relative text-15px' style={{ top: '0.5rem' }}>
                  2
                </sub>{' '}
                you produce in a single business week. Calculate your digital footprint quickly and efficiently. It
                won&apos;t take you a minute.
              </p>
            </div>
          </div>
          <div className='col-span-1 flex'>
            <div className='m-auto'>
              <p className='mb-0px text-black-10 text-15px'>How many watts does your computer consume?</p>
              <RangeSlider unit='W' max={1000} step={50} value={valueWatt} setValue={setValueWatt} />
              <p className='mb-0px text-black-10 text-15px'>How many hours per week do you work?</p>
              <RangeSlider unit='h' max={100} value={valueHour} setValue={setValueHour} />
              <p className='text-black-10 mt-25px mb-0px'>
                You produce <span className={`${adjustBgColor} text-15px font-900`}>{calculate}kg</span> CO
                <sub className='relative text-15px' style={{ top: '0.5rem' }}>
                  2
                </sub>{' '}
                per year.*
              </p>
              <span className='text-black-10 text-10px'>
                *Data without guarantee. It is intended as a guidance only.
              </span>
            </div>
          </div>

          <div className='col-span-2 mx-auto mt-50px max-w-50rem'>
            <h2 className='text-white'>Did you know?</h2>
            <div className='text-20px text-white'>
              With a{' '}
              <Link href='#donation'>
                <a className='text-white'>donation</a>
              </Link>{' '}
              {calculate <= 1 ? '' : 'of ---$'} we can jointly reduce your CO
              <sub className='relative text-15px' style={{ top: '0.5rem' }}>
                2
              </sub>{' '}
              emissions to <span className='text-greencss font-bold'>zero</span>.
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
