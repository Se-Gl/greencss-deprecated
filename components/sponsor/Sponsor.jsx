import { useState } from 'react'
import { useRouter } from 'next/router'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

const Sponsor = () => {
  const [amount, setAmount] = (useState < number) | (0 > 5)
  const { push } = useRouter()

  const defaultAmounts = [1, 5, 10, 20]
  const createCheckOutSession = async () => {
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
    const stripe = await stripePromise
    const checkoutSession = await axios.post('/api/prepare-stripe-payment', {
      amount: amount
    })

    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id
    })

    if (result?.error) {
      alert(result?.error.message)
    }
  }

  // @ts-ignore
  return (
    <div className='container px-4 mx-auto'>
      <div className='lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col text-left lg:text-left'>
        <div className='pb-16'>
          <h1 className='text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white'>Love my work?</h1>
          <p className='mt-6 text-gray-800 dark:text-white'>Feel free to support me with a donation!</p>
          <p className='mt-6 text-gray-800 dark:text-white'>
            Thanks in advance. Each donation of yours means a lot, however little it might be!
          </p>
        </div>
        <div className='lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left'>
          <div className='w-96 flex-col items-center z-10 space-y-5 rounded-md bg-gray-500 dark:bg-slate-900 p-10'>
            <div className='group flex w-full items-center rounded-lg bg-gray-100/30 text-white focus:outline-none'>
              <p className='rounded-l-lg bg-gray-400 px-4 py-3 text-lg text-black'>USD</p>
              <input
                type='number'
                className='w-full rounded-lg bg-transparent px-4 py-3 text-gray-300  transition duration-200 focus:outline-none group-hover:opacity-100'
                placeholder='Enter Amount'
                value={amount ? amount : ''}
                onChange={(e) => setAmount(parseInt(e.target.value))}
              />
            </div>
            <div className='flex items-center space-x-2 dark:text-black'>
              {defaultAmounts.map((buttonAmount) => (
                <button
                  className={`${
                    amount === buttonAmount
                      ? 'bg-cyan-500 border-cyan-500'
                      : 'bg-gray-300' + ' border-4 border-gray-300 hover:border-4 hover:border-cyan-500'
                  } border-4 border-gray-300 rounded-full px-5 py-2 transition duration-200`}
                  onClick={() => setAmount(buttonAmount)}
                  key={buttonAmount}>
                  {buttonAmount}$
                </button>
              ))}
            </div>
            <button
              onClick={createCheckOutSession}
              className='w-full rounded-lg border-cyan-500 border-2 hover:border-2 bg-cyan-500 py-3 text-xl font-bold hover:bg-cyan-600 hover:border-cyan-600'>
              <span className='dark:text-black'>Stripe</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsor
