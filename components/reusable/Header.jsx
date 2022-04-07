import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import LogoLight from '../icon/Brand/LogoLight'
import LogoDark from '../icon/Brand/LogoDark'
import ReusableModal from '../modal/ReusableModal'

const menu = [
  { title: 'Blog', path: '/blog' },
  { title: 'Brand', path: '/brand' },
  { title: 'Docs', path: '/docs' },
  { title: 'Contact', path: '/contact' }
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()
  let checkPath = router.pathname === '/'
  const isHome = checkPath ? 'text-white sm:text-black md:text-black' : 'text-black'
  const isHomeNav = checkPath ? 'text-white sm:text-black md:text-black bg-black' : 'text-black bg-white'

  return (
    <div className='container'>
      <nav
        aria-label='header navigation'
        className={`sm:display-none md:display-none z-100 fixed flex items-center h-15rem justify-between w-100per sm:px-10px md:px-25px lg:px-50px ${isHomeNav}`}
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
            {menu.sort().map((item, index) => {
              return (
                <Link key={index} href={item.path}>
                  <a
                    className={`mr-15px text-15px font-800 no-decoration ${
                      router.asPath.includes(item.path) ? 'text-purple font-800' : isHome
                    }`}>
                    {item.title}
                  </a>
                </Link>
              )
            })}
          </li>
        </ul>
        <ReusableModal LinkClass={isHome} />
      </nav>

      {/* Mobile Menu */}
      <nav className='z-100 min-h-10vh display-none sm:block md:block'>
        <div
          className={`fixed top-0per right-0per z-99 m-30px hamburger w-50px h-50px rounded-50px bg-purple-10 ${
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
                  ? 'p-30px fixed top-0per left-0per bg-white z-98 w-100per h-100per display-block clip-circle-in-topright animate animation-forwards'
                  : 'display-none'
              }`}>
              <Link href='/'>
                <a onClick={() => setIsOpen(false)} className='fade-in animate animation-forwards'>
                  <LogoDark width='50px' height='50px' />
                </a>
              </Link>
              <ul className='text-16px text-black flex justify-center items-center min-h-100per flex-col text-left'>
                <li>
                  {menu.sort().map((item, index) => {
                    return (
                      <Link key={index} href={item.path}>
                        <a style={{ textDecoration: 'none', cursor: 'pointer' }}>
                          <h3
                            className={`p-20px clip-inset-in-top animate animation-forwards animation-delay-${
                              (index + 1) * 1
                            }00ms`}>
                            {item.title}
                          </h3>
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
    </div>
  )
}
