/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },

      use: ['@svgr/webpack'],
    });

    return config;
  },
  reactStrictMode: true,
  images: { domains: ['127.0.0.1', 'res.cloudinary.com'] },
};

module.exports = nextConfig;
