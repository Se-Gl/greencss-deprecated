export default function SubSectionHero({ header, subheader, illustration, illustrationBelow, isContact = false }) {
  return (
    <div
      className='m-auto grid gap-30px sm:gap-0px grid-col-2 sm:grid-col-1 md:grid-col-1 min-h-75vh overflow-hidden'
      style={{ maxWidth: '110rem' }}>
      <div className='col-span-1 flex sm:mb-10rem md:mb-10rem'>
        <div className='m-auto sm:m-unset max-w-50rem'>
          <h1 className='font-800 text-63px'>{header}</h1>
          <p className='mb-0px'>{subheader}</p>
        </div>
      </div>
      <div className='col-span-1'>
        <div className={`${isContact === true ? 'w-90per sm:w-100per md:w-100per' : 'm-auto max-w-50rem'}`}>
          {illustration}
        </div>
      </div>
    </div>
  )
}
