import { mobileBrandMenu, mobileContactMenu, mobileDocsMenu } from '@/data/nav'
import Link from 'next/link'
import { useState } from 'react'
import LogoDark from '../icon/Brand/LogoDark'
import Modal from '../modal/Modal'
import SearchBar from '../modal/SearchBar'
import MobileGrid from './MobileGrid'

export default function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <nav className='z-100 pt-100px display-none sm:block md:block' aria-label='header navigation mobile'>
      <div
        className={`fixed top-0per right-0per z-99 m-30px hamburger w-50px h-50px rounded-50px bg-green-9 ${
          isOpen && 'is-active'
        }`}
        id='hamburger-sm'
        onClick={() => setIsOpen(!isOpen)}>
        <div className='mt-15px'>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
      </div>
      {isOpen && (
        <div className='overflow-hidden'>
          <div
            className={`${
              isOpen
                ? 'p-30px fixed top-0per left-0per bg-white z-98 w-100per h-100per display-block clip-circle-in-topright animate animation-forwards overflow-auto'
                : 'display-none'
            }`}>
            <div className='mb-25px'>
              <Link href='/'>
                <a onClick={() => setIsOpen(false)} className='fade-in animate animation-forwards'>
                  <LogoDark width='50px' height='50px' />
                </a>
              </Link>
            </div>
            {/* TODO add blog */}
            <MobileGrid mapping={mobileBrandMenu} header='brand' headerLink='/brand' />
            <MobileGrid mapping={mobileDocsMenu} header='documentation' headerLink='/docs' />
            <MobileGrid mapping={mobileContactMenu} header='contact' headerLink='/contact' />
            <div className='bg-white md:mt-50px'>
              <SearchBar setShowModal={() => setShowModal(true)} className='mb-25px bg-white shadow-green-10' />
              <Modal onClose={() => setShowModal(false)} show={showModal}></Modal>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
