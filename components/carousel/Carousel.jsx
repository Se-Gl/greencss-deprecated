import React, { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'

export const CarouselItem = ({ children, width, className }) => {
  return (
    <div className={`inline-flex ${className}`} style={{ width: width }}>
      {children}
    </div>
  )
}

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0
    }

    setActiveIndex(newIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1)
      }
    }, 5000)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  })

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  })

  return (
    <div
      {...handlers}
      className='overflow-hidden'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onClick={() => {
        updateIndex(activeIndex + 1)
      }}>
      <div
        className='whitespace-nowrap transition-transform transition-duration-300ms'
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' })
        })}
      </div>
    </div>
  )
}

export default Carousel
