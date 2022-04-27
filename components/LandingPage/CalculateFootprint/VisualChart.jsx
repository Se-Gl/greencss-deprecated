import React from 'react'

export default function VisualChart({ data }) {
  // initial values
  const a = Math.round(71.7)
  const b = Math.round(286.7)
  let c = Math.round(data)
  let result = a + b + c
  // percent values
  const percenta = (a * 100) / result
  const percentb = (b * 100) / result
  const percentc = (c * 100) / result

  return (
    <>
      <div
        id='footprint-chart'
        className='w-100px h-100px rounded-50px bg-white block mt-25px mx-auto'
        style={{
          background: `${
            percentc <= percenta
              ? `conic-gradient(#066ef9 ${percentc}%, #f99106 ${percentc}% ${percentb}%, #80f906 ${percentb}% ${percenta}%)`
              : `conic-gradient(#80f906 ${percenta}%, #f99106 ${percenta}% ${percentb}%, #066ef9 ${percentb}% ${percentc}%)`
          }`
        }}></div>

      <div className='w-100per flex'>
        <div>
          <div className='flex mt-25px'>
            <div className='bg-blue h-10px sm:h-7px md:h-7px w-15px rounded-10px justify-center mt-7px mr-10px '></div>
            <p className='mb-0px text-black-10 text-15px'>Your PC/laptop footprint</p>
          </div>
          <p className='mb-0px text-white text-center'>{Math.round(percentc)}%</p>
        </div>
        <div className='mx-25px'>
          <div className='flex mt-25px'>
            <div className='bg-green h-10px sm:h-5px md:h-7px w-15px rounded-10px justify-center mt-7px mr-10px '></div>
            <p className='mb-0px text-black-10 text-15px'>PC/laptop footprint of an average person</p>
          </div>
          <p className='mb-0px text-white text-center'>{Math.round(percenta)}%</p>
        </div>
        <div>
          <div className='flex mt-25px'>
            <div className='bg-orange h-10px sm:h-7px md:h-7px w-15px rounded-10px justify-center mt-7px mr-10px '></div>
            <p className='mb-0px text-black-10 text-15px'>PC/laptop footprint of an average developer</p>
          </div>
          <p className='mb-0px text-white text-center'>{Math.round(percentb)}%</p>
        </div>
      </div>
    </>
  )
}
