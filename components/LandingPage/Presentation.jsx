import Image from 'next/image'
import useInView from '@/hooks/InView/scrollView'

export default function Presentation() {
  const [ref, isVisible] = useInView({
    threshold: 0,
    unobserveOnEnter: true
  })

  const [refTwo, isVisibleTwo] = useInView({
    threshold: 0.25,
    unobserveOnEnter: true
  })

  const serviceCard = [
    {
      title: 'Animated',
      description:
        'Pure CSS animations work with vanilla HTML or with any web framework - from JavaScript over Python and even PHP.',
      bgcolour: 'bg-green-9'
    },
    {
      title: 'Responsive',
      description:
        'Design your website for all users, whether desktop, laptop, tablet or smartphone. Comfortably and intuitively and easy to learn - like bulma or tailwindcss but for everyone.',
      bgcolour: 'bg-yellow-9'
    },
    {
      title: 'Competitive',
      description:
        'Created like bulma with SASS (SCSS). Classic like tailwindcss, but more intuitive. Or simply for you and your planet.',
      bgcolour: 'bg-blue-9'
    }
  ]

  return (
    <section
      className={`py-10rem sm:my-0px md:my-0px sm:m-10px md:m-10px ${
        isVisibleTwo && 'bg-green-10 transition-all transition-duration-500ms'
      }`}
      id='presentation'
      ref={refTwo}>
      <div className='max-w-60rem mx-auto'>
        <h1>
          Create and <span className='text-green'>Design</span> Milestones, anywhere with everything{' '}
        </h1>
      </div>
      <div
        className='grid gap-30px sm:gap-0px grid-col-3 sm:grid-col-1 md:grid-col-1 min-auto overflow-hidden'
        style={{ maxWidth: '110rem' }}>
        <div className='col-span-12 flex'>
          <div className='w-100per sm:w-100per md:w-100per'>
            <div className='relative h-75vh sm:h-50vh overflow-hidden mb-5rem'>
              <Image
                quality={100}
                layout='fill'
                objectFit='contain'
                src='/images/landingpage/greencss-devices.webp'
                alt='greenCSS devices, iphone, macbook'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='m-auto grid grid-col-3 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-2 lg:grid-col-2 my-auto'>
        {serviceCard.sort().map((card, index) => (
          <div
            key={index}
            ref={ref}
            style={{ opacity: 0 }}
            className={`col-span-1 sm:mt-25px w-100per rounded-10px border-1px border-solid border-dark min-h-30rem flex ${
              card.bgcolour
            } ${isVisible && `fade-in animate animation-forwards animation-delay-${(index + 1) * 2}00ms`}`}
            id={`${card.title.toLowerCase()}`}>
            <div className='m-25px'>
              <h2 className='text-30px sm:text-25px'>{card.title}</h2>
              <p className='text-15px mb-0px'>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
