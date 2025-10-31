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
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_IMAGE_HOSTNAME || "",
        pathname: "/product-images/**",
      },
    ],
  },
};

export default nextConfig;
