import BrandSection from '@/components/brand/BrandSection'
import Summary from '@/components/brand/Summary'
import LogoDark from '@/components/icon/Brand/LogoDark'
import { BackButton, DownloadButton } from '@/components/reusable/Button'
import Layout from '@/components/reusable/Layout'

export default function typography() {
  return (
    <Layout className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh mb-10rem'>
      <div className='min-w-100per relative' id='brand-typography-page'>
        <BackButton className='mb-50px'>Back</BackButton>
        <div className='mb-10rem'>
          <BrandSection
            title='Typography'
            description='The typography is as unique, royalty-free, lightweight and easy to use as omenCSS itself. Inspired by the uniqueness, and diversity of Switzerland, it was designed to have maximum impact internationally, as well as virtually. Its name: Omen Motion.'
          />
          <BrandSection isLight={true}>
            <div className='m-auto grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
              <div className='col-span-1 grid-flow-row sm:m-10px md:m-10px bg-white rounded-10px border-1px border-solid border-dark rounded-10px px-10px flex min-h-30rem'>
                <div className='m-auto'>
                  <p className='font-300 py-10px my-0px'>Omen Motion Light</p>
                  <p className='font-400 py-10px my-0px'>Omen Motion Regular</p>
                  <p className='font-500 py-10px my-0px'>Omen Motion Medium</p>
                  <p className='font-700 py-10px my-0px'>Omen Motion Bold</p>
                  <p className='font-900 py-10px my-0px'>Omen Motion Black</p>
                </div>
              </div>
              <div className='col-span-1 grid-flow-row sm:m-10px md:m-10px bg-white rounded-10px border-1px border-solid border-dark rounded-10px px-10px flex min-h-30rem break-words'>
                <div className='m-auto break-words max-w-25rem overflow-hidden'>
                  <p className='font-300 py-10px my-0px text-15px'>The quick brown fox jumps over the lazy dog</p>
                  <p className='font-400 py-10px my-0px text-15px'>The quick brown fox jumps over the lazy dog</p>
                  <p className='font-500 py-10px my-0px text-15px'>
                    ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ‘?’“!”(%)[#]{}/-+÷×=®©$€£¥¢:;,.*
                  </p>
                  <p className='font-700 py-10px my-0px text-15px'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                  <p className='font-900 py-10px my-0px text-15px'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <DownloadButton href='/fonts/Omen Motion/Omen Motion.zip' className='mt-50px' id='download-omen-motion'>
              Omen Motion Download
            </DownloadButton>
          </BrandSection>
          <BrandSection
            title='Relationships'
            description='It is important to maintain consistent type mappings. It provides uniqueness, consistency, and a strong hierarchy. A bold and black typeface should be paired with normal font weight (400). To keep the hierarchy, light or regular may also be used if necessary.'></BrandSection>
          <BrandSection isLight={true}>
            <div className='mt-100px m-auto grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
              <div className='col-span-1 grid-flow-row sm:m-10px md:m-10px bg-white rounded-10px border-1px border-solid border-dark rounded-10px px-10px flex min-h-30rem'>
                <div className='m-auto break-words max-w-25rem overflow-hidden py-50px'>
                  <h3 className='text-black font-700'>Omen Motion Bold</h3>
                  <p className='font-300 py-10px my-0px'>
                    Subheaders or texts should use Omen Motion Regular, here the light weight is used.
                  </p>
                </div>
              </div>
              <div className='col-span-1 grid-flow-row sm:m-10px md:m-10px bg-white rounded-10px border-1px border-solid border-dark rounded-10px px-10px flex min-h-30rem break-words'>
                <div className='m-auto break-words max-w-25rem overflow-hidden py-50px'>
                  <h3 className='text-black font-800'>Omen Motion Black</h3>
                  <p className='font-400 py-10px my-0px'>
                    Subheaders or texts should use Omen Motion Regular, here the regular weight is used.
                  </p>
                </div>
              </div>
            </div>
          </BrandSection>
          <BrandSection
            title='Hierarchy & Margins'
            description='A hierarchical system for arranging the typography according to relative importance is essential. It is crucial to always proceed in powers of 5 or 10. '></BrandSection>
          <BrandSection isLight={true}>
            <img
              src='https://res.cloudinary.com/omencss/image/upload/v1645550243/brand/cards-min_ftcy4t.png'
              alt='omen css hierarchy and margins'
              id='omencss-hierarchy'
            />
            <div className='w-100per my-100px border-1px border-solid border-dark rounded-20px'>
              <div className='p-50px'>
                <h2 className='text-80px font-800 leading-95per'>
                  This is a header, with 80px and a heavy font weight
                </h2>
                <p className='text-25px font-400'>
                  This is a subheader or paragraph text with 25px and a regular font weight (400). It demonstrates above
                  average type hierarchy. Both styles are clearly distinguishable from each other.
                </p>
                <LogoDark width='100' height='100' />
              </div>
            </div>
            <div className='mb-100px'>
              <p className='border-bottom-1px border-black border-solid'>H1</p>
              <h2>font size 50px, black (900)</h2>
            </div>
            <div className='mb-100px'>
              <p className='border-bottom-1px border-black border-solid'>H1</p>
              <h2>font size 50px, black (900)</h2>
            </div>
            <div className='mb-100px'>
              <p className='border-bottom-1px border-black border-solid'>H2</p>
              <h2>font size 50px, black (900)</h2>
            </div>
            <div className='mb-100px'>
              <p className='border-bottom-1px border-black border-solid'>H3</p>
              <h3>font size 35px, bold (700)</h3>
            </div>
            <div className='mb-100px'>
              <p className='border-bottom-1px border-black border-solid'>P</p>
              <p>font size 25px, normal (400)</p>
            </div>
            <div className='mb-100px'>
              <p className='border-bottom-1px border-black border-solid'>XS</p>
              <p className='text-15px'>font size 20px, normal (400)</p>
            </div>
          </BrandSection>

          <BrandSection
            title='Call 2 action'
            description='There is one way to create a call to action for omenCSS. Use a heavy typeface for buttons.'></BrandSection>
          <BrandSection isLight={true}>
            <img
              src='https://res.cloudinary.com/omencss/image/upload/v1645551504/brand/cards-c2a_gorbiy.png'
              alt='omen css call to action'
              id='omencss-c2a'
            />
            <p className='my-100px'>
              Icons should be treated within the typeface. The same rules apply for aligning typography with iconography
              as for hierarchical relations, except that margins are not used here in powers of 5 or 10. Irrespective of
              whether the medium is digital or physical, the typography should work in both portrait and landscape
              formats.
            </p>
          </BrandSection>

          <BrandSection
            title='Images vs. Typography'
            description='Typography should be either dark on light visuals or light on dark images. If matched with the logo, typography and logo should use the same colour. Margin is in the power of 5 or 10, thereby the o-layout can be used.'></BrandSection>
          <BrandSection isLight={true}>
            <img
              src='https://res.cloudinary.com/omencss/image/upload/v1645553935/brand/images-typography_lknchj.png'
              alt='omen css Images vs. Typography'
              id='omencss-img-typo'
            />
          </BrandSection>

          <BrandSection
            title='Do’s and dont’s'
            description='Design needs consistency. Consistency needs design.'></BrandSection>
          <BrandSection isLight={true}>
            <div className='m-auto grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
              <div className='col-span-1 grid-flow-row sm:m-10px md:m-10px bg-white rounded-10px border-1px border-solid border-dark rounded-10px px-10px flex min-h-30rem'>
                <div className='text-35px font-800 h-auto flex'>
                  <div className='m-auto'>
                    <span className='text-yellow'>yellow </span>
                    <span className='text-red'>red </span>
                    <span className='text-blue'>blue </span>
                    <span className='text-purple'>purple </span>
                    <span className='text-green'>green</span>
                  </div>
                </div>
              </div>
              <div className='flex min-h-30rem sm:min-h-auto md:min-h-auto'>
                <div className='h-auto m-auto sm:m-0px md:m-0px'>
                  <p className='sm:my-10px'>Avoid, if possible, the use of colored typography (black or white only).</p>
                </div>
              </div>
              <div className='col-span-1 grid-flow-row sm:m-10px md:m-10px bg-white rounded-10px border-1px border-solid border-dark rounded-10px px-10px flex min-h-30rem'>
                <div className='text-35px font-800 h-auto flex'>
                  <div className='m-auto'>
                    <span>NO CAPS.</span>
                  </div>
                </div>
              </div>
              <div className='flex min-h-30rem sm:min-h-auto md:min-h-auto'>
                <div className='h-auto m-auto sm:m-0px md:m-0px'>
                  <p className='sm:my-10px'>Avoid, if possible, the use of capitalized typography.</p>
                </div>
              </div>
              <div className='col-span-1 grid-flow-row sm:m-10px md:m-10px bg-white rounded-10px border-1px border-solid border-dark rounded-10px px-10px flex min-h-30rem'>
                <div className='text-35px font-800 h-auto flex'>
                  <div className='m-auto'>
                    <span style={{ letterSpacing: '-5px' }}>Letter</span>
                    <span className='tracking-2'>spacing</span>
                  </div>
                </div>
              </div>
              <div className='flex min-h-30rem sm:min-h-auto md:min-h-auto'>
                <div className='h-auto m-auto sm:m-0px md:m-0px'>
                  <p className='sm:my-10px'>
                    Avoid, the adjustment of kerning, line height, letter spacing and tracking.
                  </p>
                </div>
              </div>
              <div className='col-span-1 grid-flow-row sm:m-10px md:m-10px bg-white rounded-10px border-1px border-solid border-dark rounded-10px px-10px flex min-h-30rem'>
                <div className='text-35px font-800 h-auto flex'>
                  <div className='m-auto'>
                    <h2 className='font-900'>heading</h2>
                    <h2 className='font-500'>heading</h2>
                  </div>
                </div>
              </div>
              <div className='flex min-h-30rem sm:min-h-auto md:min-h-auto'>
                <div className='h-auto m-auto sm:m-0px md:m-0px'>
                  <p className='sm:my-10px'>Do not make any custom hierarchy by only using font weight.</p>
                </div>
              </div>

              <div className='col-span-1 grid-flow-row sm:m-10px md:m-10px bg-white rounded-10px border-1px border-solid border-dark rounded-10px px-10px flex min-h-30rem'>
                <div className='text-35px font-800 h-auto flex'>
                  <div className='m-auto'>
                    <h2>heading</h2>
                    <p className='ml-30px my-0px'>Paragraph text one</p>
                    <p className='ml-25px my-neg-10px'>Paragraph text two</p>
                  </div>
                </div>
              </div>
              <div className='flex min-h-30rem sm:min-h-auto md:min-h-auto'>
                <div className='h-auto m-auto sm:m-0px md:m-0px'>
                  <p className='sm:my-10px'>
                    Do not separate text sections or customize your own margins and paddings.
                  </p>
                </div>
              </div>
            </div>
          </BrandSection>

          <Summary
            titleOne='01'
            descriptionOne='The typeface is a recognizable, unique part of omenCSS.'
            titleTwo='02'
            descriptionTwo='Aim for contrast and hierarchy between types.'
            titleThree='03'
            descriptionThree='Use colours sparingly and carefully.'
          />
        </div>
      </div>
    </Layout>
  )
}
