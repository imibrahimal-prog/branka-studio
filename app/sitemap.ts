import { MetadataRoute } from "next";
import { servicesList } from "@/lib/data/servicesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.braanka.com";
  const locales = ["ar", "en"];

  const staticRoutes = [
    { route: "", changeFrequency: "daily" as const, priority: 1.0 },
    { route: "/work", changeFrequency: "weekly" as const, priority: 0.9 },
    { route: "/affiliate", changeFrequency: "weekly" as const, priority: 0.85 },
    { route: "/contact", changeFrequency: "weekly" as const, priority: 0.8 },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Static routes
  for (const { route, changeFrequency, priority } of staticRoutes) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
        alternates: {
          languages: {
            ar: `${baseUrl}/ar${route}`,
            en: `${baseUrl}/en${route}`,
          },
        },
      });
    }
  }

  // 8 Service pages
  for (const service of servicesList) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.85,
        alternates: {
          languages: {
            ar: `${baseUrl}/ar/services/${service.slug}`,
            en: `${baseUrl}/en/services/${service.slug}`,
          },
        },
      });
    }
  }

  return sitemapEntries;
}
