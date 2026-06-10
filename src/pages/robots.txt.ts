import { aiCrawlerUserAgents, absoluteUrl } from "@/content/home";

export function GET() {
  // قاعده «Disallow: /*?*» حذف شد: هر URL دارای query (از جمله UTM) را از کرال
  // می‌بست. مدیریت نسخه‌های تکراری با تگ canonical انجام می‌شود که در همه
  // صفحات به نسخه تمیز اشاره می‌کند.
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
