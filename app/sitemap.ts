import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://engramai.io',
      lastModified: '2026-03-21',
    },
    {
      url: 'https://engramai.io/products/sentinel',
      lastModified: '2026-03-21',
    },
    {
      url: 'https://engramai.io/products/memguard',
      lastModified: '2026-03-21',
    },
    {
      url: 'https://engramai.io/products/bog',
      lastModified: '2026-03-21',
    },
  ]
}