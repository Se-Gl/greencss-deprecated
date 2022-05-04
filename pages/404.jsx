import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Icon from '@/components/icon/404/Icon'
import SubSectionHero from '@/components/reusable/SubSectionHero'
import { NEXT_URL } from '@/config/index'
import ReusableModal from '@/components/modal/ReusableModal'
import { GreenButton } from '@/components/reusable/Button'
import SEO from '@/components/reusable/SEO'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function ForOhFor() {
  const { asPath } = useRouter()

  return (
    <SEO
      title='greenCSS 404 - Something has gone terribly wrong'
      description='It seems that this page has been lost somewhere in the WWW. Maybe you should use the search function.'
      url={NEXT_URL + asPath}
      keywords='404, not found, error, sorry'>
      <Layout>
        <div id='404'>
          <SubSectionHero
            header='Something has gone terribly wrong'
            subheader='It seems that this page has been lost somewhere in the WWW. Maybe you should use the search function. Press F3 on your keyboard'
            isContact={true}
            illustration={<Icon width='100%' height='100%' />}
          />
          <div className='w-100per mb-50px'>
            <div className='flex'>
              <ReusableModal />
              <GreenButton href='/'>Or Go back</GreenButton>
            </div>
          </div>
        </div>
      </Layout>
    </SEO>
  )
}
