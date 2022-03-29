import BrandBadExample from '@/components/brand/BrandBadExample'
import BrandSection from '@/components/brand/BrandSection'
import Summary from '@/components/brand/Summary'
import { BackButton } from '@/components/reusable/Button'
import Layout from '@/components/reusable/Layout'

export default function composition() {
  return (
    <Layout
      className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh mb-10rem'
      title='Composition Brand Book | Styleguide'
      description='The brand system features four core elements - composition'
      url='brand/composition'
      keywords='Composition, brand composition, image composition, Brand Book, omenCSS, Design, Corporate Identity'>
      <div className='min-w-100per relative' id='composition-colour-page'>
        <BackButton className='mb-50px'>Back</BackButton>
        <div className='mb-10rem'>
          <h1 className='text-80px sm:text-50px mb-100px'>omenCSS brand identity: the composition</h1>
          <BrandSection
            title='Composition'
            description='The composition system is elegant and neutral. Wherever it appears, it includes a subtle "O" inspired by the name. Defining the matrix based on the letter "O", the system remains flexible and is easy to apply in both print and virtual.'
          />
          <BrandSection
            title='Layouts & Grid'
            description='The composition between layout and grid is inspired by the "O" from omenCSS. Consistent elements convey systematics and structure.'
          />
          <BrandSection isLight={true}>
            <img
              src='/images/brand/composition/layout-grid.webp'
              alt='omen css vertical o-grid and layout composition'
              id='omencss-vertical-o-grid'
            />

            <img
              src='/images/brand/composition/words-images.webp'
              alt='omen css text in images'
              id='omencss-words-in-images'
              className='sm:mt-25px mt-50px'
            />
          </BrandSection>
          <BrandSection
            title='O-Frame Checklist'
            description='Print, Screen, Format, Context. Uniformity must be coherent.'
          />
          <BrandSection isLight={true}>
            <div className='m-auto grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
              <BrandBadExample
                childOne={
                  <img
                    src='/images/brand/composition/o-frame-checklist.webp'
                    alt='omencss o-frame checklist'
                    id='omencss-o-frame-1'
                    className='w-100per'
                  />
                }
                classOne='py-10px'
                childTwo='If the composition is tall and narrow or short and wide (as in banners), the O-frame is not recommended. The more space exists, the more effective the O-frame will be. In general, the frame should not be too narrow or angled.'
              />
              <BrandBadExample
                childOne={
                  <img
                    src='/images/brand/composition/o-frame-checklist-2.webp'
                    alt='omencss o-frame checklist'
                    id='omencss-o-frame-1'
                    className='w-100per'
                  />
                }
                classOne='py-10px'
                childTwo='Ensure that the context for the O-frame provides sufficient contrast. For example, if the composition is on a dark background, the O-frame should be light / white or contain a bright image. Otherwise, the shape would disappear.'
              />
              <BrandBadExample
                childOne={
                  <img
                    src='/images/brand/composition/o-frame-checklist-3.webp'
                    alt='omencss o-frame checklist'
                    id='omencss-o-frame-1'
                    className='w-100per'
                  />
                }
                classOne='py-10px'
                childTwo='Exclusively use the logo outside the O-frame. Ensure there is enough contrast between the logo and the background color - either use the dark or the light logo.'
              />
              <BrandBadExample
                childOne={
                  <img
                    src='/images/brand/composition/o-frame-checklist-3.webp'
                    alt='omencss o-frame checklist'
                    id='omencss-o-frame-1'
                    className='w-100per'
                  />
                }
                classOne='py-10px'
                childTwo='If an O-layout is not possible - often on the web - the grid layout may be used instead. It uses a 12-column grid with a 40px margin and a 30px gutter.'
              />
              <BrandBadExample
                childOne={
                  <img
                    src='/images/brand/colors/do-not-5.webp'
                    alt='omen css do not with colors'
                    id='omencss-do-not-5'
                    className='w-100per'
                  />
                }
                classOne='py-10px'
                childTwo='Avoid coloured headings or texts.'
              />
            </div>
          </BrandSection>
          <BrandSection
            title='Image Composition'
            description='Basically, images are allowed to overlap. It is important to ensure that sufficient contrast exists. Alternatively, a dark background can be combined with a light image, for example.'
          />
          <BrandSection isLight={true}>
            <div className='m-auto grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
              <BrandBadExample
                childOne={
                  <img
                    src='/images/brand/composition/image-composition-1.webp'
                    alt='omencss image composition'
                    id='omencss-image-composition'
                    className='w-100per'
                  />
                }
                classOne='py-10px'
                childTwo='Similar or complex images should not be used together.'
              />
              <BrandBadExample
                childOne={
                  <img
                    src='/images/brand/composition/image-composition-2.webp'
                    alt='omencss image composition'
                    id='omencss-image-composition-2'
                    className='w-100per'
                  />
                }
                classOne='py-10px'
                childTwo='The same image should not be used twice - for example scaled or cropped.'
              />
              <BrandBadExample
                childOne={
                  <img
                    src='/images/brand/composition/image-composition-3.webp'
                    alt='omencss image composition'
                    id='omencss-image-composition-3'
                    className='w-100per'
                  />
                }
                classOne='py-10px'
                childTwo='Images that do not match should not be used.'
              />
              <BrandBadExample
                childOne={
                  <img
                    src='/images/brand/composition/image-composition-4.webp'
                    alt='omencss image composition'
                    id='omencss-image-composition-4'
                    className='w-100per'
                  />
                }
                classOne='py-10px'
                childTwo='Pictures with the same or a similar colour must be avoided.'
              />
              <BrandBadExample
                childOne={
                  <img
                    src='/images/brand/composition/image-composition-5.webp'
                    alt='omencss image composition'
                    id='omencss-image-composition-5'
                    className='w-100per'
                  />
                }
                classOne='py-10px'
                childTwo='Do not use gradients.'
              />
              <BrandBadExample
                childOne={
                  <img
                    src='/images/brand/composition/image-composition-6.webp'
                    alt='omencss image composition'
                    id='omencss-image-composition-6'
                    className='w-100per'
                  />
                }
                classOne='py-10px'
                childTwo='Do not use too many colours.'
              />
            </div>
          </BrandSection>
          <BrandSection title='Recommended image composition' />
          <BrandSection isLight={true}>
            <div className='m-auto grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
              <BrandBadExample
                childOne={
                  <img
                    src='/images/brand/composition/image-composition-ok.webp'
                    alt='omencss image composition'
                    id='omencss-image-composition-ok'
                    className='w-100per'
                  />
                }
                classOne='py-10px'
                childTwo='High contrast between images is tolerated, but not recommended.'
              />
              <BrandBadExample
                childOne={
                  <img
                    src='/images/brand/composition/image-composition-ok-2.webp'
                    alt='omencss image composition'
                    id='omencss-image-composition-ok-2'
                    className='w-100per'
                  />
                }
                classOne='py-10px'
                childTwo='Different perspectives or the same subject might be paired.'
              />
              <BrandBadExample
                childOne={
                  <img
                    src='/images/brand/composition/image-composition-ok-3.webp'
                    alt='omencss image composition'
                    id='omencss-image-composition-ok-3'
                    className='w-100per'
                  />
                }
                classOne='py-10px'
                childTwo='Dark and light shades should be used as standard background.'
              />
              <BrandBadExample
                childOne={
                  <img
                    src='/images/brand/composition/image-composition-ok-4.webp'
                    alt='omencss image composition'
                    id='omencss-image-composition-ok-4'
                    className='w-100per'
                  />
                }
                classOne='py-10px'
                childTwo='Vibrant colors should be paired with enough contrast.'
              />
              <BrandBadExample
                childOne={
                  <img
                    src='/images/brand/composition/image-composition-ok-5.webp'
                    alt='omencss image composition'
                    id='omencss-image-composition-ok-5'
                    className='w-100per'
                  />
                }
                classOne='py-10px'
                childTwo='The background may consist of an image or illustration, whereby the overlapping O-frame may have a complementary dark or light background colour.'
              />
            </div>
          </BrandSection>
          <Summary
            titleOne='01'
            descriptionOne='The content and the context determine the composition'
            titleTwo='02'
            descriptionTwo='Consistent, uncompromising and contrasting experience'
            titleThree='03'
            descriptionThree='Focus on the importance of contrast by means of the primary colours'
          />
        </div>
      </div>
    </Layout>
  )
}
