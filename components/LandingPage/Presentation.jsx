import useInView from '@/hooks/InView/scrollView'

export default function Presentation() {
  const [ref, isVisible] = useInView({
    threshold: 0,
    unobserveOnEnter: true
  })

  const serviceCard = [
    {
      title: 'Animated',
      description:
        'Pure CSS animations work with vanilla HTML or with any web framework - from JavaScript over Python and even PHP.'
    },
    {
      title: 'Responsive',
      description:
        'Design your website for all users, whether desktop, laptop, tablet or smartphone. Comfortably and intuitively - like bulma or tailwindcss.'
    },
    {
      title: 'Production',
      description:
        'The best newcomer CSS library in 2022 - for everyone with any web-application framework - MIT licensed.'
    }
  ]

  return (
    <section className='my-20rem sm:my-0px md:my-0px' id='presentation'>
      <div className='m-auto grid grid-col-3 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1 lg:grid-col-2'>
        {serviceCard.sort().map((card, index) => (
          <div key={index} ref={ref}>
            <div
              style={{ opacity: 0 }}
              className={`min-h-50rem w-100per rounded-10px bg-cover bg-no-repeat bg-center border-1px border-solid border-dark ${
                isVisible && `fade-in animate animation-forwards animation-delay-${(index + 1) * 2}00ms`
              }`}
              id={`${card.title.toLowerCase()}`}>
              <div className='flex h-50rem min-h-50per'>
                <div className='relative m-auto max-w-75per w-75per min-h-80per bg-black text-white'>
                  <h2 className='text-45px'>{card.title}</h2>
                  <p className='text-black-10'>{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
