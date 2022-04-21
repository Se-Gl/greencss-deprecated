function Loader({ width = '40', height = '50' }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 400 501'>
      <rect width='400' height='400' fill='#101010' rx='100'></rect>
      <path
        className='spin animation-duration-5000ms animation-infinite origin-center'
        fill='#101010'
        fillOpacity='0.2'
        fillRule='evenodd'
        d='M207.046 500.166c63.275-43.973 104.698-117.19 104.698-200.083S270.321 143.973 207.046 100c-63.275 43.973-104.698 117.19-104.698 200.083s41.423 156.11 104.698 200.083z'
        clipRule='evenodd'></path>
      <mask id='path-3-inside-1_47_647' fill='#FDFDFD'>
        <path
          fillRule='evenodd'
          d='M192.698 500.166c63.275-43.973 104.697-117.19 104.697-200.083S255.973 143.973 192.698 100C129.423 143.973 88 217.19 88 300.083s41.423 156.11 104.698 200.083z'
          clipRule='evenodd'></path>
      </mask>
      <path
        className='spin animation-duration-5000ms animation-infinite origin-center'
        fill='#3E7A02'
        fillRule='evenodd'
        d='M192.698 500.166c63.275-43.973 104.697-117.19 104.697-200.083S255.973 143.973 192.698 100C129.423 143.973 88 217.19 88 300.083s41.423 156.11 104.698 200.083z'
        clipRule='evenodd'></path>
      <path
        className='spin animation-duration-5000ms animation-infinite origin-center'
        fill='#101010'
        d='M192.698 500.166l-2.854 4.106 2.854 1.983 2.853-1.983-2.853-4.106zm0-400.166l2.853-4.106-2.853-1.983-2.854 1.983 2.854 4.106zm99.697 200.083c0 81.186-40.563 152.899-102.551 195.977l5.707 8.212c64.562-44.867 106.844-119.59 106.844-204.189h-10zM189.844 104.106c61.988 43.078 102.551 114.791 102.551 195.977h10c0-84.599-42.282-159.322-106.844-204.189l-5.707 8.212zM93 300.083c0-81.186 40.563-152.899 102.551-195.977l-5.707-8.212C125.282 140.761 83 215.484 83 300.083h10zM195.551 496.06C133.563 452.982 93 381.269 93 300.083H83c0 84.599 42.282 159.322 106.844 204.189l5.707-8.212z'
        mask='url(#path-3-inside-1_47_647)'></path>
      <path
        className='spin animation-duration-5000ms animation-infinite origin-center'
        fill='#101010'
        d='M193 109l4 386h-8l4-386z'></path>
      <path
        className='spin animation-duration-5000ms animation-infinite origin-center'
        fill='#101010'
        fillOpacity='0.3'
        fillRule='evenodd'
        d='M190.498 498.144c61.768-44.162 102.028-116.48 102.028-198.201 0-80.646-39.208-152.134-99.602-196.444l-2.426 394.645z'
        clipRule='evenodd'></path>
      <path
        className='spin animation-duration-5000ms animation-infinite origin-center'
        fill='#FDFDFD'
        d='M143.165 195.319c-19.768 36.944-36.031 78.335-38.582 76.97 0 0 6.606-43.14 26.373-80.083 19.768-36.944 50.883-62.752 50.883-62.752 2.551 1.365-18.906 28.922-38.674 65.865z'></path>
    </svg>
  )
}

export default Loader
