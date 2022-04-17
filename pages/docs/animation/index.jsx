import dynamic from 'next/dynamic'
import HandCrafted from '@/components/icon/Animation/Handcrafted'
import { GreenButton } from '@/components/reusable/Button'

const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

export default function AnimationIndexPage() {
  return (
    <div className='overflow-x-hidden'>
      <Layout
        className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh'
        title='Handmade, crafted animations by greenCSS'
        description='The collaboration of design and code plays an important role, especially in web development. Check the full selection, including animation examples.'
        url='docs/animation'
        keywords='Animation, handmade css animation, reusable animation, omen css'>
        <div className='mt-10rem min-w-100per relative' id='animation-main'>
          <div className='flex'>
            <div className='mr-auto hidden'></div>
            <div className='ml-auto'>
              <GreenButton href='/examples/animation' id='visit-animation-examples-1'>
                Examples
              </GreenButton>
            </div>
          </div>
          <div className='m-auto max-w-50rem'>
            <h1>Handmade, crafted animations</h1>
            <HandCrafted />
            <p>
              The collaboration of design and code plays an important role, especially in web development. Nowadays, a
              beautiful website is more or less easy to create. However, bringing a web application alive is more
              difficult. The keyword for this process is &quot;animation&quot;. Animation originates from the latin verb
              &quot;animare&quot; and means as much as spirit, life, breath or simply to bring to life.
            </p>
            <p>To see the full selection, including animation examples, proceed by clicking on the button below.</p>
            <GreenButton className='my-50px' href='/examples/animation' id='visit-examples-2'>
              Examples
            </GreenButton>
          </div>
        </div>
      </Layout>
    </div>
  )
}
