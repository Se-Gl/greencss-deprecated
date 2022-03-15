import * as React from 'react'
import { useState } from 'react'
import { extractHeadingsFromMd, removeCodeBlockFromMd } from './utils'
import { newHeading } from './TocHeading'
import { TocButton } from '../reusable/Button'

const Toc = ({ markdownText, titleLimit, highestHeadingLevel, lowestHeadingLevel, customMatchers }) => {
  const [reveal, setReveal] = useState(true)

  if (!markdownText) return null
  // Set default values
  const limit = titleLimit ? titleLimit : 200
  const headingLevels = [highestHeadingLevel || 1, lowestHeadingLevel || 6]

  // Mutate headings
  const matchedHeadings = extractHeadingsFromMd(removeCodeBlockFromMd(markdownText), headingLevels[0], headingLevels[1])
  const headingObjects = matchedHeadings?.map((heading) => newHeading(heading, limit, customMatchers))
  const headingTags = headingObjects?.map((heading) => heading.generateList())

  if (!headingTags) return null

  return (
    <div role='navigation' aria-label='table of contents' id='toc'>
      <TocButton
        onClick={() => setReveal(!reveal)}
        className={`${reveal === false ? 'rotate-90deg' : 'rotate-neg-90deg'}`}>
        Table of Contents
      </TocButton>
      {reveal === true && (
        <div className='fade-in animate animation-forwards absolute text-right w-15rem bg-light py-20px'>
          {headingTags.map((heading, index) => (
            <ul key={index}>{heading}</ul>
          ))}
        </div>
      )}
    </div>
  )
}

export default Toc
