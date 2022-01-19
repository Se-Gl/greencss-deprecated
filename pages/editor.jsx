import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import rehypeSanitize from 'rehype-sanitize'
import Loader from '../components/Loader'

const MDEditor = dynamic(() => import('@uiw/react-md-editor').then((mod) => mod.default), {
  ssr: false,
  loading: () => <Loader />
})

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
      <Head>
        <link href='/css/markdown.css' rel='stylesheet' />
      </Head>

      <div id='markdowneditor'>
        <MDEditor
          value={editor}
          onChange={setEditor}
          previewOptions={{
            rehypePlugins: [[rehypeSanitize]]
          }}
        />
        <button onClick={TextFile} id='saveMD'>
          save
        </button>
      </div>
    </>
  )
}

export default MarkDownPage
