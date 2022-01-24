import { useState } from 'react'
import Layout from '../../components/reusable/Layout'
import { animations } from '../../data/animations'

export default function AnimationPage() {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false)
  const [itemsList, setItemsList] = useState([animations])
  const [selectedItemIndex, setSelectedItemIndex] = useState(null)

  return (
    <Layout className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh'>
      <div className='mt-20rem min-w-100per relative'>
        <div className='max-w-40rem relative text-dark text-16px' style={{ cursor: 'pointer' }}>
          <div
            id='custom-dropdown'
            className='bg-purple-5 p-15px h-50px'
            onClick={(e) => {
              setIsDropDownVisible(!isDropDownVisible)
            }}>
            {selectedItemIndex === null ? 'Please select an animation' : `css class: ${selectedItemIndex}`}
          </div>
          {isDropDownVisible && (
            <div className='bg-purple-5 absolute top-100 max-w-40rem max-h-40rem overflow-scroll overflow-x-hidden'>
              {itemsList[0].map((item, index) => (
                <li
                  key={item.value}
                  className='hover:bg-purple-4 p-15px'
                  onClick={(e) => {
                    setSelectedItemIndex(item.value)
                    setIsDropDownVisible(!isDropDownVisible)
                  }}>
                  {item.label}
                </li>
              ))}
            </div>
          )}
        </div>
        <div
          className={`absolute top-0 right-0 w-50px h-50px bg-orange duration-1000ms ${selectedItemIndex}`}
          id={`animation-${selectedItemIndex}`}></div>
      </div>
    </Layout>
  )
}
