// Replaces all the specified letters.
const replaceAll = (retStr, customMatchers) => {
  for (const key in customMatchers) {
    retStr = retStr.replace(new RegExp(key, 'g'), customMatchers[key])
  }
  return retStr
}

// Removes # and connects each word with '-'.
const createLink = (string) => {
  const shapedString = string.toLowerCase().replace(/^#+\s/, '').trimRight()
  const anchor = shapedString.split(' ').join('-')
  return anchor
}

// It removes # from the given string. And it shortens the string if its longer than "stringLimit".
const createTitle = (string, stringLimit) => {
  const rawTitle = string.replace(/^#+\s/g, '')

  if (rawTitle.length >= stringLimit) return `${rawTitle.slice(0, stringLimit)}..`

  return rawTitle
}

// It extracts headings from the given markdownText.
const extractHeadingsFromMd = (markdownText, highestTargetHeadings, lowestTargetHeadings) => {
  const headingRegex = new RegExp(`^#{${highestTargetHeadings},${lowestTargetHeadings}}\\s.+(\\n|\\r|\\r\\n)`, 'gm')
  return markdownText.match(headingRegex)
}

const removeCodeBlockFromMd = (markdownText) => {
  const codeBlockRegex = new RegExp(
    '((````[a-z]*\n[\\s\\S]*?\n````)|(```[a-z]*\n[\\s\\S]*?\n```)|(~~~[a-z]*\n[\\s\\S]*?\n~~~))',
    'gms'
  )
  return markdownText.replace(codeBlockRegex, '')
}

export { replaceAll, createLink, createTitle, extractHeadingsFromMd, removeCodeBlockFromMd }
