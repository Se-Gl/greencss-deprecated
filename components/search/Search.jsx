import { useState, useEffect } from 'react'
import SearchIcon from '../icon/Search/SearchIcon'
import Results from './Results'

export default function Search({ handleCloseClick }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const getResults = async () => {
      if (searchTerm === '') {
        setSearchResults([])
      } else {
        const res = await fetch(`/api/search?q=${searchTerm.toLowerCase()}`)
        const { results } = await res.json()
        // console.log(results)
        setSearchResults(results)
      }
    }
    getResults()
  }, [searchTerm])

  //   console.log(searchTerm)
  // console.log(searchTerm.toLowerCase())

  return (
    <>
      <div className='flex bg-white max-w-50rem rounded-5px shadow-black py-25px'>
        <form className='flex max-w-40rem'>
          <div type='submit' className='flex items-center bg-transparent justify-center text-black mx-25px'>
            <SearchIcon width='30px' height='30px' />
          </div>
          <div className='w-50rem my-auto'>
            <input
              autoFocus
              type='search'
              name='search'
              id='search'
              className='bg-transparent w-100per text-black border-none text-15px'
              // style={{ textTransform: 'lowercase' }}
              placeholder='Search documentation'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </form>
        <a
          href='#'
          onClick={handleCloseClick}
          className='text-10px bg-white p-10px rounded-5px mx-10px hover:bg-black hover:text-white transition-all transition-duration-500ms my-auto no-decoration'
          id='close-modal'>
          ESC
        </a>
      </div>
      <Results results={searchResults} searchTerm={searchTerm} />
    </>
  )
}
