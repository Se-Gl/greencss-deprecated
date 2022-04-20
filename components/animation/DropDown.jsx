import { useState } from 'react'
import Select from 'react-select'
import { animations, fillmode, time } from '@/data/animations'
import { GreenButton } from '@/components/reusable/Button'
import CopyIcon from '../icon/Animation/Copy'

export default function DropDown() {
  const [selectedItem, setSelectedItem] = useState(animations[0])
  const [selectedTime, setSelectedTime] = useState(time[0])
  const [selectedFillMode, setSelectedFillMode] = useState(fillmode[0])
  const [showAgain, setShowAgain] = useState(false)

  let csscode = `${selectedItem.value} ${selectedTime.value} ${selectedFillMode.value}`

  const triggerFade = () => {
    setShowAgain((prevState) => {
      return !prevState
    })
  }

  const onchangeSelect = (item) => {
    setSelectedItem(item)
  }
  const onTimechangeSelect = (item) => {
    setSelectedTime(item)
  }
  const onFillModechangeSelect = (item) => {
    setSelectedFillMode(item)
  }
  return (
    <>
      <div
        id={`animation-${selectedItem.value}`}
        style={{ borderRadius: '10px' }}
        className={
          showAgain
            ? `mx-auto my-50px w-50px min-h-54px bg-green z-3 ${csscode}`
            : 'mx-auto my-50px w-50px min-h-54px bg-green z-3'
        }
        onAnimationEnd={triggerFade}
      />
      <div
        className='mx-auto max-w-40rem relative text-black text-16px'
        style={{ cursor: 'pointer' }}
        id='enter-animation'>
        <Select
          placeholder='select an animation'
          value={selectedItem}
          onChange={onchangeSelect}
          options={animations}
          getOptionValue={(option) => option.value}
          getOptionLabel={(option) => option.label}
        />
      </div>
      <div
        className='mx-auto my-20px max-w-40rem relative text-black text-16px'
        style={{ cursor: 'pointer' }}
        id='enter-timeduration'>
        <Select
          id={selectedTime.value}
          value={selectedTime}
          onChange={onTimechangeSelect}
          options={time}
          getOptionValue={(option) => option.value}
          getOptionLabel={(option) => option.label}
        />
      </div>
      <div
        className='mx-auto my-20px max-w-40rem relative text-black text-16px'
        style={{ cursor: 'pointer' }}
        id='enter-animationtype'>
        <Select
          value={selectedFillMode}
          onChange={onFillModechangeSelect}
          options={fillmode}
          getOptionValue={(option) => option.value}
          getOptionLabel={(option) => option.label}
        />
      </div>
      <div className='flex justify-center'>
        <GreenButton id='animate-button' onClick={triggerFade}>
          Animate
        </GreenButton>
      </div>
      <div className='overflow-hidden'>
        <pre className='flex relative'>
          <code className='monospace text-16px bg-black text-white block overflow-x-auto p-15px text-left font-bolder flex items-center min-h-50px min-w-100per'>
            {csscode}
          </code>
          <div
            className='absolute top-50per right-0per pr-15px my-auto cursor-copy'
            style={{ transform: 'translate(0%, -50%)' }}>
            <CopyIcon
              className='fill-white hover:fill-black-10 transition-all transition-duration-500ms'
              copy={csscode}
            />
          </div>
        </pre>
      </div>
    </>
  )
}
