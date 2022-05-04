import dynamic from 'next/dynamic'
import Legal from '@/components/privacy/Legal'
import SEO from '@/components/reusable/SEO'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function legal() {
  return (
    <SEO
      title='All about lawyer stuff - Legal Notice'
      keywords='privacy, legal norice, imprint, berlin'
      description='Data protection is a top priority. For this reason, all legal imprint information can be accessed.'
      url='/privacy/legal'>
      <Layout className='container min-h-100vh relative z-2'>
        <Legal />
      </Layout>
    </SEO>
  )
}
