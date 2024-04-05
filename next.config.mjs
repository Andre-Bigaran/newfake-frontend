/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },eslint: {
    ignoreDuringBuilds: true,
},
};

export default nextConfig;
