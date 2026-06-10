# دیزاین‌سیستم پرشین‌سازه

منبع حقیقت توکن‌ها، بلوک `:root` در `src/styles/global.css` است. این سند مرجع تصمیم‌هاست؛ مقدار دقیق هر توکن را از همان فایل بخوانید و **توکن‌ها را override نکنید** — اگر مقداری باید عوض شود، خود توکن در `:root` (یا تم `body.home-color-anthropic`) اصلاح می‌شود.

## تایپوگرافی

- **فونت رسمی: Estedad** (تصمیم قطعی — جایگزین Vazirmatn که در نسخه‌های اولیه سند آمده بود).
- فایل‌ها self-hosted در `public/fonts/` با دو ساب‌ست: `estedad-arabic-*.woff2` و `estedad-latin-*.woff2` (ساب‌ست لاتین با `unicode-range` فقط در صورت نیاز دانلود می‌شود).
- وزن‌های موجود: ۴۰۰، ۵۰۰، ۶۰۰، ۷۰۰، ۸۰۰ — همگی در CSS مصرف می‌شوند؛ وزن جدید فقط با اضافه‌شدن `@font-face` متناظر.
- وزن‌های ۴۰۰ (بدنه)، ۷۰۰ (دکمه/strong) و ۸۰۰ (تیترها) در head صفحات preload می‌شوند.
- توکن: `--font-sans: "Estedad", ui-sans-serif, system-ui, "Segoe UI", Tahoma, sans-serif` و `--font-mono` برای ارقام/کد.
- مقیاس تایپ: `--text-xs` تا `--text-4xl`؛ ارتفاع خط: `--leading-tight/normal/relaxed`.

## رنگ

- پالت پایه: مقیاس `--ps-ink-50` تا `--ps-ink-950` + `--ps-white` و رنگ‌های وضعیت (`--ps-success/warning/danger`).
- رنگ اکشن (primary CTA): **تراکوتا** `--claude-orange` (+`-hover` و `-soft`). در کل سایت فقط همین رنگ نقش CTA اصلی دارد؛ دکمه ثانویه خنثی (surface/outline) است.
- توکن‌های نقش: `--background`، `--surface(-muted/-subtle)`، `--foreground`، `--muted-foreground`، `--border(-strong)`، `--primary`، `--secondary`، `--accent`، `--ring`، `--inverted`.
- صفحه اصلی تم گرم `body.home-color-anthropic` دارد که همین توکن‌های نقش را بازتعریف می‌کند — کامپوننت‌ها باید فقط از توکن نقش استفاده کنند، نه مقدار خام.

## فاصله، شعاع و سایه

- فاصله: `--space-1` تا `--space-24` (مضرب 0.25rem) + توکن‌های ترکیبی `--section-heading-gap/margin` و `--card-padding(-compact)/--card-gap`.
- شعاع: `--radius-sm/md/lg/xl/full`.
- سایه: `--shadow-xs/sm/md/lg` و `--shadow-ring` برای focus.
- عرض محتوا: `--container` (75rem) با کلاس `.container`.

## قواعد RTL

- زبان سند `fa-IR` و `dir="rtl"`؛ CSS فقط با خواص منطقی (`inline-start/end`، `margin-inline`، `inset-inline` و…) نوشته می‌شود.
- اعداد نمایشیِ متن فارسی با `PersianDigitsScript` به ارقام فارسی تبدیل می‌شوند؛ شماره تلفن/کد داخل `.persian-number` یا `[data-preserve-digits]` با `dir="ltr"` ایزوله می‌شود.
