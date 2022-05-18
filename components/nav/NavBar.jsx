import Link from 'next/link'
import { useRouter } from 'next/router'
import { useGlobalContext } from '@/utils/NavContext'
import LogoDark from '../icon/Brand/LogoDark'
import { navmenu } from '@/data/nav'

const Navbar = () => {
  const router = useRouter()

  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('map-link')) {
      closeSubmenu()
    }
  }

  const displaySubmenu = (e) => {
    const text = e.target.textContent
    const { left, right, bottom } = e.target.getBoundingClientRect()
    const leftPosition = (left + right) / 2
    const bottomPosition = bottom - 3
    const position = { leftPosition, bottomPosition }
    openSubmenu(text, position)
  }

  return (
    <nav
      className='sm:display-none md:display-none z-99 relative flex items-center h-75px justify-between sm:px-10px md:px-25px lg:px-50px text-black bg-white'
      style={{ maxWidth: '110rem' }}
      onMouseOver={handleSubmenu}>
      <div className='w-100per grid grid-col-3 items-center'>
        <div className=''>
          <Link href='/'>
            <a className='my-auto'>
              <LogoDark width='50px' height='50px' />
            </a>
          </Link>
        </div>
        <ul className='grid grid-col-4 text-16px block justify-self-center text-center h-100per items-center'>
          {navmenu.sort().map((item, index) => {
            return (
              <li key={index} onMouseOver={displaySubmenu} className='h-100per'>
                <Link href={item.path}>
                  <a
                    className={`map-link text-15px font-800 no-decoration cursor-pointer capitalize pb-15px my-0px ${
                      router.asPath.includes(item.path) ? 'text-greencss font-800' : 'text-black'
                    }`}>
                    {item.title}
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
