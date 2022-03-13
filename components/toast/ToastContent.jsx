import React from 'react'
import { Button } from '../reusable/Button'

export default function ToastContent({ fillColor, notification, onClick, backgroundColor, textColor, triangleColor }) {
  const cookie = () => {
    localStorage.setItem('cookie', JSON.stringify('accepted'))
    onClick()
  }

  return (
    <div className={`${triangleColor != 'cookie' && 'fade-toast relative'}`} id='toast-information'>
      <div className={`triangle triangle-${triangleColor}`} />
      <div className={`relative max-w-50rem max-h-28rem mb-25px ${backgroundColor}`}>
        <div className='ml-10px p-20px'>
          <p className={`text-15px font-600 mb-0px ${textColor}`}>{notification}</p>
        </div>
        <svg
          id='close-toast'
          onClick={triangleColor != 'cookie' ? onClick : cookie}
          width='15'
          height='15'
          viewBox='0 0 14 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='absolute top-10per right-2per my-auto'
          style={{ cursor: ' pointer' }}>
          {triangleColor != 'cookie' ? (
            <path
              d='M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z'
              fill={fillColor}
            />
          ) : (
            <path
              d='M14.7203 0.210501C15.0643 0.516265 15.0953 1.04299 14.7895 1.38698L5.90062 11.387C5.74248 11.5649 5.51581 11.6667 5.27778 11.6667C5.03975 11.6667 4.81308 11.5649 4.65494 11.387L0.210501 6.38697C-0.0952637 6.04298 -0.0642799 5.51626 0.279705 5.21049C0.623691 4.90473 1.15042 4.93571 1.45618 5.2797L5.27778 9.579L13.5438 0.279705C13.8496 -0.0642799 14.3763 -0.0952637 14.7203 0.210501Z'
              fill={fillColor}
            />
          )}
        </svg>
        {triangleColor == 'cookie' && (
          <Button onClick={triangleColor != 'cookie' ? onClick : cookie} className='ml-10px pl-20px pb-20px'>
            OK
          </Button>
        )}
      </div>
    </div>
  )
}
