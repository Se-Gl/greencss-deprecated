import Image from 'next/image'

export default function SponsorCard({
  key,
  onClick,
  onMouseEnter,
  cardAmount,
  cardImageUrl,
  cardHeader,
  cardDescription,
  children,
  isDefault = true,
  customColors = 'bg-green-8 hover:bg-greencss text-black hover:text-white'
}) {
  return isDefault ? (
    <button
      key={key}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      id={`donate-cart-amount-${cardAmount}`}
      className={`sm:mb-25px min-h-24rem min-w-20rem rounded-30px overflow-hidden p-10px transition-all transition-duration-500ms cursor-pointer border-1px border-solid border-greencss sm:border-green-9 md:border-green-9 ${customColors}`}>
      <div className='relative h-12rem w-12rem mx-auto py-20px'>
        <Image
          layout='fill'
          objectFit='cover'
          src={`${cardImageUrl}`}
          alt='greenCSS donate'
          className='rounded-100per'
        />
      </div>
      <div className='text-center py-5px'>
        <div className='text-20px font-700 capitalize'>{cardHeader}</div>
        <div className='text-10px mb-5px font-500 capitalize'>{cardDescription}</div>
        <span className='text-15px font-700'>${cardAmount} USD</span>
      </div>
    </button>
  ) : (
    <div
      key={key}
      id={`donate-cart-amount-${cardAmount}`}
      className={`sm:mb-25px min-h-24rem min-w-20rem rounded-30px overflow-hidden p-10px transition-all transition-duration-500ms border-1px border-solid border-greencss sm:border-green-9 md:border-green-9 ${customColors}`}>
      <div className='relative h-12rem w-12rem mx-auto py-20px'>
        <Image
          layout='fill'
          objectFit='cover'
          src={`${cardImageUrl}`}
          alt='greenCSS donate'
          className='rounded-100per'
        />
      </div>
      <div className='text-center py-5px'>
        <div className='text-20px font-700 capitalize'>{cardHeader}</div>
        <div className='text-black-3 text-10px mb-5px font-500 capitalize'>{cardDescription}</div>
        <span className='text-15px font-700'>{isNaN ? null : `$${cardAmount} USD`}</span>
      </div>
      {children}
    </div>
  )
}
