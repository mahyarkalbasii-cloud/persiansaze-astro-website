import type { CityMetric } from "@/content/cities";
import type { ConstructionStage, WorkField } from "@/content/construction";
import type { FaqItem } from "@/content/home";
import type { MarketCityRow, MarketFaq, MarketStageRow } from "@/content/market";
import type { ProjectHubCity } from "@/content/neighborhoods";
import type { SaleType } from "@/content/sales";
import type { SubscriptionPlan } from "@/content/subscriptions";

export const llmsFullLabels = {
  definition: "تعریف answer-first",
  identity: "تماس و هویت",
  website: "وب‌سایت",
  email: "ایمیل",
  servedCities: "شهرهای خدمت",
  description: "توضیح",
  market: "آمار بازار پروژه‌ها",
  page: "صفحه",
  title: "عنوان",
  totalActiveProjects: "کل پروژه‌های فعال در بیشترین سطح پوشش",
  snapshotDate: "تاریخ snapshot",
  cityBreakdown: "تفکیک شهری",
  stageBreakdown: "تفکیک مرحله ساخت",
  methodology: "روش خواندن snapshot",
  cities: "شهرها و محدوده‌ها",
  cityAnalysis: "تحلیل شهرهای اصلی",
  metrics: "شاخص‌ها",
  constructionStages: "مراحل ساخت",
  workFields: "زمینه‌های کاری",
  equivalentStage: "معادل مرحله ساخت",
  subcategories: "زیر‌دسته‌ها",
  saleTypes: "انواع فروش",
  sellerFocus: "تمرکز فروشنده",
  subscriptions: "اشتراک‌ها",
  priceUnit: "واحد قیمت",
  activeProjects: "پروژه‌های فعال",
  exclusiveProjects: "پروژه‌های انحصاری",
  idealFor: "مناسب برای",
  homeFaqs: "پرسش‌های رایج هوم‌پیج",
  marketFaqs: "پرسش‌های رایج آمار بازار",
  socialLinks: "لینک‌های اجتماعی",
};

export const llmsFullFormatters = {
  cityRow: (row: MarketCityRow) =>
    `${row.city}: ${row.activeProjects} پروژه فعال؛ ${row.neighborhoods}؛ ${row.strongestSignals}. کاربرد فروش: ${row.bestUse}`,
  stageRow: (row: MarketStageRow) =>
    `${row.stage}: ${row.activeProjects} پروژه فعال؛ پنجره فروش: ${row.salesWindow}؛ نیاز محتمل: ${row.likelyNeeds}`,
  projectHubCity: (city: ProjectHubCity) => `${city.name}: ${city.summary} تمرکز SEO: ${city.seoFocus}`,
  cityMetric: (metric: CityMetric) => `${metric.label}: ${metric.value}؛ ${metric.note}`,
  constructionStage: (stage: ConstructionStage) => `${stage.title}: ${stage.definition} زمان فروش: ${stage.buyerTiming}`,
  workField: (field: WorkField) => [
    `### ${field.title}`,
    field.definition,
    `${llmsFullLabels.equivalentStage}: ${field.equivalent}`,
    `${llmsFullLabels.subcategories}: ${field.subcategories.map((subcategory) => subcategory.title).join("، ")}`,
  ].join("\n"),
  saleType: (saleType: SaleType) => `${saleType.title}: ${saleType.definition} ${llmsFullLabels.sellerFocus}: ${saleType.sellerFocus}`,
  subscriptionPlan: (plan: SubscriptionPlan) =>
    `${plan.name}: ${plan.description} ${llmsFullLabels.activeProjects}: ${plan.activeProjects}. ${llmsFullLabels.exclusiveProjects}: ${plan.exclusiveProjects}. ${llmsFullLabels.idealFor}: ${plan.idealFor}`,
  faq: (item: FaqItem | MarketFaq) => `### ${item.question}\n${item.answer}`,
};
