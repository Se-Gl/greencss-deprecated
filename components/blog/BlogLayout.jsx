import BlogCard from './BlogCard'

export default function BlogLayout({ children }) {
  return (
    <section className='' id='blog-section'>
      <h1 className='font-bold text-50px mb-50px'>The Latest Records</h1>
      <div className='m-auto grid grid-col-3 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1'>
        <div id='doc-1' className={`col-span-1 grid-flow-row sm:m-10px md:m-10px bg-white rounded-10px`}>
          {children}
        </div>
      </div>
    </section>
  )
}
