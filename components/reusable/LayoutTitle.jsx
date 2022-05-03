import Head from 'next/head'

export default function LayoutTitle({ title, children }) {
  return (
    <>
      <Head>
        <title>{title} | greenCSS</title>
      </Head>

      <>{children}</>
    </>
  )
}

LayoutTitle.defaultProps = {
  title: 'A classy way to write sustainable CSS'
}
