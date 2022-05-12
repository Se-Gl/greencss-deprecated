import dynamic from 'next/dynamic'
import BrandSection from '@/components/brand/BrandSection'
import Summary from '@/components/brand/Summary'
import { BackButton } from '@/components/reusable/Button'
import SEO from '@/components/reusable/SEO'
import { brandTypoSections } from '@/data/brand/typoData'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function typography() {
  return (
    <SEO
      title='Typography Brand Book | Styleguide | Corporate Identity'
      description='The brand system features four core elements - typography'
      url='brand/typography'
      keywords='Typography, Styleguide, Brand Book, greenCSS, Design, Corporate Identity, omen css'>
      <Layout className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh mb-10rem'>
        <div className='min-w-100per relative' id='brand-typography-page'>
          <BackButton className='mb-50px'>Back</BackButton>
          <div className='mb-10rem'>
            <h1 className='text-80px sm:text-50px mb-100px'>greenCSS brand identity: the typography</h1>

            {brandTypoSections.sort().map((section, index) => (
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
              descriptionOne='The typeface is a recognizable, unique part of greenCSS.'
              titleTwo='02'
              descriptionTwo='Aim for contrast and hierarchy between types.'
              titleThree='03'
              descriptionThree='Use colours sparingly and carefully.'
            />
          </div>
        </div>
      </Layout>
    </SEO>
  )
}
