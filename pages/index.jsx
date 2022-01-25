import Image from 'next/image'
import Bubbles from '../components/reusable/Bubbles'
import { LinkButton } from '../components/reusable/Button'
import Layout from '../components/reusable/Layout'

export default function HomePage() {
  return (
    <Layout className='min-h-100vh overflow-x-hidden'>
      <div
        className='relative sm:text-center md:text-center z-2 flex justify-center items-center m-auto sm:px-10px md:px-25px lg:px-50px'
        style={{ maxWidth: '110rem' }}>
        <div className='flex sm:block md:block overflow-hidden mt-20rem h-80vh'>
          <div className='w-50per sm:w-100per md:w-100per m-auto'>
            <div className='m-auto'>
              <h1 className='slide-top duration-1000ms animation-forwards font-800 leading-120per sm:text-30px lg:text-60px text-75px hero-title'>
                Writing CSS reimagined
              </h1>
              <p className='initial-hidden slide-top duration-1000ms delay-200ms animation-forwards text-purple text-16px mt-50px'>
                omenCSS provides a stunning user interface design that is accessible to everyone. Focus on delivering
                the best user experience to you and your customers. Develop high-quality web applications using the
                latest dynamically animated CSS stack.
              </p>
              <div className='flex sm:justify-center md:justify-center'>
                <LinkButton className='mt-50px'>Get in Touch</LinkButton>
                <p className='text-purple text-16px mt-50px ml-50px pt-10px' style={{ cursor: 'pointer' }}>
                  check the docs
                </p>
              </div>
            </div>
          </div>

          <div className='m-auto'>
            <Image src='/images/editor.png' alt='OmenCSS Logo' width={500} height={400} id='logo' />
          </div>
        </div>
      </div>
      <Bubbles />
    </Layout>
  )
}
