export type MarketAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type MarketCityRow = {
  city: string;
  activeProjects: string;
  neighborhoods: string;
  strongestSignals: string;
  bestUse: string;
  href: string;
};

export type MarketStageRow = {
  stage: string;
  activeProjects: string;
  salesWindow: string;
  likelyNeeds: string;
  href: string;
};

export type MarketFaq = {
  question: string;
  answer: string;
};

export const marketPage = {
  title: "آمار بازار پروژه‌های ساختمانی | پرشین‌سازه",
  description:
    "Snapshot ساختاریافته پرشین‌سازه از پروژه‌های ساختمانی فعال بر اساس شهر، مرحله ساخت و پنجره فروش برای تامین‌کنندگان مصالح و خدمات ساختمانی.",
  canonicalPath: "/market/",
  breadcrumb: "آمار بازار",
  eyebrow: "داده بازار ساخت‌وساز",
  headline: "چند پروژه فعال ساختمانی در بازار قابل رصد است؟",
  lede:
    "پرشین‌سازه برای فروش B2B ساختمانی، پروژه‌های فعال را فقط به شکل لیست خام نمایش نمی‌دهد؛ بازار را بر اساس شهر، مرحله ساخت و زمان مناسب ورود تیم فروش قابل خواندن می‌کند.",
  summaryLabel: "پروژه فعال در بیشترین سطح پوشش",
  summaryText:
    "این عدد از داده عمومی پلن تابان پلاس خوانده می‌شود و در این صفحه به صورت snapshot ساختاریافته برای موتورهای پاسخ‌گو و تیم‌های فروش منتشر شده است.",
  sourceNote:
    "وضعیت داده: نسخه عمومی خرداد ۱۴۰۵. تا اتصال مستقیم این صفحه به API پروژه‌ها، اعداد از ماژول محتوایی سایت خوانده می‌شوند و باید به عنوان snapshot انتشار عمومی تفسیر شوند.",
  actions: [
    { label: "دیدن پلن‌های دسترسی", href: "/subscriptions/", variant: "primary" },
    { label: "مشاهده شهرها", href: "/projects/", variant: "secondary" },
  ] satisfies MarketAction[],
};

export const marketSnapshot = {
  totalActiveProjects: "+۳۰٬۰۰۰",
  updatedLabel: "خرداد ۱۴۰۵",
  datasetName: "PersianSaze public construction market snapshot",
  datasetDescription:
    "Snapshot عمومی از حجم پروژه‌های فعال قابل رصد در پرشین‌سازه، تفکیک‌شده برای استفاده در تحلیل بازار، فروش پروژه‌محور، AEO و GEO.",
  isoDateModified: "2026-06-14",
  citySectionTitle: "پروژه‌های فعال به تفکیک شهر و خوشه بازار",
  citySectionLede:
    "تفکیک شهری کمک می‌کند تامین‌کننده بداند فشار فروش، لجستیک، نوع سازنده و پیام مذاکره در هر بازار چه تفاوتی دارد.",
  stageSectionTitle: "پروژه‌های فعال به تفکیک مرحله ساخت",
  stageSectionLede:
    "مرحله ساخت، زمان ورود فروشنده را تعیین می‌کند؛ یک پروژه در فونداسیون با پروژه نزدیک تحویل، نیاز خرید و ریتم مذاکره یکسان ندارد.",
  cityTableHeaders: ["شهر / خوشه", "پروژه فعال", "محدوده پوشش", "سیگنال اصلی", "کاربرد فروش"],
  stageTableHeaders: ["مرحله ساخت", "پروژه فعال", "پنجره فروش", "نیازهای محتمل"],
  faqSectionTitle: "پرسش‌های رایج درباره آمار بازار",
  faqSectionLede: "این پرسش‌ها همان متن قابل‌مشاهده‌ای هستند که در FAQPage schema همین صفحه هم منتشر می‌شوند.",
  cityRows: [
    {
      city: "تهران",
      activeProjects: "+۲۲٬۰۰۰",
      neighborhoods: "۳۶ محدوده پروژه‌محور",
      strongestSignals: "نوسازی، برج‌سازی، اداری-تجاری، بافت فرسوده",
      bestUse: "اولویت‌بندی فروش بر اساس منطقه، مرحله ساخت و مقیاس پروژه",
      href: "/projects/tehran/",
    },
    {
      city: "کرج و البرز",
      activeProjects: "+۵٬۵۰۰",
      neighborhoods: "۱۱ محدوده پروژه‌محور",
      strongestSignals: "مسکونی پرتراکم، صنعتی، ویلا و شهرهای جدید",
      bestUse: "تشخیص پروژه‌های میان‌رده، حجمی و فرصت‌های حومه غربی",
      href: "/projects/karaj/",
    },
    {
      city: "لواسان و شمیرانات",
      activeProjects: "+۲٬۵۰۰",
      neighborhoods: "۵ محدوده پروژه‌محور",
      strongestSignals: "ویلاسازی لوکس، محوطه‌سازی، متریال ممتاز و smart home",
      bestUse: "تمرکز روی فروش مشاوره‌ای، سفارش‌های خاص و تصمیم‌گیری چندمرحله‌ای",
      href: "/projects/lavasan/",
    },
  ] satisfies MarketCityRow[],
  stageRows: [
    {
      stage: "طراحی و اخذ جواز",
      activeProjects: "+۲٬۲۰۰",
      salesWindow: "پیش از شروع عملیات و زمان تصمیم‌سازی",
      likelyNeeds: "طراحی، ژئوتکنیک، برآورد، خدمات حقوقی و مشاوره فنی",
      href: "/construction-stages/permit-design/",
    },
    {
      stage: "تخریب و گودبرداری",
      activeProjects: "+۲٬۸۰۰",
      salesWindow: "شروع کارگاه و کنترل ریسک همسایه و گود",
      likelyNeeds: "ماشین‌آلات، حمل نخاله، پایدارسازی، ایمنی و آزمایش خاک",
      href: "/construction-stages/demolition-excavation/",
    },
    {
      stage: "فونداسیون",
      activeProjects: "+۳٬۲۰۰",
      salesWindow: "قبل از بتن‌ریزی و قطعی شدن تامین سنگین",
      likelyNeeds: "میلگرد، بتن آماده، قالب، پمپ بتن، افزودنی و کنترل کیفیت",
      href: "/construction-stages/foundation/",
    },
    {
      stage: "اسکلت بندی",
      activeProjects: "+۴٬۵۰۰",
      salesWindow: "زمان خرید فولاد، سیستم سقف و کنترل اجرایی",
      likelyNeeds: "مقاطع فولادی، میلگرد، سقف، جوش، پیچ‌ومهره و تست",
      href: "/construction-stages/structure/",
    },
    {
      stage: "دیوارچینی و سفت کاری",
      activeProjects: "+۵٬۱۰۰",
      salesWindow: "بعد از استقرار اسکلت و قبل از بستن فضاها",
      likelyNeeds: "آجر، بلوک، ملات، عایق اولیه، چهارچوب و بازشوها",
      href: "/construction-stages/masonry-shell/",
    },
    {
      stage: "گچ و خاک و تاسیسات",
      activeProjects: "+۴٬۳۰۰",
      salesWindow: "قبل از دفن شدن مسیرهای مکانیکی و الکتریکی",
      likelyNeeds: "لوله، اتصالات، کابل، تابلو، HVAC و اجرای تخصصی",
      href: "/construction-stages/mep-rough-in/",
    },
    {
      stage: "ابتدای نازک کاری",
      activeProjects: "+۳٬۶۰۰",
      salesWindow: "زمان آماده‌سازی سطح و اصلاح زیرکار",
      likelyNeeds: "گچ، خاک، پودر سنگ، ابزار اندودکاری و خدمات اجرایی",
      href: "/construction-stages/plaster-base/",
    },
    {
      stage: "نازک کاری و نما",
      activeProjects: "+۳٬۳۰۰",
      salesWindow: "زمان انتخاب متریال نهایی و ظاهر پروژه",
      likelyNeeds: "کف، نما، عایق، رنگ، در و پنجره و دکوراسیون",
      href: "/construction-stages/finishing-facade/",
    },
    {
      stage: "ظریف کاری و پایان کار",
      activeProjects: "+۱٬۰۰۰",
      salesWindow: "نزدیک تحویل، رفع نقص و تکمیل تجهیزات",
      likelyNeeds: "کلید و پریز، حفاظتی، تست، مستندسازی و نگهداری",
      href: "/construction-stages/final-handover/",
    },
  ] satisfies MarketStageRow[],
};

