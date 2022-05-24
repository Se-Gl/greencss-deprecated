import Image from 'next/image'
import Section from '../../reusable/Section'

export default function Presentation() {
  const presentations = [
    {
      title: 'Protect Our Earth Against Climate Change with sustainable software',
      description:
        'greenCSS is a sustainable cascade style sheet library that is intuitive to use and provides zero-emissions programming. The vision is to reduce our carbon footprint and simultaneously create beautiful new web applications for our clients, our agency or for ourselves.',
      imageUrl: '/images/landingpage/tv.webp',
      number: '01'
    },
    {
      title: 'Together We Can Restore Our Planet',
      description:
        'greenCSS is more than just a bachelor project. Created like bulma with SASS (SCSS). Classic like tailwindcss, but more intuitive. For the environment and for yourself - do something good while you work. greenCSS features easy to use and production redy animations and moreover it is suitable for all frameworks and screen types. Lets create beautiful and sustainable web applications together.',
      imageUrl: '/images/landingpage/plants.webp',
      number: '02',
      customClass: 'mt-100px'
    }
  ]

  return (
    <Section id='presentation'>
      <>
        {presentations.sort().map((presentation, index) => {
          return (
            <div key={index}>
              <div className={`flex md:block sm:block ${presentation.customClass}`}>
                <h2 className='max-w-80rem'>{presentation.title}</h2>
                <span className='text-black-10 text-120px font-600'>{presentation.number}</span>
              </div>
              <p className='text-black-10 max-w-75rem'>{presentation.description}</p>
              <div className='relative h-50vh overflow-hidden rounded-20px'>
                <Image
                  quality={100}
                  layout='fill'
                  objectFit='cover'
                  src={`${presentation.imageUrl}`}
                  alt='greenCSS tv forest, sustainable software'
                  placeholder='blur'
                  blurDataURL={`/_next/image?url=${presentation.imageUrl}&w=16&q=1`}
                />
              </div>
            </div>
          )
        })}
      </>
    </Section>
  )
}
