import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import rehypeSanitize from 'rehype-sanitize'

const MDEditor = dynamic(() => import('@uiw/react-md-editor').then((mod) => mod.default), { ssr: false })

function MarkDownPage() {
  const getEditor = () => {
    if (process.browser) {
      const localEditor = localStorage.getItem('lastEntry')
      if (localEditor) return JSON.parse(localEditor)
    }
    return ''
  }

  const [editor, setEditor] = useState(getEditor())
  useEffect(() => {
    localStorage.setItem('lastEntry', JSON.stringify(editor))
  }, [editor])

  const TextFile = () => {
    const element = document.createElement('a')
    const file = new Blob([editor], { type: 'text/csv' })
    element.href = URL.createObjectURL(file)
    element.download = 'myFile.md'
    document.body.appendChild(element) // Required for this to work in FireFox
    element.click()
  }

  return (
    <>
      <MDEditor
        value={editor}
        onChange={setEditor}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]]
        }}
      />
      <button onClick={TextFile}>save</button>
    </>
  )
}

export default MarkDownPage
