export default function SubSectionHero({ header, subheader, illustration }) {
  return (
    <div
      className='m-auto grid gap-30px sm:gap-0px grid-col-2 sm:grid-col-1 md:grid-col-1 min-h-75vh overflow-hidden'
      style={{ maxWidth: '110rem' }}>
      <div className='col-span-2 flex'>
        <div className='m-auto sm:m-unset max-w-50rem'>
          <h1 className='font-800 text-63px'>{header}</h1>
          <p className='mb-0px'>{subheader}</p>
        </div>
      </div>
      <div className='m-auto max-w-50rem'>{illustration}</div>
    </div>
  )
}
