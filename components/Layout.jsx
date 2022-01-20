import Head from 'next/head'
import Header from './Header'

export default function Layout({ title, keywords, description, author, children, className = 'container' }) {
  return (
    <>
      <Head>
        <title>{title} | omenCSS</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name='author' content={author} />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      </Head>
      <Header />
      <main>
        <div className={className}>{children}</div>
      </main>
    </>
  )
}

Layout.defaultProps = {
  title: 'The classy way to write design.',
  keywords: 'HTML, CSS, omenCSS, css library, css framework',
  description:
    'omenCSS is an intuitive dynamic animated CSS library for HTML5 and frameworks like VueJS, NextJs, React, or Angular. Over 100.000 CSS classes cover all your needs. Yet, completely lightweight, as unused classes are purged before production.',
  author: 'Severin Glaser'
}
