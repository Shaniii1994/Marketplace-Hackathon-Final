/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
      ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'], // Add the external domain here
  },
};

export default nextConfig;
