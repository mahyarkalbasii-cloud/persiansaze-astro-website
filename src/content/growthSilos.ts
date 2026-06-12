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

export const projectNeighborhoodRoutes: ProjectNeighborhoodRoute[] = [
  {
    city: "tehran",
    cityName: "تهران",
    neighborhood: "saadat-abad",
    neighborhoodName: "سعادت‌آباد",
    headline: "پروژه‌های در حال ساخت سعادت‌آباد",
    description:
      "صفحه برنامه‌ای برای رصد پروژه‌های ساختمانی سعادت‌آباد، مناسب تیم‌های فروش B2B که به سیگنال مرحله ساخت، سازنده و موقعیت نیاز دارند.",
    projects: [
      {
        title: "پروژه مسکونی سروستان",
        builder: "گروه ساختمانی سرو",
        stage: "فونداسیون",
        location: "سعادت‌آباد، سرو غربی",
        locked: true,
        ctaLabel: upgradeCta,
      },
      {
        title: "برج اداری کاج",
        builder: "شرکت توسعه کاج",
        stage: "نازک‌کاری",
        location: "سعادت‌آباد، میدان کاج",
        locked: true,
        ctaLabel: upgradeCta,
      },
    ],
  },
  {
    city: "tehran",
    cityName: "تهران",
    neighborhood: "ponek",
    neighborhoodName: "پونک",
    headline: "پروژه‌های در حال ساخت پونک",
    description:
      "صفحه برنامه‌ای برای پایش پروژه‌های ساختمانی پونک و اولویت‌بندی فرصت‌های فروش مصالح، تجهیزات و خدمات ساختمانی.",
    projects: [
      {
        title: "مجتمع مسکونی عدل",
        builder: "سازنده حقیقی",
        stage: "اسکلت",
        location: "پونک، بلوار عدل",
        locked: true,
        ctaLabel: upgradeCta,
      },
      {
        title: "پروژه تجاری سردار جنگل",
        builder: "گروه توسعه شمال‌غرب",
        stage: "سفت‌کاری",
        location: "پونک، سردار جنگل",
        locked: true,
        ctaLabel: upgradeCta,
      },
    ],
  },
  {
    city: "tehran",
    cityName: "تهران",
    neighborhood: "elahiye",
    neighborhoodName: "الهیه",
    headline: "پروژه‌های در حال ساخت الهیه",
    description:
      "صفحه برنامه‌ای برای پروژه‌های ساختمانی الهیه با تمرکز روی فرصت‌های خاص، سازندگان فعال و مرحله فعلی ساخت.",
    projects: [
      {
        title: "رزیدنس فرشته",
        builder: "هلدینگ ساختمانی شمال تهران",
        stage: "خاکبرداری",
        location: "الهیه، خیابان فرشته",
        locked: true,
        ctaLabel: upgradeCta,
      },
      {
        title: "پروژه لوکس مریم",
        builder: "گروه معماری و اجرا",
        stage: "تاسیسات",
        location: "الهیه، مریم غربی",
        locked: true,
        ctaLabel: upgradeCta,
      },
    ],
  },
];

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
