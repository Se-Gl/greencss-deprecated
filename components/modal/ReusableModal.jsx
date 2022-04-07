import { useState, useEffect } from 'react'
import { Button } from '../reusable/Button'
import Modal from './Modal'
import SearchBar from './SearchBar'

export default function ReusableModal({ LinkClass, isSidebar = false }) {
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
      {isSidebar === true ? (
        <>
          <SearchBar setShowModal={() => setShowModal(true)} />
        </>
      ) : (
        <Button className={`${LinkClass} text-15px font-800`} onClick={() => setShowModal(true)} id='modalbutton'>
          Search | F3
        </Button>
      )}
      <Modal onClose={() => setShowModal(false)} show={showModal}></Modal>
    </>
  )
}
