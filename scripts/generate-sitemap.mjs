import { writeFileSync } from 'node:fs'

const baseUrl = 'https://www.newalmadinatravels.com'
const changefreq = 'monthly'
const lastmod = new Date().toISOString().split('T')[0]

const routes = [
  { path: '/', priority: '1.0' },
  { path: '/about', priority: '0.8' },
  { path: '/umrah-packages', priority: '0.9' },
  { path: '/services', priority: '0.8' },
  { path: '/flights', priority: '0.7' },
  { path: '/contact', priority: '0.8' },
  { path: '/holiday-packages', priority: '0.7' },
  { path: '/corporate-travel', priority: '0.7' },
  { path: '/new-visa-offers', priority: '0.7' },
  { path: '/document-attestation', priority: '0.7' },
]

const urlEntries = routes
  .map(({ path, priority }) => {
    const loc = path === '/' ? `${baseUrl}/` : `${baseUrl}${path}`
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  })
  .join('\n\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`

writeFileSync('public/sitemap.xml', xml)
console.log('Generated public/sitemap.xml with', routes.length, 'routes')
