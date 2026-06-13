import { getProjectHubCitySlug, projectHubCityBySlug, projectNeighborhoods } from "@/content/neighborhoods";

export type ProjectListItem = {
  title: string;
  builder: string;
  stage: string;
  location: string;
  locked?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
};

export type ProjectNeighborhoodRoute = {
  city: string;
  cityName: string;
  neighborhood: string;
  neighborhoodName: string;
  headline: string;
  description: string;
  focus: string;
  marketCategory: string;
  demandSignals: string[];
  citySummary: string;
  projects: ProjectListItem[];
};

export type GrowthStageRoute = {
  stage: string;
  stageName: string;
  headline: string;
  description: string;
  projects: ProjectListItem[];
};

const upgradeCta = "قفل / ارتقا";

export const projectNeighborhoodRoutes: ProjectNeighborhoodRoute[] = projectNeighborhoods.map((neighborhood) => {
  const hubCitySlug = getProjectHubCitySlug(neighborhood.projectCitySlug);
  const city = projectHubCityBySlug.get(hubCitySlug);

  if (!city) {
    throw new Error(`Missing project hub city for neighborhood: ${neighborhood.slug}`);
  }

  return {
    city: city.slug,
    cityName: city.name,
    neighborhood: neighborhood.slug,
    neighborhoodName: neighborhood.name,
    headline: `پروژه‌های در حال ساخت ${neighborhood.name}`,
    description: `تحلیل محله‌ای پرشین‌سازه برای رصد پروژه‌های فعال ${neighborhood.name} در ${city.name}، با تمرکز بر ${neighborhood.focus}.`,
    focus: neighborhood.focus,
    marketCategory: neighborhood.marketCategory,
    demandSignals: neighborhood.demandSignals,
    citySummary: city.summary,
    projects: [],
  };
});

export const growthStageRoutes: GrowthStageRoute[] = [
  {
    stage: "excavation",
    stageName: "خاکبرداری",
    headline: "اطلاعات پروژه‌های ساختمانی در مرحله خاکبرداری",
    description:
      "صفحه برنامه‌ای برای شناسایی پروژه‌هایی که تازه وارد خاکبرداری شده‌اند و برای تامین‌کنندگان، پیمانکاران و تیم‌های فروش زمان طلایی تماس دارند.",
    projects: [
      {
        title: "پروژه مسکونی الهیه",
        builder: "گروه توسعه شمال تهران",
        stage: "خاکبرداری",
        location: "تهران، الهیه",
        locked: true,
        ctaLabel: upgradeCta,
      },
    ],
  },
  {
    stage: "foundation",
    stageName: "فونداسیون",
    headline: "اطلاعات پروژه‌های ساختمانی در مرحله فونداسیون",
    description:
      "صفحه برنامه‌ای برای پروژه‌هایی که به مرحله فونداسیون رسیده‌اند و به تامین بتن، میلگرد، قالب‌بندی و خدمات اجرایی نزدیک هستند.",
    projects: [
      {
        title: "پروژه مسکونی سروستان",
        builder: "گروه ساختمانی سرو",
        stage: "فونداسیون",
        location: "تهران، سعادت‌آباد",
        locked: true,
        ctaLabel: upgradeCta,
      },
    ],
  },
  {
    stage: "masonry",
    stageName: "سفت‌کاری",
    headline: "اطلاعات پروژه‌های ساختمانی در مرحله سفت‌کاری",
    description:
      "صفحه برنامه‌ای برای تیم‌هایی که مصالح دیوارچینی، سقف، تاسیسات اولیه و خدمات اجرایی مرحله سفت‌کاری را می‌فروشند.",
    projects: [
      {
        title: "پروژه تجاری سردار جنگل",
        builder: "گروه توسعه شمال‌غرب",
        stage: "سفت‌کاری",
        location: "تهران، پونک",
        locked: true,
        ctaLabel: upgradeCta,
      },
    ],
  },
  {
    stage: "finishing",
    stageName: "نازک‌کاری",
    headline: "اطلاعات پروژه‌های ساختمانی در مرحله نازک‌کاری",
    description:
      "صفحه برنامه‌ای برای فروشندگان کاشی، سرامیک، درب، پنجره، تجهیزات داخلی، رنگ و خدمات تکمیلی در پروژه‌های نزدیک به تحویل.",
    projects: [
      {
        title: "برج اداری کاج",
        builder: "شرکت توسعه کاج",
        stage: "نازک‌کاری",
        location: "تهران، سعادت‌آباد",
        locked: true,
        ctaLabel: upgradeCta,
      },
    ],
  },
];
