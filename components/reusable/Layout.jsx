import Head from 'next/head'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('./Header'))

export default function Layout({
  title,
  keywords,
  description,
  author,
  image,
  url,
  children,
  className = 'container sm:px-10px md:px-25px lg:px-50px'
}) {
  return (
    <>
      <Head>
        {/* Recommended Meta Tags */}
        <meta charSet='utf-8' />
        <meta name='language' content='en' />
        <meta httpEquiv='content-type' content='text/html' />
        <meta name='author' content={author} />
        <meta name='designer' content={author} />
        <meta name='publisher' content={author} />

        {/* Search Engine Optimization Meta Tags */}
        <title>{title} | omenCSS</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name='robots' content='index,follow' />
        <meta name='distribution' content='web' />

        {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
        <meta name='og:title' content={title} />
        <meta name='og:type' content='site' />
        <meta name='og:url' content={`${process.env.NEXT_PUBLIC_URL}/${url}`} />
        <meta name='og:image' content={image} />
        <meta name='og:site_name' content={title} />
        <meta name='og:description' content={description} />

        {/* Apple & Favicon Tags */}
        <link rel='apple-touch-icon' href='/images/icons/apple-touch-icon.png' />
        <link rel='apple-touch-icon' sizes='16x16' href='/images/icons/favicon-16x16.png' />
        <link rel='apple-touch-icon' sizes='32x32' href='/images/icons/favicon-32x32.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/images/icons/apple-touch-icon.png' />
        <link rel='mask-icon' color='#fdfdfd' href='/images/brand/omencss_logo_dark.svg' />
        <link rel='icon' type='image/svg+xml' href='/images/icons/favicon.svg' />

        {/* Meta Tags for HTML pages on Mobile */}
        <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />
        <meta name='theme-color' content='#fdfdfd' />
        <link rel='shortcut icon' href='/images/icons/favicon.ico' />

        {/* 
      Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@omencss' />
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
  author: 'Severin Glaser',
  url: '',
  image: '/images/icons/logo_dark_high.png'
}
