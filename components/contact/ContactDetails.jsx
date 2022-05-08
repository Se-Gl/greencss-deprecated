import dynamic from 'next/dynamic'

const ContactEmail = dynamic(() => import('../icon/Contact/ContactEmail'))
const ContactAddress = dynamic(() => import('../icon/Contact/ContactAddress'))

export default function ContactDetails() {
  const details = [
    {
      icon: <ContactEmail />,
      content: (
        <>
          <span className='text-15px text-black-10'>E-Mail</span>
          <br />
          <a className='font-bold text-20px m-0px no-decoration' href='mailto:info@greencss.dev'>
            info@greencss.dev
          </a>
        </>
      )
    },
    {
      icon: <ContactAddress />,
      content: (
        <>
          <span className='text-15px text-black-10'>Map address</span>
          <p className='font-bold text-20px m-0px'>8708, Männedorf [CH]</p>
          <p className='font-bold text-20px m-0px'>12435, Berlin [DE]</p>
        </>
      )
    }
  ]

  return (
    <div className='my-10rem w-66per mx-auto'>
      <div className='m-auto grid grid-col-2 gap-30px sm:grid-col-1 md:grid-col-1' id='blog-section'>
        {details.map((detail, index) => (
          <div className='col-span-1 flex h-64px' key={index}>
            <div className='min-h-64px min-w-64px'>{detail.icon}</div>
            <div className='block ml-10px my-auto'>{detail.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
