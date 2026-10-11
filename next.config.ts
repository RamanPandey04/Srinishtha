import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // This project lives under ~/Downloads where stray lockfiles exist higher up;
  // pin the workspace root so Turbopack resolves from here.
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
