import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Initialize OpenNext Cloudflare development environment simulation
initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  // We can add configuration options here if needed
  reactStrictMode: true,
};

export default nextConfig;
