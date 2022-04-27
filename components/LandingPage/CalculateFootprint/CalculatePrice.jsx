export default function CalculatePrice({ data }) {
  let calculateFinalPrice = Math.round(data) / 40
  return (
    <>
      <span className='font-900 text-greencss-5'>USD {Math.round(calculateFinalPrice)}$ </span>{' '}
    </>
  )
}
