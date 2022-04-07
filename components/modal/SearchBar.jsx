import SearchIcon from '../icon/Search/SearchIcon'

export default function SearchBar({ setShowModal }) {
  return (
    <div
      className='flex w-100per mb-25px border-1px border-solid border-dark rounded-5px'
      onClick={setShowModal}
      style={{ cursor: 'pointer' }}>
      <SearchIcon width='20px' height='20px' className='pl-5px mt-3px' />
      <input
        type='search'
        name='modal-search'
        id='modal-search'
        className='ml-10px w-100per flex bg-transparent justify-center w-100per text-black border-none text-10px'
        placeholder='Rapid Search'
      />
      <p className='text-10px font-bold mb-0px p-5px' id='close-modal'>
        F3
      </p>
    </div>
  )
}
