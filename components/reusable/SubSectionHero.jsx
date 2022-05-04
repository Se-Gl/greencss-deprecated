export default function SubSectionHero({ header, subheader, illustration, paraClass, isContact = false }) {
  return (
    <div
      className='relative m-auto grid gap-30px sm:gap-0px grid-col-2 sm:grid-col-1 md:grid-col-1 min-h-66vh overflow-hidden mb-50px'
      style={{ maxWidth: '110rem' }}>
      <div className='absolute top-0per left-0per bg-greencss w-50per sm:w-100per md:w-100per h-100per z-neg-1 rounded-right-radius-100px'></div>
      <div className='col-span-1 flex sm:mb-10rem md:mb-10rem'>
        <div className='m-auto sm:m-unset max-w-50rem'>
          <h1 className='font-800 text-63px text-green-9'>{header}</h1>
          <p className={`mb-0px text-white ${paraClass}`}>{subheader}</p>
        </div>
      </div>
      <div className='col-span-1 flex'>
        <div className={`${isContact === true ? 'w-90per sm:w-100per md:w-100per' : 'm-auto max-w-50rem'}`}>
          {illustration}
        </div>
      </div>
    </div>
  )
}
