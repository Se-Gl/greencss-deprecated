import Section from '@/components/reusable/Section'
import FaqQuestions from './Questions'
import { GreenButton } from '@/components/reusable/Button'
import ContactEmail from '@/components/icon/Contact/ContactEmail'

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
  return (
    <Section id='faq'>
      <h1 className='font-800 text-63px max-w-80rem'>There’s more to know about greenCSS</h1>
      <div
        className='m-auto px-5px grid grid-col-12 gap-25px sm:gap-0px md:gap-0px sm:grid-col-1 md:grid-col-1 min-h-66vh overflow-hidden'
        style={{ maxWidth: '110rem' }}>
        <div className='col-span-8 flex sm:mb-0px md:mb-0px'>
          <div className='m-auto sm:m-unset max-w-100per'>
            {questions.map((question, index) => (
              <FaqQuestions question={question} key={index} />
            ))}
          </div>
        </div>
        <div className='col-span-4 max-w-30rem sm:max-w-100per sm:mt-50px md:max-w-100per md:mt-50px m-auto'>
          <div className='bg-white p-15px border-1px border-solid border-black-10 rounded-5px'>
            <ContactEmail className='fill-green-9 mx-auto mb-15px' />
            <h2 className='text-30px mb-5px'>Do you have more questions?</h2>
            <p className='text-15px text-black-10 mb-25px'>
              Sometimes not all questions have been answered or new questions have arisen. Transparency remains the most
              important factor and represents our credo. If you have any further inquiries, please feel free to send us
              a message.
            </p>
            <GreenButton hasLink={true} isDefault={false} href='/contact'>
              Shoot a Direct Message
            </GreenButton>
          </div>
        </div>
      </div>
    </Section>
  )
}
