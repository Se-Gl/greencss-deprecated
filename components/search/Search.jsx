import SearchIcon from '../icon/Search/SearchIcon'

export default function Search({ handleCloseClick }) {
  return (
    <div className='flex bg-light max-w-50rem my-25px rounded-5px'>
      <div type='submit' className='flex items-center bg-transparent justify-center text-black rounded-r-lg mx-25px'>
        <SearchIcon width='30px' height='30px' />
      </div>
      <div className='w-50rem my-auto'>
        <input
          autoFocus
          type='search'
          className='bg-transparent w-100per py-25px text-black border-none text-15px'
          placeholder='Search documentation'
        />
      </div>
      <a
        href='#'
        onClick={handleCloseClick}
        style={{ textDecoration: 'none', letterSpacing: '-1px' }}
        className='text-15px bg-white p-10px rounded-5px mx-25px'
        id='close-modal'>
        ESC
      </a>
    </div>
  )
}
