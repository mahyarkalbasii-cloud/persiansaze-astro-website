import { absoluteUrl } from "@/content/home";
import { constructionStages, workFields } from "@/content/construction";

export function GET() {
  const lastModified = new Date().toISOString();
  const urls = [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/work-fields/", changefreq: "weekly", priority: "0.9" },
    ...workFields.map((field) => ({
      path: `/work-fields/${field.slug}/`,
      changefreq: "monthly",
      priority: "0.8",
    })),
    ...workFields.flatMap((field) =>
      field.subcategories.map((subcategory) => ({
        path: `/work-fields/${field.slug}/${subcategory.slug}/`,
        changefreq: "monthly",
        priority: "0.7",
      }))
    ),
    { path: "/construction-stages/", changefreq: "weekly", priority: "0.9" },
    ...constructionStages.map((stage) => ({
      path: `/construction-stages/${stage.slug}/`,
      changefreq: "monthly",
      priority: "0.8",
    })),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (item) => `  <url>
    <loc>${absoluteUrl(item.path)}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
