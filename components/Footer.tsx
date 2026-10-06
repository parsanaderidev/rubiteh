import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-graphite text-white pt-12 pb-6 md:pt-16 md:pb-8 font-ravi" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        <div className="relative w-12 h-12 md:w-14 md:h-14 mb-4">
          <img
            alt="Rubitech"
            className="object-contain select-none"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              color: "transparent",
            }}
            src="/images/home/logo-light.png"
          />
        </div>
        <h3 className="text-base sm:text-lg md:text-xl font-black mb-2 text-white">
          هـر لـپ‌تـاپ، یـک مـدرسـه در حـرکـت !
        </h3>
        <p className="text-[11px] sm:text-xs md:text-sm text-white/90 font-medium leading-relaxed max-w-2xl px-2">
          روبیتک، ابزارهای دیجیتال را به دست نوجوانان کم‌برخوردار می‌رساند، یک لپ‌تاپ مشترک در هر بار در جوامع محروم سراسر ایران
        </p>

        <nav className="flex flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 font-black text-xs sm:text-sm md:text-base mt-6 md:mt-8 w-full max-w-md text-white">
          <Link className="hover:text-brand-red transition-colors" href="/">
            خانه
          </Link>
          <Link className="hover:text-brand-red transition-colors" href="/about">
            قصه ما
          </Link>
          <Link className="hover:text-brand-red transition-colors" href="/contact">
            ارتباط با ما
          </Link>
        </nav>

        <div className="flex items-center justify-center gap-3 mt-6 md:mt-8 pb-10 md:pb-12 border-b border-white/5 w-full">
          <a
            className="p-2.5 sm:p-3 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-all"
            href="https://t.me/rubitechschool"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Telegram"
          >
            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 448 512">
              <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z" />
            </svg>
          </a>
          <a
            className="p-2.5 sm:p-3 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-all"
            href="https://www.instagram.com/rubitech.school"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Instagram"
          >
            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
          <a
            className="p-2.5 sm:p-3 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-all"
            href="https://www.linkedin.com/company/rubitechhh/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="LinkedIn"
          >
            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 448 512">
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
            </svg>
          </a>
        </div>

        <div className="flex flex-col items-center justify-center gap-1.5 mt-6 md:mt-8">
          <p className="text-[10px] sm:text-xs text-white w-full flex justify-center font-medium">
            کلیه حقوق مادی و معنوی این سایت متعلق به روبیتک است
          </p>
          <p className="text-[10px] sm:text-xs text-white/60 font-bold flex items-center justify-center gap-1">
            <span>کلون‌شده توسط</span>
            <a
              href="https://parsanaderi-dev.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-brand-red transition-colors underline decoration-white/20 hover:decoration-brand-red underline-offset-4 cursor-pointer"
            >
              پارسا نادری
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
