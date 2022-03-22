import { useRouter } from 'next/router'
import Icon from '@/components/icon/404/Icon'
import Layout from '@/components/reusable/Layout'
import SubSectionHero from '@/components/reusable/SubSectionHero'
import { NEXT_URL } from '@/config/index'
import ReusableModal from '@/components/modal/ReusableModal'
import { LinkButton } from '@/components/reusable/Button'

export default function ForOhFor() {
  const { asPath } = useRouter()

  return (
    <Layout
      title='omenCSS 404 - Something has gone terribly wrong'
      description='It seems that this page has been lost somewhere in the WWW. Maybe you should use the search function.'
      url={NEXT_URL + asPath}
      keywords='404, not found, error, sorry'>
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
            <LinkButton className='font-bold text-20px' href='/'>
              Or Go back
            </LinkButton>
          </div>
        </div>
      </div>
    </Layout>
  )
}
