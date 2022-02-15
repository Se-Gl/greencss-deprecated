import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { LinkButton } from './Button'
import LogoLight from '../icon/Brand/LogoLight'
import LogoDark from '../icon/Brand/LogoDark'

const menu = [
  { title: 'Home', path: '/' },
  { title: 'Brand', path: '/brand' },
  { title: 'Blog', path: '/blog' }
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const isHome = router.pathname === '/' ? 'text-white' : 'text-black'

  return (
    <header className='container'>
      <nav
        className='sm:display-none z-100 relative flex items-center h-15rem justify-between w-100per sm:px-10px md:px-25px lg:px-50px'
        style={{ maxWidth: '110rem' }}>
        <Link href='/'>
          <a>
            {router.pathname === '/' ? (
              <LogoLight width='50px' height='50px' />
            ) : (
              <LogoDark width='50px' height='50px' />
            )}
          </a>
        </Link>
        <ul className='flex text-16px'>
          <li>
            {menu.map((item, index) => {
              return (
                <Link key={index} href={item.path}>
                  <a
                    className={`mr-15px text-15px font-500 ${
                      router.pathname === item.path ? 'text-purple font-800' : isHome
                    }`}
                    style={{ textDecoration: 'none' }}>
                    {item.title}
                  </a>
                </Link>
              )
            })}
          </li>
        </ul>
        <LinkButton className={`${isHome}`}>Search</LinkButton>
      </nav>

      {/* Mobile Menu */}
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
                  <LogoDark width='50px' height='50px' />
                </a>
              </Link>
              <ul className='text-16px text-black flex justify-center items-center min-h-100per flex-col text-left'>
                <li>
                  {menu.map((item, index) => {
                    return (
                      <Link key={index} href={item.path}>
                        <a style={{ textDecoration: 'none', cursor: 'pointer' }}>
                          <h3>{item.title}</h3>
                        </a>
                      </Link>
                    )
                  })}
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
