export default function BrandBadExample({ childOne, childTwo }) {
  return (
    <>
      <div className='col-span-1 grid-flow-row sm:m-10px md:m-10px bg-white rounded-10px border-1px border-solid border-dark rounded-10px px-10px flex min-h-30rem'>
        <div className='h-auto w-100per flex'>
          <div className='m-auto'>{childOne}</div>
        </div>
      </div>
      <div className='flex min-h-30rem sm:min-h-auto md:min-h-auto'>
        <div className='h-auto m-auto sm:m-0px md:m-0px'>
          <p className='sm:my-10px'>{childTwo}</p>
        </div>
      </div>
    </>
  )
}
