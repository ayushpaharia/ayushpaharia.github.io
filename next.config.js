const isProd = process.env.NODE_ENV === "production";
/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
