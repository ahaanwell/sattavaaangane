/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/images/:path*",
        destination:
          "https://res.cloudinary.com/djdp6aloi/image/upload/:path*",
      },
    ];
  },
};

export default nextConfig;