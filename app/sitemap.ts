import { MetadataRoute } from "next";
import { metaData } from "./lib/config";
import { projects } from "./lib/projects";

const BaseUrl = metaData.baseUrl.endsWith("/")
  ? metaData.baseUrl
  : `${metaData.baseUrl}/`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const home = {
    url: `${BaseUrl}`,
    lastModified: new Date().toISOString().split("T")[0],
  };
  const projectRoutes = projects.map((p) => ({
    url: `${BaseUrl}projects/${p.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [home, ...projectRoutes];
}
