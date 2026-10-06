"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ModelSwitcher, { SupporterModelId } from "./ModelSwitcher";
import Model0Original from "./Model0Original";
import Model1Hierarchy from "./Model1Hierarchy";
import Model2Contribution from "./Model2Contribution";

export default function SupportersSection() {
  const [activeModel, setActiveModel] = useState<SupporterModelId>("original");

  return (
    <section
      id="supporters"
      className="w-full py-16 md:pb-24 font-ravi scroll-mt-32"
      dir="rtl"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <span className="text-brand-red font-bold text-xs sm:text-sm mb-2 block">
            جامعه حامیان
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-graphite">
            حامیان برتر روبیتک
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            افراد و سازمان‌هایی که دسترسی به یادگیری دیجیتال را ممکن می‌کنند
          </p>
        </div>

        {/* Polished Model Switcher */}
        <ModelSwitcher
          currentModel={activeModel}
          onSelectModel={(model) => setActiveModel(model)}
        />

        {/* Active Model Display with Smooth Transition */}
        <div className="w-full min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModel}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="w-full"
            >
              {activeModel === "original" && <Model0Original />}
              {activeModel === "hierarchy" && <Model1Hierarchy />}
              {activeModel === "contribution" && <Model2Contribution />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
