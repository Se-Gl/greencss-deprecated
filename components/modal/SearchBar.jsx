import SearchIcon from '../icon/Search/SearchIcon'

export default function SearchBar({ setShowModal, className }) {
  return (
    <div
      className={`flex w-100per min-h-40px border-1px border-solid border-black rounded-10px ${className}`}
      onClick={setShowModal}
      style={{ cursor: 'pointer' }}>
      <SearchIcon width='25px' height='25px' className='my-auto mx-10px' />
      <input
        type='search'
        name='modal-search'
        id='modal-search'
        className='flex bg-transparent justify-center w-100per text-black border-none text-10px'
        placeholder='Rapid Search'
      />
      <p className='text-10px font-bold my-auto mx-10px' id='close-modal'>
        F3
      </p>
    </div>
  )
}
