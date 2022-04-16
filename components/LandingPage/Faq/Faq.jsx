import useInView from '@/hooks/InView/scrollView'
import FaqIllustration from '../../icon/Faq/Faq'
import FaqQuestions from './Questions'

const questions = [
  {
    title: 'What is greenCSS?',
    description:
      'greenCSS is an MIT licensed CSS library. It uses the same technology like bulma, but with a class based system similar to tailwindcss. The difference is that greenCSS additionally aims to provide a green fingerprint for the earth. You can develop beautiful websites and code emission-free at the same time.'
  },
  {
    title: 'How does it work?',
    description:
      'Transparency is important. greenCSS is primarily supported by donations and crowdfunding. Funds are not wasted on marketing, advertising or other unnecessary expenses. Every contribution is reinvested so that trees can be planted all over the world. All persons involved do not receive any salary, everything happens on a voluntary basis - in the spirit of the open-source and climate movement.'
  },
  {
    title: 'What does it cost?',
    description:
      'greenCSS is completely free. Feel free to contribute your portion by using greenCSS in your next web-project. If this is not enough for you, feel free to make a small donation - the planet and greenCSS thank you for any support!'
  },
  {
    title: 'How can I contribute?',
    description:
      'greenCSS is open source and has an MIT license. You can clone the repository on GitHub, create a branch and contribute your part with a pull request. If you have any questions, suggestions or bug fixes, feel free to get in touch via the contact form.'
  },
  {
    title: 'How can I donate?',
    description:
      'Donations are always welcome. Only then, we can collectively achieve our dream of a future for our children and ourselves. Let`s make the world a little bit better - together.'
  },
  {
    title: 'What is the goal of greenCSS?',
    description:
      'While you are programming, whether for a school project, a university assignment, in an agency or as a freelancer, you need electricity. Most of the energy is still produced without a climate-neutral footprint. The main goal is to plant trees worldwide and reduce the C02 emissions. You can be part of it and contribute to your carbon footprint. Even when you just use greenCSS in your next project, you are already helping. If this is not enough for you, you are welcome to leave a small donation. Your children, your family, our planet and greenCSS will be eternally grateful!'
  }
]

export default function Faq() {
  const [ref, isVisible] = useInView({
    threshold: 0.25,
    unobserveOnEnter: true
  })

  return (
    <section
      ref={ref}
      className={`py-10rem sm:my-0px md:my-0px sm:m-10px md:m-10px ${
        isVisible && 'bg-blue-10 transition-all transition-duration-500ms'
      }`}
      id='faq'>
      <div
        className='m-auto grid gap-30px sm:gap-0px grid-col-2 sm:grid-col-1 md:grid-col-1 min-h-66vh overflow-hidden'
        style={{ maxWidth: '110rem' }}>
        <div className='col-span-1 flex sm:mb-0px md:mb-0px'>
          <div className='m-auto sm:m-unset max-w-50rem'>
            <h1 className='font-800 text-63px'>
              There’s more to <span className='text-green'>know</span> about greenCSS
            </h1>
            <FaqIllustration />
          </div>
        </div>
        <div className='col-span-1 max-w-50rem'>
          <div className='border-bottom-width-3px border-solid border-blue-8'>
            <h2 className='text-35px mb-50px'>Frequently Asked Questions</h2>
          </div>
          {questions.map((question, index) => (
            <FaqQuestions question={question} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
