/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  async redirects() {
    return [
      // Legacy product URLs
      { source: '/tool', destination: '/platform', permanent: true },
      { source: '/tools', destination: '/platform', permanent: true },
      { source: '/overview', destination: '/home', permanent: true },
      { source: '/scout', destination: '/platform', permanent: true },
      { source: '/cockpit', destination: '/platform', permanent: true },
      { source: '/integration', destination: '/platform', permanent: true },
      { source: '/profile', destination: '/login', permanent: true },

      // Canonical legal-page URL
      {
        source: '/TermsOfService',
        destination: '/terms-of-service',
        permanent: true,
      },

      // Existing website redirects
      { source: '/security', destination: '/trust', permanent: true },
      { source: '/product', destination: '/platform', permanent: true },
      { source: '/solutions', destination: '/platform', permanent: true },
      { source: '/index', destination: '/home', permanent: true },
      { source: '/for/investors', destination: '/investors', permanent: true },
      { source: '/for/corporates', destination: '/corporates', permanent: true },
      { source: '/for/accelerators', destination: '/accelerators', permanent: true },
      { source: '/for/founders', destination: '/founders', permanent: true },
      { source: '/about', destination: '/company', permanent: true },
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
