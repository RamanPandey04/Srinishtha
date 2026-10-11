import type { MetadataRoute } from "next";
import { SITE_URL as BASE } from "@/lib/site";
const routes = ["", "/work", "/services", "/products", "/about", "/careers", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
