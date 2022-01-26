function Copy({ width = '20', height = '20', fill = '#0D0D0D', className }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 20 20'
      className={className}>
      <path
        fill={fill}
        d='M0 2a2 2 0 012-2h10a2 2 0 012 2v4h4a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2v-4H2a2 2 0 01-2-2V2zm8 12v4h10V8h-4v4a2 2 0 01-2 2H8zm4-2V2H2v10h10z'></path>
    </svg>
  )
}

export default Copy
