import { aiCrawlerUserAgents, absoluteUrl } from "@/content/home";

export function GET() {
  const lines = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/",
    "Disallow: /admin/",
    "",
    ...aiCrawlerUserAgents.flatMap((userAgent) => [
      `User-agent: ${userAgent}`,
      "Allow: /",
      "",
    ]),
    `Sitemap: ${absoluteUrl("/sitemap.xml")}`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
