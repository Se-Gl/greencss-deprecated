export default function BlogLayout({ children }) {
  return (
    <section className='m-auto grid grid-col-3 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1' id='blog-section'>
      {children}
    </section>
  )
}
