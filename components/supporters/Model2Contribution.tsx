"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { SUPPORTERS, ContributionCategory } from "@/data/supporters";
import BrandLogoBox from "./BrandLogoBox";

type CategoryFilter = "all" | "hardware" | "education" | "campaign" | "financial";

interface CategoryMeta {
  id: ContributionCategory;
  title: string;
  subtitle: string;
}

const CATEGORIES: CategoryMeta[] = [
  {
    id: "hardware",
    title: "تجهیزات و سخت‌افزار (اهدای کالا و خدمات فنی)",
    subtitle: "اهدای لپ‌تاپ‌های کارکرده استاندارد، قطعات و خدمات ارتقا",
  },
  {
    id: "education",
    title: "محتوا و خدمات آموزشی دیجیتال",
    subtitle: "ارائه دوره‌ها، اشتراک پلتفرم‌ها و توانمندسازی مهارتی",
  },
  {
    id: "campaign",
    title: "پویش‌های عمومی و زنجیره لجستیک",
    subtitle: "تسهیلگری جمع‌آوری، هماهنگی میدانی و انتقال ایمن دستگاه‌ها",
  },
  {
    id: "financial",
    title: "تأمین مالی دستگاه‌ها و توسعه مدارس سیار",
    subtitle: "مشارکت نقدی در خرید لپ‌تاپ‌های نو و پوشش هزینه‌های گردش",
  },
];

