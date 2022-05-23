import Link from 'next/link'

export default function MobileGrid({ mapping, header, headerLink }) {
  return (
    <div className='mb-25px md:mt-50px'>
      <h4 className='mb-5px'>
        <Link href={headerLink}>
          <a className='no-decoration text-black-10 text-15px font-600 capitalize'>{header}</a>
        </Link>
      </h4>
      <div className='m-auto grid gap-10px grid-col-3 sm:grid-col-2 md:grid-col-3'>
        {mapping.map((item, index) => {
          return (
            <Link key={index} href={item.url}>
              <a className='capitalize my-0px no-decoration flex text-15px my-auto font-500 items-center clip-inset-in-top animate animation-forwards'>
                {item.icon}
                <span className='ml-10px hover:text-black-5 active:text-black-7 transition-all transition-duration-500ms'>
                  {item.label}
                </span>
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
