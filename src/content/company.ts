export type ImageAsset = {
  src: string;
  alt: string;
};

export type InfoCard = {
  title: string;
  body: string;
  image?: ImageAsset;
};

export const assets = {
  aboutHero: {
    src: "/assets/company/about-hero.webp",
    alt: "عکس گروهی تیم پرشین‌سازه",
  },
  aboutTeam: {
    src: "/assets/company/about-team.webp",
    alt: "تیم پرشین‌سازه",
  },
  aboutOrigin: {
    src: "/assets/company/about-origin.webp",
    alt: "روایت شروع پرشین‌سازه",
  },
  aboutSolution: {
    src: "/assets/company/about-solution.webp",
    alt: "پرشین‌سازه به عنوان راهکار همه‌جانبه فروش",
  },
  academyHero: {
    src: "/assets/company/academy-hero.webp",
    alt: "کارگاه آموزشی آکادمی پرشین‌سازه",
  },
  academyCover: {
    src: "/assets/company/academy-cover.webp",
    alt: "ویدیو آکادمی پرشین‌سازه",
  },
  contactHero: {
    src: "/assets/company/contact-hero.webp",
    alt: "تیم پاسخگویی پرشین‌سازه",
  },
  contactConsultation: {
    src: "/assets/company/contact-consultation.webp",
    alt: "درخواست مشاوره رایگان پرشین‌سازه",
  },
  companyVideo: {
    src: "/assets/company/company-video-cover.webp",
    alt: "محیط پرشین‌سازه",
  },
};

export const productLayers: InfoCard[] = [
  {
    title: "داده زنده پروژه‌ها",
    body: "پروژه ساختمانی در پرشین‌سازه یک رکورد ثابت نیست؛ با موقعیت، مرحله ساخت، تصویر، وضعیت و امکان اقدام فروش رصد و به‌روزرسانی می‌شود.",
    image: { src: "/assets/company/service-information.webp", alt: "اطلاعات و سرنخ‌ها" },
  },
  {
    title: "ابزار اجرایی فروش",
    body: "نقشه، فیلتر، CRM، پیامک، گزارش و یادآور کمک می‌کند فاصله میان دیدن فرصت تا اقدام فروش کوتاه‌تر و منظم‌تر شود.",
    image: { src: "/assets/company/service-tools.webp", alt: "ابزار و راهکارها" },
  },
  {
    title: "آموزش و موفقیت مشتری",
    body: "کاربر باید بداند کدام مرحله برای محصولش مهم است، چه زمانی تماس بگیرد و چطور فرصت را پیگیری کند؛ آموزش بخشی از خود محصول است.",
    image: { src: "/assets/company/service-education.webp", alt: "آموزش و پشتیبانی" },
  },
];

export const productWorkflow = [
  "شناسایی پروژه‌های هم‌خوان با منطقه، مرحله ساخت و نوع نیاز",
  "ارزیابی و اولویت‌بندی فرصت‌ها بر اساس تازگی، مرحله و امکان اقدام",
  "شروع ارتباط با زمینه درست، نه تماس کور با شماره خام",
  "ثبت فعالیت، تعیین پیگیری بعدی و نزدیک کردن فرصت به فروش",
];

export const productBoundaries = [
  "پرشین‌سازه فقط بانک شماره تماس نیست؛ شماره بدون مرحله، تصویر، زمان و پیگیری ارزش محدودی دارد.",
  "پرشین‌سازه فقط CRM نیست؛ CRM بدون داده زنده بازار، صرفاً ابزار ثبت فعالیت است.",
  "پرشین‌سازه فقط ابزار پیامک نیست؛ پیامک وقتی ارزش دارد که روی پروژه و مرحله درست استفاده شود.",
  "پرشین‌سازه فروش را تضمین نمی‌کند؛ مسیر رسیدن به فرصت مناسب و پیگیری آن را حرفه‌ای‌تر می‌کند.",
];

export const productMetrics = [
  { value: "۱۸", label: "سال تجربه بازار ساختمان" },
  { value: "۱۸۷۰۰۰+", label: "پروژه ساختمانی ثبت‌شده در تجربه عملیاتی" },
  { value: "۲۰۰۰+", label: "مشتری فعال در اکوسیستم فعلی" },
];

