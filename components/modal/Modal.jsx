import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Search from '../search/Search'

const Modal = ({ show, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  //   ESC key to close the modal
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        onClose()
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  const handleCloseClick = (e) => {
    e.preventDefault()
    onClose()
  }

  const modalContent = show ? (
    <div
      className='fixed fade-in animation-duration-300ms animation-forwards absolute top-0per left-0per w-100per h-100per flex justify-center items-center'
      style={{ backgroundColor: 'rgba(16,16,16,0.5)' }}>
      <div className='relative z-1 w-100vw h-100vh' onClick={handleCloseClick} id='backdrop-close' />
      <div className='absolute z-2 bg-light max-w-50rem w-50rem sm:w-100per max-h-50rem sm:min-h-75vh rounded-10px overflow-scroll overflow-x-hidden'>
        <Search handleCloseClick={handleCloseClick} />
        <div className='px-25px sm:px-10px'>{children}</div>
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
