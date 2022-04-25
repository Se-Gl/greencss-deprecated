import dynamic from 'next/dynamic'
import SuccessPayment from '@/components/LandingPage/Sponsor/SuccessPayment'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function PaymentSuccessful() {
  return (
    <Layout
      className='container min-h-100vh relative z-2'
      title='Thank you very much!'
      keywords='donation, green software, sustainable software, fairness'
      description='Every donation counts. Support greenCSS to make your agency, your project and yourself climate neutral.'
      url='/payment-successful'>
      <SuccessPayment />
    </Layout>
  )
}
