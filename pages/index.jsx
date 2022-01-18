import Head from 'next/head'
import Image from 'next/image'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>omenCSS - The classy way to write design. </title>
        <meta
          name='description'
          content='omenCSS is an intuitive dynamic animated CSS library for HTML5 and frameworks like VueJS, NextJs, React, or Angular. Over 100.000 CSS classes cover all your needs. Yet, completely lightweight, as unused classes are purged before production.'
        />
        <meta name='keywords' content='HTML, CSS, omenCSS, css library, css framework' />
        <meta name='author' content='Severin Glaser' />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      </Head>
      <nav className='fixed h-40px flex justify-center items-center'>
        <div className='ml-10px'>
          <Image src='/omencss.svg' alt='OmenCSS Logo' width={100} height={20} id='logo' />
        </div>
      </nav>
      <main className='bg-dark min-h-100vh overflow-x-hidden'>
        <div className='relative min-h-100vh text-center z-2 flex justify-center items-center'>
          <h1 className='slide-top inline-block vertical-middle max-w-58rem font-800 leading-120 text-96 hero-title'>
            Writing CSS reimagined
          </h1>
        </div>
        <div className='bubbles'>
          <div className='bubble' />
          <div className='bubble' />
          <div className='bubble' />
        </div>
      </main>
    </>
  )
}
