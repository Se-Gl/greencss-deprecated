import React from 'react'
import useInView from '@/hooks/InView/scrollView'

export default function Support() {
  const [ref, isVisible] = useInView({
    threshold: 0.25,
    unobserveOnEnter: true
  })
  const [refTwo, isVisibleTwo] = useInView({
    threshold: 0.25,
    unobserveOnEnter: true
  })

  return (
    <section className='my-20rem sm:my-100px md:my-100px text-center' id='supporters'>
      <h2 className='font-bold text-50px mb-50px'>Supported by</h2>
      <div className='m-auto grid grid-col-4 gap-30px sm:gap-0px sm:grid-col-2 md:grid-col-2'>
        <div
          ref={ref}
          id='logo-1'
          className={`col-span-1 grid-flow-row sm:mx-10px md:mx-10px ${
            isVisible ? 'fade-in animate animation-forwards' : 'opacity-0per'
          }`}>
          <h2 className='text-50px font-bold'>Logo 1</h2>
        </div>
        <div
          ref={ref}
          id='logo-2'
          className={`col-span-1 grid-flow-row sm:mx-10px md:mx-10px ${
            isVisible ? 'fade-in animate animation-forwards animation-delay-200ms' : 'opacity-0per'
          }`}>
          <h2 className='text-50px font-bold'>Logo 2</h2>
        </div>
        <div
          ref={refTwo}
          id='logo-3'
          className={`col-span-1 grid-flow-row sm:mx-10px md:mx-10px ${
            isVisibleTwo ? 'fade-in animate animation-forwards animation-delay-400ms' : 'opacity-0per'
          }`}>
          <h2 className='text-50px font-bold'>Logo 3</h2>
        </div>
        <div
          ref={refTwo}
          id='logo-4'
          className={`col-span-1 grid-flow-row sm:mx-10px md:mx-10px ${
            isVisibleTwo ? 'fade-in animate animation-forwards animation-delay-600ms' : 'opacity-0per'
          }`}>
          <h2 className='text-50px font-bold'>Logo 4</h2>
        </div>
      </div>
    </section>
  )
}
