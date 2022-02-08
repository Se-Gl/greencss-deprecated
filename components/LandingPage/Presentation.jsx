import React from 'react'
import useInView from '../../hooks/InView/scrollView'
import CLine from './CLine'
import SLine from './SLine'

export default function Presentation() {
  const [ref, isVisible] = useInView({
    threshold: 0.25,
    unobserveOnEnter: true
  })
  const [refTwo, isVisibleTwo] = useInView({
    threshold: 0.25,
    unobserveOnEnter: true
  })
  const [refThree, isVisibleThree] = useInView({
    threshold: 0.25,
    unobserveOnEnter: true
  })

  return (
    <div className='my-20rem sm:my-0px md:my-0px'>
      <div className='m-auto grid grid-col-3 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1 lg:grid-col-2'>
        <div
          ref={ref}
          className={`col-span-1 grid-flow-row sm:mx-10px md:mx-10px ${
            isVisible ? 'clip-inset-in-top animate animation-forwards' : 'opacity-0per'
          }`}>
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
        <div
          ref={refTwo}
          className={`col-span-1 grid-flow-row sm:mx-10px md:mx-10px ${
            isVisibleTwo ? 'clip-inset-in-top animate animation-forwards animation-delay-200ms' : 'opacity-0per'
          }`}>
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
        <div
          ref={refThree}
          className={`col-span-1 grid-flow-row sm:mx-10px md:mx-10px ${
            isVisibleThree ? 'clip-inset-in-top animate animation-forwards animation-delay-400ms' : 'opacity-0per'
          }`}>
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
