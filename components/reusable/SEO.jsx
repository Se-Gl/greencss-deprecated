import Head from 'next/head'
import { NEXT_URL } from '@/config/index'

export default function SEO({ title, keywords, description, author, image, url, children, hasCanonical = false }) {
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
        <title>{title} | greenCSS</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name='robots' content='index,follow' />
        <meta name='distribution' content='web' />

        {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
        <meta name='og:title' content={title} />
        <meta name='og:type' content='site' />
        <meta name='og:url' content={`${NEXT_URL}/${url}`} />
        <meta name='og:image' content={`${NEXT_URL}${image}`} />
        <meta name='og:site_name' content={title} />
        <meta name='og:description' content={description} />

        {/* Apple & Favicon Tags */}
        <link rel='apple-touch-icon' href={`${NEXT_URL}/images/greencss_logo_dark.png`} />
        <link rel='apple-touch-icon' sizes='16x16' href={`${NEXT_URL}/images/icons/favicon-16x16.png`} />
        <link rel='apple-touch-icon' sizes='32x32' href={`${NEXT_URL}/images/icons/favicon-32x32.png`} />
        <link rel='apple-touch-icon' sizes='180x180' href={`${NEXT_URL}/images/icons/apple-touch-icon.png`} />
        <link rel='mask-icon' color='#fdfdfd' href={`${NEXT_URL}/images/brand/greencss_logo_dark.svg`} />
        <link rel='icon' type='image/svg+xml' href={`${NEXT_URL}/images/icons/favicon.svg`} />

        {/* Meta Tags for HTML pages on Mobile */}
        <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />
        <meta name='theme-color' content='#fdfdfd' />
        <link rel='shortcut icon' type='image/svg' href='/images/brand/logo_dark.svg' />

        {/* Canonical */}
        {hasCanonical === true && <link rel='canonical' href={`${NEXT_URL}/${url}`} />}

        {/* 
      Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@omenCSS' />
        <meta name='twitter:creator' content='@omenCSS' />
      </Head>

      <>{children}</>
    </>
  )
}

SEO.defaultProps = {
  title: 'A classy way to write sustainable CSS',
  keywords: 'sustainable CSS, green CSS, sustainable software, css library, css framework',
  description:
    'greenCSS is a sustainable cascade style sheet (CSS) library that is intuitive to use and provides zero-emission coding. The vision is to reduce our carbon footprint and simultaneously create beautiful new web applications. For everyone, for every framework!',
  author: 'Severin Glaser',
  url: '',
  image: '/images/greencss_logo_dark.png'
}
