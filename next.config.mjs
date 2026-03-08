/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: 'https://res.cloudinary.com/djdp6aloi/image/upload/:path*',
      },
    ];
  },
};

export default nextConfig;