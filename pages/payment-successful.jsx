import dynamic from 'next/dynamic'
import SuccessPayment from '@/components/LandingPage/Sponsor/SuccessPayment'
import LayoutTitle from '@/components/reusable/LayoutTitle'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function PaymentSuccessful() {
  return (
    <LayoutTitle title='Thank you very much!'>
      <Layout
        className='container min-h-100vh relative z-2'
        keywords='donation, green software, sustainable software, fairness'
        description='Every donation counts. Support greenCSS to make your agency, your project and yourself climate neutral.'
        url='/payment-successful'>
        <SuccessPayment />
      </Layout>
    </LayoutTitle>
  )
}
