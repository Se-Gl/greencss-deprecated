import * as React from 'react'
import { useState } from 'react'
import { extractHeadingsFromMd, removeCodeBlockFromMd } from './utils'
import { newHeading } from './TocHeading'

const Toc = ({ markdownText, titleLimit, highestHeadingLevel, lowestHeadingLevel, customMatchers, isBlog }) => {
  const [reveal, setReveal] = useState(true)

  if (!markdownText) return null
  // Set default values
  const limit = titleLimit ? titleLimit : 100
  const headingLevels = [highestHeadingLevel || 1, lowestHeadingLevel || 6]

  // Mutate headings
  const matchedHeadings = extractHeadingsFromMd(removeCodeBlockFromMd(markdownText), headingLevels[0], headingLevels[1])
  const headingObjects = matchedHeadings?.map((heading) => newHeading(heading, limit, customMatchers))
  const headingTags = headingObjects?.map((heading) => heading.generateList())

  if (!headingTags) return null

  return (
    <div role='navigation' aria-label='table of contents' id='toc'>
      <div className='bg-purple-10 my-auto p-25px my-50px rounded-10px'>
        <h4 className='font-800 mb-25px'>Table of Contents</h4>
        {reveal === true && (
          <>
            {headingTags.map((heading, index) => (
              <ul key={index}>
                <li>{heading}</li>
              </ul>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default Toc
