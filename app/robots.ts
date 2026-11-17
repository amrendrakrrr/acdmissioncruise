import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/admin/"] },
    sitemap: "https://admissioncruise.com/sitemap.xml",
    host: "https://admissioncruise.com",
  };
}
