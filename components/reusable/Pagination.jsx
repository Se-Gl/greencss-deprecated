import { LinkButton, LinkButtonLeft } from './Button'

export default function Pagination({ currentPage, numPages }) {
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === numPages
  const prevPage = `/blog/page/${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`
  if (numPages === 1) return <></>

  return (
    <div className='mt-100px'>
      <ul className='flex flex-row justify-center items-center'>
        {!isFirstPage && <LinkButtonLeft href={prevPage}>Back</LinkButtonLeft>}
        {!isLastPage && <LinkButton href={nextPage}>Next</LinkButton>}
      </ul>
    </div>
  )
}
