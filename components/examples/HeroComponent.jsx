import Image from 'next/image'

export default function HeroComponent() {
  return (
    <div className='container bg-white sm:px-10px md:px-25px lg:px-50px min-h-100vh'>
      {/* NAV section */}
      <div className='flex justify-between my-50px h-120px w-100per'>
        <div className='my-auto'>
          <span className='text-30px sm:text-20px font-400 text-black'>your</span>
          <span className='text-30px sm:text-20px font-900 text-blue'>COMPANY</span>
        </div>
        <div>
          <button className='outline-none bg-blue hover:bg-blue-5 active:bg-blue-3 focus:bg-blue-7 py-20px px-40px text-white text-15px font-900 rounded-50px transition-all transition-duration-500ms'>
            Get in touch
          </button>
        </div>
      </div>
      {/* NAV section END */}
      <div
        className='m-auto grid gap-30px sm:gap-0px grid-col-2 sm:grid-col-1 md:grid-col-1 min-h-66vh overflow-hidden'
        style={{ maxWidth: '110rem' }}>
        {/* Left Hero section */}
        <div className='col-span-1 flex sm:mb-10rem md:mb-10rem'>
          <div className='m-auto sm:m-unset max-w-50rem'>
            <span className='text-blue text-15px'>– </span>
            <span className='text-blue text-15px font-800 uppercase'>Design Agency</span>
            <h1 className='font-900 text-65px lg:text-45px'>A top-notch Design Agency</h1>
            <p className='mb-0px text-black-10 text-15px'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa volutpat
              massa rhoncus odio feugiat tellus, elit massa sed.
            </p>
          </div>
        </div>
        {/* Left Hero section END*/}
        {/* Right Hero section*/}
        <div className='col-span-1 flex'>
          <div className='w-100per'>
            <div className='relative h-75vh overflow-hidden'>
              {/* NextJS image */}
              <Image
                layout='fill'
                objectFit='cover'
                src='/images/blog/blogcontent/Hero-Image.webp'
                alt='greenCSS Hero Image sample'
                placeholder='blur'
                blurDataURL='/_next/image?url=$/images/blog/blogcontent/Hero-Image.webp&w=16&q=1'
              />
            </div>
          </div>
        </div>
        {/* Right Hero section END*/}
      </div>
    </div>
  )
}
