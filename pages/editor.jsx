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

  return (
    <>
      <MDEditor
        value={editor}
        onChange={setEditor}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]]
        }}
      />
    </>
  )
}

export default MarkDownPage
