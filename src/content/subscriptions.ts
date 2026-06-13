import type { ImageMetadata } from "astro";
import bonyanIcon from "@/assets/subscriptions/bonyan.webp";
import rouyanIcon from "@/assets/subscriptions/rouyan.webp";
import tabanIcon from "@/assets/subscriptions/taban.webp";
import tabanPlusIcon from "@/assets/subscriptions/tabanplus.webp";

export type SubscriptionDuration = "3" | "6" | "12";

export type SubscriptionPlan = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  headline: string;
  metaTitle: string;
  metaDescription: string;
  iconSrc: ImageMetadata;
  iconAlt: string;
  landLine: string;
  highlights: string[];
  prices: Record<SubscriptionDuration, string>;
  addonPrice: string;
  coverageLabel: string;
  coverageLevel: number;
  cta: string;
  activeProjects: string;
  exclusiveProjects: string;
  idealFor: string;
  description: string;
  detailFeatures: {
    available: boolean;
    label: string;
    value: string;
  }[];
};

export type SubscriptionComparisonRow = {
  label: string;
  values: Record<string, string>;
};

export const defaultSubscriptionDuration: SubscriptionDuration = "3";

export const parseTomanPrice = (value: string) =>
  Number(
    String(value)
      .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
      .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)))
      .replace(/[^\d]/g, ""),
  );

