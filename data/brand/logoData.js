import Image from 'next/image'
import BrandBadExample from '@/components/brand/BrandBadExample'
import LogoDark from '@/components/icon/Brand/LogoDark'
import { GreenButton } from '@/components/reusable/Button'

const badexamples = [
  {
    src: '/images/brand/logo/logo-donot-1_tqejd2.webp',
    alt: 'greenCSS logo without vector font',
    id: 'greenCSS-logo-bad-example',
    width: 200,
    height: 200,
    childTwo: 'Do not use the Logo without the leaft vector or without the background plane.'
  },
  {
    src: '/images/brand/logo/Group_14_lwzfzg.webp',
    alt: 'greenCSS, bad logo example 3',
    id: 'logo-bad-3',
    width: 233,
    height: 251,
    childTwo: 'Do not stretch the logo in any way.'
  },
  {
    src: '/images/brand/logo/Group_15_psflzx.webp',
    alt: 'greenCSS, bad logo example 3',
    id: 'logo-bad-3',
    width: 200,
    height: 251,
    childTwo: 'Do not add additional icons or marks.'
  },
  {
    src: '/images/brand/logo/Group_16_lwhowx.webp',
    alt: 'greenCSS, bad logo example 4',
    id: 'logo-bad-4',
    width: 200,
    height: 251,
    childTwo:
      'Only use the brand`s primary colours (white, black, greencss, green) in order to provide the highest contrast ratio.'
  }
]

export const brandLogoSections = [
  {
    title: 'Logo',
    description:
      'We never get tired of emphasizing that a logo is much more than just an appealing image or symbol. Recognizability and simplicity help ensure that the logo is as identifiable as possible at all sizes and in all contexts. For the logo, an isosceles square will be used, where the border radius is a quarter of the width and height.'
  },
  {
    isLight: true,
    children: (
      <div className='flex justify-center'>
        <div className='flex-col'>
          <LogoDark />
          <div className='my-25px'>
            <GreenButton
              isDownload={true}
              isDefault={false}
              href='/images/brand/greencss_logo_dark.svg'
              id='download-dark-logo'>
              Dark Logo Download
            </GreenButton>
          </div>
          <GreenButton
            isDownload={true}
            isDefault={false}
            href='/images/brand/greenCSS_logo_light.svg'
            id='download-light-logo'>
            Light Logo Download
          </GreenButton>
        </div>
      </div>
    )
  },
  {
    title: 'Structure',
    description:
      'The logo is based on simple shapes and curves. It is carefully designed to maintain its own characteristics while allowing impeccable readability at any size and for any usage. '
  },
  {
    isLight: true,
    children: (
      <Image
        quality={100}
        height={571}
        width={718}
        src='/images/brand/logo/logo_structure_qffx8z.webp'
        alt='advanced green css logo structure'
        id='advanced-greencss-logo-structure'
        placeholder='blur'
        blurDataURL='/_next/image?url=/images/brand/logo/logo_structure_qffx8z.webp&w=16&q=1'
      />
    )
  },
  {
    isLight: true,
    title: 'Whitespace',
    description: 'The empty space around the logo is equal to one fourth on top and one fourth on the sides.'
  },
  {
    isLight: true,
    children: (
      <Image
        quality={100}
        height={572}
        width={718}
        src='/images/brand/logo/logo_structure_advanced_kuxnpy.webp'
        alt='green css logo structure'
        id='greencss-logo-structure'
        placeholder='blur'
        blurDataURL='/_next/image?url=/images/brand/logo/logo_structure_advanced_kuxnpy.webp&w=16&q=1'
      />
    )
  },
  {
    title: 'Colour',
    description:
      'The logo should be light on darker backgrounds and dark on lighter backgrounds. It may be combined with green - if necessary and visually optimal.'
  },
  {
    isLight: true,
    children: (
      <Image
        quality={100}
        height={501}
        width={1360}
        src='/images/brand/logo/logos_buy40r.webp'
        alt='greencss logo black, white green'
        id='greencss-logo-background'
        placeholder='blur'
        blurDataURL='/_next/image?url=/images/brand/logo/logos_buy40r.webp&w=16&q=1'
      />
    )
  },
  {
    title: 'Scalability',
    description:
      'The logo is designed to be scaled on small screens, tablets, screen readers, desktop computers and printing. Initially, the logo shall be a square with 100 x 100 pixels and a border radius of 25 pixels. A logo double the size (200px x 200px) has a border radius twice as large (50px) - the border radius is therefore a quarter of the width or length. . The proportions must be maintained. However, the smallest width should not be smaller than 25 pixels.'
  },
  {
    isLight: true,
    children: (
      <Image
        quality={100}
        height={975}
        width={400}
        src='/images/brand/logo/scalable-logos_dejyjk.webp'
        alt='greencss scalable logos'
        id='greencss-scalable-logos'
        placeholder='blur'
        blurDataURL='/_next/image?url=/images/brand/logo/scalable-logos_dejyjk.webp&w=16&q=1'
      />
    )
  },
  {
    title: 'Positioning',
    description: 'The placement of the logo depends on the type of communication, identity and the associated usage.'
  },
  {
    isLight: true,
    children: (
      <Image
        quality={100}
        height={1200}
        width={1360}
        src='/images/brand/logo/positioning_njclia.webp'
        alt='greenCSS logo positions'
        id='greenCSS-logo-position'
        placeholder='blur'
        blurDataURL='/_next/image?url=/images/brand/logo/positioning_njclia.webp&w=16&q=1'
      />
    )
  },
  {
    title: 'Logo as Icon',
    description:
      'Symbols are designed individually based on specifications. Normally an isosceles square will be used, where the border radius is a quarter of the width and height. Only when using the logo as an icon, it is allowed to deviate from the Guideline. Determine visually to best fit each shape.'
  },
  {
    isLight: true,
    children: (
      <Image
        quality={100}
        height={255}
        width={1128}
        src='/images/brand/logo/logo-icons_ffzqbh.webp'
        alt='greenCSS logo icons'
        id='greenCSS-logo-icons'
        placeholder='blur'
        blurDataURL='/_next/image?url=/images/brand/logo/logo-icons_ffzqbh.webp&w=16&q=1'
      />
    )
  },
  {
    title: 'Do’s and dont’s',
    description: 'Design needs consistency. Consistency needs design.'
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
    title: 'Legal',
    description:
      'greenCSS library is licensed under MIT. Nevertheless, Do not use greenCSS as a verb (e.g., “Let’s greenCSS the web site.”). Instead, consider using greenCSS as an adjective and an experience. All brand features featured in the greenCSS Brand Book or this website are copyrighted. If you choose to use logos, designs and/or other brand assets, you acknowledge that you sufficiently attribute the specific content. Please contact greenCSS, if you want to use the logo, trademarks or other elements of greenCSS for commercial purposes - e.g. for merchandise. Note: This notice refers to the brand & its brand book and not to the CSS library. No attribution is required if the greenCSS library is used, you can use it for any project. "Omen Motion" - the font - has a SIL license and can be downloaded for free in the typography section.'
  }
]
