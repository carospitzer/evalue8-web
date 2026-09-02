import type { MetadataRoute } from 'next';

const BASE = 'https://www.evalue8.ai';

const routes: Array<[string, number]> = [
  ['/', 1.0],
  ['/home', 0.9],
  ['/investors', 0.9],
  ['/corporates', 0.9],
  ['/accelerators', 0.9],
  ['/founders', 0.9],
  ['/platform', 0.8],
  ['/pricing', 0.7],
  ['/trust', 0.6],
  ['/company', 0.5],
  ['/demo', 0.5],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(([url, priority]) => ({
    url: `${BASE}${url}`,
    lastModified,
    changeFrequency: 'monthly',
    priority,
  }));
}
