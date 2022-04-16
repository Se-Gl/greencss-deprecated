import Link from 'next/link'
import useInView from '@/hooks/InView/scrollView'

export default function Testimonial() {
  const [ref, isVisible] = useInView({
    threshold: 0.25,
    unobserveOnEnter: true
  })
  return (
    <section
      ref={ref}
      className={`py-10rem sm:my-0px md:my-0px sm:m-10px md:m-10px ${
        isVisible && 'bg-red-10 transition-all transition-duration-800ms'
      }`}
      id='testimonial'>
      <div className='relative flex min-h-75vh w-100per text-center text-white bg-black rounded-20px'>
        <div className='m-auto max-w-50rem'>
          <h2 className='font-bold text-50px mb-50px'>
            Hear what the <span className='text-green'>creator</span> says
          </h2>
          <p className='text-white'>
            “It all started with omenCSS. In fact, this was my capstone project for my bachelor thesis in software
            engineering. I wanted to create a free MIT licensed CSS library for any framework - no matter whether
            JavaScript, PHP or Python. This was not enough for me and so the story of greenCSS began.”
          </p>
          <Link href='https://www.severinglaser.ch'>
            <a className='text-green mt-50px no-decoration'>Severin Glaser</a>
          </Link>
          <p className='text-white mb-0px'>greenCSS</p>
        </div>
      </div>
    </section>
  )
}
