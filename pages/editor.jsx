import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import rehypeSanitize from 'rehype-sanitize'
import Loader from '../components/Loader'
import Layout from '../components/Layout'

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
    <Layout
      className='flex container'
      title='Markdown editor'
      keywords='markdown, editor, css library, omen css'
      description="Create your Markdown documentation, with omen css's markdown editor.">
      <Head>
        <link href='/css/markdown.css' rel='stylesheet' />
      </Head>

      <div id='markdowneditor' className='mt-20rem min-w-100per'>
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
    </Layout>
  )
}

export default MarkDownPage
