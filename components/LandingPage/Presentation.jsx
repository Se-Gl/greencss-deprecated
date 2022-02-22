import React from 'react'
import useInView from '@/hooks/InView/scrollView'
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
    <section className='my-20rem sm:my-0px md:my-0px' id='presentation'>
      <div className='m-auto grid grid-col-3 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1 lg:grid-col-2'>
        <div
          ref={ref}
          id='animated'
          className={`col-span-1 grid-flow-row sm:mx-10px md:mx-10px ${
            isVisible ? 'fade-in animate animation-forwards' : 'opacity-0per'
          }`}>
          <div className='flex'>
            <div className='mt-35px' style={{ minHeight: '228px', minWidth: '10px' }}>
              <CLine />
            </div>
            <div className='ml-10px'>
              <h2>Animated</h2>
              <p>
                Pure CSS animations work with vanilla HTML or with any web framework - from JavaScript over Python and
                even PHP.
              </p>
            </div>
          </div>
        </div>
        <div
          ref={refTwo}
          id='responsive'
          className={`col-span-1 grid-flow-row sm:mx-10px md:mx-10px ${
            isVisibleTwo ? 'fade-in animate animation-forwards animation-delay-200ms' : 'opacity-0per'
          }`}>
          <div className='flex'>
            <div className='mt-35px' style={{ minHeight: '228px', minWidth: '11px' }}>
              <SLine />
            </div>
            <div className='ml-10px'>
              <h2>Responsive</h2>
              <p>
                Design your website for all users, whether desktop, laptop, tablet or smartphone. Modify layouts
                comfortably and intuitively.
              </p>
            </div>
          </div>
        </div>
        <div
          ref={refThree}
          id='production'
          className={`col-span-1 grid-flow-row sm:mx-10px md:mx-10px ${
            isVisibleThree ? 'fade-in animate animation-forwards animation-delay-400ms' : 'opacity-0per'
          }`}>
          <div className='flex'>
            <div className='mt-35px' style={{ minHeight: '228px', minWidth: '11px' }}>
              <SLine />
            </div>
            <div className='ml-10px'>
              <h2>Production</h2>
              <p>Unused CSS classes will automatically be excluded. Reduce loading times, increase best practices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
