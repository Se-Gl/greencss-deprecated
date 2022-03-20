import Legal from '@/components/privacy/Legal'
import Layout from '@/components/reusable/Layout'

export default function legal() {
  return (
    <Layout
      className='container min-h-100vh relative z-2'
      title='All about lawyer stuff - Legal Notice'
      keywords='privacy, legal norice, imprint, berlin'
      description='Data protection is a top priority. For this reason, all legal imprint information can be accessed.'
      url='/privacy/legal'>
      <Legal />
    </Layout>
  )
}
