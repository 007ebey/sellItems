import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/checkout/', '/order-success/'],
      },
    ],
    sitemap: 'https://doxora.in/sitemap.xml',
  };
}
