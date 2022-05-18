function NavBrandLogo({ width = '200', height = '200' }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 200 200'>
      <g clipPath='url(#clip0_197_5744)'>
        <path fill='#2B7902' d='M0 0H200V200H0z'></path>
        <path
          fill='#3D7902'
          fillRule='evenodd'
          d='M68 100h32v32l-32-32zm-32 0l32 32 32 32H68l-32-32v-32z'
          clipRule='evenodd'
          style={{ mixBlendMode: 'color-dodge' }}></path>
        <path fill='#FADA06' d='M36 36h128v128H36V36z' style={{ mixBlendMode: 'color-burn' }}></path>
        <path
          fill='#357902'
          fillRule='evenodd'
          d='M196-92h96V4l-96-96zm-96 0l96 96 96 96h-96L100 4v-96z'
          clipRule='evenodd'
          style={{ mixBlendMode: 'multiply' }}></path>
        <path fill='#F1FA06' d='M36 36h128v128H36V36z' style={{ mixBlendMode: 'color-burn' }}></path>
        <path
          fill='#FAB906'
          fillRule='evenodd'
          d='M68 100h32v32l-32-32zm-32 0l32 32 32 32H68l-32-32v-32z'
          clipRule='evenodd'
          style={{ mixBlendMode: 'color-dodge' }}></path>
      </g>
      <defs>
        <clipPath id='clip0_197_5744'>
          <path fill='#fdfdfd' d='M0 0H200V200H0z'></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default NavBrandLogo
