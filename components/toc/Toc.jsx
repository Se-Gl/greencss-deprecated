import * as React from 'react'
import { useState } from 'react'
import { extractHeadingsFromMd, removeCodeBlockFromMd } from './utils'
import { newHeading } from './TocHeading'
import ReusableModal from '../modal/ReusableModal'

const Toc = ({ markdownText, titleLimit, highestHeadingLevel, lowestHeadingLevel, customMatchers, isBlog }) => {
  const [reveal, setReveal] = useState(true)

  if (!markdownText) return null
  // Set default values
  const limit = titleLimit ? titleLimit : 15
  const headingLevels = [highestHeadingLevel || 1, lowestHeadingLevel || 6]

  // Mutate headings
  const matchedHeadings = extractHeadingsFromMd(removeCodeBlockFromMd(markdownText), headingLevels[0], headingLevels[1])
  const headingObjects = matchedHeadings?.map((heading) => newHeading(heading, limit, customMatchers))
  const headingTags = headingObjects?.map((heading) => heading.generateList())

  if (!headingTags) return null

  return (
    <div role='navigation' aria-label='table of contents' id='toc'>
      {isBlog === true && <ReusableModal isSidebar={true} />}
      <h3 className='font-800'>Table of Contents</h3>
      {reveal === true && (
        <>
          {headingTags.map((heading, index) => (
            <ul key={index}>{heading}</ul>
          ))}
        </>
      )}
    </div>
  )
}

export default Toc
