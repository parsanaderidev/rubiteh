"use client";

import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="w-full min-h-[calc(100vh-220px)] flex flex-col items-center justify-center p-4 my-12 sm:my-20 md:my-28 font-ravi"
      dir="rtl"
    >
      <div className="w-full max-w-xl text-center flex flex-col items-center space-y-8">
        <div className="select-none">
          <span className="text-[140px] sm:text-[220px] font-black text-neutral-100 tracking-tighter leading-none block">
            404
          </span>
        </div>
        <div className="space-y-2 max-w-xs sm:max-w-sm">
          <h1 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
            مسیر را گم کرده‌اید؟
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 font-medium leading-relaxed">
            آدرسی که به دنبال آن هستید وجود ندارد یا تغییر یافته است.
          </p>
        </div>
        <div className="w-full pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto h-13 px-8 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-black text-xs sm:text-sm flex items-center justify-center transition-all active:scale-[0.98] shadow-none cursor-pointer"
          >
            <span>صفحه اصلی</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto h-13 px-8 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-500 hover:text-neutral-800 font-black text-xs sm:text-sm flex items-center justify-center transition-all active:scale-[0.98] outline-none cursor-pointer"
          >
            <span>برگشت</span>
          </button>
        </div>
      </div>
    </div>
  );
}
