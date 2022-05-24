import Link from 'next/link'
import Image from 'next/image'
import Section from '../reusable/Section'

export default function Testimonial() {
  return (
    <Section id='testimonial'>
      <div className='relative flex min-h-75vh w-100per text-center text-white bg-black rounded-20px'>
        <div className='m-auto max-w-50rem'>
          <h2 className='font-bold text-50px mb-50px text-green-9'>Hear what the creator says</h2>
          <p className='text-black-10'>
            “It all started with omenCSS. In fact, this was my capstone project for my bachelor thesis in software
            engineering. I wanted to create a free MIT licensed CSS library for any framework - no matter whether
            JavaScript, PHP or Python. This was not enough for me and so the story of greenCSS began.”
          </p>

          <div className='flex m-auto min-h-40px w-21rem p-10px rounded-5px bg-black-1 hover:bg-orange transition-all transition-duration-500ms greencss-button-reverse'>
            <div className='my-auto'>
              <Image
                src='/images/blog/users/segl-avatar.webp'
                alt='greenCSS creator - Severin Glaser'
                width={40}
                height={40}
                className='rounded-50per m-auto'
                placeholder='blur'
                blurDataURL='/_next/image?url=/images/blog/users/segl-avatar.webp&w=16&q=1'
              />
            </div>
            <div className='text-left ml-10px'>
              <Link href='https://www.severinglaser.ch'>
                <a className='text-white no-decoration'>Severin Glaser</a>
              </Link>
              <p className='block my-auto font-bold text-15px text-greencss'>greenCSS</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
