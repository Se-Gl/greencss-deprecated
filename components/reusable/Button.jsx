import Link from 'next/link'

export function LinkButton({ href = '/', className, type = 'buttton', onClick, id = 'linkedbutton', children }) {
  return (
    <Link href={href} passHref>
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

export function Button({ className, type = 'buttton', onClick, id = 'button', children }) {
  return (
    <button
      onClick={onClick}
      id={id}
      className={`${className} bg-purple sm:min-w-90px sm:min-h-30px min-w-15rem min-h-50px text-center text-light text-16px hover:bg-purple-2 focus:bg-purple-3 p-10px`}
      style={{ border: 'none', cursor: 'pointer' }}
      type={type}>
      {children}
    </button>
  )
}
