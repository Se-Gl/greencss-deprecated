import React from 'react'
import { blogSlugs } from '@/cache/cachedBlogSlug'
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
        <loc>${`${baseUrl}/blog/${slug}`}</loc>
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
    const getSlug = blogSlugs.map((post) => post.slug)
    // console.log(getSlug)
    res.write(createSitemap(getSlug))
    res.end()
  }
}

export default Sitemap
