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
    <div className='border-bottom-width-3px border-solid border-blue-8'>
      <button className={`bg-transparent ${active}`} onClick={toggleQuestion}>
        <div className='flex my-auto py-25px'>
          <h3 className='text-25px font-900 mb-0px'>{question.title}</h3>
          <FaqIcon className={`ml-auto cursor-pointer ${active && 'rotate-45deg'}`} />
        </div>
        <div ref={contentRef} className='overflow-hidden transition-all transition-duration-600ms ease'>
          <p className='text-15px text-black-5 line-height-133per relative z-99'>{question.description}</p>
        </div>
      </button>
    </div>
  )
}
