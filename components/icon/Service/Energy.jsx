function ServiceEnergy({ width = '40', height = '40' }) {
  return (
    <div className='bg-white border-black w-60px p-10px rounded-10px border-1px border-solid'>
      <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 40 40'>
        <path
          fill='#3e7a02'
          d='M12.265 35.72a3.351 3.351 0 01-3.125-4.482l3.345-7.905H3.97l10-20h19.143l-6.666 10h9.191l-21.04 21.43a3.407 3.407 0 01-2.333.957zM9.363 20h8.152l-5.273 12.458 15.46-15.791h-7.484l6.667-10H16.03L9.363 20z'></path>
      </svg>
    </div>
  )
}

export default ServiceEnergy
