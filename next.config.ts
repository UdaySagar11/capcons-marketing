import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
    domains: ["res.cloudinary.com", "picsum.photos", "storage.googleapis.com"],
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  experimental: {
    optimizePackageImports: [
      "@radix-ui/react-accordion",
      "@radix-ui/react-alert-dialog",
      "@radix-ui/react-checkbox",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-popover",
      "@radix-ui/react-tabs",
      "@radix-ui/react-tooltip",
      "framer-motion",
      "lucide-react",
      "react-icons",
      "@tanstack/react-query",
      "axios",
      "zod",
      "date-fns",
      "clsx",
      "tailwind-merge",
      "pdf-lib",
      "html2canvas",
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
