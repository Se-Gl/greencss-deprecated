import Link from 'next/link'
import LogoLight from '../icon/Brand/LogoLight'
import Newsletter from '../newsletter'

const startedLinks = [
  { title: 'Installation', path: '/docs/activate-getting-started' },
  { title: 'Optimizing', path: '/blog/how-to-delete-unused-css-classes' },
  { title: 'Fundamentals', path: '/docs' },
  { title: 'Blog', path: '/blog' }
]

const privacyLinks = [
  { title: 'Privacy — Terms', path: '/privacy/privacy-policy' },
  { title: 'Cookies', path: '/privacy/cookies#cookie-policy' },
  { title: 'Legal Notice', path: '/privacy/legal' }
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
      <div className='w-100per flex justify-center min-h-75vh bg-black rounded-20px mb-100px'>
        <div className='mx-30px m-auto grid gap-30px grid-col-4 sm:grid-col-1 md:grid-col-3'>
          <div className='sm:mt-50px md:mt-0px sm:mb-20rem md:mb-20rem col-span-1 md:mx-auto sm:col-span-full sm:row-start-4 sm:col-end-1 md:col-span-full md:row-start-3 md:col-end-1'>
            <Link href='/' passHref>
              <a onClick={scrollToTop}>
                <LogoLight width='50px' height='50px' />
              </a>
            </Link>

            <div className='mt-25px'>
              <p className='text-black-10 text-15px'>
                A sustainable CSS library that is intuitive to use and absolutely emission-free.
              </p>
            </div>
          </div>

          <div className='col-span-1 sm:mt-20rem md:mt-20rem' id='footer-getting-started'>
            <h3 className='text-white text-30px lg:text-25px md:text-20px'>Privacy</h3>
            {privacyLinks.map((item, index) => {
              return (
                <div onClick={scrollToTop} key={index}>
                  <Link href={item.path} passHref>
                    <a className='text-black-10 hover:text-green-9 text-15px no-decoration transition-duration-200ms transition-all'>
                      {item.title}
                    </a>
                  </Link>
                  <br className='mb-25px' />
                </div>
              )
            })}
            <span className='text-black-10 text-15px'>© MIT {new Date().getFullYear()}</span>
          </div>

          <div className='col-span-1 sm:mt-50px md:mt-20rem' id='footer-getting-started'>
            <h3 className='text-white text-30px lg:text-25px md:text-20px'>Go Ahead</h3>
            {startedLinks.map((item, index) => {
              return (
                <div onClick={scrollToTop} key={index}>
                  <Link href={item.path} passHref>
                    <a className='text-black-10 hover:text-green-9 text-15px cursor-pointer no-decoration transition-duration-200ms transition-all'>
                      {item.title}
                    </a>
                  </Link>
                  <br className='mb-25px' />
                </div>
              )
            })}
          </div>

          <div className='col-span-1 sm:mt-50px md:mt-20rem' id='footer-social'>
            <h3 className='text-white text-30px lg:text-25px md:text-20px'>Newsletter</h3>
            <Newsletter />
          </div>
        </div>
      </div>
    </section>
  )
}
