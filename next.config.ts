import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/case-study/smart-itsm",
        destination: "/case-study/hb-development",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