export const marketMethodology = {
  title: "این snapshot چطور باید خوانده شود؟",
  lede:
    "هدف این صفحه تصمیم‌سازی فروش است، نه انتشار فایل خام پروژه‌ها. عددها به صورت ساختاریافته نمایش داده می‌شوند تا هم انسان و هم موتور پاسخ‌گو بتواند شهر، مرحله و کاربرد فروش را استخراج کند.",
  cards: [
    {
      title: "عدد کل از سطح پوشش عمومی می‌آید",
      body:
        "عدد +۳۰٬۰۰۰ از بالاترین سطح پوشش عمومی اشتراک‌های پرشین‌سازه خوانده می‌شود و در این صفحه به شهر و مرحله تبدیل شده تا قابل تحلیل باشد.",
    },
    {
      title: "تفکیک مرحله برای زمان‌بندی فروش است",
      body:
        "مرحله ساخت نشان می‌دهد کدام تامین‌کننده الان باید وارد گفت‌وگو شود، کدام باید پایش کند و کدام احتمالا دیر رسیده است.",
    },
    {
      title: "اتصال API مرحله بعدی است",
      body:
        "در نسخه بعدی، همین ساختار می‌تواند به API پروژه‌ها وصل شود تا تاریخ به‌روزرسانی، تغییر مرحله و روند شهرها به صورت زنده منتشر شود.",
    },
  ],
};

export const marketFaqs: MarketFaq[] = [
  {
    question: "چند پروژه فعال ساختمانی در پرشین‌سازه قابل رصد است؟",
    answer:
      "در سطح پوشش عمومی تابان پلاس، پرشین‌سازه بیش از ۳۰٬۰۰۰ پروژه فعال ساختمانی را برای رصد بازار و فروش پروژه‌محور نمایش می‌دهد.",
  },
  {
    question: "آیا اعداد این صفحه زنده هستند؟",
    answer:
      "در این نسخه، اعداد از ماژول محتوایی سایت خوانده می‌شوند و snapshot عمومی خرداد ۱۴۰۵ هستند. ساختار صفحه برای اتصال بعدی به API پروژه‌ها آماده شده است.",
  },
  {
    question: "چرا تفکیک شهر و مرحله ساخت برای فروش مهم است؟",
    answer:
      "چون محصول مناسب، زمان تماس، پیام فروش و ریسک مذاکره در هر شهر و هر مرحله ساخت متفاوت است. فروشنده با این تفکیک می‌تواند فرصت‌های نزدیک‌تر به خرید را زودتر تشخیص دهد.",
  },
];
