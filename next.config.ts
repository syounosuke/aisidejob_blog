import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  serverExternalPackages: ['@sanity/client']
};

export default nextConfig;
