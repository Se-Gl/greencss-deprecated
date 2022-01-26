import { useState } from 'react'
import { animations, time } from '../../data/animations'
import Copy from '../icon/Copy'
import { Button } from '../reusable/Button'

export default function DropDown() {
  const [itemsList] = useState([animations])
  const [isDropDownVisible, setIsDropDownVisible] = useState(false)
  const [selectedItemIndex, setSelectedItemIndex] = useState('jump')

  const [timeList] = useState([time])
  const [isDropDownTimeVisible, setIsDropDownTimeVisible] = useState(false)
  const [selectedTimeIndex, setSelectedTimeIndex] = useState('duration-1000ms')

  let csscode = `${selectedItemIndex} ${selectedTimeIndex}`

  const [showAgain, setShowAgain] = useState(false)

  const triggerFade = () => {
    setShowAgain((prevState) => {
      return !prevState
    })
  }

  return (
    <>
      <div
        id={`animation-${selectedItemIndex}`}
        style={{ borderRadius: '10px' }}
        className={
          showAgain
            ? `mx-auto my-50px w-50px min-h-54px bg-purple z-3 ${csscode}`
            : 'mx-auto my-50px w-50px min-h-54px bg-purple z-3'
        }
        onAnimationEnd={triggerFade}
      />
      <div className='mx-auto max-w-40rem relative text-dark text-16px' style={{ cursor: 'pointer' }}>
        <div
          id='custom-dropdown'
          style={{ borderRadius: '10px' }}
          className='bg-white pl-50px sm:pl-25px my-auto flex items-center min-h-50px mb-10px'
          onClick={(e) => {
            setIsDropDownVisible(!isDropDownVisible)
          }}>
          {animations === false ? '' : `css animation class: ${selectedItemIndex}`}
        </div>
        {isDropDownVisible && (
          <div className='absolute top-100 max-w-40rem max-h-40rem overflow-scroll overflow-x-hidden z-2'>
            {itemsList[0].map((item) => (
              <li
                key={item.value}
                className='bg-white hover:bg-light p-15px min-w-40rem'
                onClick={(e) => {
                  setSelectedItemIndex(item.value)
                  setIsDropDownVisible(!isDropDownVisible)
                }}>
                {item.label}
              </li>
            ))}
          </div>
        )}
      </div>
      <div className='mx-auto max-w-40rem relative text-dark text-16px' style={{ cursor: 'pointer' }}>
        <div
          id='custom-time-dropdown'
          style={{ borderRadius: '10px' }}
          className='bg-white pl-50px sm:pl-25px my-auto flex items-center min-h-50px mb-10px'
          onClick={(e) => {
            setIsDropDownTimeVisible(!isDropDownTimeVisible)
          }}>
          {time === false ? '' : `css animation duration class: ${selectedTimeIndex}`}
        </div>
        {isDropDownTimeVisible && (
          <div
            style={{ backgroundColor: 'white' }}
            className='absolute top-100 max-w-40rem max-h-40rem overflow-scroll overflow-x-hidden z-1'>
            {timeList[0].map((tme) => (
              <li
                key={tme.value}
                className='bg-white hover:bg-light p-15px min-w-40rem'
                onClick={(e) => {
                  setSelectedTimeIndex(tme.value)
                  setIsDropDownTimeVisible(!isDropDownTimeVisible)
                }}>
                {tme.label}
              </li>
            ))}
          </div>
        )}
      </div>

      <div className='text-center'>
        <Button id='animate-button' onClick={triggerFade} className='mx-auto'>
          Animate
        </Button>
      </div>
      <div className='text-center mt-50px'>
        <pre className='relative'>
          <code className='bg-dark text-light block overflow-x-auto p-10px text-left font-bolder flex items-center min-h-50px'>
            {csscode}
          </code>
          <div className='absolute top-0 right-0'>
            <Copy fill='#f0eef5' className='mt-15px mr-15px' />
          </div>
        </pre>
      </div>
    </>
  )
}
