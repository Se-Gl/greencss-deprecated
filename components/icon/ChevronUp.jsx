function ChevronUp({ width = '14', height = '8', fill = '#0D0D0D', className }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 14 8'
      className={className}
      id='chevron-up'>
      <path
        fill={fill}
        d='M6.293.293a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L7 2.414 1.707 7.707A1 1 0 01.293 6.293l6-6z'></path>
    </svg>
  )
}

export default ChevronUp
