import { useState } from 'react'
import { animations, time } from '../../data/animations'
import Button from '../reusable/Button'

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
        className={
          showAgain
            ? `mx-auto my-50px w-50px min-h-54px bg-orange z-3 ${csscode}`
            : 'mx-auto my-50px w-50px min-h-54px bg-orange z-3'
        }
        onAnimationEnd={triggerFade}
      />
      <div className='mx-auto max-w-40rem relative text-dark text-16px' style={{ cursor: 'pointer' }}>
        <div
          id='custom-dropdown'
          className='bg-purple-5 p-15px min-h-50px mb-10px hover:bg-purple-4'
          onClick={(e) => {
            setIsDropDownVisible(!isDropDownVisible)
          }}>
          {animations === false ? '' : `css animation class: ${selectedItemIndex}`}
        </div>
        {isDropDownVisible && (
          <div className='bg-purple-5 absolute top-100 max-w-40rem max-h-40rem overflow-scroll overflow-x-hidden z-2'>
            {itemsList[0].map((item) => (
              <li
                key={item.value}
                className='hover:bg-purple-4 p-15px min-w-40rem'
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
          className='bg-blue-5 p-15px min-h-50px mb-10px hover:bg-blue-4'
          onClick={(e) => {
            setIsDropDownTimeVisible(!isDropDownTimeVisible)
          }}>
          {time === false ? '' : `css animation duration class: ${selectedTimeIndex}`}
        </div>
        {isDropDownTimeVisible && (
          <div className='bg-blue-5 absolute top-100 max-w-40rem max-h-40rem overflow-scroll overflow-x-hidden z-1'>
            {timeList[0].map((tme) => (
              <li
                key={tme.value}
                className='hover:bg-blue-4 p-15px min-w-40rem'
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
        <code>{csscode}</code>
      </div>
    </>
  )
}
