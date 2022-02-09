import dynamic from 'next/dynamic'
import useInView from '../../../hooks/InView/scrollView'

const ServiceCard = dynamic(() => import('./ServiceCard'))

export default function Service() {
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
    <section className='my-20rem sm:my-100px md:my-100px' id='service-section'>
      <h1 className='font-bold text-50px mb-50px'>From The Docs</h1>
      <div className='m-auto grid grid-col-3 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
        <div
          ref={ref}
          id='doc-1'
          className={`col-span-1 grid-flow-row sm:m-10px md:m-10px bg-white rounded-10px ${
            isVisible ? 'clip-inset-in-top animate animation-forwards' : 'opacity-0per'
          }`}>
          <ServiceCard />
        </div>

        <div
          ref={refTwo}
          id='doc-2'
          className={`col-span-1 grid-flow-row sm:m-10px md:m-10px bg-white rounded-10px ${
            isVisibleTwo ? 'clip-inset-in-top animate animation-forwards animation-delay-400ms' : 'opacity-0per'
          }`}>
          <ServiceCard />
        </div>
        <div
          ref={refThree}
          id='doc-3'
          className={`col-span-1 grid-flow-row sm:m-10px md:m-10px bg-white rounded-10px ${
            isVisibleThree ? 'clip-inset-in-top animate animation-forwards animation-delay-600ms' : 'opacity-0per'
          }`}>
          <ServiceCard />
        </div>
      </div>
    </section>
  )
}
