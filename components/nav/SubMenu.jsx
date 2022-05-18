import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useGlobalContext } from '@/utils/NavContext'

const SubMenu = () => {
  const {
    isSubmenuOpen,
    submenuPosition,
    submenuItem: { page, pageLink, subtext, links }
  } = useGlobalContext()
  const [columns, setColumns] = useState('grid-col-2')
  const container = useRef(null)

  useEffect(() => {
    setColumns('grid-col-2')

    const { leftPosition, bottomPosition } = submenuPosition

    container.current.style.left = `${leftPosition}px`
    container.current.style.top = `${bottomPosition}px`

    if (links && links.length === 3) {
      setColumns('grid-col-3')
    }
    if (links && links.length > 3) {
      setColumns('grid-col-4')
    }
  }, [submenuPosition, page, links])
  return (
    <aside
      id='submenu'
      className={`${
        isSubmenuOpen
          ? 'submenu block z-99 bg-white absolute left-50per translate-x-neg-50per rounded-10px transition-all transition-duration-300ms shadow-small-black-10 clip-circle-in animation-duration-700ms animation-forwards'
          : 'display-none'
      }`}
      ref={container}>
      <section>
        <h4 className='mb-0px pt-20px px-20px'>
          <Link href={`${pageLink}`}>
            <a className='text-15px font-700 capitalize mb-0px no-decoration cursor-pointer'>{page}</a>
          </Link>
        </h4>
        <p className='px-20px text-15px text-black-10 cursor-pointer'>{subtext}</p>

        {links && (
          <div className={`p-20px grid bg-green-10 rounded-5px gap-x-5px gap-y-25px ${columns}`}>
            {links &&
              links.map((link, index) => {
                const { url, icon, label } = link
                return (
                  <Link key={index} href={url}>
                    <a className='capitalize my-0px no-decoration flex text-15px font-700 my-auto items-center'>
                      {icon}
                      <span className='ml-20px hover:text-black-5 active:text-black-7 transition-all transition-duration-500ms'>
                        {label}
                      </span>
                    </a>
                  </Link>
                )
              })}
          </div>
        )}
      </section>
    </aside>
  )
}

export default SubMenu
