/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fedskillstest.ct.digital'],
    unoptimized: true
  },
  output: 'export',
  assetPrefix: './',
  async exportPathMap() {
    return {
      '/': { page: '/' },
    };
  },
};

export default nextConfig;
