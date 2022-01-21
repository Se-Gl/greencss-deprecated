import Link from 'next/link'
import Button from './Button'
import Logo from '../logo/Logo'

export default function Header() {
  return (
    <header className='container'>
      <nav
        className='bg-light shadow-purple-5 z-100 fixed flex items-center h-15rem flex justify-between z-100 w-100per sm:px-10px md:px-25px lg:px-50px'
        style={{ maxWidth: '110rem' }}>
        <Link href='/'>
          <a>
            <Logo width='121' height='17' />
          </a>
        </Link>
        <ul className='flex text-16px sm:text-12px sm:mx-10px text-purple'>
          <li>Home</li>
          <li className='sm:mx-10px mx-25px'>Docs</li>
          <li>Blog</li>
        </ul>
        <Button>Contact</Button>
      </nav>
    </header>
  )
}