/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/videos',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/clientage',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/contact',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/certifications',
        destination: '/coming-soon',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