export const featureCards: InfoCard[] = [
  {
    title: "فیلتر و دسته‌بندی اطلاعات",
    body: "پروژه‌ها بر اساس مرحله ساخت، موقعیت، مقیاس و تناسب فروش قابل جداسازی می‌شوند تا تیم فروش با لیست خام شروع نکند.",
    image: { src: "/assets/company/feature-filtering.webp", alt: "فیلتر و دسته‌بندی اطلاعات" },
  },
  {
    title: "مشاهده روی نقشه و مسیریابی",
    body: "فرصت‌ها روی نقشه دیده می‌شوند تا مسیر بازدید، منطقه هدف و تراکم پروژه‌ها برای تیم فروش روشن‌تر شود.",
    image: { src: "/assets/company/feature-map.webp", alt: "مشاهده پروژه‌ها روی نقشه" },
  },
  {
    title: "CRM متصل به داده پروژه",
    body: "هر پروژه می‌تواند به فرصت قابل پیگیری تبدیل شود؛ تماس، نتیجه، یادداشت و اقدام بعدی کنار همان پروژه ثبت می‌شود.",
    image: { src: "/assets/company/feature-crm.webp", alt: "CRM متصل به بانک اطلاعات" },
  },
  {
    title: "پیامک هدفمند",
    body: "پیامک به جای ارسال کور، می‌تواند با مرحله ساخت، منطقه، گروه پروژه یا هدف مشخص فروش هماهنگ شود.",
    image: { src: "/assets/company/feature-sms.webp", alt: "ارسال پیامک هدفمند" },
  },
  {
    title: "گزارش، یادداشت و یادآور",
    body: "تیم فروش می‌تواند نتیجه ارتباط‌ها را ثبت کند، پیگیری بعدی بسازد و فرصت‌ها را از حافظه فردی خارج کند.",
    image: { src: "/assets/company/feature-report.webp", alt: "گزارش‌گیری و یادآور" },
  },
  {
    title: "چندکاربره و قابل کنترل",
    body: "برای تیم‌هایی که چند فروشنده دارند، دسترسی‌ها، وظایف و پیگیری‌ها باید قابل تقسیم و قابل رصد باشد.",
    image: { src: "/assets/company/feature-multi-user.webp", alt: "چندکاربره با دسترسی اختصاصی" },
  },
  {
    title: "تعریف وظیفه برای همکاران",
    body: "فرصت‌ها می‌توانند به اقدام مشخص تبدیل شوند؛ از تماس و ارسال کاتالوگ تا مذاکره و پیگیری بعدی.",
    image: { src: "/assets/company/feature-task.webp", alt: "تعریف کار و وظیفه" },
  },
  {
    title: "خروجی و چاپ اطلاعات",
    body: "وقتی تیم فروش هنوز با فایل، جلسه یا بازدید میدانی کار می‌کند، خروجی گرفتن بخشی از جریان واقعی کار است.",
    image: { src: "/assets/company/feature-print.webp", alt: "چاپ و خروجی گرفتن از اطلاعات" },
  },
];

export const dataOperations: InfoCard[] = [
  {
    title: "گردآوری میدانی",
    body: "اطلاعات پروژه، آدرس، مرحله ساخت، تصویر و مسیر ارتباطی از سطح بازار جمع‌آوری می‌شود.",
    image: { src: "/assets/company/process-collection.webp", alt: "گردآوری اطلاعات" },
  },
  {
    title: "صحت‌سنجی و کنترل کیفیت",
    body: "داده قبل از تبدیل شدن به فرصت فروش باید از نظر تازگی، مرحله، تصویر و اطلاعات تماس بررسی شود.",
    image: { src: "/assets/company/process-verification.webp", alt: "صحت‌سنجی اطلاعات" },
  },
  {
    title: "ارائه و پشتیبانی",
    body: "کاربر فقط داده نمی‌گیرد؛ برای استفاده، پیگیری، فیلتر و فروش بهتر پشتیبانی می‌شود.",
    image: { src: "/assets/company/process-support.webp", alt: "ارائه اطلاعات و پشتیبانی" },
  },
  {
    title: "به‌روزرسانی پیوسته",
    body: "پروژه‌ها در طول زمان تغییر می‌کنند و ارزش داده به رصد همین تغییرات وابسته است.",
    image: { src: "/assets/company/process-update.webp", alt: "به‌روزرسانی پیوسته" },
  },
];

