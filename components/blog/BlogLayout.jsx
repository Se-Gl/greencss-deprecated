export default function BlogLayout({ children }) {
  return (
    <div className='m-auto grid grid-col-2 gap-30px sm:gap-0px sm:grid-col-1 md:grid-col-1' id='blog-section'>
      {children}
    </div>
  )
}
