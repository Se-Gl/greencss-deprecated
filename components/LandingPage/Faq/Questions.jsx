import React, { useState, useRef, useEffect } from 'react'
import FaqIcon from '../../icon/Faq/FaqIcon'

export default function FaqQuestions({ question }) {
  const [active, setActive] = useState(false)

  const contentRef = useRef(null)

  useEffect(() => {
    contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px'
  }, [contentRef, active])

  const toggleQuestion = () => {
    setActive(!active)
  }
  return (
    <div className='border-1px border-solid border-black-10 rounded-5px bg-white p-15px mb-10px transition-all transition-duration-500ms greencss-button'>
      <button className={`bg-transparent ${active}`} onClick={toggleQuestion}>
        <div className='flex'>
          <h3 className='text-20px font-700 mb-0px'>{question.title}</h3>
          <FaqIcon className={`ml-auto cursor-pointer ${active && 'rotate-45deg'}`} />
        </div>
        <div ref={contentRef} className='overflow-hidden transition-all transition-duration-600ms ease'>
          <p className='text-15px text-black-10 relative z-99 mb-0px'>{question.description}</p>
        </div>
      </button>
    </div>
  )
}
