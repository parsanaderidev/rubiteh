"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Supporter, SUPPORTERS } from "@/data/supporters";
import { useModal } from "@/context/ModalContext";
import BrandLogoBox from "@/components/supporters/BrandLogoBox";

interface SupporterDetailClientProps {
  supporter: Supporter;
}

export default function SupporterDetailClient({ supporter }: SupporterDetailClientProps) {
  const { openDonation } = useModal();
  const story = supporter.story;
  const otherPartners = SUPPORTERS.filter((s) => s.featured && s.id !== supporter.id);

  return (
    <div className="min-h-screen bg-white font-ravi selection:bg-brand-red/10 selection:text-brand-red" dir="rtl">
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-neutral-100 bg-[#FAFAFA]/90 sticky top-16 md:top-20 z-20">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between text-xs font-bold text-neutral-500">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="hover:text-brand-graphite transition-colors flex items-center gap-1"
            >
              <span>صفحه اصلی</span>
            </Link>
            <span className="text-neutral-300">/</span>
            <Link
              href="/#supporters"
              className="hover:text-brand-graphite transition-colors"
            >
              <span>جامعه حامیان</span>
            </Link>
            <span className="text-neutral-300">/</span>
            <span className="text-brand-graphite font-black">{supporter.name}</span>
          </div>

          <Link
            href="/#supporters"
            className="inline-flex items-center gap-1.5 text-neutral-500 hover:text-brand-red font-black transition-colors"
          >
            <span>بازگشت به بخش حامیان</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Hero — Minimal, Clean & Editorial */}
      <section className="w-full py-12 md:py-16 border-b border-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
            <BrandLogoBox supporter={supporter} size="xl" />

            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-graphite">
                  {supporter.name}
                </h1>
                {supporter.nameEn && (
                  <span className="text-xs sm:text-sm text-neutral-400 font-sans" dir="ltr">
                    ({supporter.nameEn})
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <span className="text-brand-red font-bold">
                  {supporter.badgeText}
                </span>
                <span className="text-neutral-300">•</span>
                <span className="text-neutral-500 font-medium">
                  {supporter.contributionLabel}
                </span>
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-zinc-600 font-medium leading-relaxed mb-6">
            {story?.tagline || supporter.shortDescription}
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => openDonation()}
              className="bg-brand-red text-white hover:bg-brand-red-hover px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm active:scale-95 transition-all shadow-xs cursor-pointer"
            >
              مشارکت در این پویش
            </button>

            {supporter.website && (
              <a
                href={supporter.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-neutral-200 text-brand-graphite hover:bg-neutral-50 font-bold text-xs transition-colors"
              >
                <span>وب‌سایت رسمی {supporter.name}</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* The Partnership (روایت همکاری) */}
      <section className="w-full py-12 md:py-16 border-b border-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <span className="text-brand-red font-bold text-xs mb-2 block tracking-wider">
            چارچوب همکاری
          </span>
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-brand-graphite mb-4">
            روایت همراهی با روبیتک
          </h2>
          <div className="text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed space-y-4">
            <p>
              {story?.overview || supporter.shortDescription}
            </p>
            <p className="text-neutral-500">
              در ساختار مدارس سیار روبیتک، هر ابزار آموزشی نیازمند پشتیبانی چندجانبه است. این همراهی نه یک حمایت نمادین، بلکه گامی عملیاتی در زنجیره تحویل، آموزش و پایش کیفیت یادگیری دانش‌آموزان در ۳۱ استان کشور است.
            </p>
          </div>
        </div>
      </section>

      {/* What They Contributed (محورهای مشارکت) */}
      {story?.contributions && story.contributions.length > 0 && (
        <section className="w-full py-12 md:py-16 border-b border-neutral-100 bg-[#FAFAFA]/60">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <span className="text-brand-red font-bold text-xs mb-2 block tracking-wider">
              محورهای عملیاتی
            </span>
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-brand-graphite mb-6">
              آورده‌ها و ابعاد مشارکت
            </h2>

            <div className="divide-y divide-neutral-200/80">
              {story.contributions.map((item, index) => (
                <div key={index} className="py-4.5 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="sm:w-1/3">
                    <span className="text-[10px] font-bold text-neutral-400 block mb-0.5">
                      محور ۰{index + 1}
                    </span>
                    <h3 className="text-sm font-black text-brand-graphite">
                      {item.title}
                    </h3>
                    <span className="text-[11px] text-brand-red font-bold">
                      {item.tag}
                    </span>
                  </div>

                  <div className="sm:w-2/3">
                    <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* The Initiative / Campaign (در صورت وجود) */}
      {story?.campaignTitle && (
        <section className="w-full py-12 md:py-16 border-b border-neutral-100">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-100">
              <span className="text-brand-red font-bold text-xs mb-2 block tracking-wider">
                ابتکار مشترک
              </span>
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-brand-graphite mb-3">
                {story.campaignTitle}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed mb-4">
                {story.campaignDescription}
              </p>

              <div className="flex items-center justify-between gap-4 pt-4 border-t border-neutral-200/60 flex-wrap text-xs">
                <span className="text-neutral-500 font-medium">
                  نقش همکار: <strong className="text-brand-graphite">{story.campaignRole}</strong>
                </span>
                <button
                  onClick={() => openDonation()}
                  className="text-xs font-black text-brand-red hover:underline cursor-pointer"
                >
                  همراهی با این پویش ←
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Impact (شاخص‌های اثرگذاری) */}
      {story?.impact && story.impact.length > 0 && (
        <section className="w-full py-12 md:py-16 border-b border-neutral-100">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <span className="text-brand-red font-bold text-xs mb-2 block tracking-wider">
              اثرگذاری واقعی
            </span>
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-brand-graphite mb-6">
              شاخص‌های ثبت‌شده
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              {story.impact.map((metric, i) => (
                <div key={i} className="pb-4 border-b sm:border-b-0 sm:border-l sm:last:border-l-0 border-neutral-200/80 sm:pl-4">
                  <div className="text-2xl sm:text-3xl font-black text-brand-graphite font-ravi mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs font-black text-brand-graphite mb-0.5">
                    {metric.label}
                  </div>
                  {metric.note && (
                    <div className="text-[11px] text-neutral-400 font-medium">
                      {metric.note}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="text-[11px] text-neutral-400 font-medium">
              * تمام ارقام بر پایه آمار رسمی پروژه روبیتک (۱۱۰ لپ‌تاپ فعال در ۳۱ استان) گردآوری شده‌اند.
            </p>
          </div>
        </section>
      )}

      {/* More from Rubitech (سایر همراهان) */}
      {otherPartners.length > 0 && (
        <section className="w-full py-12 md:py-16 border-b border-neutral-100 bg-[#FAFAFA]/40">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <h3 className="text-sm font-black text-brand-graphite mb-4">
              سایر شرکای محوری روبیتک
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {otherPartners.map((other) => (
                <Link
                  key={other.id}
                  href={`/supporters/${other.slug}`}
                  className="p-3.5 rounded-xl border border-neutral-200/80 bg-white hover:border-neutral-300 transition-all flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <BrandLogoBox supporter={other} size="sm" />
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-black text-brand-graphite group-hover:text-brand-red transition-colors truncate">
                        {other.name}
                      </h4>
                      <span className="text-[11px] text-neutral-400 font-medium block truncate">
                        {other.contributionLabel}
                      </span>
                    </div>
                  </div>
                  <ArrowLeft className="w-3.5 h-3.5 text-neutral-400 group-hover:text-brand-red group-hover:-translate-x-0.5 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing Call to Action */}
      <section className="w-full py-12 md:py-16 bg-white text-center">
        <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
          <span className="text-brand-red font-bold text-xs mb-2 block tracking-wider">
            دعوت به همراهی
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-brand-graphite mb-3">
            می‌خواهید نام یا سازمان شما در این مسیر ثبت شود؟
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed mb-6">
            چه با اهدای تجهیزات، تأمین آموزش یا حمایت مالی؛ روبیتک از هر مشارکتی برای توسعه عدالت آموزشی استقبال می‌کند.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => openDonation()}
              className="w-full sm:w-auto bg-brand-red text-white hover:bg-brand-red-hover font-black text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-xs cursor-pointer"
            >
              ساخت مدرسه و حمایت مالی
            </button>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-white border border-neutral-200 text-brand-graphite hover:bg-neutral-50 font-black text-xs sm:text-sm px-6 py-3 rounded-xl transition-all"
            >
              ارتباط سازمانی و تفاهم
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
