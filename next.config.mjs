/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // URLs people guess rather than click. /security in particular is what an
  // enterprise security reviewer types straight into the address bar.
  async redirects() {
    return [
      { source: '/security', destination: '/trust', permanent: true },
      { source: '/privacy', destination: '/trust', permanent: true },
      { source: '/product', destination: '/platform', permanent: true },
      { source: '/solutions', destination: '/platform', permanent: true },
      { source: '/index', destination: '/home', permanent: true },
      { source: '/for/investors', destination: '/investors', permanent: true },
      { source: '/for/corporates', destination: '/corporates', permanent: true },
      { source: '/for/accelerators', destination: '/accelerators', permanent: true },
      { source: '/for/founders', destination: '/founders', permanent: true },
      { source: '/about', destination: '/company', permanent: true },
      { source: '/scout', destination: '/platform', permanent: true },
      { source: '/team', destination: '/company', permanent: true },
      { source: '/contact', destination: '/get-access', permanent: true },
      { source: '/demo', destination: '/get-access', permanent: true },
      { source: '/book-a-demo', destination: '/get-access', permanent: true },
    ];
  },

  // /foundry lives in its own repo (carospitzer/clean-tech-foundry) and its own
  // Vercel project, built with basePath '/foundry'. Forward it there so the page
  // stays at www.evalue8.ai/foundry. The forms on it still post to /api/contact here.
  async rewrites() {
    return [
      { source: '/foundry', destination: 'https://clean-tech-foundry.vercel.app/foundry' },
      { source: '/foundry/:path*', destination: 'https://clean-tech-foundry.vercel.app/foundry/:path*' },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
