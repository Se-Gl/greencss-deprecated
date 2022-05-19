import Image from 'next/image'

export default function AboutTestimonial() {
  return (
    <div className='my-100px'>
      <h2 className='line-height-138per'>
        greenCSS is a global, environmental, sustainable open source cascade style sheet library. The vision of the
        non-profit organization is to make the programming world a better place and contribute for a more competitive
        webapplication development
      </h2>
      <p className='text-black-10'>
        greenCSS is a sustainable cascade style sheet library that is intuitive to use and provides zero-emissions
        programming. The vision is to reduce our carbon footprint and simultaneously create beautiful new web
        applications for our clients, our agency or for ourselves.
      </p>
      <div className='relative h-50vh overflow-hidden rounded-20px'>
        <Image
          quality={100}
          layout='fill'
          objectFit='cover'
          src='/images/about/ivy.webp'
          alt='greenCSS ivy, sustainable software'
          placeholder='blur'
          blurDataURL='/_next/image?url=/images/about/ivy.webp&w=16&q=1'
        />
      </div>
    </div>
  )
}
