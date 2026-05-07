import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/planet-travel' : '',
  assetPrefix: isProd ? '/planet-travel' : '',
  trailingSlash: true,
};
export default nextConfig;
