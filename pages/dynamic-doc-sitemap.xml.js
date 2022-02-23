import React from 'react'

const NEXT_URL = `${process.env.NEXT_PUBLIC_URL}`
const API_URL = `${process.env.NEXT_PUBLIC_URL}/api/sitemapdoc`

const createSitemap = (getSlug) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${getSlug
    .map(({ slug }) => {
      return `
      <url>
        <loc>${`${NEXT_URL}/docs/${slug}`}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
    `
    })
    .join('')}</urlset>
    `

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const request = await fetch(API_URL)
    const allPosts = await request.json()

    res.setHeader('Content-Type', 'text/xml')
    const getSlug = allPosts.map((post) => post.slug)
    res.write(createSitemap(getSlug))
    res.end()
  }
}

export default Sitemap
