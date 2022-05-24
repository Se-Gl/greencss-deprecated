import dynamic from 'next/dynamic'
import Loader from '../../logo/Loader'
import Section from '../../reusable/Section'

const CompetitiveIcon = dynamic(() => import('@/components/icon/Service/Competitive'))
const ResponsiveIcon = dynamic(() => import('@/components/icon/Service/Responsive'))
const AnimatedIcon = dynamic(() => import('@/components/icon/Service/Animated'))

const NutshellCard = dynamic(() => import('./NutshellCard'), { loading: () => <Loader /> })
const ServicePlant = dynamic(() => import('@/components/icon/Service/Plant'))
const ServiceWater = dynamic(() => import('@/components/icon/Service/Water'))
const ServiceEnergy = dynamic(() => import('@/components/icon/Service/Energy'))

export default function Service() {
  const nutshellCard = [
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
    },
    {
      title: 'Plant Trees',
      description:
        'Programming and climate protection should be coherent. So far, little or no importance has been given to this issue. The primary goal of greenCSS is to reduce carbon emissions. For this reason, the majority of donations will be used to plant trees.',
      icon: <ServicePlant />
    },
    {
      title: 'Water Refine',
      description:
        'Reducing carbon is the primary goal. Another important goal is to provide access to water. We from greenCSS believe that every human deserves to have water.  Therefore, in the future, we want donations to support water refineries.',
      icon: <ServiceWater />
    },
    {
      title: 'Clean Energy',
      description:
        'A third goal for the future will be to invest and donate in sustainable energy. This is the only way to ensure that the CO2 limit can be effectively reduced in the long term.',
      icon: <ServiceEnergy />
    }
  ]
  return (
    <Section id='service'>
      <h2 className='max-w-80rem'>Our Mission - Save the Programming Planet</h2>
      <div className='m-auto grid grid-col-3 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-2 lg:grid-col-2'>
        <NutshellCard data={nutshellCard} />
      </div>
    </Section>
  )
}
