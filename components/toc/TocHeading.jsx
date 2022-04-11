import * as React from 'react'
import Link from 'next/link'
import { replaceAll, createLink, createTitle } from './utils'
import ChevronRight from '../icon/ChevronRight'

// TODO refactor class into functional apporach
export default class TocHeading {
  constructor(title, level, titleLimit, customMatchers) {
    this.title = title
    this.level = level
    this.titleLimit = titleLimit
    this.customMatchers = customMatchers ? customMatchers : {}
  }

  generateList() {
    const link = createLink(this.title)
    const listItem = (
      <>
        <Link href={`#${replaceAll(link, this.customMatchers)}`} passRef>
          <span className='cursor-pointer no-decoration'>{createTitle(this.title, this.titleLimit)}</span>
        </Link>
      </>
    )

    return <>{nestUl(this.level, listItem)}</>
  }
}

/*
 Create a new heading object from the given string
*/
const newHeading = (headingText, titleLimit, customMatchers) => {
  const matchedHashes = headingText.match(/^#+/)
  if (!matchedHashes) return null
  const headingLevel = matchedHashes[0].split('').length
  const matchers = customMatchers ? customMatchers : {}

  return new TocHeading(headingText, headingLevel, titleLimit, matchers)
}

const nestUl = (level, listItem) => {
  switch (level) {
    case 1:
      return <h3 className='mb-10px text-15px font-900'>{listItem}</h3>
    case 2:
      return <h4 className='mb-10px text-15px font-900'>{listItem}</h4>
    case 3:
      return (
        <h5 className='mb-10px text-15px font-500 pl-10px flex'>
          <ChevronRight className='h-10px mr-10px my-auto' />
          {listItem}
        </h5>
      )
    case 4:
      return (
        <h6 className='mb-10px text-15px font-500 pl-20px flex'>
          <ChevronRight className='h-10px mr-10px my-auto' /> {listItem}
        </h6>
      )
    default:
      return listItem
  }
}

export { newHeading }
