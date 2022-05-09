function ContactMarker() {
  return (
    <div className='w-50px h-50px relative cursor-pointer' style={{ zIndex: 999999999 }}>
      <svg xmlns='http://www.w3.org/2000/svg' x='0' y='0' viewBox='0 0 23 21'>
        <g>
          <circle cx='11.3' cy='10.5' r='3' className='fill-green'></circle>
          <circle
            cx='11.3'
            cy='10.5'
            r='6'
            fill='none'
            stroke='#80f906'
            strokeMiterlimit='10'
            className='ring'></circle>
        </g>
      </svg>
    </div>
  )
}

export default ContactMarker
