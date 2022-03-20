import Policy from '@/components/privacy/Policy'
import Layout from '@/components/reusable/Layout'

export default function privacyPolicy() {
  return (
    <Layout
      className='container min-h-100vh relative z-2'
      title='Privacy Policy Guideline'
      keywords='privacy, cookies, tracker, fairness, guideline'
      description='Privacy Policies should any information about our best practices. We inform how your data is processed.'
      url='/privacy/privacy-policy'>
      <Policy />
    </Layout>
  )
}
