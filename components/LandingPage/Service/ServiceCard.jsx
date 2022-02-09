import Pen from '../../icon/LandingPage/Service/Pen'
import { LinkButton } from '../../reusable/Button'

export default function ServiceCard() {
  return (
    <>
      <div className='min-h-38rem max-w-38rem w-100per rounded-20px bg-cover bg-no-repeat bg-center' id='service-card'>
        <div className='flex min-h-38rem w-100per text-dark sm:w-75vw md:w-75vw'>
          <div className='relative m-auto px-30px'>
            <Pen className='mb-30px' />
            <h1 className='text-25px font-bold leading-100per'>User Interface Design</h1>
            <p className='text-20px font-normal mt-20px'>
              omenCSS provides a stunning user interface design that is accessible to everyone.
            </p>
            <LinkButton className='absolute bottom-0 mt-50px'>Learn more</LinkButton>
          </div>
        </div>
      </div>
    </>
  )
}
