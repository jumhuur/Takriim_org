/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  // next.js config
});
const nextConfig = {
  images: {
    domains: ["cdn.pixabay.com", "lh3.googleusercontent.com"],
    typescript: {
      ignoreBuildErrors: true,
    },
  },
};

module.exports = nextConfig;
