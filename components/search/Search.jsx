import SearchIcon from '../icon/Search/SearchIcon'

export default function Search({ handleCloseClick }) {
  return (
    <div className='flex bg-white max-w-50rem rounded-5px'>
      <div type='submit' className='flex items-center bg-transparent justify-center text-black mx-25px'>
        <SearchIcon width='30px' height='30px' />
      </div>
      <div className='w-50rem my-auto'>
        <input
          autoFocus
          type='search'
          className='bg-transparent w-100per text-black border-none text-15px'
          placeholder='Search documentation'
        />
      </div>
      <a
        href='#'
        onClick={handleCloseClick}
        style={{ textDecoration: 'none' }}
        className='text-10px bg-light p-10px rounded-5px mx-10px'
        id='close-modal'>
        ESC
      </a>
    </div>
  )
}
