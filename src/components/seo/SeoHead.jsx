import React from 'react'
import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://www.newalmadinatravels.com'

const normalizePath = (path = '/') => {
  if (!path || path === '/') return '/'
  return path.startsWith('/') ? path : `/${path}`
}

const SeoHead = ({ title, description, path = '/' }) => {
  const normalizedPath = normalizePath(path)
  const canonical = `${BASE_URL}${normalizedPath === '/' ? '' : normalizedPath}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

export default SeoHead