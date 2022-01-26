function ChevronDown({ width = '14', height = '8', fill = '#0D0D0D', className }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 14 8'
      className={className}
      id='chevron-down'>
      <path
        fill={fill}
        d='M.293.293a1 1 0 011.414 0L7 5.586 12.293.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z'></path>
    </svg>
  )
}

export default ChevronDown
