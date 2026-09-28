import { MetadataRoute } from "next";
import { site } from "../../content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: site.seo.url,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ];

  const projectRoutes = site.projects
    .filter((p) => !p.draft)
    .map((p) => ({
      url: `${site.seo.url}${p.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [...routes, ...projectRoutes];
}
