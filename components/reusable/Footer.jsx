import Link from 'next/link'
import LogoLight from '../icon/Brand/LogoLight'

const startedLinks = [
  { title: 'Installation', path: '/blog/what-is-omencss' },
  { title: 'Optimizing', path: '/blog/how-to-delete-unused-css-classes' },
  { title: 'Fundamentals', path: '/docs' },
  { title: 'Blog', path: '/blog' }
]
const communityLinks = [
  { title: 'Github', path: 'https://github.com/Se-Gl/omencss' },
  { title: 'Twitter', path: 'https://twitter.com/omencss' },
  { title: 'LinkedIn', path: 'https://www.linkedin.com/in/segl' }
]

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
  return (
    <section className='container overflow-hidden' id='footer'>
      <div className='mb-100px'>
        <div className='w-100per bg-dark rounded-20px'>
          <div className='min-h-75vh m-auto grid gap-30px grid-col-3 sm:grid-col-1 md:grid-col-2'>
            <div className='mt-20rem sm:mt-100px md:mt-100px sm:my-100px md:my-100px mx-auto col-span-1 sm:mx-50px sm:col-span-full sm:row-start-3 sm:col-end-1 md:col-span-full md:row-start-3 md:col-end-1'>
              <Link href='/' passHref>
                <a onClick={scrollToTop}>
                  <LogoLight width='50px' height='50px' />
                </a>
              </Link>
              <p className='text-white my-25px'>Privacy — Terms</p>
              <p className='text-white'>© MIT 2022</p>
            </div>

            <div className='col-span-1 mt-20rem sm:mt-100px mx-auto sm:mx-50px' id='footer-getting-started'>
              <h3 className='text-white'>Getting started</h3>
              {startedLinks.map((item, index) => {
                return (
                  <div onClick={scrollToTop} key={index}>
                    <Link href={item.path} passHref>
                      <a className='text-white cursor-pointer' style={{ textDecoration: 'none' }}>
                        {item.title}
                      </a>
                    </Link>
                    <br className='mb-25px' />
                  </div>
                )
              })}
            </div>

            <div className='col-span-1 mt-20rem sm:mt-100px mx-auto sm:mx-50px' id='footer-social'>
              <h3 className='text-white'>Community</h3>
              {communityLinks.map((item, index) => {
                return (
                  <div onClick={scrollToTop} key={index}>
                    <Link href={item.path} passHref>
                      <a
                        className='text-white cursor-pointer'
                        style={{ textDecoration: 'none' }}
                        rel='nofollow'
                        target='_blank'>
                        {item.title}
                      </a>
                    </Link>
                    <br className='mb-25px' />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
