import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.evalue8.ai'),
  title: {
    default: 'evalue8 — Scout. Evaluate. Decide.',
    template: '%s | evalue8',
  },
  description:
    'evalue8 opens up markets, vendors and technologies — structured, comparable and source-based. Scout up to a hundred companies in minutes, rank them in seconds, and back the shortlist with a source-linked report.',
  openGraph: { type: 'website', siteName: 'evalue8', locale: 'en', url: 'https://www.evalue8.ai' },
  icons: { icon: '/icon.png' },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'evalue8',
  url: 'https://www.evalue8.ai',
  slogan: 'Scout. Evaluate. Decide.',
  description: 'Market intelligence for companies, technologies and markets.',
  address: { '@type': 'PostalAddress', addressLocality: 'Munich', addressCountry: 'DE' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
