import BrandCard from '@/components/brand/BrandCard'
import useInView from '@/hooks/InView/scrollView'

const serviceCard = [
  { title: 'Getting started', path: '#' },
  { title: 'Documentary', path: '/docs' },
  { title: 'Delete unused CSS', path: '/blog/how-to-delete-unused-css-classes' }
]

export default function ServiceCard() {
  const [ref, isVisible] = useInView({
    threshold: 0.15,
    unobserveOnEnter: true
  })
  return (
    <>
      {serviceCard.sort().map((card, index) => (
        <div
          key={index}
          ref={ref}
          id='service-card'
          className={`sm:m-10px md:m-10px bg-white rounded-10px grid-row-col ${
            isVisible ? `fade-in animate animation-forwards animation-delay-${(index + 1) * 1}00ms` : 'opacity-0per'
          }`}>
          <div className='col-span-1'>
            <BrandCard title={`${card.title}`} link={`${card.path}`} />
          </div>
        </div>
      ))}
    </>
  )
}
