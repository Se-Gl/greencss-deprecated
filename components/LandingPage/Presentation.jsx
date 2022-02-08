import React from 'react'
import CLine from './CLine'
import SLine from './SLine'

export default function Presentation() {
  return (
    <div className='my-20rem sm:my-0px md:my-0px'>
      <div className='m-auto grid grid-col-3 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1 lg:grid-col-2 '>
        <div className='col-span-1 grid-flow-row sm:mx-10px md:mx-10px'>
          <div className='flex'>
            <div className='mt-35px' style={{ minHeight: '228px', minWidth: '10px' }}>
              <CLine />
            </div>
            <div className='ml-10px'>
              <h1 className='text-50px font-bold'>Animated</h1>
              <p className='text-25px font-normal leading-125per mt-20px'>
                Pure CSS animations work with vanilla HTML or with any web framework - from JavaScript over Python and
                even PHP.
              </p>
            </div>
          </div>
        </div>
        <div className='col-span-1 grid-flow-row sm:mx-10px md:mx-10px'>
          <div className='flex'>
            <div className='mt-35px' style={{ minHeight: '228px', minWidth: '11px' }}>
              <SLine />
            </div>
            <div className='ml-10px'>
              <h1 className='text-50px font-bold'>Responsive</h1>
              <p className='text-25px font-normal leading-125per mt-20px'>
                Design your website for all users, whether desktop, laptop, tablet or smartphone. Modify layouts
                comfortably and intuitively.
              </p>
            </div>
          </div>
        </div>
        <div className='col-span-1 grid-flow-row sm:mx-10px md:mx-10px'>
          <div className='flex'>
            <div className='mt-35px' style={{ minHeight: '228px', minWidth: '11px' }}>
              <SLine />
            </div>
            <div className='ml-10px'>
              <h1 className='text-50px font-bold'>Production</h1>
              <p className='text-25px font-normal leading-125per mt-20px'>
                Unused CSS classes will automatically be excluded. Reduce loading times, increase best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
