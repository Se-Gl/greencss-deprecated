import * as React from 'react'
import Link from 'next/link'
import { replaceAll, createLink, createTitle } from './utils'

// TODO refactor class into functional apporach
export default class TocHeading {
  constructor(title, level, titleLimit, customMatchers) {
    this.title = title
    this.titleLimit = titleLimit
    this.customMatchers = customMatchers ? customMatchers : {}
  }

  generateList() {
    const link = createLink(this.title)
    const listItem = (
      <li>
        <Link href={`#${replaceAll(link, this.customMatchers)}`} passRef>
          <a
            className='font-bold text-20px mb-0px border-left-1px border-solid border-purple pl-5px'
            style={{ textDecoration: 'none' }}>
            {createTitle(this.title, this.titleLimit)}
          </a>
        </Link>
      </li>
    )

    return <>{listItem}</>
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

export { newHeading }
