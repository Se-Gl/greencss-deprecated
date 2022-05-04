import dynamic from 'next/dynamic'
import Policy from '@/components/privacy/Policy'
import SEO from '@/components/reusable/SEO'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function privacyPolicy() {
  return (
    <SEO
      title='Privacy Policy Guideline'
      keywords='privacy, cookies, tracker, fairness, guideline'
      description='Privacy Policies should any information about our best practices. We inform how your data is processed.'
      url='/privacy/privacy-policy'>
      <Layout className='container min-h-100vh relative z-2'>
        <Policy />
      </Layout>
    </SEO>
  )
}
