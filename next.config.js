/** @type {import('next').NextConfig} */
const nextConfig = {
  // prevent double render on dev mode, which causes 2 frames to exist
  env: {
    NEYNAR_API_KEY: process.env.NEYNAR_API_KEY,
    VERCEL_TOKEN: process.env.VERCEL_TOKEN,
    KV_NAMESPACE_ID: process.env.KV_NAMESPACE_ID,
    KV_URL: process.env.KV_URL,
    KV_REST_API_URL: process.env.KV_REST_API_URL,
    KV_REST_API_TOKEN: process.env.KV_REST_API_TOKEN,
    KV_REST_API_READ_ONLY_TOKEN: process.env.KV_REST_API_READ_ONLY_TOKEN,
    QUICKINTEL_API_KEY: process.env.QUICKINTEL_API_KEY,
    QUICKINTEL_API_QUICK_AUDIT_FULL_URL:
      process.env.QUICKINTEL_API_QUICK_AUDIT_FULL_URL,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: '*',
        protocol: 'http',
      },
      {
        hostname: '*',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
