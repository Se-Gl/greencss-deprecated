import Image from 'next/image'
import { useContext } from 'react'
import Link from 'next/link'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import { useToast } from '@/components/toast/hooks/useToast'
import SubSectionHero from '../../reusable/SubSectionHero'
import Section from '@/components/reusable/Section'
import { GreenButton } from '@/components/reusable/Button'
import DonationContext from '@/utils/DonationContext'
import CoTwo from '@/components/LandingPage/CalculateFootprint/CoTwo'

const Sponsor = () => {
  const { amount, setAmount, prediction, finalPrize } = useContext(DonationContext)
  let ceiledPrice = Math.ceil(finalPrize)

  const toast = useToast()
  // const defaultAmounts = [ceiledPrice, 10, 25, 100]
  // stripe
  const createCheckOutSession = async () => {
    if (amount <= 1 && amount > 1000000) {
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

  const individualtAmounts = [
    {
      header: prediction ? 'Individual' : 'Custom',
      description: 'tailored for you',
      amount: prediction ? ceiledPrice : null,
      imageUrl: prediction ? '/images/landingpage/donation/individual.webp' : '/images/landingpage/donation/custom.webp'
    },
    {
      header: 'Tier I',
      description: 'for the community.',
      amount: 10,
      imageUrl: '/images/landingpage/donation/Tier1.webp'
    },
    {
      header: 'Tier II',
      description: 'for the community And more',
      amount: 25,
      imageUrl: '/images/landingpage/donation/Tier2.webp'
    },
    {
      header: 'Tier III',
      description: 'for the community And beyond',
      amount: 100,
      imageUrl: '/images/landingpage/donation/Tier3.webp'
    }
  ]

  return (
    <Section id='donation' background='bg-green-9'>
      <SubSectionHero
        header={`${
          prediction
            ? `Minimize your personal emissions by donating USD ${prediction ? ceiledPrice : amount}$.`
            : 'Change the world. Even a small donation does a lot.'
        }`}
        subheader='In cooperation with greenCSS partners, global projects are supported in order to minimize the CO2 emissions. Every cent goes directly to a green project. You want to learn more? Subscribe to the newsletter and receive in real time which projects are currently supported.'
        illustration={
          <div className='mx-25px sm:mx-0px md:mx-0px'>
            <div className='min-h-40px max-w-12rem bg-white rounded-20px'>
              <div className='flex px-20px py-10px mb-10px'>
                <div className='bg-greencss h-5px w-5px rounded-10px my-auto mr-10px'></div>
                <span className='capitalize font-bold text-15px'>support</span>
              </div>
            </div>
            <p className='mb-0px ml-25px text-15px'>individual</p>
            <p className='mb-25px ml-25px text-15px'>custom</p>

            <div className='grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
              {individualtAmounts.map((cart, index) =>
                cart.amount >= 1 && cart.amount < 1000000 ? (
                  <button
                    key={index}
                    onMouseEnter={() => setAmount(cart.amount)}
                    onClick={createCheckOutSession}
                    id={`donate-cart-amount-${cart.amount}`}
                    className='min-h-24rem min-w-20rem text-black hover:text-white rounded-30px overflow-hidden p-10px transition-all transition-duration-500ms cursor-pointer bg-green-8 hover:bg-greencss'>
                    <div className='relative h-12rem w-12rem mx-auto py-20px'>
                      <Image
                        layout='fill'
                        objectFit='cover'
                        src={`${cart.imageUrl}`}
                        alt='greenCSS donate'
                        className='rounded-100per'
                      />
                    </div>
                    <div className='text-center py-5px'>
                      <div className='text-20px font-700 capitalize'>{cart.header}</div>
                      <div className='text-black-3 text-10px mb-5px font-500 capitalize'>{cart.description}</div>
                      <span className='text-15px font-700'>${cart.amount} USD</span>
                    </div>
                  </button>
                ) : (
                  <div
                    key={index}
                    id={`donate-cart-amount-${cart.amount}`}
                    className='min-h-24rem min-w-20rem text-white hover:text-white rounded-30px overflow-hidden  p-10px transition-all transition-duration-500ms bg-greencss hover:bg-greencss-2'>
                    <div className='relative h-12rem w-12rem mx-auto py-20px'>
                      <Image
                        layout='fill'
                        objectFit='cover'
                        src={`${cart.imageUrl}`}
                        alt='greenCSS donate'
                        className='rounded-100per'
                      />
                    </div>
                    <div className='text-center py-5px'>
                      <div className='text-20px font-700'>{cart.header}</div>
                      <div className=' relative'>
                        <input
                          type='number'
                          id='donate-amount'
                          placeholder='Your own donation'
                          value={amount}
                          min='1'
                          max='999999'
                          className='border-none text-10px text-white bg-greencss-1 p-10px w-100per mb-25px accent-green rounded-5px'
                          onChange={(e) => setAmount(parseInt(e.target.value))}></input>

                        {amount >= 1 && amount < 1000000 ? (
                          <GreenButton
                            onClick={createCheckOutSession}
                            isDefault={false}
                            isReverse={true}
                            id='donate-button'>
                            {amount <= 0 ? 'donate' : `donate ${amount}$`}
                          </GreenButton>
                        ) : (
                          <button
                            disabled={true}
                            id='donate-button-disabled'
                            className='cursor-not-allowed flex py-10px px-50px font-bold rounded-20px my-auto text-center justify-center items-center m-auto text-10px text-greencss bg-yellow-3'>
                            invalid amount
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        }
      />
      {!prediction && (
        <div className='max-w-50rem m-auto pt-50px'>
          <h2>
            Have you heard about our <span className='text-greencss'>emission calculator</span>?
          </h2>
          <p className='mb-0px'>
            If you want to make a specific and individually tailored donation for yourself, you are welcome to try the{' '}
            <Link href='#calculate-footprint'>
              <a className='font-600'>emissions calculator</a>
            </Link>
            . There you can easily calculate your personal{' '}
            <span>
              <CoTwo />
            </span>{' '}
            emissions for your computer or laptop.
          </p>
        </div>
      )}
    </Section>
  )
}

export default Sponsor
