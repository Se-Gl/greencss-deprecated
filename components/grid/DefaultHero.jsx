import Image from 'next/image'

const contactImages = [
  {
    imageURL: '/images/contact/img-in-img.webp',
    imageAlt: 'greenCSS smartphone nature',
    dimensions: 250
  },
  {
    imageURL: '/images/contact/talk.webp',
    imageAlt: 'conversation',
    dimensions: 250
  }
]

export default function DefaultHero({
  header,
  subheader,
  id,
  paraClass,
  primaryImageURL = '/images/contact/above.webp',
  primaryImageAlt = 'nature and landscape from birdview',
  primaryDimensions = 350,
  mapping = contactImages
}) {
  return (
    <div
      className='relative m-auto grid gap-30px sm:gap-0px grid-col-2 sm:grid-col-1 md:grid-col-1 min-h-66vh overflow-hidden mb-50px bg-greencss rounded-left-radius-100px p-20px'
      style={{ maxWidth: '110rem' }}
      id={id}>
      <div className='relative z-1 col-span-1 flex sm:mb-10rem md:mb-10rem'>
        <div className='m-auto sm:m-unset max-w-50rem'>
          <h1 className='font-800 text-63px text-green-9'>{header}</h1>
          {subheader && <p className={`mb-0px text-white ${paraClass}`}>{subheader}</p>}
        </div>
      </div>
      <div className='relative z-1 col-span-1'>
        <div className='flex justify-center'>
          <Image
            quality={100}
            src={`${primaryImageURL}`}
            alt={`${primaryImageAlt}`}
            width={primaryDimensions}
            height={primaryDimensions}
            className='rounded-50per m-auto'
            placeholder='blur'
            blurDataURL={`/_next/image?url=${primaryImageURL}&w=16&q=1`}
          />
        </div>
        <div className='flex justify-center gap-10px'>
          {mapping.map((item, index) => (
            <Image
              quality={100}
              key={index}
              src={`${item.imageURL}`}
              alt={`${item.imageAlt}`}
              width={item.dimensions}
              height={item.dimensions}
              className='rounded-50per'
              placeholder='blur'
              blurDataURL={`/_next/image?url=${item.imageURL}&w=16&q=1`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
