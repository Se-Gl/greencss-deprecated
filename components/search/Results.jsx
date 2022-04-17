import Link from 'next/link'
import ChevronRight from '../icon/ChevronRight'
import Blog from '../icon/Search/Blog'
import Document from '../icon/Search/Document'

export default function Results({ results, searchTerm }) {
  if (results.length === 0) return <></>
  return (
    <>
      <div className='p-25px' id='search-results'>
        {results.length <= 1 ? (
          <h2 className='text-20px'>{results.length} Result</h2>
        ) : (
          <h2 className='text-20px'>{results.length} Results</h2>
        )}
        {results.map((result, index) => (
          <div
            className={`bg-greencss-10 hover:bg-greencss-6 transition-all transition-duration-500ms p-10px rounded-10px flex justify-between items-center mb-10px border-bottom-1px border-black border-solid clip-inset-in-left animate animation-forwards animation-delay-${
              (index + 1) * 1
            }00ms`}
            key={index}>
            <Link
              href={{
                pathname: `/${result.frontmatter.isBlog === true ? 'blog/[slug]' : 'docs/[slug]'}`,
                query: { slug: `${result.slug}` }
              }}>
              <div className='flex w-100per cursor-pointer'>
                {result.frontmatter.isBlog === false ? <Document className='my-auto' /> : <Blog className='my-auto' />}
                <div className='ml-15px'>
                  <div className='flex items-center'>
                    <h3 className='text-15px font-600 text-greencss bg-greencss-9 rounded-20px py-5px px-10px mb-0px'>
                      {result.frontmatter.category}
                    </h3>
                  </div>
                  <p className='text-15px mt-10px mb-0px'>{result.frontmatter.title}</p>
                </div>
                <ChevronRight className='ml-auto my-auto' />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
