import Carousel, { CarouselItem } from '../carousel/Carousel'
import BrandCard from '../brand/BrandCard'

const serviceCard = [
  { title: 'Supported by Logo 1', path: '#' },
  { title: 'Supported by Logo 2', path: '#' },
  { title: 'Supported by Logo 3', path: '#' }
]

export default function Support() {
  return (
    <section className='my-20rem sm:my-100px md:my-100px' id='supporters'>
      <h2 className='max-w-50rem sm:m-10px md:m-10px'>There’s more behind omenCSS</h2>

      <Carousel>
        <Carousel>
          {serviceCard.map((item) => {
            return (
              <CarouselItem key={item.title}>
                <div className='min-w-50rem sm:max-w-35rem sm:min-w-30rem mx-auto'>
                  <BrandCard title={`${item.title}`} link={`${item.path}`} />
                </div>
              </CarouselItem>
            )
          })}
        </Carousel>
      </Carousel>
    </section>
  )
}
