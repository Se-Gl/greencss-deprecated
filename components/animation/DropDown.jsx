import { useState } from 'react'
import { animations, time } from '../../data/animations'
// import Button from '../reusable/Button'

export default function DropDown() {
  const [itemsList, setItemsList] = useState([animations])
  const [isDropDownVisible, setIsDropDownVisible] = useState(false)
  const [selectedItemIndex, setSelectedItemIndex] = useState('jump')

  const [timeList, setTimeList] = useState([time])
  const [isDropDownTimeVisible, setIsDropDownTimeVisible] = useState(false)
  const [selectedTimeIndex, setSelectedTimeIndex] = useState('duration-1000ms')

  let csscode = `${selectedItemIndex} ${selectedTimeIndex}`

  return (
    <>
      <div
        id={`animation-${selectedItemIndex}`}
        className={`absolute top-0 right-0 w-50px min-h-54px bg-orange z-3 ${csscode}`}
      />
      <div className='max-w-40rem relative text-dark text-16px' style={{ cursor: 'pointer' }}>
        <div
          id='custom-dropdown'
          className='bg-purple-5 p-15px min-h-50px mb-10px'
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
      <div className='max-w-40rem relative text-dark text-16px' style={{ cursor: 'pointer' }}>
        <div
          id='custom-dropdown'
          className='bg-blue-5 p-15px min-h-50px mb-10px'
          onClick={(e) => {
            setIsDropDownTimeVisible(!isDropDownTimeVisible)
          }}>
          {time === false ? '' : `css animation duration class: ${selectedTimeIndex}`}
        </div>
        {isDropDownTimeVisible && (
          <div className='bg-blue-5 absolute top-100 max-w-40rem max-h-40rem overflow-scroll overflow-x-hidden z-1'>
            {timeList[0].map((time) => (
              <li
                key={time.value}
                className='hover:bg-blue-4 p-15px min-w-40rem'
                onClick={(e) => {
                  setSelectedTimeIndex(time.value)
                  setIsDropDownTimeVisible(!isDropDownTimeVisible)
                }}>
                {time.label}
              </li>
            ))}
          </div>
        )}
      </div>
      <code>{csscode}</code>
    </>
  )
}
