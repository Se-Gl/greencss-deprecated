import Image from 'next/image'

export default function Testimonial() {
  return (
    <div className='my-20rem sm:my-100px md:my-100px' id='testimonial'>
      <div className='relative flex min-h-75vh w-100per text-center text-light bg-dark rounded-20px'>
        <div className='m-auto max-w-50rem'>
          <h1 className='font-bold text-50px mb-50px leading-120per'>Hear What The Creator Says</h1>
          <p className='text-25px font-normal mt-25px'>
            “A dynamic, animated CSS library. Beginner-friendly, for every framework or plain HTML, intuitive and you
            can easily make it lightweight.”
          </p>
          <p className='text-25px font-normal text-purple-3 mt-50px'>Severin Glaser</p>
          <p className='text-25px font-normal'>omenCSS</p>
        </div>

        <div className='absolute left-0' style={{ top: '-10%' }}>
          <Image
            src='/images/landingpage/top-left-min.png'
            alt='Severin Glaser - Memoji 1'
            width={200}
            height={228.45}
            id='creator-memoji-1'
          />
        </div>
        <div className='absolute right-0' style={{ top: '-10%' }}>
          <Image
            src='/images/landingpage/top-right-min.png'
            alt='Severin Glaser - Memoji 2'
            width={200}
            height={200}
            id='creator-memoji-2'
          />
        </div>
        <div className='absolute right-0' style={{ bottom: '-1%' }}>
          <Image
            src='/images/landingpage/bottom-right-min.png'
            alt='Severin Glaser - Memoji 3'
            width={200}
            height={231.18}
            id='creator-memoji-3'
          />
        </div>
        <div className='absolute left-0 mt-50px' style={{ bottom: '-1.3%' }}>
          <Image
            src='/images/landingpage/bottom-left-min.png'
            alt='Severin Glaser - Memoji 4'
            width={200}
            height={199.64}
            id='creator-memoji-4'
          />
        </div>
      </div>
    </div>
  )
}