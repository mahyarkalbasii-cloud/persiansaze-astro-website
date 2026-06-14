import { cityProfiles } from "@/content/cities";
import { constructionStages, workFields } from "@/content/construction";
import { projectNeighborhoodRoutes, growthStageRoutes } from "@/content/growthSilos";
import { absoluteUrl } from "@/content/home";
import { marketPage } from "@/content/market";
import { projectHubCities } from "@/content/neighborhoods";
import { saleTypes } from "@/content/sales";
import { subscriptionPlans } from "@/content/subscriptions";

const staticPaths = [
  "/",
  "/product/",
  "/projects/",
  "/cities/",
  "/construction-stages/",
  "/work-fields/",
  "/sale-types/",
  "/subscriptions/",
  "/education/",
  "/contact-us/",
  "/rules/",
  "/llms.txt",
  "/llms-full.txt",
  marketPage.canonicalPath,
];

const dynamicPaths = [
  ...cityProfiles.map((city) => `/cities/${city.slug}/`),
  ...constructionStages.map((stage) => `/construction-stages/${stage.slug}/`),
  ...workFields.flatMap((field) => [
    `/work-fields/${field.slug}/`,
    ...field.subcategories.map((subcategory) => `/work-fields/${field.slug}/${subcategory.slug}/`),
  ]),
  ...saleTypes.map((saleType) => `/sale-types/${saleType.slug}/`),
  ...subscriptionPlans.map((plan) => `/subscriptions/${plan.slug}/`),
  ...projectHubCities.map((city) => `/projects/${city.slug}/`),
  ...projectNeighborhoodRoutes.map((route) => `/projects/${route.city}/${route.neighborhood}/`),
  ...growthStageRoutes.map((route) => `/stages/${route.stage}/`),
];

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export function GET() {
  const urls = [...new Set([...staticPaths, ...dynamicPaths])]
    .sort((a, b) => a.localeCompare(b))
    .map((path) => `  <url><loc>${escapeXml(absoluteUrl(path))}</loc></url>`)
    .join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