export const educationTracks: InfoCard[] = [
  {
    title: "اصول بازاریابی و فروش",
    body: "چارچوب پایه برای فهم بازار، مشتری، پیام فروش و مسیر تبدیل فرصت به مذاکره.",
    image: { src: "/assets/company/course-marketing.webp", alt: "اصول بازاریابی و فروش" },
  },
  {
    title: "مهارت‌های کاربردی فروش",
    body: "تمرین تماس، پیگیری، مذاکره و مدیریت فرصت در فروش پروژه‌محور ساختمانی.",
    image: { src: "/assets/company/course-sales-skills.webp", alt: "مهارت‌های کاربردی فروش" },
  },
  {
    title: "دیجیتال مارکتینگ",
    body: "کمک به تیم‌ها برای اتصال فروش میدانی، برند، محتوا و کانال‌های دیجیتال.",
    image: { src: "/assets/company/course-digital.webp", alt: "دیجیتال مارکتینگ" },
  },
  {
    title: "برندسازی",
    body: "ساخت اعتماد، پیام روشن و جایگاه قابل دفاع برای فروش در بازار رقابتی ساختمان.",
    image: { src: "/assets/company/course-branding.webp", alt: "برند سازی" },
  },
  {
    title: "تیم‌سازی و منابع انسانی",
    body: "فروش پروژه‌محور بدون تیم منظم و نقش‌های شفاف، به حافظه فردی وابسته می‌ماند.",
    image: { src: "/assets/company/course-hr.webp", alt: "تیم‌سازی و منابع انسانی" },
  },
  {
    title: "مدیریت و رهبری",
    body: "برای مدیرانی که می‌خواهند فروش، داده، پیگیری و عملکرد تیم را هم‌زمان کنترل کنند.",
    image: { src: "/assets/company/course-leadership.webp", alt: "مدیریت و رهبری" },
  },
];

export const educationStats = [
  { value: "۳۸+", label: "دوره برگزار شده" },
  { value: "۲۰۰۰+", label: "شرکت‌کننده و کاربر آموزش‌دیده" },
  { value: "۶", label: "محور آموزشی اصلی" },
];

export const aboutStats = [
  { value: "۱۳۸۶", label: "شروع فعالیت میدانی از تهران" },
  { value: "۱۸", label: "سال تجربه عملیاتی" },
  { value: "۳۸+", label: "عضو تیم" },
  { value: "۲۰۰۰+", label: "مشتری فعال" },
];

export const aboutValues = [
  {
    title: "شفافیت",
    body: "داده، فروش و پشتیبانی باید قابل توضیح و قابل پیگیری باشند؛ اعتماد از شفافیت ساخته می‌شود.",
  },
  {
    title: "رشد فردی",
    body: "بازار تغییر می‌کند و تیم‌ها باید با آموزش، تمرین و بازطراحی روش فروش رشد کنند.",
  },
  {
    title: "انسانیت",
    body: "پرشین‌سازه با فروشندگان، مشتریان و تیم داخلی به عنوان انسان‌های واقعی در یک مسیر کاری بلندمدت رفتار می‌کند.",
  },
];

export const contactCards = [
  { title: "فروش و درخواست دمو", body: "۰۲۱-۷۵۴۲۵۰۰۰", href: "tel:+982175425000" },
  { title: "دفتر و پشتیبانی", body: "۰۲۱-۷۲۸۹۷۰۰۰", href: "tel:+982172897000" },
  { title: "ایمیل", body: "Info@PersianSaze.com", href: "mailto:Info@PersianSaze.com" },
  { title: "آدرس", body: "تهران، سعادت‌آباد، میدان کاج، نبش خیابان پانزدهم، ساختمان ۴۸، طبقه هفتم واحد ۱۳", href: "https://www.google.com/maps/place/%D9%BE%D8%B1%D8%B4%DB%8C%D9%86+%D8%B3%D8%A7%D8%B2%D9%87%E2%80%AD/@35.7791964,51.3759454,18.94z/data=!4m6!3m5!1s0x3f8e07a2fa35dbff:0xa2adc10f4130c19e!8m2!3d35.7790528!4d51.3756886!16s%2Fg%2F11tmkkmrxh" },
];
