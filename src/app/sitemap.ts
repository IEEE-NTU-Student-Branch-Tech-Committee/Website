import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';

export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/about', '/initiatives', '/people', '/partnerships'].map((path) => ({
    url: `${siteConfig.url}${path}/`,
    changeFrequency: 'monthly',
    priority: path ? 0.8 : 1,
  }));
}
