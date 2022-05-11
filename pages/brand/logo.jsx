import dynamic from 'next/dynamic'
import BrandSection from '@/components/brand/BrandSection'
import Summary from '@/components/brand/Summary'
import { BackButton } from '@/components/reusable/Button'
import SEO from '@/components/reusable/SEO'
import { brandLogoSections } from '@/data/brand/logoData'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function logo() {
  return (
    <SEO
      title='Logo Brand Book | Styleguide | Corporate Identity'
      description='The brand system features four core elements - logo'
      url='brand/logo'
      keywords='Logo, Styleguide, Brand Book, greenCSS, Design, Corporate Identity, omen css'>
      <Layout className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh mb-10rem'>
        <div className='min-w-100per relative' id='brand-logo-page'>
          <BackButton className='mb-50px'>Back</BackButton>
          <div className='mb-10rem'>
            <h1 className='text-80px sm:text-50px mb-100px'>greenCSS brand identity: the logo</h1>
            {brandLogoSections.sort().map((section, index) => (
              <BrandSection
                key={index}
                title={section.title}
                description={section.description}
                isLight={section.isLight}
                className={section.className}>
                {section.children}
              </BrandSection>
            ))}
            <Summary
              titleOne='01'
              descriptionOne='Keep it simple'
              titleTwo='02'
              descriptionTwo='Maintaining identity'
              titleThree='03'
              descriptionThree='Focus on the importance of black, white and green'
            />
          </div>
        </div>
      </Layout>
    </SEO>
  )
}
