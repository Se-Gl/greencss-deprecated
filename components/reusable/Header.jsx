import Link from 'next/link'
import { LinkButton } from './Button'
import Logo from '../logo/Logo'

export default function Header() {
  return (
    <header className='container'>
      <nav
        className='z-100 relative flex items-center h-15rem justify-between w-100per sm:px-10px md:px-25px lg:px-50px'
        style={{ maxWidth: '110rem' }}>
        <Link href='/'>
          <a>
            <Logo />
          </a>
        </Link>
        <ul className='flex text-16px sm:text-12px sm:mx-10px text-dark ml-100px sm:ml-0px'>
          <li>Home</li>
          <li className='sm:mx-10px mx-25px'>Brand</li>
          <li>Blog</li>
        </ul>
        <LinkButton className='ml-100px'>Search</LinkButton>
      </nav>
    </header>
  )
}
