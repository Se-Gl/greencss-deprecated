import dynamic from 'next/dynamic'
import Image from 'next/image'
import Loader from '@/components/logo/Loader'
import Section from '../../reusable/Section'

const PresentationCard = dynamic(() => import('./PresentationCard'), { loading: () => <Loader /> })
const CompetitiveIcon = dynamic(() => import('@/components/icon/Presentation/Competitive'))
const ResponsiveIcon = dynamic(() => import('@/components/icon/Presentation/Responsive'))
const AnimatedIcon = dynamic(() => import('@/components/icon/Presentation/Animated'))

export default function Presentation() {
  const serviceCard = [
    {
      title: 'Animated',
      description:
        'Pure CSS animations work with vanilla HTML or with any web framework - from JavaScript over Python and even PHP.',
      bgcolour: 'bg-green-9',
      icon: <AnimatedIcon />
    },
    {
      title: 'Responsive',
      description:
        'Design your website for all users, whether desktop, laptop, tablet or smartphone. Comfortably and intuitively and easy to learn - like bulma or tailwindcss but for everyone.',
      bgcolour: 'bg-yellow-9',
      icon: <ResponsiveIcon />
    },
    {
      title: 'Competitive',
      description:
        'Created like bulma with SASS (SCSS). Classic like tailwindcss, but more intuitive. For the environment and for yourself - do something good while you work.',
      bgcolour: 'bg-blue-9',
      icon: <CompetitiveIcon />
    }
  ]

  return (
    <Section id='presentation' background='bg-green-10'>
      <div className='max-w-60rem mx-auto'>
        <h1>
          Create and Design Milestones, with a <span className='text-greencss'>green</span> touch
        </h1>
      </div>
      <div
        className='grid gap-30px sm:gap-0px grid-col-3 sm:grid-col-1 md:grid-col-1 min-auto overflow-hidden'
        style={{ maxWidth: '110rem' }}>
        <div className='col-span-12 flex'>
          <div className='w-100per'>
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
        <PresentationCard data={serviceCard} />
      </div>
    </Section>
  )
}
