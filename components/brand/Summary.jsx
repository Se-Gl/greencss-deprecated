export default function Summary({
  titleOne,
  descriptionOne,
  titleTwo,
  descriptionTwo,
  titleThree,
  descriptionThree,
  titleFour,
  descriptionFour
}) {
  return (
    <div className='bg-black'>
      <div className='m-auto max-w-60rem py-50px text-white'>
        <h2>Summary</h2>
        <h3 className='mt-50px'>{titleOne}</h3>
        <p className='my-25px text-white'>{descriptionOne}</p>
        <h3 className='mt-50px'>{titleTwo}</h3>
        <p className='my-25px text-white'>{descriptionTwo}</p>
        <h3 className='mt-50px'>{titleThree}</h3>
        <p className='my-25px text-white'>{descriptionThree}</p>
        {titleFour != null && <h3 className='mt-50px'>{titleFour}</h3>}
        {descriptionFour != null && <p className='my-25px text-white'>{descriptionFour}</p>}
      </div>
    </div>
  )
}
