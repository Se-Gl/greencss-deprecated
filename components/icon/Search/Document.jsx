function Document({ className, width = '16', height = '20' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      className={className}
      fill='none'
      viewBox='0 0 16 20'>
      <path
        fill='#0D0D0D'
        d='M0 2a2 2 0 012-2h8a1 1 0 01.707.293l5 5A1 1 0 0116 6v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm13.586 4L10 2.414V6h3.586zM8 2H2v16h12V8H9a1 1 0 01-1-1V2zm-4 9a1 1 0 011-1h6a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H5a1 1 0 01-1-1z'></path>
    </svg>
  )
}

export default Document
