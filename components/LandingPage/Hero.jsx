import dynamic from 'next/dynamic'
import Blobs from '@/components/icon/LandingPage/Blobs'
import { LinkButton } from '@/components/reusable/Button'
import Loader from '../logo/Loader'

const ThreeDObject = dynamic(() => import('./3D/Index'), {
  loading: () => (
    <>
      <div className='flex h-75vh'>
        <div className='m-auto'>
          <Loader />
        </div>
      </div>
    </>
  )
})

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
        <div className='sm:display-none md:display-none col-span-1 min-h-75vh sm:col-span-full sm:row-start-1 sm:col-end-1 md:col-span-full md:row-start-1 md:col-end-1 overflow-hidden'>
          <div className='min-h-75rem'>
            <ThreeDObject />
          </div>
        </div>
      </div>
    </section>
  )
}
