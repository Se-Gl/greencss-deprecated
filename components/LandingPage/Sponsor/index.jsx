import { useContext, useState } from 'react'
import Link from 'next/link'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import { useToast } from '@/components/toast/hooks/useToast'
import SubSectionHero from '../../grid/SubSectionHero'
import Section from '@/components/reusable/Section'
import { GreenButton } from '@/components/reusable/Button'
import DonationContext from '@/utils/DonationContext'
import CoTwo from '@/components/LandingPage/CalculateFootprint/CoTwo'
import SponsorCard from './SponsorCard'

const Sponsor = () => {
  const { amount, setAmount, prediction, finalPrize } = useContext(DonationContext)
  const [individualAmount, setIndividualAmount] = useState(10)
  const [loading, setLoading] = useState(false)

  let ceiledPrice = Math.ceil(finalPrize)
  const toast = useToast()

  // TODO refactor both stripe functions into one reusable
  // stripe default
  const createCheckOutSession = async () => {
    setLoading(true)
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
      setLoading(false)
      if (result?.error) {
        toast('error', `⚡ ${error.message}`)
      }
      if (result.status === 500) {
        toast('error', `⚡ ${error.message}`)
      }
    }
  }

  // individual stripe
  const createIndividualCheckOutSession = async () => {
    setLoading(true)
    if (individualAmount <= 1 && individualAmount > 1000000) {
      toast('error', `⚡ Please provide a valid donation.`)
    } else {
      const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)
      const stripe = await stripePromise
      const checkoutSession = await axios.post('/api/prepare-stripe-payment', {
        amount: individualAmount
      })

      const result = await stripe?.redirectToCheckout({
        sessionId: checkoutSession.data.id
      })
      setLoading(false)
      if (result?.error) {
        toast('error', `⚡ ${error.message}`)
      }
      if (result.status === 500) {
        toast('error', `⚡ ${error.message}`)
      }
    }
  }

  loading && toast('warning', '🙏 You will be forwarded shortly.')

  const individualtAmounts = [
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
    <Section id='donation'>
      <SubSectionHero
        header={`${
          prediction
            ? `Minimize your personal emissions by donating USD ${prediction ? ceiledPrice : amount}$.`
            : 'Change the world. Even a small donation does a lot.'
        }`}
        subheader='In cooperation with greenCSS partners, global projects are supported in order to minimize the CO2 emissions. Every cent goes directly to a green project. You want to learn more? Subscribe to the newsletter and receive in real time which projects are currently supported.'
        illustration={
          <div className='mx-25px sm:mx-0px md:mx-0px mb-50px'>
            <div className='min-h-40px max-w-12rem bg-white rounded-20px'>
              <div className='flex px-20px py-10px mb-10px'>
                <div className='bg-greencss h-5px w-5px rounded-10px my-auto mr-10px'></div>
                <span className='capitalize font-bold text-15px'>support</span>
              </div>
            </div>

            <div className='grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
              {prediction && (
                <SponsorCard
                  onMouseEnter={() => setAmount(ceiledPrice)}
                  onClick={createCheckOutSession}
                  cardAmount={ceiledPrice}
                  cardImageUrl='/images/landingpage/donation/individual.webp'
                  cardHeader='Individual'
                  cardDescription='tailored for you'
                  customColors='hover:bg-green-8 bg-greencss hover:text-black text-white'
                />
              )}
              <SponsorCard
                isDefault={false}
                customColors={`${
                  prediction
                    ? 'bg-green-8 hover:bg-greencss text-black hover:text-white'
                    : 'hover:bg-green-8 bg-greencss hover:text-black text-white'
                }`}
                cardAmount={individualAmount}
                cardImageUrl='/images/landingpage/donation/custom.webp'
                cardHeader='Custom'
                cardDescription='Select your own amount'>
                <div className=' relative'>
                  <input
                    type='number'
                    id='donate-amount'
                    placeholder='Your own donation'
                    value={individualAmount}
                    min='1'
                    max='999999'
                    className='border-none text-10px text-white bg-greencss-1 p-10px w-100per mb-5px accent-green rounded-5px'
                    onChange={(e) => setIndividualAmount(parseInt(e.target.value))}></input>
                  {individualAmount >= 1 && individualAmount < 1000000 ? (
                    <GreenButton
                      onClick={createIndividualCheckOutSession}
                      isDefault={false}
                      isReverse={true}
                      id='donate-button'
                      className='text-10px border-solid border-white border-1px'>
                      {individualAmount <= 0 ? 'donate' : `donate ${individualAmount}$`}
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
              </SponsorCard>

              {individualtAmounts.map((cart, index) => (
                <div key={index}>
                  <SponsorCard
                    onMouseEnter={() => setAmount(cart.amount)}
                    onClick={createCheckOutSession}
                    cardAmount={cart.amount}
                    cardImageUrl={cart.imageUrl}
                    cardHeader={cart.header}
                    cardDescription={cart.description}
                  />
                </div>
              ))}
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