export const toIrrPrice = (value: string) => parseTomanPrice(value) * 10;

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "bonyan",
    slug: "bonyan",
    name: "بنیان",
    subtitle: "پایه‌ی کار، به‌صرفه",
    headline: "اشتراک بنیان: پایه‌ی به‌صرفه برای شروع فروش",
    metaTitle: "اشتراک بنیان برای شروع فروش پروژه‌محور | پرشین‌سازه",
    metaDescription:
      "اشتراک بنیان برای تیم‌هایی است که می‌خواهند با هزینه کنترل‌شده وارد فروش پروژه‌محور شوند و با داده، CRM، پیامک و آموزش مسیر فروش را منظم کنند.",
    iconSrc: bonyanIcon,
    iconAlt: "آیکون اشتراک بنیان",
    landLine: "زمین تا ۳۰۰ متر",
    highlights: [
      "شروع سبک برای تیم‌های فروش کوچک",
      "تمرکز روی فرصت‌های نزدیک‌تر و قابل پیگیری",
      "مناسب برای تست بازار بدون هزینه سنگین",
    ],
    prices: {
      "3": "۹,۰۰۰,۰۰۰",
      "6": "۱۳,۵۰۰,۰۰۰",
      "12": "۱۸,۰۰۰,۰۰۰",
    },
    addonPrice: "۳,۰۰۰,۰۰۰",
    coverageLabel: "۱ از ۴",
    coverageLevel: 1,
    cta: "ویژگی‌های بنیان",
    activeProjects: "+۱۶,۵۰۰",
    exclusiveProjects: "ندارد",
    idealFor:
      "برای تیم‌هایی که می‌خواهند با هزینه کنترل‌شده وارد فروش پروژه‌محور شوند، ریتم تماس و ارزیابی فرصت را بسازند و قبل از افزایش پوشش بازار، مسیر پیگیری را تمرین کنند.",
    description:
      "بنیان نقطه شروع حرفه‌ای برای حضور در بازار پروژه‌های ساختمانی است. تعداد پروژه‌ها محدودتر است، اما کیفیت داده، CRM متصل به بانک اطلاعات، پنل پیامک و آموزش فروش همچنان در دسترس تیم قرار می‌گیرد.",
    detailFeatures: [
      { available: true, label: "متراژ زمین", value: "تا ۳۰۰ متر" },
      { available: true, label: "بازدید پروژه‌ها", value: "روزانه ۵۰ پروژه" },
      { available: false, label: "شهرهای حومه", value: "ندارد" },
      { available: true, label: "پنل تبلیغات و پیامک", value: "بدون شارژ اولیه؛ شارژ جداگانه" },
      { available: false, label: "سرشماره‌ی خدماتی پنل پیامک", value: "باید خریداری شود" },
      { available: true, label: "CRM فرایندهای فروش", value: "دارد" },
      { available: true, label: "کارگاه‌های آموزشی", value: "۲ بار، ۱۶ ساعت" },
    ],
  },
  {
    id: "royan",
    slug: "royan",
    name: "رویان",
    subtitle: "حرفه‌ای و به‌صرفه",
    headline: "اشتراک رویان: دسترسی حرفه‌ای و به‌صرفه",
    metaTitle: "اشتراک رویان برای رشد فروش ساختمانی | پرشین‌سازه",
    metaDescription:
      "اشتراک رویان برای تیم‌هایی است که از تست بازار عبور کرده‌اند و می‌خواهند پروژه‌های بیشتری ببینند، پیگیری منظم‌تری داشته باشند و با هزینه منطقی رشد کنند.",
    iconSrc: rouyanIcon,
    iconAlt: "آیکون اشتراک رویان",
    landLine: "زمین تا ۵۰۰ متر",
    highlights: [
      "برای تیمی که تماس‌های منظم‌تری می‌سازد",
      "دامنه بهتر برای کشف پروژه‌های در حال رشد",
      "مناسب برای تبدیل پیگیری پراکنده به برنامه فروش",
    ],
    prices: {
      "3": "۱۲,۰۰۰,۰۰۰",
      "6": "۱۸,۰۰۰,۰۰۰",
      "12": "۲۴,۰۰۰,۰۰۰",
    },
    addonPrice: "۴,۰۰۰,۰۰۰",
    coverageLabel: "۲ از ۴",
    coverageLevel: 2,
    cta: "ویژگی‌های رویان",
    activeProjects: "+۲۴,۵۰۰",
    exclusiveProjects: "+۷,۵۰۰",
    idealFor:
      "برای کسب‌وکارهایی که از مرحله تست بازار عبور کرده‌اند و حالا می‌خواهند با هزینه منطقی، پروژه‌های بیشتری ببینند و پیگیری فروش را جدی‌تر کنند.",
    description:
      "رویان مسیر رشد تیم فروش است؛ پوشش گسترده‌تر، فرصت‌های انحصاری بیشتر، سرشماره خدماتی، شارژ رایگان و کارگاه‌های آموزشی کمک می‌کند فرصت‌ها سریع‌تر و منظم‌تر پیگیری شوند.",
    detailFeatures: [
      { available: true, label: "متراژ زمین", value: "تا ۵۰۰ متر" },
      { available: true, label: "بازدید پروژه‌ها", value: "هفتگی ۵۰۰ پروژه" },
      { available: false, label: "شهرهای حومه", value: "ندارد" },
      { available: true, label: "پنل تبلیغات و پیامک", value: "بدون شارژ اولیه؛ شارژ جداگانه" },
      { available: true, label: "سرشماره‌ی خدماتی پنل پیامک", value: "۱۰ روز رایگان در اشتراک یک‌ساله" },
      { available: true, label: "CRM فرایندهای فروش", value: "دارد" },
      { available: true, label: "کارگاه‌های آموزشی", value: "۲ بار، ۱۶ ساعت" },
    ],
  },
  {
    id: "taban",
    slug: "taban",
    name: "تابان",
    subtitle: "برگ برنده: پروژه‌های خاص و بیشتر",
    headline: "اشتراک تابان: پروژه‌های خاص و انحصاری",
    metaTitle: "اشتراک تابان برای پروژه‌های خاص | پرشین‌سازه",
    metaDescription:
      "اشتراک تابان برای تیم‌هایی است که به پروژه‌های بزرگ‌تر، خاص‌تر و فرصت‌های حومه نیاز دارند و می‌خواهند فروش پروژه‌محور را جدی‌تر پیش ببرند.",
    iconSrc: tabanIcon,
    iconAlt: "آیکون اشتراک تابان",
    landLine: "زمین تا ۷۰۰ متر",
    highlights: [
      "برای فروش جدی‌تر با پوشش میدانی گسترده‌تر",
      "اولویت‌دهی بهتر بین پروژه‌های داغ و قابل مذاکره",
      "انتخاب مناسب برای تیم‌هایی که سهم بیشتری می‌خواهند",
    ],
    prices: {
      "3": "۱۵,۰۰۰,۰۰۰",
      "6": "۲۲,۵۰۰,۰۰۰",
      "12": "۳۰,۰۰۰,۰۰۰",
    },
    addonPrice: "۵,۰۰۰,۰۰۰",
    coverageLabel: "۳ از ۴",
    coverageLevel: 3,
    cta: "ویژگی‌های تابان",
    activeProjects: "+۲۶,۵۰۰",
    exclusiveProjects: "+۲,۰۰۰",
    idealFor:
      "برای تیم‌هایی که بازار اصلی‌شان پروژه‌های بزرگ‌تر و خاص‌تر است و می‌خواهند علاوه بر تهران، فرصت‌های حومه را هم وارد مسیر فروش کنند.",
    description:
      "تابان همه امکانات اشتراک‌های قبلی را دارد و مزیت جدی‌تری اضافه می‌کند: دسترسی به پروژه‌های خاص و انحصاری، پوشش شهرهای حومه و آموزش گسترده‌تر برای تیم فروش.",
    detailFeatures: [
      { available: true, label: "متراژ زمین", value: "تا ۷۰۰ متر" },
      { available: true, label: "بازدید پروژه‌ها", value: "هفتگی ۵۰۰ پروژه" },
      { available: true, label: "شهرهای حومه", value: "دارد" },
      { available: true, label: "پنل تبلیغات و پیامک", value: "۱,۵۰۰ شارژ رایگان در اشتراک یک‌ساله" },
      { available: true, label: "سرشماره‌ی خدماتی پنل پیامک", value: "۲۰ روز رایگان در اشتراک یک‌ساله" },
      { available: true, label: "CRM فرایندهای فروش", value: "دارد" },
      { available: true, label: "کارگاه‌های آموزشی", value: "۴ بار، ۳۲ ساعت" },
    ],
  },
  {
    id: "taban-plus",
    slug: "taban-plus",
    name: "تابان پلاس",
    subtitle: "بازار در دستان شما",
    headline: "اشتراک تابان پلاس: بازار در دستان شما",
    metaTitle: "اشتراک تابان پلاس برای تسلط بر بازار | پرشین‌سازه",
    metaDescription:
      "اشتراک تابان پلاس برای تیم‌هایی است که پوشش کامل‌تر، پروژه‌های بیشتر، متراژ بدون محدودیت و مشاوره فروش و مارکتینگ جدی‌تر می‌خواهند.",
    iconSrc: tabanPlusIcon,
    iconAlt: "آیکون اشتراک تابان پلاس",
    landLine: "بدون محدودیت متراژ",
    highlights: [
      "برای تیم‌هایی که چند منطقه را هم‌زمان پوشش می‌دهند",
      "دید وسیع‌تر روی پروژه‌های بزرگ و تصمیم‌ساز",
      "مناسب برای ساختن قیف فروش سنگین‌تر و پایدارتر",
    ],
    prices: {
      "3": "۱۸,۰۰۰,۰۰۰",
      "6": "۲۷,۰۰۰,۰۰۰",
      "12": "۳۶,۰۰۰,۰۰۰",
    },
    addonPrice: "۶,۰۰۰,۰۰۰",
    coverageLabel: "۴ از ۴",
    coverageLevel: 4,
    cta: "ویژگی‌های تابان پلاس",
    activeProjects: "+۳۰,۰۰۰",
    exclusiveProjects: "+۲,۵۰۰",
    idealFor:
      "برای تیم‌های فروش چندمنطقه‌ای و جدی که محدودیت متراژ و پوشش برایشان مانع رشد است و می‌خواهند بازار را فعالانه بسازند.",
    description:
      "تابان پلاس بیشترین دسترسی را کنار هم می‌گذارد: پروژه‌های بیشتر، متراژ بدون محدودیت، فرصت‌های خاص‌تر، شهرهای حومه و پشتوانه آموزشی و اجرایی کامل‌تر.",
    detailFeatures: [
      { available: true, label: "متراژ زمین", value: "بدون محدودیت" },
      { available: true, label: "بازدید پروژه‌ها", value: "هفتگی ۵۰۰ پروژه" },
      { available: true, label: "شهرهای حومه", value: "دارد" },
      { available: true, label: "پنل تبلیغات و پیامک", value: "۳,۰۰۰ شارژ رایگان در اشتراک یک‌ساله" },
      { available: true, label: "سرشماره‌ی خدماتی پنل پیامک", value: "۳۰ روز رایگان در اشتراک یک‌ساله" },
      { available: true, label: "CRM فرایندهای فروش", value: "دارد" },
      { available: true, label: "کارگاه‌های آموزشی", value: "۸ بار، ۶۴ ساعت" },
    ],
  },
];

