import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co.com', 'upload.wikimedia.org'],
  },
};

export default nextConfig;