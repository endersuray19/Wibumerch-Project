import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
    ],
    domains: [
      'avatars.githubusercontent.com',
      'cdn.kyou.id',
      'images.unsplash.com',
      'example.com'
    ]
  },
};

export default nextConfig;
