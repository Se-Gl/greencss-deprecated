import dynamic from 'next/dynamic'

const ServiceCard = dynamic(() => import('./ServiceCard'))

export default function Service() {
  return (
    <section className='my-20rem sm:my-100px md:my-100px' id='service-section'>
      <h2 className='max-w-50rem sm:m-10px md:m-10px'>There’s more to explore in the docs</h2>
      <div className='m-auto grid gap-30px sm:gap-0px grid-col-3 sm:grid-col-1 md:grid-col-2'>
        <ServiceCard />
      </div>
    </section>
  )
}
