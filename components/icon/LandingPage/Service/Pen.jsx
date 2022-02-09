function Pen({ width = '40', height = '40', className }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      className={className}
      fill='none'
      viewBox='0 0 40 40'>
      <path
        stroke='#6100FF'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2.5'
        d='M3.333 3.333L7.5 25.35l13.1 3.583 8.333-8.333-3.566-13.1h-.017L3.333 3.333z'></path>
      <path
        stroke='#6100FF'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2.5'
        d='M31.307 18.213L18.214 31.306l5.362 5.362L36.67 23.575l-5.363-5.362zM3.333 3.333l13.684 13.684'></path>
      <path
        stroke='#6100FF'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='2.5'
        d='M17.017 17.85a.833.833 0 100-1.667.833.833 0 000 1.667z'></path>
    </svg>
  )
}

export default Pen
