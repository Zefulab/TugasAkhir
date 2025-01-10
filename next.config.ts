import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      }
    ]
  }
};

export default nextConfig;
