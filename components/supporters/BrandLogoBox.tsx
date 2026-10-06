import React from "react";
import { Supporter } from "@/data/supporters";

interface BrandLogoBoxProps {
  supporter: Supporter;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function BrandLogoBox({
  supporter,
  size = "md",
  className = "",
}: BrandLogoBoxProps) {
  if (supporter.id === "digikala-mehr") {
    const heightMap = {
      sm: { container: "h-8 w-18 px-1.5", imgHeight: "20px" },
      md: { container: "h-10 w-28 px-2", imgHeight: "26px" },
      lg: { container: "h-12 w-32 px-2.5", imgHeight: "32px" },
      xl: { container: "h-14 w-36 sm:h-16 sm:w-44 px-3", imgHeight: "38px" },
    };
    const conf = heightMap[size] || heightMap.md;

    return (
      <div
        className={`bg-white rounded-xl border border-neutral-200/80 shadow-2xs flex items-center justify-center shrink-0 overflow-hidden ${conf.container} ${className}`}
      >
        <img
          src="/images/digikala-mehr.png"
          alt="دیجی‌کالا مهر"
          draggable={false}
          className="w-auto object-contain block select-none"
          style={{ maxHeight: conf.imgHeight, maxWidth: "100%" }}
        />
      </div>
    );
  }

  if (supporter.id === "maktabkhooneh") {
    if (size === "sm") {
      return (
        <div
          className={`bg-[#009CA7] rounded-xl p-1 flex items-center justify-center shrink-0 shadow-2xs overflow-hidden w-8 h-8 ${className}`}
        >
          <img
            src="/images/maktabkhooneh.svg"
            alt="مکتب‌خونه"
            className="w-full h-full object-contain select-none"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
      );
    } else {
      const conf =
        size === "xl"
          ? { container: "h-14 w-36 sm:h-16 sm:w-44 px-3", imgHeight: "38px" }
          : size === "lg"
          ? { container: "h-12 w-32 px-2.5", imgHeight: "32px" }
          : { container: "h-10 w-28 px-2", imgHeight: "26px" };

      return (
        <div
          className={`bg-white rounded-xl border border-neutral-200/80 shadow-2xs flex items-center justify-center shrink-0 overflow-hidden ${conf.container} ${className}`}
        >
          <img
            src="/images/maktabkhooneh.png"
            alt="مکتب‌خونه"
            draggable={false}
            className="w-auto object-contain block select-none"
            style={{ maxHeight: conf.imgHeight, maxWidth: "100%" }}
          />
        </div>
      );
    }
  }

  if (supporter.id === "rubikamp") {
    const sizeConf = {
      sm: { container: "w-8 h-8 p-1", imgSize: "20px" },
      md: { container: "h-10 w-28 px-2", imgSize: "26px" },
      lg: { container: "h-12 w-32 px-2.5", imgSize: "32px" },
      xl: { container: "h-14 w-36 sm:h-16 sm:w-44 px-3", imgSize: "38px" },
    };
    const conf = sizeConf[size] || sizeConf.md;

    return (
      <div
        className={`bg-white rounded-xl border border-neutral-200/80 shadow-2xs flex items-center justify-center shrink-0 overflow-hidden ${conf.container} ${className}`}
      >
        <img
          src="/images/home/rubikamp-logo.png"
          alt="روبیکمپ"
          draggable={false}
          className="object-contain block select-none"
          style={{ maxHeight: conf.imgSize, maxWidth: conf.imgSize }}
        />
      </div>
    );
  }

  // Fallback for individuals and community supporters
  const avatarSizes = {
    sm: "w-8 h-8 text-[11px]",
    md: "w-11 h-11 text-xs",
    lg: "w-14 h-14 text-sm",
    xl: "w-16 h-16 sm:w-20 sm:h-20 text-base",
  };

  return (
    <div
      className={`rounded-xl border border-neutral-200/70 bg-neutral-100/80 text-brand-graphite font-black flex items-center justify-center text-center select-none shadow-2xs ${
        avatarSizes[size] || avatarSizes.md
      } ${className}`}
    >
      <span className="inline-flex items-center justify-center text-center leading-none">
        {supporter.avatarInitials || supporter.name.slice(0, 2)}
      </span>
    </div>
  );
}
