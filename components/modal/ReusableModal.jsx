import { useState, useEffect } from 'react'
import SearchIcon from '../icon/Search/SearchIcon'
import { Button } from '../reusable/Button'
import Modal from './Modal'

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
          <div
            className='flex w-100per mb-25px border-1px border-solid border-dark rounded-5px'
            onClick={() => setShowModal(true)}
            style={{ cursor: 'pointer' }}>
            <SearchIcon width='20px' height='20px' className='pl-5px mt-3px' />
            <input
              type='search'
              name='modal-search'
              id='modal-search'
              className='ml-10px w-100per flex bg-transparent justify-center bg-transparent w-100per text-black border-none text-10px'
              placeholder='Rapid Search'
            />
            <p className='text-10px font-bold mb-0px p-5px' id='close-modal'>
              F3
            </p>
          </div>
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
