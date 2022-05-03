import dynamic from 'next/dynamic'
import Legal from '@/components/privacy/Legal'
import LayoutTitle from '@/components/reusable/LayoutTitle'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function legal() {
  return (
    <LayoutTitle title='All about lawyer stuff - Legal Notice'>
      <Layout
        className='container min-h-100vh relative z-2'
        keywords='privacy, legal norice, imprint, berlin'
        description='Data protection is a top priority. For this reason, all legal imprint information can be accessed.'
        url='/privacy/legal'>
        <Legal />
      </Layout>
    </LayoutTitle>
  )
}
