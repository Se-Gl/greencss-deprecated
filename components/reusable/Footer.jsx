import Link from 'next/link'
import LogoLight from '../icon/Brand/LogoLight'

const startedLinks = [
  { title: 'Installation', path: '/docs/activate-getting-started' },
  { title: 'Optimizing', path: '/blog/how-to-delete-unused-css-classes' },
  { title: 'Fundamentals', path: '/docs' },
  { title: 'Blog', path: '/blog' }
]
const communityLinks = [
  { title: 'Github', path: 'https://github.com/Se-Gl/greenCSS' },
  { title: 'Twitter', path: 'https://twitter.com/greenCSS' },
  { title: 'LinkedIn', path: 'https://www.linkedin.com/in/segl' }
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
      <div className='w-100per flex min-h-75vh bg-black rounded-20px mb-100px'>
        <div className='m-auto grid gap-30px grid-col-3 sm:grid-col-1 md:grid-col-2'>
          <div className='sm:mt-0px md:mt-0px sm:mb-20rem md:mb-20rem col-span-1 md:mx-auto sm:col-span-full sm:row-start-3 sm:col-end-1 md:col-span-full md:row-start-3 md:col-end-1'>
            <Link href='/' passHref>
              <a onClick={scrollToTop}>
                <LogoLight width='50px' height='50px' />
              </a>
            </Link>
            <div className='mt-25px'>
              {privacyLinks.map((item, index) => {
                return (
                  <div onClick={scrollToTop} key={index}>
                    <Link href={item.path} passHref>
                      <a className='text-white no-decoration'>{item.title}</a>
                    </Link>
                    <br className='mb-25px' />
                  </div>
                )
              })}
            </div>
            <p className='text-white'>© MIT {new Date().getFullYear()}</p>
          </div>

          <div className='col-span-1 sm:mt-20rem md:mt-20rem' id='footer-getting-started'>
            <h3 className='text-white'>Getting started</h3>
            {startedLinks.map((item, index) => {
              return (
                <div onClick={scrollToTop} key={index}>
                  <Link href={item.path} passHref>
                    <a className='text-white cursor-pointer no-decoration'>{item.title}</a>
                  </Link>
                  <br className='mb-25px' />
                </div>
              )
            })}
          </div>

          <div className='col-span-1 md:mt-20rem' id='footer-social'>
            <h3 className='text-white'>Community</h3>
            {communityLinks.map((item, index) => {
              return (
                <div onClick={scrollToTop} key={index}>
                  <Link href={item.path} passHref>
                    <a className='text-white cursor-pointer no-decoration' rel='nofollow' target='_blank'>
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
    </section>
  )
}
