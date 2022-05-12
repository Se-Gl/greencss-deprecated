import Image from 'next/image'
import BrandBadExample from '@/components/brand/BrandBadExample'
import LogoDark from '@/components/icon/Brand/LogoDark'
import { GreenButton } from '@/components/reusable/Button'

const typoBadexamplesColors = [
  { color: 'yellow' },
  { color: 'red' },
  { color: 'blue' },
  { color: 'purple' },
  { color: 'greencss' }
]

const typoBadexamples = [
  {
    childOne: (
      <div className='text-35px font-800 h-auto flex flex-wrap'>
        {typoBadexamplesColors.map((fontColor, index) => (
          <span className={`text-${fontColor.color}`} key={index}>
            {fontColor.color}
          </span>
        ))}
      </div>
    ),
    childTwo: 'Avoid, if possible, the use of colored typography (black or white only).'
  },
  {
    childOne: (
      <div className='text-35px font-800 h-auto flex'>
        <span>NO CAPS.</span>
      </div>
    ),
    childTwo: 'Avoid, if possible, the use of capitalized typography.'
  },
  {
    childOne: (
      <div className='text-35px font-800 h-auto flex'>
        <span style={{ letterSpacing: '-5px' }}>Letter</span>
        <span className='tracking-2'>spacing</span>
      </div>
    ),
    childTwo: 'Avoid, the adjustment of kerning, line height, letter spacing and tracking.'
  },
  {
    childOne: (
      <>
        <h2 className='font-900'>heading</h2>
        <h2 className='font-500'>heading</h2>
      </>
    ),
    childTwo: 'Do not make any custom hierarchy by only using font weight.'
  },
  {
    childOne: (
      <>
        <h2>heading</h2>
        <p className='ml-30px my-0px'>Paragraph text one</p>
        <p className='ml-25px my-neg-10px'>Paragraph text two</p>
      </>
    ),
    childTwo: 'Do not separate text sections or customize your own margins and paddings.'
  }
]

const fontWeights = [
  { weight: 'Omen Motion Light' },
  { weight: 'Omen Motion Regular' },
  { weight: 'Omen Motion Medium' },
  { weight: 'Omen Motion Bold' },
  { weight: 'Omen Motion Black' }
]
const fontWeightExamples = [
  { weightNumber: 300 },
  { weightNumber: 400 },
  { weightNumber: 500 },
  { weightNumber: 700 },
  { weightNumber: 900 }
]
const defaultFontSettings = [
  { title: 'H1', children: <h2 className='mb-0px'>font size 50px, black (900)</h2> },
  { title: 'H2', children: <h2 className='mb-0px'>font size 50px, black (900)</h2> },
  { title: 'H3', children: <h3 className='mb-0px'>font size 35px, bold (700)</h3> },
  { title: 'P', children: <p className='mb-0px'>font size 20px, normal (400)</p> },
  { title: 'SX', children: <p className='text-15px mb-0px'>font size 15px, normal (400)</p> }
]

