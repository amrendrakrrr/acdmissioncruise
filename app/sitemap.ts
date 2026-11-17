import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://admissioncruise.com";
  // Include only confirmed public routes; add further pages after route review.
  return ["", "/study-india", "/study-abroad", "/universities", "/contact", "/about"].map(
    (path) => ({ url: base + (path || "/"), changeFrequency: "weekly" as const, priority: path ? 0.7 : 1 })
  );
}
