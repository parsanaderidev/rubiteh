import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Download, CheckCircle2, Laptop, BookOpen, Users, Compass, ShieldCheck, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "همراهان | همراهان راهبردی روبیتک",
  description:
    "روبیتک تأثیرگذاری را تنها نمی‌سازد. معرفی سه همراه راهبردی و زیرساختی روبیتک: دیجی‌کالا مهر، مکتب‌خونه و روبیکمپ.",
};

export default function PartnersPage() {
  return (
    <div className="w-full font-ravi bg-white selection:bg-brand-red/10 selection:text-brand-red" dir="rtl">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION — Restrained, Confident, Editorial */}
      {/* ========================================================================= */}
      <section className="relative w-full border-b border-neutral-100 bg-linear-to-b from-neutral-50/80 via-white to-white pt-12 pb-14 sm:pt-16 sm:pb-18 md:pt-20 md:pb-22">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200/60 mb-5 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
            <span className="text-[11px] sm:text-xs font-black tracking-wider">
              همراهان
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-brand-graphite leading-[1.25] tracking-tight">
            تأثیرگذاری را تنها نمی‌سازیم
          </h1>

          {/* Lead Paragraph */}
          <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-neutral-500 font-medium leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
            روبیتک حاصل هم‌مسیر شدن است؛ نقطه‌ای که زنجیره لجستیک، آموزش پایدار و سرمایه انسانی به هم می‌پیوندند تا هیچ نوجوانی به دلیل محرومیت جغرافیایی از قطار یادگیری دیجیتال باز نماند. سه همراه راهبردی ما در این مسیر:
          </p>

          {/* Quick Chapter Navigation Bar */}
          <div className="mt-8 sm:mt-10 pt-6 border-t mb-5 border-neutral-200/60 flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
            <a
              href="#digikala-mehr"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-neutral-200/80 hover:border-brand-red/40 hover:text-brand-red hover:shadow-2xs text-xs font-black text-brand-graphite transition-all"
            >
              <span className="text-[10px] text-brand-red font-bold">۰۱</span>
              <span>دیجی‌کالا مهر</span>
              <span className="text-[10px] text-neutral-400 font-medium hidden sm:inline">• لجستیک و پویش</span>
            </a>

            <a
              href="#maktabkhooneh"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-neutral-200/80 hover:border-blue-500/40 hover:text-blue-600 hover:shadow-2xs text-xs font-black text-brand-graphite transition-all"
            >
              <span className="text-[10px] text-blue-600 font-bold">۰۲</span>
              <span>مکتب‌خونه</span>
              <span className="text-[10px] text-neutral-400 font-medium hidden sm:inline">• آموزش و محتوا</span>
            </a>

            <a
              href="#rubikamp"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-neutral-200/80 hover:border-blue-900/40 hover:text-[#1e3a8a] hover:shadow-2xs text-xs font-black text-brand-graphite transition-all"
            >
              <span className="text-[10px] text-[#1e3a8a] font-bold">۰۳</span>
              <span>روبیکمپ</span>
              <span className="text-[10px] text-neutral-400 font-medium hidden sm:inline">• خاستگاه و اکوسیستم</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CHAPTER 01 — DIGIKALA MEHR (Asymmetric 2-Column: Story + Campaign Spotlight) */}
      {/* ========================================================================= */}
      <section
        id="digikala-mehr"
        className="w-full py-16 sm:py-20 md:py-24 border-b border-neutral-100 scroll-mt-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Chapter Eyebrow Header */}
          <div className="flex items-center justify-between pb-4 mb-8 sm:mb-12 border-b border-neutral-200/70">
            <div className="flex items-center gap-3">
              <span className="text-xl sm:text-2xl font-black text-brand-red tracking-tighter">
                ۰۱
              </span>
              <span className="w-px h-5 bg-neutral-200" />
              <span className="text-xs sm:text-sm font-black text-neutral-400">
                فصل اول: زنجیره تأمین، لجستیک و اعتماد عمومی
              </span>
            </div>
            <span className="text-[11px] font-bold text-brand-red bg-red-50 px-2.5 py-1 rounded-md border border-red-200/60 hidden sm:inline">
              شریک راهبردی و کمپین
            </span>
          </div>

          {/* Asymmetric 2-Column Desktop Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Story & Narrative (Start / Right Side in RTL) */}
            <div className="w-full lg:w-7/12 space-y-6">
              {/* Partner Identity */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 p-2 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs">
                  <img
                    src="/images/digikala-mehr.png"
                    alt="دیجی‌کالا مهر"
                    className="h-8 sm:h-9 w-auto object-contain block select-none"
                  />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-graphite">
                    دیجی‌کالا مهر
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-500 font-bold mt-1">
                    پلتفرم مسئولیت اجتماعی و پیوند نیکوکاران به نیازهای میدانی
                  </p>
                </div>
              </div>

              {/* Tagline Callout */}
              <blockquote className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border-r-4 border-brand-red text-xs sm:text-sm md:text-base font-black text-brand-graphite leading-relaxed">
                «توسعه دسترسی برابر به ابزارهای یادگیری با قدرت دیجی‌کالا مهر»
              </blockquote>

              {/* Narrative Content */}
              <div className="space-y-3.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium">
                <p className="text-justify">
                  دیجی‌کالا مهر به‌عنوان بازوی نیکوکاری گروه دیجی‌کالا، در کنار روبیتک قرار گرفته تا دسترسی به لپ‌تاپ را برای دانش‌آموزان بااستعداد مناطق دورافتاده تسریع کند. این مشارکت متمرکز بر شفافیت صددرصدی، ردیابی دستگاه‌ها و وصل‌کردن اراده مردم و خیرین به نیازهای میدانی در ۳۱ استان کشور است.
                </p>
                <p className="text-justify">
                  بهره‌گیری از شبکه توزیع و لجستیک قدرتمند دیجی‌کالا باعث شده است دستگاه‌های اهدایی پس از استانداردسازی و نصب محتوای آموزشی، بدون واسطه و با نظارت کامل به مدارس سیار روستایی در سراسر ایران تحویل داده شوند.
                </p>
              </div>

              {/* 3 Contribution Pillars */}
              <div className="pt-2 space-y-3">
                <h4 className="text-xs font-black text-brand-graphite">
                  محورهای کلیدی همراهی دیجی‌کالا مهر:
                </h4>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    <p className="text-xs text-neutral-600 font-medium leading-relaxed text-justify">
                      <strong className="text-brand-graphite font-black">زیرساخت جذب و کمپین عمومی:</strong> ایجاد امکان مشارکت خرد و کلان شهروندان برای تأمین هزینه یا اهدای تجهیزات کامپیوتری.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    <p className="text-xs text-neutral-600 font-medium leading-relaxed text-justify">
                      <strong className="text-brand-graphite font-black">شبکه لجستیک و توزیع ایمن:</strong> انتقال فیزیکی لپ‌تاپ‌ها به نقاط مبدا و روستاهای دورافتاده با هماهنگی سفیران روبیتک.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    <p className="text-xs text-neutral-600 font-medium leading-relaxed text-justify">
                      <strong className="text-brand-graphite font-black">تقویت شفافیت و پایش دوره‌ای:</strong> هم‌راستایی کامل با سازوکار سنجش و گردش لپ‌تاپ‌ها در مدارس سیار و انتشار مستمر گزارش اثرگذاری.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center gap-3 flex-wrap">
                <Link
                  href="/supporters/digikala-mehr"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-graphite hover:bg-black text-white text-xs font-black transition-all shadow-2xs group"
                >
                  <span>پرونده همکاری با دیجی‌کالا مهر</span>
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                </Link>

                <a
                  href="https://mehr.digikala.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-neutral-200 text-neutral-600 hover:text-brand-red hover:border-brand-red/30 hover:bg-neutral-50 text-xs font-black transition-all"
                >
                  <span>مشاهده در دیجی‌کالا مهر</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Campaign & Verified Metrics Spotlight — STICKY ON DESKTOP */}
            <div className="w-full lg:w-5/12 space-y-4 lg:sticky lg:top-28">
              <div className="p-6 sm:p-7 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-black uppercase tracking-wider text-brand-red bg-red-50 border border-red-200/60 px-2 py-0.5 rounded">
                    پویش مشترک
                  </span>
                  <span className="text-[11px] text-neutral-400 font-medium">
                    میزبان رسمی پویش
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-brand-graphite">
                  پویش «هر لپ‌تاپ، یک مدرسه در حرکت»
                </h3>

                <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-medium text-justify">
                  پویش متمرکز دیجی‌کالا مهر و روبیتک برای کاهش شکاف عمیق آموزش دیجیتال در مناطق روستایی؛ تبدیل لپ‌تاپ‌های بازآماده به ابزار توانمندسازی نسلی نو.
                </p>

                {/* Metrics Breakdown with Red Numbers */}
                <div className="mt-6 pt-5 border-t border-neutral-200/80 space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500 font-medium">
                      لپ‌تاپ‌های تحت پوشش مشترک
                    </span>
                    <span className="text-sm font-black text-brand-red">
                      ۱۱۰ دستگاه
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500 font-medium">
                      استان‌های میزبان پویش
                    </span>
                    <span className="text-sm font-black text-brand-red">
                      ۳۱ استان
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500 font-medium">
                      مدل گردش دانش‌آموزی
                    </span>
                    <span className="text-sm font-black text-brand-red">
                      ۱۰ دانش‌آموز / دستگاه
                    </span>
                  </div>
                </div>

                <div className="mt-5 p-3 rounded-xl bg-white border border-neutral-200/60 text-[11px] text-neutral-500 leading-relaxed text-justify">
                  ✓ داده‌های مربوط به اثرگذاری منطبق بر آمار رسمی و مستند شده روبیتک در چرخه فعال مدارس سیار است.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CHAPTER 02 — MAKTABKHOONEH (Distinct Composition: Pedagogical Focus & Curriculum Grid) */}
      {/* ========================================================================= */}
      <section
        id="maktabkhooneh"
        className="w-full py-16 sm:py-20 md:py-24 border-b border-neutral-100 bg-neutral-50/50 scroll-mt-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Chapter Eyebrow Header */}
          <div className="flex items-center justify-between pb-4 mb-8 sm:mb-12 border-b border-neutral-200/70">
            <div className="flex items-center gap-3">
              <span className="text-xl sm:text-2xl font-black text-blue-600 tracking-tighter">
                ۰۲
              </span>
              <span className="w-px h-5 bg-neutral-200" />
              <span className="text-xs sm:text-sm font-black text-neutral-400">
                فصل دوم: محتوا، مهارت‌های دیجیتال و توانمندسازی آموزشی
              </span>
            </div>
            <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60 hidden sm:inline">
              شریک محتوایی و آموزشی
            </span>
          </div>

          {/* Broad Editorial Narrative Header */}
          <div className="max-w-3xl mb-10 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="p-2 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs shrink-0">
                <img
                  src="/images/maktabkhooneh.png"
                  alt="مکتب‌خونه"
                  className="h-8 sm:h-9 w-auto object-contain block select-none"
                />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-graphite">
                  مکتب‌خونه
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500 font-bold mt-0.5">
                  بزرگ‌ترین آکادمی آنلاین کشور و شریک تأمین محتوای تخصصی
                </p>
              </div>
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-brand-graphite leading-snug pt-2">
              «سخت‌افزار شرط لازم است؛ اما شرط کافی، دسترسی به آموزش استاندارد و راهنمای یادگیری است.»
            </h3>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium text-justify">
              مکتب‌خونه برای پر کردن فاصله دسترسی به آموزش کیفی، دوره‌های آموزشی سطح‌بندی‌شده را به‌صورت رایگان روی لپ‌تاپ‌های روبیتک قرار داده است. تمام محتواها متناسب با شرایط مناطق روستایی بهینه‌سازی شده‌اند تا نیازی به اینترنت پرسرعت نباشد.
            </p>
          </div>

          {/* 3-Part Curriculum Showcase Grid (Editorial Rhythm) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-8">
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs space-y-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm">
                ۰۱
              </div>
              <h4 className="text-sm font-black text-brand-graphite">
                سواد دیجیتال و کار با رایانه
              </h4>
              <p className="text-xs text-neutral-500 font-medium leading-relaxed text-justify">
                مبانی سیستم‌عامل، تایپ ده‌انگشتی، پژوهش امن در اینترنت و ابزارهای چندرسانه‌ای برای آشنایی اولیه با دنیای کامپیوتر.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs space-y-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm">
                ۰۲
              </div>
              <h4 className="text-sm font-black text-brand-graphite">
                تفکر الگوریتمی و کدنویسی
              </h4>
              <p className="text-xs text-neutral-500 font-medium leading-relaxed text-justify">
                آموزش اسکرچ (Scratch)، پایتون مقدماتی و اصول منطق برنامه‌نویسی برای توانمندسازی خلاقانه نوجوانان روستایی.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs space-y-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm">
                ۰۳
              </div>
              <h4 className="text-sm font-black text-brand-graphite">
                مخزن آفلاین و اعطای مدرک
              </h4>
              <p className="text-xs text-neutral-500 font-medium leading-relaxed text-justify">
                ذخیره کامل دوره‌ها روی حافظه پایدار دستگاه‌ها و صدور گواهی‌های رسمی مکتب‌خونه بدون تحمیل هزینه به دانش‌آموزان.
              </p>
            </div>
          </div>

          {/* Horizontal Verified Metrics Strip with Blue Numbers */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-neutral-200/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xs">
            <div className="flex flex-1 items-center justify-around w-full divide-x divide-x-reverse divide-neutral-200/80 text-center">
              <div className="px-3 flex-1">
                <span className="text-base sm:text-xl md:text-2xl font-black text-blue-600 block" dir="ltr">
                  +۵۷۶٬۰۰۰
                </span>
                <span className="text-[11px] text-neutral-400 font-medium mt-0.5 block">
                  ساعت آموزش دیجیتال
                </span>
              </div>

              <div className="px-3 flex-1">
                <span className="text-base sm:text-xl md:text-2xl font-black text-blue-600 block">
                  ۱۲ سرفصل
                </span>
                <span className="text-[11px] text-neutral-400 font-medium mt-0.5 block">
                  مهارت‌های استاندارد
                </span>
              </div>

              <div className="px-3 flex-1">
                <span className="text-base sm:text-xl md:text-2xl font-black text-blue-600 block">
                  ۱۰۰٪
                </span>
                <span className="text-[11px] text-neutral-400 font-medium mt-0.5 block">
                  لپ‌تاپ‌های مجهز به مخزن
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 shrink-0 w-full md:w-auto justify-center">
              <Link
                href="/supporters/maktabkhooneh"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-graphite hover:bg-black text-white text-xs font-black transition-all shadow-2xs group"
              >
                <span>پرونده همکاری با مکتب‌خونه</span>
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://maktabkhooneh.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-neutral-200 bg-white text-neutral-600 hover:text-blue-600 hover:border-blue-300 text-xs font-black transition-all"
              >
                <span>ورود به مکتب‌خونه</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CHAPTER 03 — RUBICAMP (Distinct Composition: Origin Story & Ecosystem Counter) */}
      {/* ========================================================================= */}
      <section
        id="rubikamp"
        className="w-full py-16 sm:py-20 md:py-24 border-b border-neutral-100 scroll-mt-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Chapter Eyebrow Header */}
          <div className="flex items-center justify-between pb-4 mb-8 sm:mb-12 border-b border-neutral-200/70">
            <div className="flex items-center gap-3">
              <span className="text-xl sm:text-2xl font-black text-[#1e3a8a] tracking-tighter">
                ۰۳
              </span>
              <span className="w-px h-5 bg-neutral-200" />
              <span className="text-xs sm:text-sm font-black text-neutral-400">
                فصل سوم: خاستگاه اولیه، راهبری اکوسیستم و شبکه سفیران
              </span>
            </div>
            <span className="text-[11px] font-bold text-[#1e3a8a] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60 hidden sm:inline">
              مؤسس و حامی اکوسیستم
            </span>
          </div>

          {/* 2-Column Desktop Layout: Origin Narrative & Ecosystem Pillars */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Story & Origin (Start / Right Side) */}
            <div className="w-full lg:w-7/12 space-y-6">
              {/* Partner Identity */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 p-2 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs">
                  <img
                    src="/images/home/rubikamp-logo.png"
                    alt="روبیکمپ"
                    className="h-8 sm:h-9 w-auto object-contain block select-none"
                  />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-graphite">
                    روبیکمپ
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-500 font-bold mt-1">
                    مدرسه آنلاین پرورش رهبران فناوری و اکوسیستم مادر روبیتک
                  </p>
                </div>
              </div>

              {/* Tagline Callout */}
              <blockquote className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border-r-4 border-[#1e3a8a] text-xs sm:text-sm md:text-base font-black text-brand-graphite leading-relaxed">
                «پرورش استعدادهای آینده از دل فرصت‌های واقعی فناوری»
              </blockquote>

              {/* Narrative Content */}
              <div className="space-y-3.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium">
                <p className="text-justify">
                  روبیتک متولد دغدغه‌ای عمیق در روبیکمپ است؛ جایی که متخصصان دریافتند استعداد در همه‌جا توزیع شده اما فرصت‌ها خیر. در تابستان ۱۴۰۴، مربیان روبیکمپ با نوجوانانی روبه‌رو شدند که استعداد فنی بالایی داشتند، اما نبود لپ‌تاپ مانع پیشرفت آن‌ها بود.
                </p>
                <p className="text-justify">
                  روبیکمپ پشتیبانی ساختاری، انکوباسیون مدل اجرایی، جذب شبکه داوطلبان و توسعه سیستم‌های شفافیت پایش را بر عهده داشته تا رؤیای آموزش دیجیتال سراسری به واقعیتی پایدار تبدیل شود.
                </p>
              </div>

              {/* 3 Core Incubation Contributions */}
              <div className="pt-2 space-y-3">
                <h4 className="text-xs font-black text-brand-graphite">
                  نقش بنیادی روبیکمپ در شکل‌گیری و دوام روبیتک:
                </h4>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1e3a8a] shrink-0 mt-0.5" />
                    <p className="text-xs text-neutral-600 font-medium leading-relaxed text-justify">
                      <strong className="text-brand-graphite font-black">شکل‌گیری ایده و هسته اولیه:</strong> سرمایه‌گذاری روی هویت، مدل گردش لپ‌تاپ‌ها و طراحی معماری عام‌المنفعه روبیتک.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1e3a8a] shrink-0 mt-0.5" />
                    <p className="text-xs text-neutral-600 font-medium leading-relaxed text-justify">
                      <strong className="text-brand-graphite font-black">شبکه سفیران استانی:</strong> اتصال فارغ‌التحصیلان روبیکمپ به بدنه سفیران محلی در ۳۱ استان برای تحویل و پایش لپ‌تاپ‌ها.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1e3a8a] shrink-0 mt-0.5" />
                    <p className="text-xs text-neutral-600 font-medium leading-relaxed text-justify">
                      <strong className="text-brand-graphite font-black">سامانه شفافیت و سلامت دستگاه:</strong> توسعه زیرساخت نرم‌افزاری سنجش کارکرد، پایش دوره عمر و انتشار داده‌های عمومی.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center gap-3 flex-wrap">
                <Link
                  href="/supporters/rubikamp"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-graphite hover:bg-black text-white text-xs font-black transition-all shadow-2xs group"
                >
                  <span>پرونده همکاری با روبیکمپ</span>
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                </Link>

                <a
                  href="https://rubikamp.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-neutral-200 text-neutral-600 hover:text-[#1e3a8a] hover:border-[#1e3a8a]/40 hover:bg-neutral-50 text-xs font-black transition-all"
                >
                  <span>ورود به روبیکمپ</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Ecosystem Spotlight Card (End / Left Side) */}
            <div className="w-full lg:w-5/12 space-y-4">
              <div className="p-6 sm:p-7 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#1e3a8a] bg-blue-50 border border-blue-200/60 px-2 py-0.5 rounded">
                    نهاد بنیان‌گذار
                  </span>
                  <span className="text-[11px] text-neutral-400 font-medium">
                    اکوسیستم مادر
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-brand-graphite">
                  حرکت ملی روبیتک در دل روبیکمپ
                </h3>

                <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-medium text-justify">
                  حرکتی عام‌المنفعه با هدف ساختن آینده‌ای که هیچ نوجوانی به خاطر نبود دستگاه از قطار پیشرفت جا نماند؛ هدایت‌شده با تخصص و دغدغه نخبگان فناوری.
                </p>

                {/* Metrics Breakdown with Dark Blue Numbers */}
                <div className="mt-6 pt-5 border-t border-neutral-200/80 space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500 font-medium">
                      مدارس سیار تحت پوشش مدل چرخشی
                    </span>
                    <span className="text-sm font-black text-[#1e3a8a]">
                      ۱۱۰ واحد
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500 font-medium">
                      حضور سفیران در سراسر ایران
                    </span>
                    <span className="text-sm font-black text-[#1e3a8a]">
                      ۳۱ استان
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500 font-medium">
                      پایش سلامت و چرخه عمر دستگاه‌ها
                    </span>
                    <span className="text-sm font-black text-[#1e3a8a]">
                      ۱۰۰٪ پایش فعال
                    </span>
                  </div>
                </div>

                <div className="mt-5 p-3 rounded-xl bg-white border border-neutral-200/60 text-[11px] text-neutral-500 leading-relaxed text-justify">
                  ✓ روبیتک به‌عنوان پروژه‌ای مستقل اما ریشه‌دار در فرهنگ نوآوری و سرمایه انسانی روبیکمپ هدایت می‌شود.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. THE COALITION MATRIX — How the 3 Pillars Connect Together */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-neutral-900 text-white font-ravi">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-brand-red text-xs font-black tracking-wider uppercase block mb-2">
              مدل هم‌افزایی روبیتک
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight">
              سه رکن مستقل، یک هدف مشترک
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
              ارزش واقعی روبیتک در پیوند این سه ضلع نمایان می‌شود؛ پیوندی که فاصله میان «سخت‌افزار»، «لجستیک» و «آموزش» را برای همیشه از بین برده است.
            </p>
          </div>

          {/* 3 Interconnected Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1: Rubicamp (Dark Blue Theme) */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-700/60 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-900/40 text-blue-300 flex items-center justify-center font-black text-sm mb-4">
                ۰۱
              </div>
              <h3 className="text-base font-black text-white mb-1">
                روبیکمپ
              </h3>
              <span className="text-xs text-blue-300 font-bold block mb-3">
                خاستگاه، سفیران و پایش
              </span>
              <p className="text-xs text-neutral-300 leading-relaxed font-medium text-justify">
                شناسایی دغدغه، تأمین مربیان داوطلب، ارتباط با سفیران در ۳۱ استان و پایش فنی مداوم سلامت هر لپ‌تاپ در چرخه مدارس سیار.
              </p>
            </div>

            {/* Pillar 2: Digikala Mehr (Red Theme) */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-red/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-brand-red/20 text-brand-red flex items-center justify-center font-black text-sm mb-4">
                ۰۲
              </div>
              <h3 className="text-base font-black text-white mb-1">
                دیجی‌کالا مهر
              </h3>
              <span className="text-xs text-red-300 font-bold block mb-3">
                جذب مشارکت و لجستیک
              </span>
              <p className="text-xs text-neutral-300 leading-relaxed font-medium text-justify">
                بسیج اراده مردمی و خیرین از طریق پلتفرم نیکوکاری و انتقال فیزیکی ایمن لپ‌تاپ‌ها به دورافتاده‌ترین روستاهای تحت پوشش.
              </p>
            </div>

            {/* Pillar 3: Maktabkhooneh (Blue Theme) */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-black text-sm mb-4">
                ۰۳
              </div>
              <h3 className="text-base font-black text-white mb-1">
                مکتب‌خونه
              </h3>
              <span className="text-xs text-blue-300 font-bold block mb-3">
                محتوا و یادگیری پایدار
              </span>
              <p className="text-xs text-neutral-300 leading-relaxed font-medium text-justify">
                ارائه ۱۲ سرفصل آموزشی آفلاین و آنلاین برای تبدیل دستگاه از یک ابزار ساده به یک مسیر حرفه‌ای اشتغال و توانمندسازی.
              </p>
            </div>
          </div>

          {/* Unified Flow Summary */}
          <div className="mt-8 p-5 rounded-2xl bg-white/5 border border-white/10 text-center text-xs text-neutral-300 leading-relaxed max-w-3xl mx-auto font-medium">
            دستگاه از طریق <strong className="text-white">دیجی‌کالا مهر</strong> تأمین و منتقل می‌شود، محتوای آن توسط <strong className="text-white">مکتب‌خونه</strong> ارتقا می‌یابد، و تحت نظارت و هدایت <strong className="text-white">روبیکمپ</strong> میان دانش‌آموزان بااستعداد به گردش درمی‌آید.
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. INVITATION FOR INSTITUTIONAL COLLABORATION */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-white border-t border-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <span className="text-brand-red text-xs font-black tracking-wider uppercase block mb-2">
            همکاری سازمانی و مسئولیت اجتماعی
          </span>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-graphite leading-tight">
            سازمان شما چگونه می‌تواند هم‌مسیر روبیتک شود؟
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed max-w-xl mx-auto">
            اگر سازمان، شرکت یا نهادی هستید که به عدالت آموزشی و توانمندسازی دیجیتال نسل آینده باور دارد، آماده‌ایم تا در قالب مشارکت‌های سخت‌افزاری، محتوایی یا پشتیبانی مالی، مدل همکاری مشترک بسازیم.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3.5 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-blue-dark hover:bg-brand-blue-dark-hover text-white text-xs sm:text-sm font-black transition-all shadow-md shadow-black/5"
            >
              <span>گفتگو برای همکاری سازمانی</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>

            <a
              href="https://www.rubitech.org/docs/rubitech-proposal.pdf"
              download="Rubitech-Proposal.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 text-brand-graphite text-xs sm:text-sm font-bold transition-all"
            >
              <Download className="w-4 h-4 text-neutral-500" />
              <span>دریافت پروپوزال رسمی روبیتک</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
