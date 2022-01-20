import Image from 'next/image'
import Layout from '../components/Layout'

export default function HomePage() {
  return (
    <Layout className='bg-light min-h-100vh overflow-x-hidden'>
      <div className='relative text-center z-2 flex justify-center items-center'>
        <div className='flex flex-wrap overflow-hidden mt-20rem h-80vh'>
          <div className='flex sm:max-w-100vw md:max-w-100vw max-w-45rem'>
            <h1 className='slide-top m-auto font-800 leading-120per sm:text-30px text-75px hero-title'>
              Writing CSS reimagined
            </h1>
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
