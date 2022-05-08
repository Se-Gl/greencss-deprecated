import dynamic from 'next/dynamic'

const ContactEmail = dynamic(() => import('../icon/Contact/ContactEmail'))
const ContactAddress = dynamic(() => import('../icon/Contact/ContactAddress'))

export default function ContactDetails() {
  return (
    <div className='my-10rem w-66per mx-auto'>
      <div className='m-auto grid grid-col-2 gap-30px sm:grid-col-1 md:grid-col-1' id='blog-section'>
        <div className='col-span-1 flex h-64px'>
          <div className='min-h-64px min-w-64px'>
            <ContactEmail />
          </div>
          <div className='block ml-10px my-auto'>
            <span className='text-15px text-black-10'>E-Mail</span>
            <br />
            <a className='font-bold text-20px m-0px no-decoration' href='mailto:info@greencss.dev'>
              info@greencss.dev
            </a>
          </div>
        </div>

        <div className='col-span-1 flex h-64px'>
          <div className='min-h-64px min-w-64px'>
            <ContactAddress />
          </div>
          <div className='block ml-10px my-auto'>
            <span className='text-15px text-black-10'>Map address</span>
            <p className='font-bold text-20px m-0px'>8708, Männedorf</p>
            <p className='font-bold text-20px m-0px'>12435, Berlin</p>
          </div>
        </div>
      </div>
    </div>
  )
}
