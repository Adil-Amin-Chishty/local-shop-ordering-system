import type { NextConfig } from 'next';
const config: NextConfig = { outputFileTracingRoot: process.cwd(), images: { remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] } };
export default config;
