import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // As a fallback, do not block production builds on lint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
