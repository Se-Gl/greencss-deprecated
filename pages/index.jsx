import Image from 'next/image'
import Button from '../components/Button'
import Layout from '../components/Layout'

export default function HomePage() {
  return (
    <Layout className='bg-light min-h-100vh overflow-x-hidden'>
      <div className='relative text-center z-2 flex justify-center items-center'>
        <div className='flex flex-wrap overflow-hidden mt-20rem h-80vh'>
          <div className='flex sm:max-w-100vw md:max-w-100vw lg:max-w-100vw max-w-45rem w-100per text-left sm:text-center sm:px-10px md:text-center md:px-20px lg:px-50px'>
            <div className='m-auto'>
              <h1 className='slide-top duration-1000ms animation-forwards font-800 leading-120per sm:text-30px text-75px hero-title'>
                Writing CSS reimagined
              </h1>
              <p className='initial-hidden slide-top duration-1000ms delay-200ms animation-forwards text-purple text-16px mt-50px'>
                omenCSS provides a stunning user interface design that is accessible to everyone. omenCSS focuses on
                delivering the best user experience to you and your customers. Develop high-quality web applications
                using the latest dynamic technology stack.
              </p>
              <div className='flex'>
                <Button className='mt-50px'>Get in Touch</Button>
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
      <div className='bubbles'>
        <div className='bubble' />
        <div className='bubble' />
        <div className='bubble' />
      </div>
    </Layout>
  )
}
