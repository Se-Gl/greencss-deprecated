import * as React from 'react'
import { useState } from 'react'
import { extractHeadingsFromMd, removeCodeBlockFromMd } from './utils'
import { newHeading } from './TocHeading'
import ReusableModal from '../modal/ReusableModal'

const Toc = ({ markdownText, titleLimit, highestHeadingLevel, lowestHeadingLevel, customMatchers, isBlog }) => {
  const [reveal, setReveal] = useState(true)

  if (!markdownText) return null
  // Set default values
  const limit = titleLimit ? titleLimit : 18
  const headingLevels = [highestHeadingLevel || 1, lowestHeadingLevel || 6]

  // Mutate headings
  const matchedHeadings = extractHeadingsFromMd(removeCodeBlockFromMd(markdownText), headingLevels[0], headingLevels[1])
  const headingObjects = matchedHeadings?.map((heading) => newHeading(heading, limit, customMatchers))
  const headingTags = headingObjects?.map((heading) => heading.generateList())

  if (!headingTags) return null

  return (
    <div role='navigation' aria-label='table of contents' id='toc'>
      {isBlog === true && <ReusableModal isSidebar={true} />}
      <div className='bg-purple-10 px-5px py-10px mb-25px reveal-down animation-duration-200ms animation-forwards'>
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
