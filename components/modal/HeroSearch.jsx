import { useState } from 'react'
import SearchIcon from '../icon/Search/SearchIcon'

import Modal from './Modal'

export default function HeroSearch() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div
        className='flex w-100per h-50px border-1px border-solid border-dark rounded-10px bg-black-5 sm:bg-transparent md:bg-transparent'
        onClick={() => setShowModal(true)}
        style={{ cursor: 'pointer' }}>
        <SearchIcon width='25px' height='25px' className='my-auto mx-10px' />
        <input
          type='search'
          name='modal-search'
          id='modal-search'
          className='flex bg-transparent justify-center w-100per text-black border-none text-10px'
          placeholder='Rapid Search'
        />
        <p className='text-10px font-bold my-auto mx-10px' id='close-modal'>
          F3
        </p>
      </div>

      <Modal onClose={() => setShowModal(false)} show={showModal}></Modal>
    </>
  )
}
