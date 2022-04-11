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
      <div className='flex sm:min-w-90px sm:min-h-30px min-w-12rem min-h-50px responsive z-99'>
        <button
          onClick={onClick}
          id={id}
          className={`${className} flex my-auto text-center text-15px font-bold bg-transparent transition-duration-500ms hover:text-black-3 active:text-black-6 focus:text-black-6`}
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

export function LinkButtonLeft({ href = '/', className, type = 'button', onClick, id = 'linkedbuttonleft', children }) {
  const [hover, setHover] = useState(false)
  function handleMouseOver() {
    setHover(true)
  }
  function handleMouseOut() {
    setHover(false)
  }
  return (
    <Link href={href} passHref>
      <div className='flex sm:min-w-90px sm:min-h-30px min-w-12rem min-h-50px responsive z-99'>
        <button
          onClick={onClick}
          id={id}
          className={`${className} flex my-auto text-center text-15px font-bold bg-transparent transition-duration-500ms hover:text-black-3 active:text-black-6 focus:text-black-6`}
          style={{ border: 'none', cursor: 'pointer' }}
          type={type}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>
          {!hover && <ChevronRight className='my-auto ml-0px' />}
          {hover && <ChevronRightHover className='my-auto ml-0px' />}
          <span style={hover ? { marginInline: '5.5px' } : { marginInline: '10px' }} />
          {children}
        </button>
      </div>
    </Link>
  )
}

export function Button({ className, type = 'button', onClick, id = 'button', children }) {
  const [hover, setHover] = useState(false)
  function handleMouseOver() {
    setHover(true)
  }
  function handleMouseOut() {
    setHover(false)
  }
  return (
    <div className='flex sm:min-w-90px sm:min-h-30px min-w-12rem min-h-50px responsive z-99'>
      <button
        onClick={onClick}
        id={id}
        className={`${className} flex my-auto text-center text-15px font-bold bg-transparent transition-duration-500ms hover:text-black-3 active:text-black-6 focus:text-black-6`}
        style={{ border: 'none', cursor: 'pointer' }}
        type={type}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
        {children}
        {!hover && <ChevronRight className='my-auto ml-5px' />}
        {hover && <ChevronRightHover className='my-auto ml-5px' />}
      </button>
    </div>
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
    <div className='flex sm:min-w-90px sm:min-h-30px min-w-12rem min-h-50px responsive z-99'>
      <button
        onClick={() => router.back()}
        id={id}
        className={`${className} flex my-auto text-center text-15px font-bold bg-transparent transition-duration-500ms hover:text-black-3 active:text-black-6 focus:text-black-6`}
        style={{ border: 'none', cursor: 'pointer' }}
        type={type}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
        {!hover && <ChevronRight className='my-auto mr-20px rotate-180deg' />}
        {hover && <ChevronRightHover className='my-auto mr-11px rotate-180deg' />}
        {children}
      </button>
    </div>
  )
}

export function DownloadButton({ href = '/', className, type = 'button', id = 'downloadbutton', children }) {
  const [hover, setHover] = useState(false)

  function handleMouseOver() {
    setHover(true)
  }
  function handleMouseOut() {
    setHover(false)
  }
  return (
    <a href={href} download className='no-decoration'>
      <div className='flex sm:min-w-90px sm:min-h-30px min-w-12rem min-h-50px responsive z-99'>
        <button
          id={id}
          className={`${className} flex my-auto text-center text-15px font-bold bg-transparent transition-duration-500ms hover:text-black-3 active:text-black-6 focus:text-black-6`}
          style={{ border: 'none', cursor: 'pointer' }}
          type={type}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>
          {children}
          {!hover && <ChevronRight className='my-auto ml-5px' />}
          {hover && <ChevronRightHover className='my-auto ml-5px' />}
        </button>
      </div>
    </a>
  )
}