export default function Model2Contribution() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("all");
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (catId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };

  const getSupportersByCategory = (catId: ContributionCategory) => {
    if (catId === "financial") {
      return SUPPORTERS.filter(
        (s) => s.contributionCategory === "financial" || s.contributionType === "financial"
      );
    }
    return SUPPORTERS.filter((s) => s.contributionCategory === catId);
  };

  const visibleCategories =
    activeTab === "all"
      ? CATEGORIES
      : CATEGORIES.filter((c) => c.id === activeTab);

  const filterTabs = [
    { id: "all", label: "همه انواع مشارکت", count: SUPPORTERS.length },
    {
      id: "hardware",
      label: "تجهیزات و سخت‌افزار",
      count: SUPPORTERS.filter((s) => s.contributionCategory === "hardware").length,
    },
    {
      id: "education",
      label: "آموزش و محتوا",
      count: SUPPORTERS.filter((s) => s.contributionCategory === "education").length,
    },
    {
      id: "campaign",
      label: "پویش و لجستیک",
      count: SUPPORTERS.filter((s) => s.contributionCategory === "campaign").length,
    },
    {
      id: "financial",
      label: "تأمین مالی",
      count: SUPPORTERS.filter(
        (s) => s.contributionCategory === "financial" || s.contributionType === "financial"
      ).length,
    },
  ];

  return (
    <div className="w-full font-ravi space-y-10 sm:space-y-12 max-w-5xl mx-auto" dir="rtl">
      {/* Category Filter Tabs with perfected item padding */}
      <div className="flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap">
        {filterTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as CategoryFilter)}
              className={`px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2 select-none shadow-2xs ${
                isActive
                  ? "bg-brand-graphite text-white shadow-xs"
                  : "bg-neutral-100/90 text-neutral-600 hover:text-brand-graphite hover:bg-neutral-200/80"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`inline-flex items-center justify-center text-center leading-none text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md font-bold ${
                  isActive ? "bg-white/20 text-white" : "bg-neutral-200/90 text-neutral-500"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dedicated Separator Line with generous margin-top and margin-bottom */}
      <div className="w-full h-px bg-neutral-200/70 mt-8 sm:mt-10 mb-8 sm:mb-10" />

      {/* Visual Grouping by Category with comfortable margin-top and connected margin-bottom */}
      <div className="space-y-10 sm:space-y-12">
        {visibleCategories.map((cat, index) => {
          const list = getSupportersByCategory(cat.id);
          const isExpanded = !!expandedCategories[cat.id];
          // Initial view limit of 9 items: hardware (9), education (8), campaign (2) fit fully; financial (17) shows 3x3 grid
          const displayList = isExpanded || list.length <= 9 ? list : list.slice(0, 9);
          const isTwoCol = cat.id === "campaign" || list.length <= 2;

          return (
            <div key={cat.id} className={index > 0 ? "pt-6 sm:pt-8" : ""}>
              {/* Category Header: Connected margin-bottom (mb-5) to cards */}
              <div className="pb-3 mb-5 border-b border-neutral-200/80">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-black text-brand-graphite">
                    {cat.title}
                  </h3>
                  <span className="text-xs text-neutral-400 font-medium hidden sm:inline">
                    {cat.subtitle}
                  </span>
                </div>
              </div>

              {/* Dynamic Grid: 2-column for 2-item categories (Campaign) so cards are balanced and fill width; 3-column for others */}
              <div
                className={`grid grid-cols-1 ${
                  isTwoCol ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
                } gap-3.5`}
              >
                {displayList.map((supporter) => {
                  const cardBody = (
                    <div
                      className={`h-[80px] w-full p-3.5 rounded-xl border border-neutral-100 bg-neutral-50/50 hover:bg-white hover:border-neutral-200/90 hover:shadow-2xs transition-all flex items-center justify-between gap-3 group ${
                        supporter.hasDetailPage ? "cursor-pointer" : "cursor-default"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <BrandLogoBox supporter={supporter} size="sm" />
                        <div className="min-w-0 flex-1 flex flex-col justify-center">
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-xs sm:text-sm font-black text-brand-graphite transition-colors truncate ${
                                supporter.hasDetailPage ? "group-hover:text-brand-red" : ""
                              }`}
                            >
                              {supporter.name}
                            </span>
                            {(supporter.badgeStyle === "gold" ||
                              supporter.badgeText?.includes("طلایی")) && (
                              <span className="inline-flex items-center justify-center text-center leading-none text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#E4C54C] text-white shrink-0 shadow-2xs">
                                حامی طلایی
                              </span>
                            )}
                            {(supporter.badgeStyle === "silver" ||
                              supporter.badgeText?.includes("نقره")) && (
                              <span className="inline-flex items-center justify-center text-center leading-none text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#8A8A8A] text-white shrink-0 shadow-2xs">
                                نقره‌ای
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-1.5 mt-1.5 text-[11px] text-neutral-400 font-medium truncate">
                            {supporter.location && (
                              <>
                                <span className="text-neutral-500 font-bold shrink-0">
                                  {supporter.location}
                                </span>
                                <span className="text-neutral-300 shrink-0">•</span>
                              </>
                            )}
                            <span className="truncate">{supporter.contributionLabel}</span>
                          </div>
                        </div>
                      </div>

                      {supporter.hasDetailPage && (
                        <div
                          className="text-neutral-400 group-hover:text-brand-red transition-colors shrink-0 p-1 rounded-lg group-hover:bg-neutral-100"
                          title="مشاهده پرونده"
                        >
                          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                        </div>
                      )}
                    </div>
                  );

                  return supporter.hasDetailPage ? (
                    <Link
                      key={supporter.id}
                      href={`/supporters/${supporter.slug}`}
                      className="block no-underline"
                    >
                      {cardBody}
                    </Link>
                  ) : (
                    <div key={supporter.id}>{cardBody}</div>
                  );
                })}
              </div>

              {/* Progressive disclosure for large lists */}
              {list.length > 9 && (
                <div className="mt-5 pt-2 flex justify-center">
                  <button
                    onClick={() => toggleCategory(cat.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-neutral-600 hover:text-brand-red px-4 py-2 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 transition-all cursor-pointer shadow-2xs"
                  >
                    <span>
                      {isExpanded
                        ? "نمایش مختصر"
                        : `مشاهده همه (${list.length} حامی)`}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
