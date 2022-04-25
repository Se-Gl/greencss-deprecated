import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import { useToast } from '@/components/toast/hooks/useToast'
import SubSectionHero from '../../reusable/SubSectionHero'
import Section from '@/components/reusable/Section'
import { GreenButton } from '@/components/reusable/Button'

const Sponsor = () => {
  const [amount, setAmount] = useState(10)
  const toast = useToast()
  const defaultAmounts = [10, 25, 100]

  const createCheckOutSession = async () => {
    if (amount <= 1) {
      toast('error', `⚡ Please provide a valid donation.`)
    } else {
      const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)
      const stripe = await stripePromise
      const checkoutSession = await axios.post('/api/prepare-stripe-payment', {
        amount: amount
      })

      const result = await stripe?.redirectToCheckout({
        sessionId: checkoutSession.data.id
      })

      if (result?.error) {
        toast('error', `⚡ ${error.message}`)
      }
      if (result.status === 500) {
        toast('error', `⚡ ${error.message}`)
      }
    }
  }

  console.log(amount)
  return (
    <Section id='donation' background='bg-green-9'>
      <SubSectionHero
        header='Change the world. Even a small donation does a lot.'
        subheader='In cooperation with greenCSS partners, global projects are supported in order to minimize the CO2 emissions. Every cent goes directly to a green project. You want to learn more? Subscribe to the newsletter and receive in real time which projects are currently supported.'
        illustration={
          <div className='mx-25px sm:mx-0px md:mx-0px'>
            <div className='flex relative'>
              <input
                type='number'
                id='amount'
                placeholder='Choose your own donation'
                value={amount}
                min='1'
                max='999999'
                className='border-none text-15px text-white bg-greencss-3 p-10px w-100per mb-25px accent-green'
                onChange={(e) => setAmount(parseInt(e.target.value))}></input>
              <p className='mb-0px absolute text-15px text-greencss-10' style={{ right: '30px', top: '10px' }}>
                USD
              </p>
            </div>
            <div className='justify-center sm:block'>
              <div className='flex'>
                {defaultAmounts.map((buttonAmount) => (
                  <GreenButton
                    onClick={() => setAmount(buttonAmount)}
                    key={buttonAmount}
                    className='w-0px px-0px text-greencss'>
                    {buttonAmount}$
                  </GreenButton>
                ))}
              </div>
              <div className='flex justify-center mt-25px'>
                {amount >= 1 ? (
                  <GreenButton onClick={createCheckOutSession} isDefault={false} isReverse={true}>
                    {amount <= 0 ? 'donate' : `donate ${amount}$`}
                  </GreenButton>
                ) : (
                  <button
                    disabled={true}
                    className='cursor-not-allowed flex py-10px px-50px font-bold rounded-20px my-auto text-center justify-center items-center m-auto text-15px text-greencss bg-yellow-3'>
                    invalid amount
                  </button>
                )}
              </div>
            </div>
          </div>
        }
      />
    </Section>
  )
}

export default Sponsor
