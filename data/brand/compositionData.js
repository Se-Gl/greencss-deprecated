import BrandBadExample from '@/components/brand/BrandBadExample'
import Image from 'next/image'

const badCompositionexamples = [
  {
    src: '/images/brand/composition/o-frame-checklist.webp',
    alt: 'greenCSS o-frame checklist',
    id: 'greenCSS-o-frame-1',
    width: 665,
    height: 450,
    childTwo:
      'If the composition is tall and narrow or short and wide (as in banners), the O-frame is not recommended. The more space exists, the more effective the O-frame will be. In general, the frame should not be too narrow or angled.'
  },
  {
    src: '/images/brand/composition/o-frame-checklist-2.webp',
    alt: 'greenCSS o-frame checklist',
    id: 'greenCSS-o-frame-2',
    width: 665,
    height: 457,
    childTwo:
      'Ensure that the context for the O-frame provides sufficient contrast. For example, if the composition is on a dark background, the O-frame should be light / white or contain a bright image. Otherwise, the shape would disappear.'
  },
  {
    src: '/images/brand/composition/o-frame-checklist-3.webp',
    alt: 'greenCSS o-frame checklist',
    id: 'greenCSS-o-frame-3',
    width: 665,
    height: 457,
    childTwo:
      'Exclusively use the logo outside the O-frame. Ensure there is enough contrast between the logo and the background color - either use the dark or the light logo.'
  },
  {
    src: '/images/brand/composition/o-frame-checklist-4.webp',
    alt: 'greenCSS o-frame checklist',
    id: 'greenCSS-o-frame-4',
    width: 665,
    height: 457,
    childTwo:
      'If an O-layout is not possible - often on the web - the grid layout may be used instead. It uses a 12-column grid with a 40px margin and a 30px gutter.'
  }
]

const imageCompositions = [
  {
    src: '/images/brand/composition/image-composition-1.webp',
    alt: 'greenCSS image composition',
    id: 'greenCSS-image-composition',
    width: 318,
    height: 250,
    childTwo: 'Similar or complex images should not be used together.'
  },
  {
    src: '/images/brand/composition/image-composition-2.webp',
    alt: 'greenCSS image composition',
    id: 'greenCSS-image-composition-2',
    width: 316,
    height: 250,
    childTwo: 'The same image should not be used twice - for example scaled or cropped.'
  },
  {
    src: '/images/brand/composition/image-composition-3.webp',
    alt: 'greenCSS image composition',
    id: 'greenCSS-image-composition-3',
    width: 317,
    height: 250,
    childTwo: 'Images that do not match must not be used.'
  },
  {
    src: '/images/brand/composition/image-composition-4.webp',
    alt: 'greenCSS image composition',
    id: 'greenCSS-image-composition-4',
    width: 317,
    height: 250,
    childTwo: 'Pictures with the same or a similar colour must be avoided.'
  },
  {
    src: '/images/brand/composition/image-composition-5.webp',
    alt: 'greenCSS image composition',
    id: 'greenCSS-image-composition-5',
    width: 317,
    height: 250,
    childTwo: 'Do not use gradients. Use black, white or greencss/green instead'
  },
  {
    src: '/images/brand/composition/image-composition-6.webp',
    alt: 'greenCSS image composition',
    id: 'greenCSS-image-composition-6',
    width: 315,
    height: 250,
    childTwo: 'Do not use too many colours or shades which do not match.'
  }
]
const goodCompositionexamples = [
  {
    src: '/images/brand/composition/image-composition-ok.webp',
    alt: 'greenCSS image composition',
    id: 'greenCSS-image-composition-ok',
    width: 317,
    height: 250,
    childTwo: 'High contrast between images is tolerated, but not recommended.'
  },
  {
    src: '/images/brand/composition/image-composition-ok-2.webp',
    alt: 'greenCSS image composition',
    id: 'greenCSS-image-composition-ok-2',
    width: 316,
    height: 250,
    childTwo: 'Different perspectives or the same subject might be paired.'
  },
  {
    src: '/images/brand/composition/image-composition-ok-3.webp',
    alt: 'greenCSS image composition',
    id: 'greenCSS-image-composition-ok-3',
    width: 315,
    height: 251,
    childTwo: 'Dark and light shades should be used as standard background.'
  },
  {
    src: '/images/brand/composition/image-composition-ok-4.webp',
    alt: 'greenCSS image composition',
    id: 'greenCSS-image-composition-ok-4',
    width: 318,
    height: 251,
    childTwo: 'Vibrant colors should be paired with enough contrast.'
  },
  {
    src: '/images/brand/composition/image-composition-ok-5.webp',
    alt: 'greenCSS image composition',
    id: 'greenCSS-image-composition-ok-5',
    width: 317,
    height: 251,
    childTwo:
      'The background may consist of an image or illustration, whereby the overlapping O-frame may have a complementary dark or light background colour.'
  }
]

export const brandCompositionSections = [
  {
    title: 'Composition',
    description:
      'The composition system is elegant and neutral. Wherever it appears, it includes a subtle "O" inspired by the name. Defining the matrix based on the letter "O", the system remains flexible and is easy to apply in both print and virtual.'
  },
  {
    title: 'Layouts & Grid',
    description:
      'The composition between layout and grid is inspired by the "O" from greenCSS. Consistent elements convey systematics and structure.'
  },
  {
    isLight: true,
    children: (
      <>
        <Image
          quality={100}
          height={1377}
          width={2040}
          src='/images/brand/composition/layout-grid.webp'
          alt='omen css vertical o-grid and layout composition'
          id='greenCSS-vertical-o-grid'
          placeholder='blur'
          blurDataURL={`/_next/image?url=/images/brand/composition/layout-grid.webp&w=16&q=1`}
        />
        <div className='sm:mt-25px mt-50px'>
          <Image
            quality={100}
            height={2327}
            width={2040}
            src='/images/brand/composition/words-images.webp'
            alt='omen css text in images'
            id='greenCSS-words-in-images'
            className='sm:mt-25px mt-50px'
            placeholder='blur'
            blurDataURL={`/_next/image?url=/images/brand/composition/words-images.webp&w=16&q=1`}
          />
        </div>
      </>
    )
  },
  {
    title: 'O-Frame Checklist',
    description: 'Print, Screen, Format, Context. Uniformity must be coherent.'
  },
  {
    isLight: true,
    children: (
      <div className='m-auto grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
        {badCompositionexamples.map((bad, index) => {
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
    title: 'Image Composition',
    description:
      'Basically, images are allowed to overlap. It is important to ensure that sufficient contrast exists. Alternatively, a dark background can be combined with a light image, for example.'
  },
  {
    isLight: true,
    children: (
      <div className='m-auto grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
        {imageCompositions.map((composition, index) => {
          return (
            <BrandBadExample
              key={index}
              childOne={
                <Image
                  quality={100}
                  height={composition.height}
                  width={composition.width}
                  src={`${composition.src}`}
                  alt={`${composition.alt}`}
                  className='w-100per'
                  placeholder='blur'
                  blurDataURL={`/_next/image?url=${composition.src}&w=16&q=1`}
                />
              }
              classOne='px-10px'
              childTwo={composition.childTwo}
            />
          )
        })}
      </div>
    )
  },
  {
    title: 'Recommended image composition'
  },
  {
    isLight: true,
    children: (
      <div className='m-auto grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
        {goodCompositionexamples.map((good, index) => {
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
