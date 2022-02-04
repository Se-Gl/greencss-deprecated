function ChevronRightHover({ className }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='17'
      height='15'
      fill='none'
      viewBox='0 0 17 15'
      className={className}>
      <path
        className='clip-circle-in animation-duration-1000ms animation-infinite animation-alternate-reverse animation-delay-100ms'
        fill='#8940FF'
        d='M8.893 14.291a1.007 1.007 0 010-1.42l5.293-5.315L8.893 2.24a1.007 1.007 0 010-1.42.997.997 0 011.414 0l6 6.025c.39.392.39 1.028 0 1.42l-6 6.025a.997.997 0 01-1.414 0z'></path>
      <path
        className='clip-circle-in animation-duration-1000ms animation-infinite animation-alternate-reverse'
        fill='#6100FF'
        d='M.893 14.291a1.007 1.007 0 010-1.42l5.293-5.315L.893 2.24a1.007 1.007 0 010-1.42.997.997 0 011.414 0l6 6.025c.39.392.39 1.028 0 1.42l-6 6.025a.997.997 0 01-1.414 0z'></path>
    </svg>
  )
}

export default ChevronRightHover
