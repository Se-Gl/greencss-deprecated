import dynamic from 'next/dynamic'
import BrandSection from '@/components/brand/BrandSection'
import { BackButton } from '@/components/reusable/Button'
import ColourExample from '@/components/brand/ColourExample'
import { primaryColors, secondaryColors, spotColors } from '@/data/colors'
import BrandBadExample from '@/components/brand/BrandBadExample'
import Summary from '@/components/brand/Summary'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function colours() {
  return (
    <Layout
      className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh mb-10rem'
      title='Colours Brand Book | Styleguide | Corporate Identity'
      description='The brand system features four core elements - colours'
      url='brand/colours'
      keywords='Colours, brand color, Styleguide, Brand Book, greenCSS, Design, Corporate Identity'>
      <div className='min-w-100per relative' id='brand-colour-page'>
        <BackButton className='mb-50px'>Back</BackButton>
        <div className='mb-10rem'>
          <h1 className='text-80px sm:text-50px mb-100px'>
            <span className='text-greencss'>greenCSS</span> brand identity: the colour
          </h1>
          <BrandSection
            title='Colours'
            description='Colors determine charisma, emotion, feelings, and memories. In total, greenCSS offers a color palette of over 11 colors, whereby these are further broken down into 100 different lighter tones. The primary colours we use - black, white and green - build on our existing intensity and represent the elegance of greenCSS.'
          />
          <BrandSection
            isLight={true}
            title='Primary brand colors'
            description='The primary brand colours are black, white and green. As part of the corporate identity, it should be used in, texts, illustrations or as background colours. Descending black colors components can be used as gray shades. Whereby a greyish colour can also be used to emphasise text passages or headlines but must be applied with sufficient contrast difference. As green color variations, both creations of green can be used or combined, since the colour originates from the same shades.'>
            <div className='grid grid-col-3 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-2 w-100per overflow-x-hidden pt-100px'>
              {primaryColors.map((item, index) => {
                return (
                  <ColourExample
                    key={index}
                    className={item.className}
                    colorName={item.colorName}
                    colorHex={item.colorHex}
                  />
                )
              })}
            </div>
          </BrandSection>
          <BrandSection
            title='Secondary colors'
            description='The secondary colours contain a high spectrum of diversity. They should be used wisely in illustrations, images and publications to maintain their significance and impact.'
          />
          <BrandSection isLight={true} className='max-w-90rem py-100px m-auto'>
            <div className='grid grid-col-3 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-2 w-100per overflow-x-hidden'>
              {secondaryColors.map((item, index) => {
                return (
                  <ColourExample
                    key={index}
                    className={item.className}
                    colorName={item.colorName}
                    colorHex={item.colorHex}
                  />
                )
              })}
            </div>
          </BrandSection>
          <BrandSection
            title='Utilisation'
            description='White plays a very important role in all brand communication and should balance black and green. Secondary colours are only used in sensitive cases where caution is needed or where their use enhances the composition.'
          />
          <BrandSection
            title='Spot Colours'
            description='Spot colours are intended for images or illustrations that require tone-on-tone pairings, product designs that demand variations in hue and opacity, or buttons with active, focus or hover states. Spot colours are lightened secondary colours.'
          />
          <BrandSection isLight={true} className='max-w-90rem py-100px m-auto'>
            <div className='grid grid-col-5 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-2 w-100per overflow-x-hidden'>
              {spotColors.map((item, index) => {
                return (
                  <ColourExample
                    key={index}
                    className={item.className}
                    colorName={item.colorName}
                    colorHex={item.colorHex}
                  />
                )
              })}
            </div>
          </BrandSection>
          <BrandSection title='Dont’s' />
          <BrandSection isLight={true}>
            <div className='m-auto grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
              <BrandBadExample
                childOne={
                  <img
                    src='/images/brand/colors/do-not.webp'
                    alt='omen css do not with colors'
                    id='greenCSS-do-not-1'
                    className='w-100per'
                  />
                }
                classOne='py-10px'
                childTwo='Avoid improper usage of the primary colours (especially green - as a background colour).'
              />
              <BrandBadExample
                childOne={
                  <img
                    src='/images/brand/colors/do-not-2.webp'
                    alt='omen css do not with colors'
                    id='greenCSS-do-not-2'
                    className='min-w-100per'
                  />
                }
                classOne='py-10px'
                childTwo='Do not create effects or new colour variations.'
              />
              <BrandBadExample
                childOne={
                  <img
                    src='/images/brand/colors/do-not-3.webp'
                    alt='omen css do not with colors'
                    id='greenCSS-do-not-3'
                    className='min-w-100per'
                  />
                }
                classOne='py-10px'
                childTwo='Do not use too many secondary colours in a component. Never use a secondary or spot colour as a background colour.'
              />
              <BrandBadExample
                childOne={
                  <img
                    src='/images/brand/colors/do-not-4.webp'
                    alt='omen css do not with colors'
                    id='greenCSS-do-not-4'
                    className='w-100per'
                  />
                }
                classOne='py-10px'
                childTwo='Do not use not enough contrast between text and background.'
              />
              <BrandBadExample
                childOne={
                  <img
                    src='/images/brand/colors/do-not-5.webp'
                    alt='omen css do not with colors'
                    id='greenCSS-do-not-5'
                    className='w-100per'
                  />
                }
                classOne='py-10px'
                childTwo='Avoid coloured headings or texts.'
              />
            </div>
          </BrandSection>
          <BrandSection title='Ways to apply colour' />
          <BrandSection isLight={true}>
            <div className='m-auto grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
              <BrandBadExample
                childOne={
                  <img
                    src='/images/brand/colors/ok.webp'
                    alt='omen css design with colors'
                    id='greenCSS-do-1'
                    className='w-100per'
                  />
                }
                classOne='py-10px'
                childTwo='Color in photography.'
              />
              <BrandBadExample
                childOne={
                  <img
                    src='/images/brand/colors/ok-2.webp'
                    alt='omen css design with colors'
                    id='greenCSS-do-2'
                    className='w-100per'
                  />
                }
                classOne='py-10px'
                childTwo='Color in illustrations / vector files.'
              />
              <BrandBadExample
                childOne={
                  <img
                    src='/images/brand/colors/ok-3.webp'
                    alt='omen css design with colors'
                    id='greenCSS-do-3'
                    className='w-100per'
                  />
                }
                classOne='py-10px'
                childTwo='Grey text or the primary greencss/green in a header to highlight certain words or subjects.'
              />
            </div>
          </BrandSection>
          <Summary
            titleOne='01'
            descriptionOne='Focus on the power of black, white and green'
            titleTwo='02'
            descriptionTwo='A little green or grey in headers packs a lot of punch'
            titleThree='03'
            descriptionThree='Use colours in vector files, illustrations or images.'
            titleFour='04'
            descriptionFour='Use colours sparingly and carefully.'
          />
        </div>
      </div>
    </Layout>
  )
}
