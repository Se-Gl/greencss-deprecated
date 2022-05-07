import SuccessIllustration from '@/components/icon/Payment/Success'
import { GreenButton } from '@/components/reusable/Button'
import SubSectionHero from '@/components/grid/SubSectionHero'

export default function SuccessPayment() {
  return (
    <>
      <GreenButton
        href='/'
        className='text-greencss hover:text-greencss relative float-left sm:float-none md:float-none sm:mb-50px md:mb-50px'>
        Back
      </GreenButton>

      <div className='mb-100px' id='thank-you'>
        <SubSectionHero
          header='Thank you very much!'
          subheader='Without you we would not be on this place, where we are right now. To demonstrate our gratitude to you, we demonstrate how much you have accomplished. Thank you!'
          illustration={<SuccessIllustration />}
        />
      </div>
    </>
  )
}
