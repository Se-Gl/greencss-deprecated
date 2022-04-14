import { useState, useEffect } from 'react'
import Modal from './Modal'
import SearchBar from './SearchBar'

export default function ReusableModal({ isSidebar, isHero }) {
  const [showModal, setShowModal] = useState(false)
  //   F3 key to open the modal
  useEffect(() => {
    const listener = (event) => {
      if (event.key === 'F3' || event.code === 'NumpadEnter') {
        event.preventDefault()
        setShowModal(true)
      }
    }
    document.addEventListener('keydown', listener)
    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [])
  return (
    <>
      {isHero === true && <SearchBar setShowModal={() => setShowModal(true)} className='bg-green-10' />}
      <Modal onClose={() => setShowModal(false)} show={showModal}></Modal>
      {isSidebar === true && (
        <div className='sticky top-0per z-2 bg-white'>
          <SearchBar setShowModal={() => setShowModal(true)} className='mb-25px bg-white shadow-green-10' />
        </div>
      )}
    </>
  )
}
