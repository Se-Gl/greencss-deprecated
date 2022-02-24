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
            className={`flex justify-between items-center my-50px pb-25px border-bottom-1px border-black border-solid clip-inset-in-left animate animation-forwards animation-delay-${
              (index + 1) * 1
            }00ms`}
            key={index}>
            <Link href={`/${result.frontmatter.isBlog === false ? 'docs' : 'blog'}/${result.slug}`} passHref>
              <div className='flex' style={{ cursor: 'pointer' }}>
                {result.frontmatter.isBlog === false ? <Document className='mt-7px' /> : <Blog className='mt-7px' />}
                <div className='ml-15px'>
                  <div className='flex items-center'>
                    <h3 className='text-15px font-600 bg-white rounded-5px p-10px mb-0px hover:bg-black hover:text-white transition-all transition-duration-500ms'>
                      {result.frontmatter.category}
                    </h3>
                  </div>
                  <h3 className='text-20px my-10px'>{result.frontmatter.title.slice(0, 25)}... </h3>
                  <p className='text-15px my-0px'>
                    {result.frontmatter.excerpt.slice(0, 25)}...{' '}
                    <span className='font-600'>{searchTerm.slice(0, 10)}...</span>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
