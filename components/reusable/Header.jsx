import Link from 'next/link'
import { useState } from 'react'
import { LinkButton } from './Button'
import Logo from '../logo/Logo'
import LogoLight from '../icon/Brand/LogoLight'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className='container'>
      <nav
        className='sm:display-none z-100 relative flex items-center h-15rem justify-between w-100per sm:px-10px md:px-25px lg:px-50px'
        style={{ maxWidth: '110rem' }}>
        <Link href='/'>
          <a>
            <LogoLight width='50px' height='50px' />
          </a>
        </Link>
        <ul className='flex text-16px text-white'>
          <li>
            <Link href='/'>
              <a className='text-purple text-15px font-600' style={{ textDecoration: 'none' }}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href='/brand'>
              <a className='text-purple text-15px mx-25px font-600' style={{ textDecoration: 'none' }}>
                Brand
              </a>
            </Link>
          </li>
          <li>
            <Link href='/blog'>
              <a className='text-purple text-15px font-600' style={{ textDecoration: 'none' }}>
                Blog
              </a>
            </Link>
          </li>
        </ul>
        <LinkButton className='text-purple'>Search</LinkButton>
      </nav>

      <nav className='z-100 min-h-10vh display-none sm:block'>
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
                  <Link href='/'>
                    <a style={{ textDecoration: 'none' }}>
                      <h3>Home</h3>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/brand'>
                    <a style={{ textDecoration: 'none' }}>
                      <h3>Brand</h3>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/blog'>
                    <a style={{ textDecoration: 'none' }}>
                      <h3>Blog</h3>
                    </a>
                  </Link>
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
