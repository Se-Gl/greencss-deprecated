import Image from 'next/image'

export default function AuthorInformation({ authorImage, author, date, content }) {
  function readingTime() {
    const wpm = 250
    const words = content.trim().split(/\s+/).length
    const time = Math.ceil(words / wpm)
    return time
  }

  return (
    <div className='flex min-h-40px my-25px'>
      <div className='min-h-40px min-w-40px my-auto'>
        <Image
          src={authorImage ? `${authorImage}` : '/images/greencss_logo_dark.png'}
          alt={`A greenCSS Blog by ${author}`}
          width={40}
          height={!authorImage ? 50 : 40}
          className={!authorImage ? '' : 'rounded-50per m-auto'}
          placeholder='blur'
          blurDataURL={`/_next/image?url=${authorImage}&w=16&q=1`}
        />
      </div>
      <div className='block block ml-10px my-auto'>
        <p className='mb-0px font-bold text-15px' id='blog-author'>
          {author}
        </p>
        <div className='flex'>
          <p className='text-15px text-black-10 mb-0px' id='blog-created'>
            {date}
          </p>
          <span className='text-15px text-greencss mx-5px'>•</span>
          <p className='text-15px text-black-10 mb-0px' id='blog-readingtime'>
            {readingTime()} min read
          </p>
        </div>
      </div>
    </div>
  )
}
