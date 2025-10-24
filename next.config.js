import { withPayload } from "@payloadcms/next/withPayload";
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly set the root directory to avoid confusion with parent directory
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.cellna.be",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.mapbox.com",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ["@apollo/client"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default withPayload(bundleAnalyzer(nextConfig));
