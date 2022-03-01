export default function ColourExample({ bgColor, colorName, colorHex }) {
  return (
    <div className='sm:m-15px'>
      <div
        className={`col-span-1 grid-flow-row mb-25px rounded-10px border-1px border-solid border-dark rounded-10px px-10px min-h-11rem max-w-11rem ${bgColor}`}
      />
      <div className='h-auto sm:m-0px md:m-0px'>
        <div className='sm:my-10px'>
          <h3 className='mb-5px'>{colorName}</h3>
          <p className='mb-0px text-15px'>HEX: {colorHex}</p>
          <p className='mb-0px text-15px'>omenCSS Name: {bgColor}</p>
        </div>
      </div>
    </div>
  )
}
