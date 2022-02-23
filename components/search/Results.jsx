import Link from 'next/link'
import Blog from '../icon/Search/Blog'
import Document from '../icon/Search/Document'

export default function Results({ results, searchTerm }) {
  if (results.length === 0) return <></>

  return (
    <>
      <div className='p-25px' id='search-results'>
        <h2 className='text-35px'>{results.length} Results</h2>
        {results.map((result, index) => (
          <div
            className='flex justify-between items-center my-50px pb-25px border-bottom-1px border-black border-solid'
            key={index}>
            <Link href={`/docs/${result.slug}`} passHref>
              <div className='flex' style={{ cursor: 'pointer' }}>
                {result.frontmatter.isBlog === false ? <Document /> : <Blog />}
                <div className='ml-15px'>
                  <h3
                    className='mt-0px my-0px text-15px font-bold bg-white rounded-5px p-10px'
                    style={{ display: 'inline' }}>
                    {result.frontmatter.category}
                  </h3>
                  <p className='ml-25px sm:ml-0px mt-0px my-0px text-15px pt-15px'>
                    {result.frontmatter.excerpt.slice(0, 25)}...{' '}
                    <span className='font-bold'>{searchTerm.slice(0, 10)}</span>
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
