import dynamic from 'next/dynamic'
import useInView from '../../../hooks/InView/scrollView'

const NewsCard = dynamic(() => import('./NewsCard'))

export default function News() {
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
    <div className='my-20rem sm:my-100px md:my-100px' id='recent-news'>
      <h1 className='font-bold text-50px mb-50px'>Recent News</h1>
      <div className='m-auto grid grid-col-3 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
        <div
          ref={ref}
          id='blog-1'
          className={`col-span-1 grid-flow-row sm:m-10px md:m-10px ${
            isVisible ? 'clip-inset-in-top animate animation-forwards' : 'opacity-0per'
          }`}>
          <NewsCard />
        </div>

        <div
          ref={refTwo}
          id='blog-2'
          className={`col-span-1 grid-flow-row sm:m-10px md:m-10px ${
            isVisibleTwo ? 'clip-inset-in-top animate animation-forwards animation-delay-400ms' : 'opacity-0per'
          }`}>
          <NewsCard />
        </div>
        <div
          ref={refThree}
          id='blog-3'
          className={`col-span-1 grid-flow-row sm:m-10px md:m-10px ${
            isVisibleThree ? 'clip-inset-in-top animate animation-forwards animation-delay-600ms' : 'opacity-0per'
          }`}>
          <NewsCard />
        </div>
      </div>
    </div>
  )
}
