import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ChevronRight from '../icon/ChevronRight'
import ChevronRightHover from '../icon/ChevronRightHover'

export function LinkButton({ href = '/', className, type = 'button', onClick, id = 'linkedbutton', children }) {
  const [hover, setHover] = useState(false)

  function handleMouseOver() {
    setHover(true)
  }
  function handleMouseOut() {
    setHover(false)
  }
  return (
    <Link href={href} passHref>
      <div className='flex sm:min-w-90px sm:min-h-30px min-w-15rem min-h-50px responsive z-99'>
        <button
          onClick={onClick}
          id={id}
          className={`${className} flex my-auto text-center text-16px font-bold bg-transparent`}
          style={{ border: 'none', cursor: 'pointer' }}
          type={type}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>
          <a>{children}</a>
          {!hover && <ChevronRight className='my-auto ml-5px' />}
          {hover && <ChevronRightHover className='my-auto ml-5px' />}
        </button>
      </div>
    </Link>
  )
}

export function Button({ className, type = 'button', onClick, id = 'button', children }) {
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

export function BackButton({ className, type = 'button', id = 'back-button', children }) {
  const router = useRouter()
  const [hover, setHover] = useState(false)

  function handleMouseOver() {
    setHover(true)
  }
  function handleMouseOut() {
    setHover(false)
  }
  return (
    <div className='flex sm:min-w-90px sm:min-h-30px min-w-15rem min-h-50px responsive z-99'>
      <button
        onClick={() => router.back()}
        id={id}
        className={`${className} flex my-auto text-center text-16px font-bold bg-transparent`}
        style={{ border: 'none', cursor: 'pointer' }}
        type={type}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
        {!hover && <ChevronRight className='my-auto mr-20px rotate-180' />}
        {hover && <ChevronRightHover className='my-auto mr-11px rotate-180' />}
        {children}
      </button>
    </div>
  )
}
