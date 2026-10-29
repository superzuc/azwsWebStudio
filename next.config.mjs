/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: '/projects', destination: '/#projects', permanent: true }];
  },
};

export default nextConfig;
