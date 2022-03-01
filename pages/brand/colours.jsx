import Layout from '@/components/reusable/Layout'
import BrandSection from '@/components/brand/BrandSection'
import { BackButton } from '@/components/reusable/Button'
import ColourExample from '@/components/brand/ColourExample'

const primaryColors = [
  { bgColor: 'bg-light', colorName: 'Light', colorHex: '#f0eef5' },
  { bgColor: 'bg-dark', colorName: 'Dark', colorHex: '#03000a' },
  { bgColor: 'bg-white', colorName: 'White', colorHex: '#fdfdfd' },
  { bgColor: 'bg-black', colorName: 'Black', colorHex: '#101010' },
  { bgColor: 'bg-purple', colorName: 'Purple', colorHex: '#be0aff' }
]

const secondaryColors = [
  { bgColor: 'bg-red', colorName: 'Red', colorHex: '#ce1f1a' },
  { bgColor: 'bg-darkorange', colorName: 'Darkorange', colorHex: '#d54913' },
  { bgColor: 'bg-lightorange', colorName: 'Lightorange', colorHex: '#ffd300' },
  { bgColor: 'bg-yellow', colorName: 'Yellow', colorHex: '#deff0a' },
  { bgColor: 'bg-yellowgreen', colorName: 'Yellowgreen', colorHex: '#a1ff0a' },
  { bgColor: 'bg-lightgreen', colorName: 'Lightgreen', colorHex: '#0aff99' },
  { bgColor: 'bg-green', colorName: 'Green', colorHex: '#3f7d1a' },
  { bgColor: 'bg-lightblue', colorName: 'Lightblue', colorHex: '#0aefff' },
  { bgColor: 'bg-blue', colorName: 'Blue', colorHex: '#147df5' },
  { bgColor: 'bg-darkblue', colorName: 'Darkblue', colorHex: '#0870c7' },
  { bgColor: 'bg-magenta', colorName: 'Magenta', colorHex: '#d03377' },
  { bgColor: 'bg-darkpurple', colorName: 'Darkpurple', colorHex: '#580aff' }
]

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
            <div className='grid grid-col-3 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-2 w-100per overflow-x-hidden'>
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
          <BrandSection isLight={true} className='max-w-90rem py-50px m-auto'>
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
              {/* <ColourExample bgColor='bg-red' colorName='Red' colorHex='#ce1f1a' />
              <ColourExample bgColor='bg-darkorange' colorName='Darkorange' colorHex='#d54913' />
              <ColourExample bgColor='bg-lightorange' colorName='Lightorange' colorHex='#ffd300' />
              <ColourExample bgColor='bg-yellow' colorName='Yellow' colorHex='#deff0a' />
              <ColourExample bgColor='bg-yellowgreen' colorName='Yellowgreen' colorHex='#a1ff0a' />
              <ColourExample bgColor='bg-lightgreen' colorName='Lightgreen' colorHex='#0aff99' />
              <ColourExample bgColor='bg-green' colorName='Green' colorHex='#3f7d1a' />
              <ColourExample bgColor='bg-green' colorName='Green' colorHex='#3f7d1a' /> */}
            </div>
          </BrandSection>
        </div>
      </div>
    </Layout>
  )
}
