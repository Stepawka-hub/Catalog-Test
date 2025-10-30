import type { NextConfig } from "next";

// Todo: Есть ли решение лучше?
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/products",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
