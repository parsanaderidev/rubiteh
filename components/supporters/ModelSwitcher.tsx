"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Layers, LayoutGrid } from "lucide-react";

export type SupporterModelId = "original" | "hierarchy" | "contribution";

interface ModelOption {
  id: SupporterModelId;
  label: string;
  shortLabel: string;
  description: string;
  icon: React.ReactNode;
}

const MODEL_OPTIONS: ModelOption[] = [
  {
    id: "original",
    label: "مدل اصلی",
    shortLabel: "اصلی",
    description: "دسته‌بندی اولیه بر مبنای بازه مبالغ اهدایی",
    icon: <Award className="w-3.5 h-3.5" />,
  },
  {
    id: "hierarchy",
    label: "سلسله‌مراتبی",
    shortLabel: "سلسله‌مراتبی",
    description: "نمایش ساختار سطوح شرکا و حامیان بر اساس دامنه اثرگذاری",
    icon: <Layers className="w-3.5 h-3.5" />,
  },
  {
    id: "contribution",
    label: "نوع مشارکت",
    shortLabel: "نوع مشارکت",
    description: "تفکیک بر اساس ماهیت آورده (تجهیزات، دوره‌ها، لجستیک و مالی)",
    icon: <LayoutGrid className="w-3.5 h-3.5" />,
  },
];

interface ModelSwitcherProps {
  currentModel: SupporterModelId;
  onSelectModel: (model: SupporterModelId) => void;
}

export default function ModelSwitcher({
  currentModel,
  onSelectModel,
}: ModelSwitcherProps) {
  return (
    <div className="flex flex-col items-center justify-center mb-10 w-full font-ravi">
      {/* Label header */}
      <div className="flex items-center gap-2 mb-3 text-xs text-neutral-500 font-bold">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
        <span>نحوه نمایش حامیان و همراهان روبیتک</span>
      </div>

      {/* Segmented control bar */}
      <div
        role="tablist"
        aria-label="انتخاب مدل نمایش حامیان"
        className="bg-neutral-100/90 p-1.5 rounded-2xl border border-neutral-200/80 inline-flex items-center gap-1.5 max-w-full overflow-x-auto scrollbar-none shadow-inner"
        dir="rtl"
      >
        {MODEL_OPTIONS.map((opt) => {
          const isSelected = currentModel === opt.id;

          return (
            <button
              key={opt.id}
              role="tab"
              aria-selected={isSelected}
              onClick={() => onSelectModel(opt.id)}
              className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all duration-200 select-none flex items-center gap-2 cursor-pointer whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 ${
                isSelected
                  ? "text-brand-graphite shadow-xs"
                  : "text-neutral-500 hover:text-brand-graphite hover:bg-black/5"
              }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="active-model-indicator"
                  className="absolute inset-0 bg-white rounded-xl shadow-xs border border-neutral-200/60"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <span
                  className={
                    isSelected
                      ? "text-brand-red"
                      : "text-neutral-400 group-hover:text-neutral-600"
                  }
                >
                  {opt.icon}
                </span>
                <span className="hidden sm:inline">{opt.label}</span>
                <span className="sm:hidden">{opt.shortLabel}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Dynamic subtitle description of active model */}
      <div className="mt-2.5 text-center px-4">
        <span className="text-[11px] sm:text-xs text-neutral-400 font-medium">
          {MODEL_OPTIONS.find((m) => m.id === currentModel)?.description}
        </span>
      </div>
    </div>
  );
}
