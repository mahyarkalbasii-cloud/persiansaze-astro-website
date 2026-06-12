export function GET() {
  const body = `# پرشین‌سازه

> پلتفرم هوش ساخت‌وساز B2B: داده زنده پروژه‌های ساختمانی فعال در تهران، کرج و لواسان برای تامین‌کنندگان مصالح و خدمات ساختمانی. منبع واحد حقیقت برای فروش پروژه‌محور.

## صفحات اصلی

- [محصول](https://persiansaze.com/product/): جریان عملیاتی پلتفرم — از رصد پروژه تا CRM فروش
- [اشتراک‌ها](https://persiansaze.com/subscriptions/): چهار پلن بنیان، رویان، تابان و تابان پلاس با قیمت
- [زمینه‌های کاری](https://persiansaze.com/work-fields/): دسته‌بندی کامل مصالح و خدمات ساختمانی و اتصال هرکدام به مراحل ساخت
- [مراحل ساخت](https://persiansaze.com/construction-stages/): چرخه کامل ساخت ساختمان از پروانه تا تحویل
- [شهرها](https://persiansaze.com/cities/): پوشش جغرافیایی تهران، کرج و لواسان
- [آموزش](https://persiansaze.com/education/): آکادمی فروش پروژه‌محور
- [تماس](https://persiansaze.com/contact-us/): درخواست دمو و راه‌های ارتباطی`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
