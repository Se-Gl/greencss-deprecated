import Image from 'next/image'
import Blobs from '@/components/icon/LandingPage/Blobs'
import { LinkButton } from '@/components/reusable/Button'
import HeroHand from '../icon/LandingPage/HeroHand'
import Carousel from '../carousel/Carousel'
import { CarouselItem } from '../carousel/Carousel'
import Phone from './3D/Phone'

const sliderItems = [
  { url: 'iMac-min.png', width: '800', height: '631', alt: 'OmenCSS iMac', id: 'iMac' },
  { url: 'MacBook-min.png', width: '800', height: '448', alt: 'OmenCSS MacBook', id: 'MacBook' },
  { url: 'iPad-Pro-min.png', width: '433', height: '600', alt: 'OmenCSS iPad Pro', id: 'iPad-Pro' },
  { url: 'iPhone-X-min.png', width: '298', height: '600', alt: 'OmenCSS iMac', id: 'iMac' }
]

export default function Hero() {
  return (
    <section id='hero'>
      <div className='relative sm:display-none'>
        <div className='absolute' style={{ right: '-66%', top: '-17px' }}>
          <Blobs style={{ marginTop: '-500px' }} />
        </div>
      </div>
      <div className='m-auto grid gap-30px grid-col-2 sm:grid-col-1 md:grid-col-1' style={{ maxWidth: '110rem' }}>
        <div className='col-span-1 min-h-75vh'>
          <div className='flex h-75vh'>
            <div className='m-auto reveal-down animate animation-forwards animation-delay-500ms'>
              <h1
                className='font-800 text-50px leading-120per text-white sm:text-black md:text-black'
                style={{ maxWidth: '400px' }}>
                A classy way to write CSS design
              </h1>

              <LinkButton className='mt-50px text-white sm:text-black md:text-black'>Check more</LinkButton>
            </div>
          </div>
        </div>
        <div className='col-span-1 min-h-75vh sm:col-span-full sm:row-start-1 sm:col-end-1 md:col-span-full md:row-start-1 md:col-end-1 overflow-hidden'>
          <div className='relative'>
            <div className='absolute' style={{ marginLeft: '-20rem' }}>
              <Phone />
            </div>
            <div className='absolute' style={{ pointerEvents: 'none', marginTop: '40rem', marginLeft: '10rem' }}>
              <HeroHand width='600' height='398' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
