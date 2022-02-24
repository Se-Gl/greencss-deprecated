import React from 'react'
import { docSlugs } from '@/cache/cachedDocSlug'
import { NEXT_URL, NODE_ENV } from '@/config/index'

const baseUrl = {
  development: `${NEXT_URL}`,
  production: `${NEXT_URL}`
}[NODE_ENV]

const createSitemap = (getSlug) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${getSlug
    .map((slug) => {
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
    res.setHeader('Content-Type', 'text/xml')
    const getSlug = docSlugs.map((post) => post.slug)

    res.write(createSitemap(getSlug))
    res.end()
  }
}

export default Sitemap
