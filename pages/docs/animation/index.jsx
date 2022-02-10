import HandCrafted from '../../../components/icon/Animation/Handcrafted'
import { LinkButton } from '../../../components/reusable/Button'
import Layout from '../../../components/reusable/Layout'

export default function AnimationIndexPage() {
  return (
    <div className='overflow-x-hidden'>
      <Layout className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh'>
        <div className='mt-10rem min-w-100per relative' id='animation-main'>
          <LinkButton
            className='mb-25px absolute top-0 right-0'
            href='/docs/animation/example'
            id='visit-animation-examples-1'>
            Examples
          </LinkButton>
          <div className='m-auto max-w-50rem'>
            <h1 className='font-bold text-50px leading-120per mb-25px'>Handmade, crafted animations</h1>
            <HandCrafted />
            <p className='text-25px font-normal'>
              The collaboration of design and code plays an important role, especially in web development. Nowadays, a
              beautiful website is more or less easy to create. However, bringing a web application alive is more
              difficult. The keyword for this process is &quot;animation&quot;. Animation originates from the latin verb
              &quot;animare&quot; and means as much as spirit, life, breath or simply to bring to life.
            </p>
            <p className='text-25px font-normal'>
              To see the full selection, including animation examples, proceed by clicking on the button below.
            </p>
            <LinkButton className='my-50px' href='/docs/animation/example' id='visit-examples-2'>
              Examples
            </LinkButton>
          </div>
        </div>
      </Layout>
    </div>
  )
}
