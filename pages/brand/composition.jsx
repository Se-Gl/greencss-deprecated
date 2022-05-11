import dynamic from 'next/dynamic'
import BrandSection from '@/components/brand/BrandSection'
import Summary from '@/components/brand/Summary'
import { BackButton } from '@/components/reusable/Button'
import SEO from '@/components/reusable/SEO'
import { brandCompositionSections } from '@/data/brand/compositionData'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function composition() {
  return (
    <SEO
      title='Composition Brand Book | Styleguide'
      description='The brand system features four core elements - composition'
      url='brand/composition'
      keywords='Composition, brand composition, image composition, Brand Book, greenCSS, Design, Corporate Identity'>
      <Layout className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh mb-10rem'>
        <div className='min-w-100per relative' id='composition-colour-page'>
          <BackButton className='mb-50px'>Back</BackButton>
          <div className='mb-10rem'>
            <h1 className='text-80px sm:text-50px mb-100px'>greenCSS brand identity: the composition</h1>
            {brandCompositionSections.sort().map((section, index) => (
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
              descriptionOne='The content and the context determine the composition'
              titleTwo='02'
              descriptionTwo='Consistent, uncompromising and contrasting experience'
              titleThree='03'
              descriptionThree='Focus on the importance of contrast by means of the primary colours'
            />
          </div>
        </div>
      </Layout>
    </SEO>
  )
}
