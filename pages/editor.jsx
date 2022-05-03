import '@uiw/react-md-editor/markdown-editor.css'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import rehypeSanitize from 'rehype-sanitize'
import Loader from '@/components/logo/Loader'
import { GreenButton } from '@/components/reusable/Button'
import LayoutTitle from '@/components/reusable/LayoutTitle'

const MDEditor = dynamic(() => import('@uiw/react-md-editor').then((mod) => mod.default), {
  ssr: false,
  loading: () => <Loader />
})
const Layout = dynamic(() => import('@/components/reusable/Layout'), { ssr: false })

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
    <LayoutTitle title='Markdown editor'>
      <Layout
        className='container sm:px-10px md:px-25px lg:px-50px bg-green-10 pt-5rem sm:pt-0rem md:pt-0rem'
        keywords='markdown, editor, css library, omen css'
        description="Create your Markdown documentation, with omen css's markdown editor.">
        <div id='markdowneditor' className='min-w-100per min-h-50vh bg-white'>
          <h1 className='max-w-50vw'>Markdown editor for greenCSS devs</h1>
          <MDEditor
            value={editor}
            onChange={setEditor}
            previewOptions={{
              rehypePlugins: [[rehypeSanitize]]
            }}
          />
        </div>
        <div className='flex my-25px'>
          <GreenButton onClick={TextFile} id='saveMD'>
            save
          </GreenButton>
        </div>
      </Layout>
    </LayoutTitle>
  )
}

export default MarkDownPage
