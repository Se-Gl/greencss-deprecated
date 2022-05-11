import Image from 'next/image'
import BrandBadExample from '@/components/brand/BrandBadExample'
import ColourExample from '@/components/brand/ColourExample'
import { primaryColors, secondaryColors, spotColors } from '@/data/colors'

const badexamples = [
  {
    src: '/images/brand/colors/do-not.webp',
    alt: 'omen css do not with colors',
    id: 'greenCSS-do-not-1',
    width: 318,
    height: 394,
    childTwo: 'Avoid improper usage of the primary colours (especially green - as a background colour).'
  },
  {
    src: '/images/brand/colors/do-not-2.webp',
    alt: 'omen css do not with colors',
    id: 'greenCSS-do-not-2',
    width: 318,
    height: 394,
    childTwo: 'Do not create effects or new colour variations.'
  },
  {
    src: '/images/brand/colors/do-not-3.webp',
    alt: 'omen css do not with colors',
    id: 'greenCSS-do-not-3',
    width: 318,
    height: 394,
    childTwo:
      'Do not use too many secondary colours in a component. Never use a secondary or spot colour as a background colour.'
  },
  {
    src: '/images/brand/colors/do-not-4.webp',
    alt: 'omen css do not with colors',
    id: 'greenCSS-do-not-4',
    width: 318,
    height: 395,
    childTwo: 'Do not use not enough contrast between text and background.'
  },
  {
    src: '/images/brand/colors/do-not-5.webp',
    alt: 'omen css do not with colors',
    id: 'greenCSS-do-not-5',
    width: 318,
    height: 395,
    childTwo: 'Avoid coloured headings or texts.'
  }
]

const goodexamples = [
  {
    src: '/images/brand/colors/ok.webp',
    alt: 'omen css design with colors',
    id: 'greenCSS-do-1',
    width: 273,
    height: 323,
    childTwo: 'Color in photography.'
  },
  {
    src: '/images/brand/colors/ok-2.webp',
    alt: 'omen css design with colors',
    id: 'greenCSS-do-2',
    width: 273,
    height: 323,
    childTwo: 'Color in illustrations / vector files.'
  },
  {
    src: '/images/brand/colors/ok-3.webp',
    alt: 'omen css design with colors',
    id: 'greenCSS-do-3',
    width: 318,
    height: 395,
    childTwo: 'Grey text (black-10) or the primary greencss/green in a header to highlight certain words or subjects.'
  }
]

export const brandColorSections = [
  {
    title: 'Colours',
    description:
      'Colors determine charisma, emotion, feelings, and memories. In total, greenCSS offers a color palette of over 11 colors, whereby these are further broken down into 100 different lighter tones. The primary colours are - black, white and greencss/green - build on our existing intensity and represent the elegance of greenCSS.'
  },
  {
    isLight: true,
    title: 'Primary brand colors',
    description:
      'The primary brand colours are black, white and green. As part of the corporate identity, it should be used in, texts, illustrations or as background colours. Descending black colors components can be used as gray shades. Whereby a greyish colour can also be used to emphasise text passages or headlines but must be applied with sufficient contrast difference. As green color variations, both creations of green can be used or combined, since the colour originates from the same shades.',
    children: (
      <>
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
      </>
    )
  },
  {
    title: 'Secondary colors',
    description:
      'The secondary colours contain a high spectrum of diversity. They should be used wisely in illustrations, images and publications to maintain their significance and impact.'
  },
  {
    isLight: true,
    className: 'max-w-90rem py-100px m-auto',
    children: (
      <div className='grid grid-col-3 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-2 w-100per overflow-x-hidden'>
        {secondaryColors.map((item, index) => {
          return (
            <ColourExample key={index} className={item.className} colorName={item.colorName} colorHex={item.colorHex} />
          )
        })}
      </div>
    )
  },
  {
    title: 'Utilisation',
    description:
      'White plays a very important role in all brand communication and should balance black and green. Secondary colours are only used in sensitive cases where caution is needed or where their use enhances the composition.'
  },
  {
    title: 'Spot Colours',
    description:
      'Spot colours are intended for images or illustrations that require tone-on-tone pairings, product designs that demand variations in hue and opacity, or buttons with active, focus or hover states. Spot colours are lightened secondary colours.'
  },
  {
    isLight: true,
    className: 'max-w-90rem py-100px m-auto',
    children: (
      <div className='grid grid-col-5 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-2 w-100per overflow-x-hidden'>
        {spotColors.map((item, index) => {
          return (
            <ColourExample key={index} className={item.className} colorName={item.colorName} colorHex={item.colorHex} />
          )
        })}
      </div>
    )
  },
  {
    title: 'Dont’s'
  },
  {
    isLight: true,
    children: (
      <div className='m-auto grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
        {badexamples.map((bad, index) => {
          return (
            <BrandBadExample
              key={index}
              childOne={
                <Image
                  quality={100}
                  height={bad.height}
                  width={bad.width}
                  src={`${bad.src}`}
                  alt={`${bad.alt}`}
                  className='w-100per'
                  placeholder='blur'
                  blurDataURL={`/_next/image?url=${bad.src}&w=16&q=1`}
                />
              }
              classOne='py-10px'
              childTwo={bad.childTwo}
            />
          )
        })}
      </div>
    )
  },
  {
    title: 'Ways to apply colour'
  },
  {
    isLight: true,
    children: (
      <div className='m-auto grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
        {goodexamples.map((good, index) => {
          return (
            <BrandBadExample
              key={index}
              childOne={
                <Image
                  quality={100}
                  height={good.height}
                  width={good.width}
                  src={`${good.src}`}
                  alt={`${good.alt}`}
                  className='w-100per'
                  placeholder='blur'
                  blurDataURL={`/_next/image?url=${good.src}&w=16&q=1`}
                />
              }
              classOne='py-10px'
              childTwo={good.childTwo}
            />
          )
        })}
      </div>
    )
  }
]
