import dynamic from 'next/dynamic'
import BrandBadExample from '@/components/brand/BrandBadExample'
import BrandSection from '@/components/brand/BrandSection'
import Summary from '@/components/brand/Summary'
import LogoDark from '@/components/icon/Brand/LogoDark'
import { BackButton, GreenButton } from '@/components/reusable/Button'
import SEO from '@/components/reusable/SEO'

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
            <BrandSection
              title='Logo'
              description='We never get tired of emphasizing that a logo is much more than just an appealing image or symbol.
                Recognizability and simplicity help ensure that the logo is as identifiable as possible at all sizes and
                in all contexts. For the logo, an isosceles square will be used, where the border radius is a quarter of the width and height.'
            />
            <BrandSection isLight={true}>
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
            </BrandSection>
            <BrandSection
              title='Structure'
              description='The logo is based on simple shapes and curves. It is carefully designed to maintain its own characteristics while allowing impeccable readability at any size and for any usage. '
            />
            <BrandSection isLight={true}>
              <img
                src='/images/brand/logo/logo_structure_qffx8z.webp'
                alt='omen css logo structure'
                id='greenCSS-logo-structure'
              />
            </BrandSection>
            <BrandSection
              title='Whitespace'
              description='The empty space around the logo is equal  to half the radius of the cap of the O.'
            />
            <BrandSection isLight={true}>
              <img
                src='/images/brand/logo/logo_structure_advanced_kuxnpy.webp'
                alt='advanced omen css logo structure'
                id='advanced-greencss-logo-structure'
              />
            </BrandSection>
            <BrandSection
              title='Colour'
              description='The logo should be light on darker backgrounds and dark on lighter backgrounds. It may be combined with purple.'
            />
            <BrandSection isLight={true}>
              <img
                src='/images/brand/logo/logos_buy40r.webp'
                alt='greenCSS logo dark, logo light and logo purple'
                id='different-greencss-logos'
              />
            </BrandSection>
            <BrandSection
              title='Scalability'
              description='The logo is designed to be scaled on small screens, tablets, screen readers, desktop computers and printing. Initially, the logo shall be a square with 100 x 100 pixels and a border radius of 25 pixels. A logo double the size (200px x 200px) has a border radius twice as large (50px) - the border radius is therefore a quarter of the width or length. . The proportions must be maintained. However, the smallest width should not be smaller than 25 pixels.'
            />
            <BrandSection isLight={true}>
              <img
                src='/images/brand/logo/scalable-logos_dejyjk.webp'
                alt='greenCSS logo scalable logos'
                id='scalable-greencss-logos'
              />
            </BrandSection>
            <BrandSection
              title='Positioning'
              description='The placement of the logo depends on the type of communication, identity and the associated usage.'
            />
            <BrandSection isLight={true}>
              <img
                src='/images/brand/logo/positioning_njclia.webp'
                alt='greenCSS logo positions'
                id='greenCSS-logo-position'
              />
            </BrandSection>
            <BrandSection
              title='Logo as Icon'
              description='Symbols are designed individually based on specifications. Normally an isosceles square will be used, where the border radius is a quarter of the width and height. Only when using the logo as an icon, it is allowed to deviate from the Guideline. Determine visually to best fit each shape.'
            />
            <BrandSection isLight={true}>
              <img src='/images/brand/logo/logo-icons_ffzqbh.webp' alt='greenCSS logo icons' id='greenCSS-logo-icons' />
            </BrandSection>
            <BrandSection
              title='Do’s and dont’s'
              description='Design needs consistency. Consistency needs design.'></BrandSection>
            <BrandSection isLight={true}>
              <div className='m-auto grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
                <BrandBadExample
                  childOne={
                    <img
                      src='/images/brand/logo/logo-donot-1_tqejd2.webp'
                      alt='greenCSS logo without vector font'
                      id='greenCSS-logo-bad-example'
                    />
                  }
                  childTwo='Do not use the Logo without the leaft vector or without the background plane.'
                />

                <BrandBadExample
                  childOne={
                    <img
                      src='/images/brand/logo/Group_14_lwzfzg.webp'
                      alt='greenCSS, bad logo example 3'
                      id='logo-bad-3'
                    />
                  }
                  childTwo='Do not stretch the logo in any way.'
                />
                <BrandBadExample
                  childOne={
                    <img
                      src='/images/brand/logo/Group_15_psflzx.webp'
                      alt='greenCSS, bad logo example 3'
                      id='logo-bad-3'
                    />
                  }
                  childTwo='Do not add additional icons or marks.'
                />

                <BrandBadExample
                  childOne={
                    <img
                      src='/images/brand/logo/Group_16_lwhowx.webp'
                      alt='greenCSS, bad logo example 4'
                      id='logo-bad-4'
                    />
                  }
                  childTwo='Only use the brand&#39;s primary colours (white, black, greencss, green) in order to provide the highest contrast ratio.'
                />
              </div>
            </BrandSection>
            <BrandSection
              title='Legal'
              description='greenCSS library is licensed under MIT. Nevertheless, Do not use greenCSS as a verb (e.g., “Let’s greenCSS the web site.”). Instead, consider using greenCSS as an adjective and an experience. All brand features featured in the greenCSS Brand Book or this website are copyrighted. If you choose to use logos, designs and/or other brand assets, you acknowledge that you sufficiently attribute the specific content. Please contact greenCSS, if you want to use the logo, trademarks or other elements of greenCSS for commercial purposes - e.g. for merchandise. Note: This notice refers to the brand & its brand book and not to the CSS library. No attribution is required if the greenCSS library is used, you can use it for any project. "Omen Motion" - the font - has a SIL license and can be downloaded for free in the typography section.'
            />
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
