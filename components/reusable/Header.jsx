import Link from 'next/link'
import { useState } from 'react'
import { LinkButton } from './Button'
import Logo from '../logo/Logo'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className='container'>
      <nav
        className='sm:display-none z-100 relative flex items-center h-15rem justify-between w-100per sm:px-10px md:px-25px lg:px-50px'
        style={{ maxWidth: '110rem' }}>
        <Link href='/'>
          <a>
            <Logo />
          </a>
        </Link>
        <ul className='flex text-16px text-dark'>
          <li>Home</li>
          <li className='sm:mx-10px mx-25px'>Brand</li>
          <li>Blog</li>
        </ul>
        <LinkButton>Search</LinkButton>
      </nav>

      <nav className='z-100 min-h-10vh'>
        <div
          className={`fixed top-0per right-0per z-99 m-30px hamburger ${isOpen ? 'is-active' : ''}`}
          id='hamburger-sm'
          onClick={() => setIsOpen(!isOpen)}>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
        {isOpen && (
          <div className='overflow-hidden'>
            <div
              className={`${
                isOpen
                  ? 'p-30px fixed top-0per left-0per bg-light z-98 w-100per h-100per display-block clip-circle-in-topright animate animation-forwards'
                  : 'display-none'
              }`}>
              <Link href='/'>
                <a onClick={() => setIsOpen(false)}>
                  <Logo />
                </a>
              </Link>
              <ul className='text-16px text-black flex justify-center items-center min-h-100per flex-col text-left'>
                <li>
                  <h3>Home</h3>
                </li>
                <li>
                  <h3>Brand</h3>
                </li>
                <li>
                  <h3>Blog</h3>
                </li>
                <li>
                  <LinkButton>Search</LinkButton>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
