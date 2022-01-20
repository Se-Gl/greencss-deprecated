import Link from 'next/link'

export default function Button({ link = '/', children }) {
  return (
    <Link href={link}>
      <button
        className='bg-purple sm:min-w-90px sm:min-h-30px min-w-15rem min-h-50px text-center text-light text-16px hover:bg-purple-2 focus:bg-purple-3'
        style={{ border: 'none', cursor: 'pointer' }}>
        {children}
      </button>
    </Link>
  )
}
