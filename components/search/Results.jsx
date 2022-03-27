import Link from 'next/link'
import Blog from '../icon/Search/Blog'
import Document from '../icon/Search/Document'

export default function Results({ results, searchTerm }) {
  if (results.length === 0) return <></>
  return (
    <>
      <div className='p-25px' id='search-results'>
        {results.length <= 1 ? (
          <h2 className='text-35px'>{results.length} Result</h2>
        ) : (
          <h2 className='text-35px'>{results.length} Results</h2>
        )}
        {results.map((result, index) => (
          <div
            className={`flex justify-between items-center mb-25px border-bottom-1px border-black border-solid clip-inset-in-left animate animation-forwards animation-delay-${
              (index + 1) * 1
            }00ms`}
            key={index}>
            <Link
              href={{
                pathname: `/${result.frontmatter.isBlog === true ? 'blog/[slug]' : 'docs/[slug]'}`,
                query: { slug: `${result.slug}` }
              }}>
              <div className='flex' style={{ cursor: 'pointer' }}>
                {result.frontmatter.isBlog === false ? <Document className='mt-7px' /> : <Blog className='mt-7px' />}
                <div className='ml-15px'>
                  <div className='flex items-center'>
                    <h3 className='text-15px font-600 text-white bg-black rounded-5px p-10px mb-0px hover:bg-white hover:text-black transition-all transition-duration-500ms'>
                      {result.frontmatter.category}
                    </h3>
                  </div>
                  <h3 className='text-20px my-10px'>
                    {result.frontmatter.title}... <span className='text-15px'>{searchTerm.slice(0, 10)}</span>
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
