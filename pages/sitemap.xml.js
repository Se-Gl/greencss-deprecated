const Sitemap = () => {}

export const getServerSideProps = ({ res }) => {
  const baseUrl = {
    development: `${process.env.NEXT_PUBLIC_URL}`,
    production: `${process.env.NEXT_PUBLIC_URL}`
  }[process.env.NODE_ENV]

  const staticSlug = [
    'brand',
    'brand/logo',
    'brand/typography',
    'blog',
    'docs',
    'docs/animation',
    'docs/animation/example'
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticSlug
        .map((slug) => {
          return `
            <url>
              <loc>${baseUrl}/${slug}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `
        })
        .join('')}
        
    </urlset>
  `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()
}

export default Sitemap
