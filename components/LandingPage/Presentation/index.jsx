// import dynamic from 'next/dynamic'
import Image from 'next/image'
// import Loader from '@/components/logo/Loader'
import Section from '../../reusable/Section'

// const PresentationCard = dynamic(() => import('./PresentationCard'), { loading: () => <Loader /> })
// const CompetitiveIcon = dynamic(() => import('@/components/icon/Presentation/Competitive'))
// const ResponsiveIcon = dynamic(() => import('@/components/icon/Presentation/Responsive'))
// const AnimatedIcon = dynamic(() => import('@/components/icon/Presentation/Animated'))

export default function Presentation() {
  const presentations = [
    {
      title: 'Protect Our Earth Against Climate Change with sustainable software',
      description:
        'greenCSS is a sustainable cascade style sheet library that is intuitive to use and provides zero-emissions programming. The vision is to reduce our carbon footprint and simultaneously create beautiful new web applications for our clients, our agency or for ourselves.',
      imageUrl: '/images/landingpage/tv.webp',
      number: '01'
    },
    {
      title: 'Together We Can Restore Our Planet',
      description:
        'greenCSS is more than just a bachelor project. Created like bulma with SASS (SCSS). Classic like tailwindcss, but more intuitive. For the environment and for yourself - do something good while you work. greenCSS features easy to use and production redy animations and moreover it is suitable for all frameworks and screen types. Lets create beautiful and sustainable web applications together.',
      imageUrl: '/images/landingpage/plants.webp',
      number: '02',
      customClass: 'mt-100px'
    }
  ]

  // const serviceCard = [
  //   {
  //     title: 'Animated',
  //     description:
  //       'Pure CSS animations work with vanilla HTML or with any web framework - from JavaScript over Python and even PHP.',
  //     bgcolour: 'bg-green-9',
  //     icon: <AnimatedIcon />
  //   },
  //   {
  //     title: 'Responsive',
  //     description:
  //       'Design your website for all users, whether desktop, laptop, tablet or smartphone. Comfortably and intuitively and easy to learn - like bulma or tailwindcss but for everyone.',
  //     bgcolour: 'bg-yellow-9',
  //     icon: <ResponsiveIcon />
  //   },
  //   {
  //     title: 'Competitive',
  //     description:
  //       'Created like bulma with SASS (SCSS). Classic like tailwindcss, but more intuitive. For the environment and for yourself - do something good while you work.',
  //     bgcolour: 'bg-blue-9',
  //     icon: <CompetitiveIcon />
  //   }
  // ]

  return (
    <Section id='presentation' background='bg-green-10'>
      <>
        {presentations.sort().map((presentation, index) => {
          return (
            <div key={index}>
              <div className={`flex md:block sm:block ${presentation.customClass}`}>
                <h2 className='max-w-80rem'>{presentation.title}</h2>
                <span className='text-black-10 text-120px font-600'>{presentation.number}</span>
              </div>
              <p className='text-black-10 max-w-75rem'>{presentation.description}</p>
              <div className='relative h-75vh overflow-hidden rounded-20px'>
                <Image
                  quality={100}
                  layout='fill'
                  objectFit='cover'
                  src={`${presentation.imageUrl}`}
                  alt='greenCSS tv forest, sustainable software'
                />
              </div>
            </div>
          )
        })}
      </>
      {/* <div className='m-auto grid grid-col-3 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-2 lg:grid-col-2 mt-50px'>
        <PresentationCard data={serviceCard} />
      </div> */}
    </Section>
  )
}
