import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        // firebase 
        hostname: 'firebasestorage.googleapis.com',
      }
    ],
  }
};

export default nextConfig;
