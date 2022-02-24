import React from 'react'
import { NEXT_URL, API_URL, NODE_ENV } from '@/config/index'

const baseUrl = {
  development: `${NEXT_URL}`,
  production: `${NEXT_URL}`
}[NODE_ENV]

const baseApiUrl = {
  development: `${API_URL}/sitemapdoc`,
  production: `${API_URL}/sitemapdoc`
}[NODE_ENV]

const createSitemap = (getSlug) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${getSlug
    .map(({ slug }) => {
      return `
      <url>
        <loc>${`${baseUrl}/docs/${slug}`}</loc>
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
    const request = await fetch(baseApiUrl)
    const allPosts = await request.json()

    res.setHeader('Content-Type', 'text/xml')
    const getSlug = allPosts.map((post) => post.slug)
    res.write(createSitemap(getSlug))
    res.end()
  }
}

export default Sitemap
