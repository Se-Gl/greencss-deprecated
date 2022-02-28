function SearchIcon({ width = '20', height = '20', className }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      className={className}
      fill='none'
      viewBox='0 0 20 20'>
      <path
        fill='#0D0D0D'
        d='M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 010 8z'></path>
    </svg>
  )
}

export default SearchIcon
