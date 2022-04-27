import { useEffect } from 'react'

export default function CalculatePrice({ data }) {
  let calculateFinalPrice = Math.ceil(data) / 40

  useEffect(() => {
    localStorage.setItem('estimatedFootprint', JSON.stringify(Math.ceil(calculateFinalPrice)))
  }, [data])

  return (
    <>
      <span className='font-900 text-greencss-5'>USD {Math.ceil(calculateFinalPrice)}$ </span>{' '}
    </>
  )
}
