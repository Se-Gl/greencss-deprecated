import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

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
      <nav className='fixed h-40px flex items-center w-100vw bg-light shadow-darkpurple-3'>
        <div className='ml-10px'>
          <Link href='/'>
            <a>
              <Image src='/omencss.svg' alt='OmenCSS Logo' width={100} height={20} id='logo' />
            </a>
          </Link>
        </div>
      </nav>
      <main className='pt-40px'>
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
