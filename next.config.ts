import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://hx529.github.io/nextjs-ecommerce/"
      : "",
};

export default nextConfig;
