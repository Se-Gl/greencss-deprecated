import { createContext, useState, useEffect } from 'react'

const DonationContext = createContext()

export function DonationProvider({ children }) {
  const [amount, setAmount] = useState(10)
  const [valueWatt, setValueWatt] = useState(() => {
    const saved = localStorage.getItem('valueWatt')
    const initialValue = JSON.parse(saved)
    return initialValue || 0
  })
  const [valueHour, setValueHour] = useState(() => {
    const saved = localStorage.getItem('valueHour')
    const initialValue = JSON.parse(saved)
    return initialValue || 0
  })
  let calculate = (((parseFloat(valueWatt) * parseFloat(valueHour) * 4.2) / 1000) * 12 * 0.474).toFixed(1)

  let finalCalculation = Math.ceil(
    (((parseFloat(valueWatt) * parseFloat(valueHour) * 4.2) / 1000) * 12 * 0.474).toFixed(1) / 40
  )

  return (
    <DonationContext.Provider
      value={{
        calculate: calculate,
        finalCalculation: finalCalculation,
        amount: amount,
        setAmount: setAmount,
        valueWatt: valueWatt,
        setValueWatt: setValueWatt,
        valueHour: valueHour,
        setValueHour: setValueHour
      }}>
      {children}
    </DonationContext.Provider>
  )
}

export default DonationContext
