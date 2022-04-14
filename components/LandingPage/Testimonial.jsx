import Link from 'next/link'

export default function Testimonial() {
  return (
    <section className='my-20rem sm:my-100px md:my-100px' id='testimonial'>
      <div className='relative flex min-h-75vh w-100per text-center text-white bg-black rounded-20px'>
        <div className='m-auto max-w-50rem'>
          <h2 className='font-bold text-50px mb-50px'>Hear What The Creator Says</h2>
          <p className='text-white'>
            “A dynamic, animated CSS library. Beginner-friendly, for every framework or plain HTML, intuitive,
            development ready and you can easily make it lightweight in production.”
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
