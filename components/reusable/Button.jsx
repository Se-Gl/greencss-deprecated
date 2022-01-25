import Link from 'next/link'

export default function Button({ link = '', className, type = 'buttton', onClick, id = 'button', children }) {
  return (
    <Link href={link} passHref>
      <button
        onClick={onClick}
        id={id}
        className={`${className} bg-purple sm:min-w-90px sm:min-h-30px min-w-15rem min-h-50px text-center text-light text-16px hover:bg-purple-2 focus:bg-purple-3 p-10px`}
        style={{ border: 'none', cursor: 'pointer' }}
        type={type}>
        {children}
      </button>
    </Link>
  )
}
