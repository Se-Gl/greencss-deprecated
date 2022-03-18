export default function DevelopmentToClipboard({ content }) {
  // copy minified JSON output of the markdowns body
  const minifyContent = JSON.stringify(content, function (a, b) {
    // lowercase only the body of the md file
    return typeof b === 'string' ? b.toLowerCase() : b
  })
    .replace(/\\n/g, ' ')
    .replace(/\\"/g, '')
    .replace(/\`/g, '')
    .replace(/-/g, ' ')
    .replace(/\|/g, ' ')
    .replace(/\\r/g, ' ')
    .replace(/\_/g, ' ')
    .replace(/\,/g, ' ')
    .replace(/\./g, ' ')
    .replace(/\s\s+/g, ' ')
  return (
    <>
      {process.env.NODE_ENV == 'development' && (
        <button
          id='copy-to-clipboard'
          onClick={() => {
            navigator.clipboard.writeText(minifyContent)
          }}>
          copy minified content to clipboard
        </button>
      )}
    </>
  )
}
