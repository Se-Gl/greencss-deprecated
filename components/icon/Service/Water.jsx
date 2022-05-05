function ServiceWater({ width = '40', height = '40' }) {
  return (
    <div className='bg-white border-black w-60px p-10px rounded-10px border-1px border-solid'>
      <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 40 40'>
        <path
          fill='#3e7a02'
          d='M29.333 17l-1-.75-1 .75C26.582 17.563 20 22.667 20 28.333a8.333 8.333 0 1016.667 0c0-5.666-6.582-10.77-7.334-11.333zm-1 16.333a5 5 0 01-5-5c0-2.846 3.032-6.116 5-7.846 1.969 1.73 5 5 5 7.846a5 5 0 01-5 5zM12.592 11.947l-.925-.614-.925.617C10.508 12.103 5 15.842 5 21.667a6.667 6.667 0 1013.333 0c0-5.825-5.5-9.564-5.741-9.72zM11.667 25a3.333 3.333 0 01-3.334-3.333 8.917 8.917 0 013.334-6.207A8.92 8.92 0 0115 21.667 3.333 3.333 0 0111.667 25z'></path>
        <path
          fill='#3e7a02'
          d='M28.333 10c0-2.127-2.666-5.03-3.821-6.178l-1.179-1.179-1.178 1.179C21 4.97 18.333 7.873 18.333 10a5 5 0 1010 0zm-6.666.028a8.19 8.19 0 011.666-2.561A8.354 8.354 0 0125 10.018a1.667 1.667 0 01-3.333.01z'></path>
      </svg>
    </div>
  )
}

export default ServiceWater