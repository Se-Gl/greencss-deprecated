import { useState } from 'react'
import Link from 'next/link'
import ChevronRight from '../icon/ChevronRight'
import ChevronRightHover from '../icon/ChevronRightHover'

export function LinkButton({ href = '/', className, type = 'buttton', onClick, id = 'linkedbutton', children }) {
  const [hover, setHover] = useState(false)

  function handleMouseOver() {
    setHover(true)
  }
  function handleMouseOut() {
    setHover(false)
  }
  return (
    <Link href={href} passHref>
      <div className='flex sm:min-w-90px sm:min-h-30px min-w-15rem min-h-50px'>
        <button
          onClick={onClick}
          id={id}
          className={`${className} flex my-auto text-center text-16px font-bold bg-transparent`}
          style={{ border: 'none', cursor: 'pointer' }}
          type={type}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>
          {children}
          {!hover && <ChevronRight className='my-auto ml-5px' />}
          {hover && <ChevronRightHover className='my-auto ml-5px' />}
        </button>
      </div>
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