export const brandTypoSections = [
  {
    title: 'Typography',
    description:
      'The typography is as unique, royalty-free, lightweight and easy to use as greenCSS itself. Inspired by the uniqueness, and diversity of Switzerland, it was designed to have maximum impact internationally, as well as virtually. Its name: Omen Motion. This font is intended to be used for print, flyers, advertising products and similar. However, for web presence "Inter" - a freely available and open-source font - shall be used.'
  },
  {
    isLight: true,
    children: (
      <>
        <div className='m-auto grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1 omen'>
          <div className='col-span-1 grid-flow-row sm:m-10px md:m-10px bg-white rounded-10px border-1px border-solid border-black rounded-10px px-10px flex min-h-30rem'>
            <div className='m-auto'>
              {fontWeights.sort().map((weight, index) => (
                <p className='font-400 py-10px my-0px' key={index}>
                  {weight.weight}
                </p>
              ))}
            </div>
          </div>
          <div className='col-span-1 grid-flow-row sm:m-10px md:m-10px bg-white rounded-10px border-1px border-solid border-black rounded-10px px-10px flex min-h-30rem break-words'>
            <div className='m-auto break-words max-w-25rem overflow-hidden'>
              {fontWeightExamples.sort().map((example, index) => (
                <p className={`font-${example.weightNumber} py-10px my-0px text-15px`} key={index}>
                  The quick brown fox jumps over the lazy dog
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className='mt-25px flex justify-center'>
          <GreenButton
            isDownload={true}
            isDefault={false}
            href='/fonts/Omen Motion/Omen Motion.zip'
            id='download-omen-motion'>
            Omen Motion Download
          </GreenButton>
        </div>
      </>
    )
  },
  {
    title: 'Relationships',
    description:
      'It is important to maintain consistent type mappings. It provides uniqueness, consistency, and a strong hierarchy. A bold and black typeface should be paired with normal font weight (400). To keep the hierarchy, light or regular may also be used if necessary.'
  },
  {
    isLight: true,
    children: (
      <div className='m-auto grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
        <div className='col-span-1 grid-flow-row sm:m-10px md:m-10px bg-white rounded-10px border-1px border-solid border-black rounded-10px px-10px flex min-h-30rem'>
          <div className='m-auto break-words max-w-25rem overflow-hidden py-50px'>
            <h3 className='text-black font-800'>Inter Bold</h3>
            <p className='font-300 py-10px my-0px'>
              Subheaders or texts should use Inter Regular, here the light weight is used.
            </p>
          </div>
        </div>
        <div className='col-span-1 grid-flow-row sm:m-10px md:m-10px bg-white rounded-10px border-1px border-solid border-black rounded-10px px-10px flex min-h-30rem break-words'>
          <div className='m-auto break-words max-w-25rem overflow-hidden py-50px'>
            <h3 className='text-black font-900'>Inter Black</h3>
            <p className='font-400 py-10px my-0px'>
              Subheaders or texts should use Inter Regular, here the regular weight is used.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Hierarchy & Margins',
    description:
      'A hierarchical system for arranging the typography according to relative importance is essential. It is crucial to always proceed in powers of 5 or 10.'
  },
  {
    isLight: true,
    children: (
      <>
        <Image
          quality={100}
          height={238}
          width={1361}
          src='/images/brand/typography/cards-min_ftcy4t.webp'
          alt='green css hierarchy and margins'
          id='greenCSS-hierarchy'
          placeholder='blur'
          blurDataURL='/_next/image?url=/images/brand/typography/cards-min_ftcy4t.webp&w=16&q=1'
        />
        <div className='w-100per my-100px border-1px border-solid border-black rounded-20px'>
          <div className='p-50px'>
            <h2 className='text-80px font-800 leading-95per'>This is a header, with 80px and a heavy font weight</h2>
            <p className='text-25px font-400'>
              This is a subheader or paragraph text with 25px and a regular font weight (400). It demonstrates above
              average type hierarchy. Both styles are clearly distinguishable from each other.
            </p>
            <LogoDark width='100' height='100' />
          </div>
        </div>
        {defaultFontSettings.sort().map((setting, index) => (
          <div className='mb-100px' key={index}>
            <p className='mb-10px'>{setting.title}</p>
            {setting.children}
          </div>
        ))}
      </>
    )
  },
  {
    title: 'Call 2 action',
    description: 'There is one way to create a call to action for greenCSS. Use a heavy typeface for buttons.'
  },
  {
    isLight: true,
    children: (
      <>
        <Image
          quality={100}
          height={814}
          width={785}
          src='/images/brand/typography/cards-c2a_gorbiy.webp'
          alt='omen css call to action'
          id='greenCSS-c2a'
          placeholder='blur'
          blurDataURL='/_next/image?url=/images/brand/typography/cards-c2a_gorbiy.webp&w=16&q=1'
        />
        <p className='mt-100px mb-0px'>
          Icons should be treated within the typeface. The same rules apply for aligning typography with iconography as
          for hierarchical relations, except that margins are not used here in powers of 5 or 10. Irrespective of
          whether the medium is digital or physical, the typography should work in both portrait and landscape formats.
        </p>
      </>
    )
  },
  {
    title: 'Images vs. Typography',
    description:
      'Typography should be either dark on light visuals or light on dark images. If matched with the logo, typography and logo should use the same colour. Margin is in the power of 5 or 10, thereby the o-layout can be used.'
  },
  {
    isLight: true,
    children: (
      <Image
        quality={100}
        height={651}
        width={1128}
        src='/images/brand/typography/images-typography_lknchj.webp'
        alt='omen css Images vs. Typography'
        id='greenCSS-img-typo'
        placeholder='blur'
        blurDataURL='/_next/image?url=/images/brand/typography/images-typography_lknchj.webp&w=16&q=1'
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
        {typoBadexamples.map((bad, index) => {
          return <BrandBadExample key={index} childOne={bad.childOne} classOne='py-10px' childTwo={bad.childTwo} />
        })}
      </div>
    )
  }
]
