import useInView from '@/hooks/InView/scrollView'

export default function Section({ id, background, children }) {
  const [ref, isVisible] = useInView({
    threshold: 0.25,
    unobserveOnEnter: true
  })
  return (
    <section
      className={`py-10rem sm:my-0px md:my-0px sm:m-10px md:m-10px opacity-0per ${!isVisible && 'bg-transparent'} ${
        isVisible &&
        `opacity-100per fade-in-bottom animate animation-forwards transition-all transition-duration-300ms transition-delay-700ms ${background}`
      }`}
      id={id}
      ref={ref}>
      {children}
    </section>
  )
}
