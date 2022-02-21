import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ show, onClose, children, title = 'Search documentation' }) => {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const handleCloseClick = (e) => {
    e.preventDefault()
    onClose()
  }

  const modalContent = show ? (
    <div
      className='fade-in animation-duration-300ms animation-forwards absolute top-0per left-0per w-100per h-100per flex justify-center items-center '
      style={{ backgroundColor: 'rgba(16,16,16,0.5)' }}>
      <div className='bg-white max-w-50rem w-50rem min-h-50rem rounded-10px'>
        <div className='flex justify-end'>
          <a
            href='#'
            onClick={handleCloseClick}
            className='mt-10px mb-0px mr-10px'
            style={{ textDecoration: 'none' }}
            id='close-modal'>
            x
          </a>
        </div>
        {title && <h3>{title}</h3>}
        <div className='pt-25px'>{children}</div>
      </div>
    </div>
  ) : null

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'))
  } else {
    return null
  }
}

export default Modal
