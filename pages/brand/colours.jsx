import dynamic from 'next/dynamic'
import BrandSection from '@/components/brand/BrandSection'
import { BackButton } from '@/components/reusable/Button'
import Summary from '@/components/brand/Summary'
import SEO from '@/components/reusable/SEO'
import { brandColorSections } from '@/data/brand/colorData'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function colours() {
  return (
    <SEO
      title='Colours Brand Book | Styleguide | Corporate Identity'
      description='The brand system features four core elements - colours'
      url='brand/colours'
      keywords='Colours, brand color, Styleguide, Brand Book, greenCSS, Design, Corporate Identity'>
      <Layout className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh mb-10rem'>
        <div className='min-w-100per relative' id='brand-colour-page'>
          <BackButton className='mb-50px'>Back</BackButton>
          <div className='mb-10rem'>
            <h1 className='text-80px sm:text-50px mb-100px'>
              <span className='text-greencss'>greenCSS</span> brand identity: the colour
            </h1>
            {brandColorSections.sort().map((section, index) => (
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
              descriptionOne='Focus on the power of black, white and green'
              titleTwo='02'
              descriptionTwo='Greenish headers or gray paragraphs are a beautiful combination with black.'
              titleThree='03'
              descriptionThree='Use colours in vector files, illustrations or images.'
              titleFour='04'
              descriptionFour='Use colours sparingly and carefully.'
            />
          </div>
        </div>
      </Layout>
    </SEO>
  )
}
