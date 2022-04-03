// next.config.js
const isProd = process.env.NODE_ENV === "production";
/** @type {import('next').NextConfig} */

const nextConfig = {
  assetPrefix: isProd ? "/ayushpaharia.github.io/" : "",
  reactStrictMode: true,
};

module.exports = nextConfig;
