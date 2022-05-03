import dynamic from 'next/dynamic'
import Policy from '@/components/privacy/Policy'
import LayoutTitle from '@/components/reusable/LayoutTitle'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function privacyPolicy() {
  return (
    <LayoutTitle title='Privacy Policy Guideline'>
      <Layout
        className='container min-h-100vh relative z-2'
        keywords='privacy, cookies, tracker, fairness, guideline'
        description='Privacy Policies should any information about our best practices. We inform how your data is processed.'
        url='/privacy/privacy-policy'>
        <Policy />
      </Layout>
    </LayoutTitle>
  )
}