export const subscriptionComparisonRows: SubscriptionComparisonRow[] = [
  {
    label: "پروژه‌های فعال",
    values: {
      bonyan: "+۱۶,۵۰۰",
      royan: "+۲۴,۵۰۰",
      taban: "+۲۶,۵۰۰",
      "taban-plus": "+۳۰,۰۰۰",
    },
  },
  {
    label: "پروژه‌های انحصاری",
    values: {
      bonyan: "ندارد",
      royan: "+۷,۵۰۰",
      taban: "+۲,۰۰۰",
      "taban-plus": "+۲,۵۰۰",
    },
  },
  {
    label: "متراژ زمین",
    values: {
      bonyan: "تا ۳۰۰ متر",
      royan: "تا ۵۰۰ متر",
      taban: "تا ۷۰۰ متر",
      "taban-plus": "بدون محدودیت",
    },
  },
  {
    label: "بازدید پروژه‌ها",
    values: {
      bonyan: "روزانه ۵۰ پروژه",
      royan: "هفتگی ۵۰۰ پروژه",
      taban: "هفتگی ۵۰۰ پروژه",
      "taban-plus": "هفتگی ۵۰۰ پروژه",
    },
  },
  {
    label: "شهرهای حومه",
    values: {
      bonyan: "ندارد",
      royan: "ندارد",
      taban: "دارد",
      "taban-plus": "دارد",
    },
  },
  {
    label: "پنل تبلیغات و پیامک",
    values: {
      bonyan: "بدون شارژ اولیه؛ شارژ جداگانه",
      royan: "بدون شارژ اولیه؛ شارژ جداگانه",
      taban: "۱,۵۰۰ شارژ رایگان در اشتراک یک‌ساله",
      "taban-plus": "۳,۰۰۰ شارژ رایگان در اشتراک یک‌ساله",
    },
  },
  {
    label: "سرشماره‌ی خدماتی پنل پیامک",
    values: {
      bonyan: "باید خریداری شود",
      royan: "۱۰ روز رایگان در اشتراک یک‌ساله",
      taban: "۲۰ روز رایگان در اشتراک یک‌ساله",
      "taban-plus": "۳۰ روز رایگان در اشتراک یک‌ساله",
    },
  },
  {
    label: "CRM فرایندهای فروش",
    values: {
      bonyan: "دارد",
      royan: "دارد",
      taban: "دارد",
      "taban-plus": "دارد",
    },
  },
  {
    label: "کارگاه‌های آموزشی",
    values: {
      bonyan: "۲ بار، ۱۶ ساعت",
      royan: "۲ بار، ۱۶ ساعت",
      taban: "۴ بار، ۳۲ ساعت",
      "taban-plus": "۸ بار، ۶۴ ساعت",
    },
  },
];

export const pricing = {
  title: "زمین بازی خود را انتخاب کنید",
  description:
    "در بازار داده، قیمت ارزان یعنی دسترسی همگانی، رقابت شلوغ و سوختن فرصت‌ها. تفکیک ساختاریافته‌ی اشتراک‌ها در پرشین‌سازه، رقابت را متعادل و سودآور نگه می‌دارد.",
  stagesIncluded: "۳ مرحله ساخت",
  coverage: "پوشش بازار",
  currency: "تومان",
  durations: [
    { id: "3", label: "۳ ماهه", note: "شروع کوتاه‌مدت" },
    { id: "6", label: "۶ ماهه", note: "تعادل هزینه و زمان" },
    { id: "12", label: "۱۲ ماهه", note: "بیشترین صرفه‌جویی" },
  ],
  plans: subscriptionPlans,
};
