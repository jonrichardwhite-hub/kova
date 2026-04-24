import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dsRoot = path.resolve(__dirname, '../kova-design-system/project');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@ds'] = dsRoot;
    return config;
  },
};

export default nextConfig;
