import Link from 'next/link'
import Section from '../reusable/Section'

export default function Testimonial() {
  return (
    <Section id='testimonial' background='bg-red-10'>
      <div className='relative flex min-h-75vh w-100per text-center text-white bg-black rounded-20px'>
        <div className='m-auto max-w-50rem'>
          <h2 className='font-bold text-50px mb-50px'>
            Hear what the <span className='text-greencss'>creator</span> says
          </h2>
          <p className='text-white'>
            “It all started with omenCSS. In fact, this was my capstone project for my bachelor thesis in software
            engineering. I wanted to create a free MIT licensed CSS library for any framework - no matter whether
            JavaScript, PHP or Python. This was not enough for me and so the story of greenCSS began.”
          </p>
          <Link href='https://www.severinglaser.ch'>
            <a className='text-greencss mt-50px no-decoration'>Severin Glaser</a>
          </Link>
          <p className='text-white mb-0px'>greenCSS</p>
        </div>
      </div>
    </Section>
  )
}
