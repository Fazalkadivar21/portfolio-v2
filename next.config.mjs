/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image optimization
  images: {
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
  },

  // Add security and SEO headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()'
          },
          // SEO Header
          {
            key: 'Content-Language',
            value: 'en-US'
          }
        ],
      },
      // Cache control for static assets
      {
        source: '/public/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Add redirects for SEO
  async redirects() {
    return [
      {
        source: '/portfolio',
        destination: '/#projects',
        permanent: true,
      },
      {
        source: '/about-me',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/contact-me',
        destination: '/#contact',
        permanent: true,
      },
    ];
  },

  // Internationalization configuration (optional)
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
