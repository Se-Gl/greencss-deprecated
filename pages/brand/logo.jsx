import BrandBadExample from '@/components/brand/BrandBadExample'
import BrandSection from '@/components/brand/BrandSection'
import Summary from '@/components/brand/Summary'
import LogoDark from '@/components/icon/Brand/LogoDark'
import { BackButton, DownloadButton } from '@/components/reusable/Button'
import Layout from '@/components/reusable/Layout'

export default function logo() {
  return (
    <Layout className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh mb-10rem'>
      <div className='min-w-100per relative' id='brand-logo-page'>
        <BackButton className='mb-50px'>Back</BackButton>
        <div className='mb-10rem'>
          <BrandSection
            title='Logo'
            description='We never get tired of emphasizing that a logo is much more than just an appealing image or symbol.
                Recognizability and simplicity help ensure that the logo is as identifiable as possible at all sizes and
                in all contexts.'
          />
          <BrandSection isLight={true}>
            <div className='flex justify-center'>
              <div className='flex-col'>
                <LogoDark />
                <DownloadButton href='/images/brand/omencss_logo_dark.svg' className='mt-50px' id='download-dark-logo'>
                  Dark Logo Download
                </DownloadButton>
                <DownloadButton href='/images/brand/omencss_logo_light.svg' id='download-light-logo'>
                  Light Logo Download
                </DownloadButton>
              </div>
            </div>
          </BrandSection>
          <BrandSection
            title='Structure'
            description='The logo is based on simple shapes and curves. It is carefully designed to maintain its own characteristics while allowing impeccable readability at any size and for any usage. '
          />
          <BrandSection isLight={true}>
            <img
              src='https://res.cloudinary.com/omencss/image/upload/v1644868812/brand/logo_structure_qffx8z.png'
              alt='omen css logo structure'
              id='omencss-logo-structure'
            />
          </BrandSection>
          <BrandSection
            title='Whitespace'
            description='The empty space around the logo is equal  to half the radius of the cap of the O.'
          />
          <BrandSection isLight={true}>
            <img
              src='https://res.cloudinary.com/omencss/image/upload/v1644870088/brand/logo_structure_advanced_kuxnpy.png'
              alt='advanced omen css logo structure'
              id='advanced-omencss-logo-structure'
            />
          </BrandSection>
          <BrandSection
            title='Colour'
            description='The logo should be light on darker backgrounds and dark on lighter backgrounds. It may be combined with purple.'
          />
          <BrandSection isLight={true}>
            <img
              src='https://res.cloudinary.com/omencss/image/upload/v1644870279/brand/logos_buy40r.png'
              alt='omencss logo dark, logo light and logo purple'
              id='different-omencss-logos'
            />
          </BrandSection>
          <BrandSection
            title='Scalability'
            description='The logo is designed to be scaled on small screens, tablets, screen readers, desktop computers and printing. Initially, the logo shall be a square with 100 x 100 pixels and a border radius of 25 pixels. A logo double the size (200px x 200px) has a border radius twice as large (50px) - the border radius is therefore a quarter of the width or length. . The proportions must be maintained. However, the smallest width should not be smaller than 25 pixels.'
          />
          <BrandSection isLight={true}>
            <img
              src='https://res.cloudinary.com/omencss/image/upload/v1644870563/brand/scalable-logos_dejyjk.png'
              alt='omencss logo scalable logos'
              id='scalable-omencss-logos'
            />
          </BrandSection>
          <BrandSection
            title='Positioning'
            description='The placement of the logo depends on the type of communication, identity and the associated usage.'
          />
          <BrandSection isLight={true}>
            <img
              src='https://res.cloudinary.com/omencss/image/upload/v1644870667/brand/positioning_njclia.png'
              alt='omencss logo positions'
              id='omencss-logo-position'
            />
          </BrandSection>
          <BrandSection
            title='Logo as Icon'
            description='Symbols are designed individually based on specifications. Here it is allowed to deviate from the Guideline, they are visually dimensioned to best fit each shape.'
          />
          <BrandSection isLight={true}>
            <img
              src='https://res.cloudinary.com/omencss/image/upload/v1644870782/brand/logo-icons_ffzqbh.png'
              alt='omencss logo icons'
              id='omencss-logo-icons'
            />
          </BrandSection>
          <BrandSection title='Logo typeface' description='"Vector Font"'>
            <img
              src='https://res.cloudinary.com/omencss/image/upload/v1644870929/brand/quick-fox_rrrwsl.png'
              alt='omencss vector font'
              id='omencss-logo-typeface'
            />
          </BrandSection>
          <BrandSection isLight={true}>
            <div className='m-auto grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
              <BrandBadExample
                description='Do not use the Logo without Vector Font glyph. Do not type use the logo in any other fonts.'
                imgUrl='https://res.cloudinary.com/omencss/image/upload/v1644871627/brand/logo-donot-1_tqejd2.png'
                imgAlt='omencss, bad logo example 1'
                imgId='logo-bad-1'
              />
              <BrandBadExample
                description='Do not stretch the logo in any way.'
                imgUrl='https://res.cloudinary.com/omencss/image/upload/v1644872653/brand/Group_14_lwzfzg.png'
                imgAlt='omencss, bad logo example 2'
                imgId='logo-bad-2'
              />
              <BrandBadExample
                description='Do not add additional icons or marks.'
                imgUrl='https://res.cloudinary.com/omencss/image/upload/v1644872697/brand/Group_15_psflzx.png'
                imgAlt='omencss, bad logo example 3'
                imgId='logo-bad-3'
              />
              <BrandBadExample
                description='Only use the brand&#39;s primary colours in order to provide the highest contrast ratio.'
                imgUrl='https://res.cloudinary.com/omencss/image/upload/v1644872730/brand/Group_16_lwhowx.png'
                imgAlt='omencss, bad logo example 3'
                imgId='logo-bad-3'
              />
            </div>
          </BrandSection>
          <BrandSection
            title='Legal'
            description='omenCSS library is licensed under MIT. Nevertheless,
            Do not use omenCSS as a verb (e.g., “Let’s omencss the web site.”). Instead, consider using omenCSS as an adjective and an experience. All brand features featured in the omenCSS Brand Book or this website are copyrighted. If you choose to use logos, designs and/or other brand assets, you acknowledge that you sufficiently attribute the specific content. Our font "omen motion" is available under SIL and can be downloaded on this website free of charge. The Vector font, on the other hand, requires a commercial licence (not from omenCSS).'
          />
          <Summary
            titleOne='01'
            descriptionOne='Keep it simple'
            titleTwo='02'
            descriptionTwo='Maintaining identity'
            titleThree='03'
            descriptionThree='Focus on the importance of dark, light and purple'
          />
        </div>
      </div>
    </Layout>
  )
}
