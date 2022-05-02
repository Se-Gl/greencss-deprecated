import { useEffect, useContext } from 'react'
import DonationContext from '@/utils/DonationContext'

export default function CalculatePrice({ data }) {
  const { finalPrize } = useContext(DonationContext)
  let ceiledPrice = Math.ceil(finalPrize)

  useEffect(() => {
    localStorage.setItem('estimatedFootprint', JSON.stringify(Math.ceil(ceiledPrice)))
    localStorage.setItem('hasPrediction', JSON.stringify(true))
  }, [data])

  return (
    <>
      <span className='font-900 text-greencss-5'>USD {Math.ceil(ceiledPrice)}$ </span>{' '}
    </>
  )
}
