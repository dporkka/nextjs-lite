/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactRoot: true
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime"
    };

    return config;
  }
};

module.exports = nextConfig;
