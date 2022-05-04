import dynamic from 'next/dynamic'
import SuccessPayment from '@/components/LandingPage/Sponsor/SuccessPayment'
import SEO from '@/components/reusable/SEO'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function PaymentSuccessful() {
  return (
    <SEO
      title='Thank you very much!'
      keywords='donation, green software, sustainable software, fairness'
      description='Every donation counts. Support greenCSS to make your agency, your project and yourself climate neutral.'
      url='/payment-successful'>
      <Layout className='container min-h-100vh relative z-2'>
        <SuccessPayment />
      </Layout>
    </SEO>
  )
}
