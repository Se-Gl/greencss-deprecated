function Blog({ className, width = '19', height = '19' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      className={className}
      fill='none'
      viewBox='0 0 19 19'>
      <path
        fill='#8006f9'
        d='M14.707.293a1 1 0 00-1.414 0L11 2.586 9.707 1.293a1 1 0 00-1.414 0l-6 6a1 1 0 001.414 1.414L9 3.414 9.586 4 7.293 6.293l-7 7A1 1 0 000 14v4a1 1 0 001 1h4a1 1 0 00.707-.293l7-7 6-6a1 1 0 000-1.414l-4-4zm-3 4.414L14 2.414 16.586 5 12 9.586 9.414 7l2.293-2.293zM2 14.414l6-6L10.586 11l-6 6H2v-2.586z'></path>
    </svg>
  )
}

export default Blog
