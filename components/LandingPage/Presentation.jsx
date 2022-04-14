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
        'Design your website for all users, whether desktop, laptop, tablet or smartphone. Comfortably and intuitively and easy to learn - like bulma or tailwindcss but for everyone.'
    },
    {
      title: 'Competitive',
      description:
        'Created like bulma with SASS (SCSS). Classic like tailwindcss, but more intuitive. Or simply for you and your planet.'
    }
  ]

  return (
    <section className='my-20rem sm:my-0px md:my-0px' id='presentation'>
      <div className='m-auto grid grid-col-3 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1 lg:grid-col-2 my-auto'>
        {serviceCard.sort().map((card, index) => (
          <div
            key={index}
            ref={ref}
            style={{ opacity: 0 }}
            className={`sm:mt-25px w-100per rounded-10px bg-cover bg-no-repeat bg-center border-1px border-solid border-dark min-h-30rem flex ${
              isVisible && `fade-in animate animation-forwards animation-delay-${(index + 1) * 2}00ms`
            }`}
            id={`${card.title.toLowerCase()}`}>
            <div className='relative m-50px bg-black text-white p-20px'>
              <h2 className='text-30px sm:text-25px'>{card.title}</h2>
              <p className='text-white text-15px mb-0px'>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
