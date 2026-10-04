import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The workspace packages ship TypeScript source (and CSS modules) inside the
  // monorepo, so Next needs to compile them.
  transpilePackages: ["@engineering-blog/queries", "@engineering-blog/wrapper-next"],
};

export default nextConfig;
