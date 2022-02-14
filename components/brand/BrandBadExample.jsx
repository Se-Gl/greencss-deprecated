export default function BrandBadExample({ imgUrl, imgAlt, imgId, description }) {
  return (
    <div className='flex flex-col min-h-25rem w-100per rounded-10px bg-cover bg-no-repeat bg-center border-1px border-solid border-dark'>
      <div className='min-h-25rem min-h-50per'>
        <div className='flex justify-center'>
          <img src={`${imgUrl}`} alt={`${imgAlt}`} id={`${imgId}`} />
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}
