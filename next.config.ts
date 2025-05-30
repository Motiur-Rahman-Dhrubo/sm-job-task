// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     domains: ['i.ibb.co.com', 'upload.wikimedia.org'],
//   },
// };

// export default nextConfig;

// const withNetlify = require("@netlify/next");

// module.exports = withNetlify({
//   reactStrictMode: true,
// });

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co.com', 'upload.wikimedia.org'],
  },
};

export default nextConfig;