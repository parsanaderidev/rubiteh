"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { SUPPORTERS } from "@/data/supporters";
import BrandLogoBox from "./BrandLogoBox";

export default function Model1Hierarchy() {
  const [showAllContributors, setShowAllContributors] = useState(false);
  const [contributorFilter, setContributorFilter] = useState<"all" | "ambassador" | "general">("all");

  const strategicPartners = SUPPORTERS.filter((s) => s.tier === "strategic");
  const campaignPartners = SUPPORTERS.filter((s) => s.tier === "campaign");
  const keySupporters = SUPPORTERS.filter((s) => s.tier === "key");
  const allContributors = SUPPORTERS.filter((s) => s.tier === "contributor");

  const filteredContributors = allContributors.filter((c) => {
    if (contributorFilter === "ambassador") {
      return (
        c.badgeText.includes("سفیر") ||
        (c.location && !c.location.includes("همراه") && !c.location.includes("تیم"))
      );
    }
    if (contributorFilter === "general") {
      return !c.badgeText.includes("سفیر");
    }
    return true;
  });

  const visibleContributors = showAllContributors
    ? filteredContributors
    : filteredContributors.slice(0, 12);

  const getBadgeClasses = (s: { badgeStyle?: string; badgeText?: string }) => {
    if (s.badgeStyle === "gold" || s.badgeText?.includes("طلایی")) {
      return "bg-[#E4C54C] text-white shadow-2xs";
    }
    if (s.badgeStyle === "silver" || s.badgeText?.includes("نقره")) {
      return "bg-[#8A8A8A] text-white shadow-2xs";
    }
    if (s.badgeStyle === "blue") {
      return "bg-blue-50 text-blue-700 border border-blue-200/70";
    }
    if (s.badgeStyle === "emerald") {
      return "bg-emerald-50 text-emerald-700 border border-emerald-200/70";
    }
    if (s.badgeStyle === "purple") {
      return "bg-purple-50 text-purple-700 border border-purple-200/70";
    }
    if (s.badgeStyle === "orange") {
      return "bg-orange-50 text-orange-700 border border-orange-200/70";
    }
    return "bg-neutral-100 text-neutral-700 border border-neutral-200/60";
  };

  return (
    <div className="w-full font-ravi space-y-10 sm:space-y-12 max-w-5xl mx-auto" dir="rtl">
      {/* ================================================================= */}
      {/* 1. STRATEGIC PARTNERS — Professional, Non-Deforming Responsive Rows */}
      {/* ================================================================= */}
      <div>
        {/* Topic Header: Aligned flush right with cards below */}
        <div className="pb-3 mb-5 border-b border-neutral-200/80">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-base sm:text-lg md:text-xl font-black text-brand-graphite">
              شرکای راهبردی و زیرساختی
            </h3>
            <span className="text-xs text-neutral-400 font-medium hidden sm:inline">
              توسعه بلندمدت و ظرفیت‌سازی میدانی
            </span>
          </div>
        </div>

        {/* Robust, Responsive Editorial Rows */}
        <div className="divide-y divide-neutral-200/70">
          {strategicPartners.map((partner) => (
            <div
              key={partner.id}
              className="py-5 sm:py-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 group transition-colors"
            >
              {/* Logo & Content Block */}
              <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
                <div className="shrink-0 pt-0.5 sm:pt-1">
                  <BrandLogoBox supporter={partner} size="md" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h4 className="text-sm sm:text-base font-black text-brand-graphite group-hover:text-brand-red transition-colors">
                      {partner.name}
                    </h4>
                    <span className="inline-flex items-center justify-center text-center leading-none text-[11px] text-neutral-600 font-bold px-2.5 py-1 rounded-md bg-neutral-100 border border-neutral-200/60">
                      {partner.badgeText}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 font-medium mt-2 leading-relaxed max-w-3xl">
                    {partner.shortDescription}
                  </p>
                </div>
              </div>

              {/* Action Button: Properly aligned */}
              {partner.hasDetailPage && (
                <div className="shrink-0 self-start lg:self-center mr-auto lg:mr-0">
                  <Link
                    href={`/supporters/${partner.slug}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-neutral-200 text-xs font-black text-neutral-600 hover:text-brand-red hover:border-brand-red/30 hover:bg-neutral-50 transition-all shadow-2xs"
                  >
                    <span>پرونده همکاری</span>
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ================================================================= */}
      {/* 2. PROGRAM & CAMPAIGN PARTNERS — 2x2 Balanced Grid (No Orphans!) */}
      {/* ================================================================= */}
      <div className="pt-6 sm:pt-8">
        <div className="pb-3 mb-5 border-b border-neutral-200/80">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-base sm:text-lg md:text-xl font-black text-brand-graphite">
              همکاران پویش و اجرا
            </h3>
            <span className="text-xs text-neutral-400 font-medium hidden sm:inline">
              تسهیل توزیع و پویش‌های استانی
            </span>
          </div>
        </div>

        {/* 2-Column Balanced Grid: 4 items form a perfect 2x2 layout with spacious text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {campaignPartners.map((partner) => (
            <div
              key={partner.id}
              className="h-[80px] w-full p-3.5 rounded-xl border border-neutral-100 bg-neutral-50/60 hover:bg-white hover:border-neutral-200/90 hover:shadow-2xs transition-all flex items-center gap-3.5 cursor-default group"
            >
              <BrandLogoBox supporter={partner} size="sm" />
              <div className="min-w-0 flex-1 flex flex-col justify-center">
                <h4 className="text-xs sm:text-sm font-black text-brand-graphite truncate">
                  {partner.name}
                </h4>
                <span className="text-[11px] text-neutral-400 font-medium block truncate mt-1.5">
                  {partner.contributionLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================================================================= */}
      {/* 3. KEY SUPPORTERS — 3x3 Grid with generous spacing and clear footer */}
      {/* ================================================================= */}
      <div className="pt-6 sm:pt-8">
        <div className="pb-3 mb-5 border-b border-neutral-200/80">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-base sm:text-lg md:text-xl font-black text-brand-graphite">
              حامیان کلیدی و سازمانی
            </h3>
            <span className="text-xs text-neutral-400 font-medium hidden sm:inline">
              {keySupporters.length} حامی متعهد در تأمین پایدار ناوگان دیجیتال
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {keySupporters.map((supporter) => (
            <div
              key={supporter.id}
              className="min-h-[122px] w-full p-3.5 sm:p-4 rounded-2xl border border-neutral-200/80 bg-white hover:border-neutral-300 hover:shadow-xs transition-all flex flex-col justify-between cursor-default group"
            >
              {/* Header row */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  <BrandLogoBox supporter={supporter} size="sm" />
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm font-black text-brand-graphite truncate">
                      {supporter.name}
                    </h4>
                    {supporter.location && (
                      <span className="text-[11px] text-neutral-400 font-medium block truncate mt-0.5">
                        {supporter.location}
                      </span>
                    )}
                  </div>
                </div>

                <span
                  className={`inline-flex items-center justify-center text-center leading-none text-[10px] font-bold px-2 py-1 rounded-md shrink-0 mt-0.5 ${getBadgeClasses(
                    supporter
                  )}`}
                >
                  {supporter.badgeText}
                </span>
              </div>

              {/* Separator line with clean top/bottom separation */}
              <div className="w-full h-px bg-neutral-100 mt-2.5 mb-2" />

              {/* Footer row: Dedicated contribution text with margin-top so it never sticks to the line */}
              <div className="flex items-center justify-between text-[11px] text-neutral-500 font-medium gap-2 pt-1">
                <span className="truncate flex-1">
                  {supporter.contributionLabel}
                </span>
                {supporter.originalAmountText && (
                  <span className="inline-flex items-center justify-center text-center leading-none text-[10px] font-bold text-neutral-500 shrink-0 bg-neutral-50 px-2 py-0.5 rounded border border-neutral-100">
                    {supporter.originalAmountText}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================================================================= */}
      {/* 4. SUPPORTER ECOSYSTEM & AMBASSADORS — Proper Margin-Top + Tight Margin-Bottom */}
      {/* ================================================================= */}
      <div className="pt-6 sm:pt-8">
        <div className="pb-3 mb-5 border-b border-neutral-200/80">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h3 className="text-base sm:text-lg md:text-xl font-black text-brand-graphite">
              شبکه حامیان و سفیران استانی
            </h3>

            {/* Quick Sub-Filter */}
            <div className="flex items-center gap-1.5 text-xs">
              <button
                onClick={() => setContributorFilter("all")}
                className={`inline-flex items-center justify-center text-center leading-none px-2.5 py-1 rounded-md font-bold transition-colors cursor-pointer ${
                  contributorFilter === "all"
                    ? "bg-neutral-200 text-brand-graphite"
                    : "text-neutral-400 hover:text-neutral-600"
                }`}
              >
                همه ({allContributors.length})
              </button>
              <span className="text-neutral-300">/</span>
              <button
                onClick={() => setContributorFilter("ambassador")}
                className={`inline-flex items-center justify-center text-center leading-none px-2.5 py-1 rounded-md font-bold transition-colors cursor-pointer ${
                  contributorFilter === "ambassador"
                    ? "bg-neutral-200 text-brand-graphite"
                    : "text-neutral-400 hover:text-neutral-600"
                }`}
              >
                سفیران استان‌ها
              </button>
              <span className="text-neutral-300">/</span>
              <button
                onClick={() => setContributorFilter("general")}
                className={`inline-flex items-center justify-center text-center leading-none px-2.5 py-1 rounded-md font-bold transition-colors cursor-pointer ${
                  contributorFilter === "general"
                    ? "bg-neutral-200 text-brand-graphite"
                    : "text-neutral-400 hover:text-neutral-600"
                }`}
              >
                مردمی
              </button>
            </div>
          </div>
        </div>

        {/* 4-Column Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {visibleContributors.map((contributor) => (
            <div
              key={contributor.id}
              className="h-[78px] w-full p-3 rounded-xl border border-neutral-100 bg-neutral-50/50 hover:bg-white hover:border-neutral-200/90 hover:shadow-2xs transition-all flex items-center justify-between gap-3 cursor-default group"
            >
              <div className="flex items-center gap-2.5 min-w-0 flex-1">
                <BrandLogoBox supporter={contributor} size="sm" />
                <div className="min-w-0 flex-1 flex flex-col justify-center">
                  <span className="text-xs font-black text-brand-graphite truncate">
                    {contributor.name}
                  </span>
                  <div className="flex items-center gap-1.5 mt-1.5 text-[11px] text-neutral-400 font-medium truncate">
                    {contributor.location && (
                      <>
                        <span className="text-neutral-500 font-bold shrink-0">
                          {contributor.location}
                        </span>
                        <span className="text-neutral-300 shrink-0">•</span>
                      </>
                    )}
                    <span className="truncate">{contributor.contributionLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredContributors.length > 12 && (
          <div className="mt-5 pt-2 flex justify-center">
            <button
              onClick={() => setShowAllContributors(!showAllContributors)}
              className="inline-flex items-center gap-1.5 text-xs font-black text-neutral-600 hover:text-brand-red px-4 py-2 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 transition-all cursor-pointer shadow-2xs"
            >
              <span>
                {showAllContributors
                  ? "نمایش مختصر"
                  : `مشاهده همه (${filteredContributors.length} حامی)`}
              </span>
              {showAllContributors ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
