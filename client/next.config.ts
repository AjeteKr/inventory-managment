import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/users',
        destination: 'http://localhost:8000/users', // Proxy to Backend
      },
    ];
  },
  
};

export default nextConfig;
