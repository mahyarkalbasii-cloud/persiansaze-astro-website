import { cityProfiles } from "@/content/cities";
import { constructionStages, workFields } from "@/content/construction";
import { faqs, hero, metadata, site } from "@/content/home";
import { llmsFullFormatters, llmsFullLabels } from "@/content/llms";
import { marketFaqs, marketMethodology, marketPage, marketSnapshot } from "@/content/market";
import { projectHubCities } from "@/content/neighborhoods";
import { saleTypes, saleTypesIntro } from "@/content/sales";
import { pricing, subscriptionPlans } from "@/content/subscriptions";

const lines = (...items: (string | false | null | undefined)[]) => items.filter(Boolean).join("\n");
const list = (items: string[]) => items.map((item) => `- ${item}`).join("\n");

export function GET() {
  const body = lines(
    `# ${site.name}`,
    "",
    `> ${metadata.description}`,
    "",
    `## ${llmsFullLabels.definition}`,
    hero.answerFirst,
    hero.body,
    "",
    `## ${llmsFullLabels.identity}`,
    `- ${llmsFullLabels.website}: ${site.url}`,
    `- ${llmsFullLabels.email}: ${site.email}`,
    `- ${llmsFullLabels.servedCities}: ${site.areaServed.join("، ")}`,
    `- ${llmsFullLabels.description}: ${site.description}`,
    "",
    `## ${llmsFullLabels.market}`,
    `- ${llmsFullLabels.page}: ${site.url}${marketPage.canonicalPath}`,
    `- ${llmsFullLabels.title}: ${marketPage.headline}`,
    `- ${llmsFullLabels.totalActiveProjects}: ${marketSnapshot.totalActiveProjects}`,
    `- ${llmsFullLabels.snapshotDate}: ${marketSnapshot.updatedLabel}`,
    marketPage.sourceNote,
    "",
    `### ${llmsFullLabels.cityBreakdown}`,
    marketSnapshot.cityRows.map((row) => `- ${llmsFullFormatters.cityRow(row)}`).join("\n"),
    "",
    `### ${llmsFullLabels.stageBreakdown}`,
    marketSnapshot.stageRows.map((row) => `- ${llmsFullFormatters.stageRow(row)}`).join("\n"),
    "",
    `### ${llmsFullLabels.methodology}`,
    marketMethodology.cards.map((card) => `- ${card.title}: ${card.body}`).join("\n"),
    "",
    `## ${llmsFullLabels.cities}`,
    projectHubCities.map((city) => `- ${llmsFullFormatters.projectHubCity(city)}`).join("\n"),
    "",
    `## ${llmsFullLabels.cityAnalysis}`,
    cityProfiles
      .map((city) =>
        lines(
          `### ${city.title}`,
          city.summary,
          city.role,
          `${llmsFullLabels.metrics}:`,
          city.keyMetrics.map((metric) => `- ${llmsFullFormatters.cityMetric(metric)}`).join("\n"),
        ),
      )
      .join("\n\n"),
    "",
    `## ${llmsFullLabels.constructionStages}`,
    constructionStages.map((stage) => `- ${llmsFullFormatters.constructionStage(stage)}`).join("\n"),
    "",
    `## ${llmsFullLabels.workFields}`,
    workFields.map((field) => llmsFullFormatters.workField(field)).join("\n\n"),
    "",
    `## ${llmsFullLabels.saleTypes}`,
    saleTypesIntro.description,
    saleTypes.map((saleType) => `- ${llmsFullFormatters.saleType(saleType)}`).join("\n"),
    "",
    `## ${llmsFullLabels.subscriptions}`,
    `${llmsFullLabels.priceUnit}: ${pricing.currency}`,
    subscriptionPlans.map((plan) => `- ${llmsFullFormatters.subscriptionPlan(plan)}`).join("\n"),
    "",
    `## ${llmsFullLabels.homeFaqs}`,
    faqs.map((item) => llmsFullFormatters.faq(item)).join("\n\n"),
    "",
    `## ${llmsFullLabels.marketFaqs}`,
    marketFaqs.map((item) => llmsFullFormatters.faq(item)).join("\n\n"),
    "",
    `## ${llmsFullLabels.socialLinks}`,
    list([...site.sameAs]),
  );

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
