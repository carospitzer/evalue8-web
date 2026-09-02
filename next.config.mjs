/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // URLs people guess rather than click. /security in particular is what an
  // enterprise security reviewer types straight into the address bar.
  async redirects() {
    return [
      { source: '/tools', destination: '/platform', permanent: true },
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
