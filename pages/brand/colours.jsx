import Layout from '@/components/reusable/Layout'
import BrandSection from '@/components/brand/BrandSection'
import { BackButton } from '@/components/reusable/Button'
import ColourExample from '@/components/brand/ColourExample'
import { primaryColors, secondaryColors, spotColors } from '@/data/colors'

export default function colours() {
  return (
    <Layout
      className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh mb-10rem'
      title='Colours Brand Book | Styleguide | Corporate Identity'
      description='The brand system features four core elements - logo, typography, colours and composition.'
      url='brand/colours'
      keywords='Colours, brand color, Styleguide, Brand Book, omenCSS, Design, Corporate Identity'>
      <div className='min-w-100per relative' id='brand-colour-page'>
        <BackButton className='mb-50px'>Back</BackButton>
        <div className='mb-10rem'>
          <BrandSection
            title='Colours'
            description='Colors determine charisma, emotion, feelings, and memories. In total, omenCSS offers a color palette of over 13 colors, whereby these are further broken down into 85 different lighter tones. The primary colours we use - dark, light and purple - build on our existing intensity and represent the elegance of omenCSS.'
          />
          <BrandSection
            isLight={true}
            title='Primary brand colors'
            description='The primary brand colors are dark, light, black, white and purple. Dark and Light should primarily be used for borders, illustrations or background colours - black and white for texts. Whereby a greyish colour can also be used to emphasise text passages or headlines.'>
            <div className='grid grid-col-3 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-2 w-100per overflow-x-hidden pt-100px'>
              {primaryColors.map((item, index) => {
                return (
                  <ColourExample
                    key={index}
                    bgColor={item.bgColor}
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
                    bgColor={item.bgColor}
                    colorName={item.colorName}
                    colorHex={item.colorHex}
                  />
                )
              })}
            </div>
          </BrandSection>
          <BrandSection
            title='Utilisation'
            description='Light plays a very important role in all brand communication and should balance dark and purple. Secondary colours are only used in sensitive cases where caution is needed or where their use enhances the composition.'
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
                    bgColor={item.bgColor}
                    colorName={item.colorName}
                    colorHex={item.colorHex}
                  />
                )
              })}
            </div>
          </BrandSection>
        </div>
      </div>
    </Layout>
  )
}
