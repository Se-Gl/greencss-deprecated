import useInView from '@/hooks/InView/scrollView'

export default function ServiceCard({ data }) {
  const [ref, isVisible] = useInView({
    threshold: 0,
    unobserveOnEnter: true
  })
  return (
    <>
      {data.sort().map((card, index) => (
        <div
          key={index}
          ref={ref}
          style={{ opacity: 0 }}
          className={`col-span-1 sm:mt-25px w-100per rounded-10px border-1px border-solid border-black min-h-30rem ${
            card.bgcolour
          } ${isVisible && `fade-in animate animation-forwards animation-delay-${(index + 1) * 2}00ms`}`}
          id={`${card.title.toLowerCase()}`}>
          <div className='relative flex z-neg-1'>
            <p className='ml-25px mt-25px mb-0px bg-white rounded-50px h-50px w-50px font-900 text-35px text-center'>
              {index + 1}
            </p>
            <div className='absolute top-per right-0per'>{card.icon}</div>
          </div>
          <div className='m-25px'>
            <h2 className='text-30px sm:text-25px pb-10px mb-0px'>{card.title}</h2>
            <p className='text-15px mb-0px'>{card.description}</p>
          </div>
        </div>
      ))}
    </>
  )
}
