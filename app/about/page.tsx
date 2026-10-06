"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { motion, useScroll, useSpring, useMotionValue, useInView, MotionValue } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";

// Persian Animated Number Counter
function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { damping: 30, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (isInView) {
      motionVal.set(value);
    }
  }, [isInView, motionVal, value]);

  useEffect(() => {
    const formatNumber = (num: number) =>
      Intl.NumberFormat("fa-IR").format(Math.floor(num));

    if (ref.current) {
      ref.current.textContent = formatNumber(springVal.get());
    }

    const unsubscribe = springVal.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = formatNumber(latest);
      }
    });

    return () => unsubscribe();
  }, [springVal]);

  return <span ref={ref}>۰</span>;
}

interface Step {
  year: string;
  title: string;
  desc: string;
  position: "left" | "right";
}

const timelineSteps: Step[] = [
  {
    year: "تابستان ۱۴۰۴",
    title: "شروع یک دغدغه",
    desc: "در روبیکمپ بارها با نوجوانان مستعدی روبه‌رو شدیم که تنها به دلیل نداشتن لپ‌تاپ از بخشی از فرصت‌های یادگیری محروم بودند. همین دغدغه، نقطه شروع شکل‌گیری روبیتک شد.",
    position: "left",
  },
  {
    year: "دی ۱۴۰۴",
    title: "ایده‌ای جدی‌تر شد",
    desc: "پس از ماه‌ها بررسی و گفتگو، ساختار پروژه و مدل اجرایی روبیتک نهایی شد و مسیر راه‌اندازی آن به شکل جدی آغاز شد.",
    position: "right",
  },
  {
    year: "اسفند ۱۴۰۴",
    title: "طراحی مدل عملیاتی",
    desc: "فرآیند تأمین، تحویل، گردش و پیگیری لپ‌تاپ‌ها طراحی شد تا هر دستگاه بتواند در طول زمان به چندین دانش‌آموز خدمت کند.",
    position: "left",
  },
  {
    year: "خرداد ۱۴۰۵",
    title: "ساخت زیرساخت‌های روبیتک",
    desc: "توسعه وب‌سایت و زیرساخت‌های موردنیاز آغاز شد تا ارتباط با حامیان، سفیران و دانش‌آموزان ساده‌تر و شفاف‌تر شود.",
    position: "right",
  },
  {
    year: "آبان ۱۴۰۵",
    title: "آغاز مسیر شفافیت",
    desc: "توسعه ابزارهای گزارش‌دهی و نمایش اثرگذاری حمایت‌ها آغاز شد تا همراهان روبیتک بتوانند نتایج این مسیر را بهتر دنبال کنند.",
    position: "left",
  },
  {
    year: "آینده",
    title: "گسترش فرصت‌های یادگیری",
    desc: "گسترش فعالیت در شهرهای بیشتر، توسعه قابلیت‌های شفافیت و رساندن لپ‌تاپ به دانش‌آموزان بیشتری در سراسر ایران.",
    position: "right",
  },
];

function TimelineItem({
  step,
  progress,
  threshold,
}: {
  step: Step;
  progress: MotionValue<number>;
  threshold: number;
}) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const checkActive = (latest: number) => {
      setIsActive(latest >= threshold - 0.02);
    };
    checkActive(progress.get());
    const unsubscribe = progress.on("change", checkActive);
    return () => unsubscribe();
  }, [progress, threshold]);

  const cardContent = (
    <motion.div
      animate={{
        opacity: isActive ? 1 : 0.3,
        y: isActive ? 0 : 10,
        filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
      }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-start w-full text-right"
    >
      <span className="text-[10px] sm:text-xs font-bold text-brand-red">{step.year}</span>
      <h3 className="mt-1 text-sm sm:text-base md:text-lg font-black text-brand-graphite leading-tight">
        {step.title}
      </h3>
      <p className="mt-1.5 text-[11px] sm:text-xs md:text-sm text-neutral-500 leading-relaxed max-w-xs sm:max-w-sm md:max-w-none">
        {step.desc}
      </p>
    </motion.div>
  );

  return (
    <div className="relative flex flex-row items-center justify-between w-full min-h-20 md:min-h-25">
      <motion.div
        animate={{
          backgroundColor: isActive ? "#FF4B4B" : "rgb(235, 235, 235)",
          scale: isActive ? 1.2 : 0.9,
          opacity: isActive ? 1 : 0.5,
        }}
        transition={{ duration: 0.25 }}
        className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 md:w-5 md:h-5 rounded-full border-4 border-white z-20 flex items-center justify-center shadow-xs"
      >
        <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-white" />
      </motion.div>
      <div className="w-[46%] pl-2 sm:pl-4 md:pl-0">
        {step.position === "left" ? cardContent : null}
      </div>
      <div className="w-[46%] pr-2 sm:pr-4 md:pr-0">
        {step.position === "right" ? cardContent : null}
      </div>
    </div>
  );
}

export default function AboutPage() {
  const { openDonation } = useModal();
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 70%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="flex-1 font-ravi" dir="rtl">
      {/* Section 1: Hero */}
      <section className="relative w-full h-[60vh] md:h-[90vh] flex flex-col justify-end md:justify-center items-center px-4 pb-8 md:pb-0 overflow-hidden bg-[#0d1b2a]">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img
            alt="Rubitech Mission Illustration"
            className="object-cover object-[center_55%]"
            src="/images/about/about-hero.png"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              color: "transparent",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-full bg-linear-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="container mx-auto relative z-10 w-full max-w-3xl flex flex-col items-center justify-end md:justify-center text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-4 leading-snug tracking-tight">
              فرصت یادگیری، برای همه
            </h1>
            <p className="text-xs md:text-base text-slate-200 font-medium max-w-xl mx-auto leading-relaxed mb-6 px-4">
              روبیتک یک حرکت اجتماعی برای کاهش شکاف دیجیتال است؛ جایی که هر لپ‌تاپ می‌تواند مسیر یادگیری چندین دانش‌آموز را تغییر دهد.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => openDonation()}
                className="group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding whitespace-nowrap outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 h-8 gap-1.5 bg-brand-red text-white hover:bg-brand-red-hover max-sm:text-xs active:scale-[0.95] duration-200 px-8 py-5 rounded-xl font-black text-sm transition-all md:hidden cursor-pointer"
              >
                ساخت مدرسه
              </button>
              <button
                onClick={() => openDonation()}
                className="group/button shrink-0 items-center justify-center border border-transparent bg-clip-padding whitespace-nowrap outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 h-8 gap-1.5 bg-white text-brand-red hover:bg-white/90 active:scale-[0.95] duration-200 px-16 py-6 rounded-xl font-black text-sm shadow-xl transition-all hidden md:flex cursor-pointer"
              >
                ساخت مدرسه
              </button>
            </div>
          </div>

          <div className="w-full mt-10 md:mt-14 max-w-2xl mx-auto">
            <div className="grid grid-cols-3 text-center items-center justify-center relative">
              <div className="absolute top-1/2 left-1/3 w-px h-8 bg-white/30 -translate-y-1/2" />
              <div className="absolute top-1/2 left-2/3 w-px h-8 bg-white/30 -translate-y-1/2" />
              <div className="flex flex-col items-center justify-center space-y-1">
                <div
                  className="text-sm sm:text-lg md:text-xl font-black text-white tracking-tighter whitespace-nowrap flex items-center justify-center gap-0.5"
                  dir="ltr"
                >
                  <AnimatedCounter value={110} />
                  <span className="text-[10px] sm:text-xs md:text-sm font-bold text-slate-300 mr-1">
                    {" "}
                    مدرسه
                  </span>
                </div>
                <div className="text-[10px] sm:text-xs text-white font-bold whitespace-nowrap">
                  لپ‌تاپ فعال
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-1">
                <div
                  className="text-sm sm:text-lg md:text-xl font-black text-white tracking-tighter whitespace-nowrap flex items-center justify-center gap-0.5"
                  dir="ltr"
                >
                  <AnimatedCounter value={575998} />
                  <span className="text-[10px] sm:text-xs md:text-sm font-bold text-slate-300 mr-1">
                    {" "}
                    ساعت
                  </span>
                </div>
                <div className="text-[10px] sm:text-xs text-white font-bold whitespace-nowrap">
                  ساعت دسترسی به آموزش
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-1">
                <div
                  className="text-sm sm:text-lg md:text-xl font-black text-white tracking-tighter whitespace-nowrap flex items-center justify-center gap-0.5"
                  dir="ltr"
                >
                  <AnimatedCounter value={31} />
                </div>
                <div className="text-[10px] sm:text-xs text-white font-bold whitespace-nowrap">
                  استان تحت پوشش
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Rubitech */}
      <section className="w-full bg-background py-16 md:py-24" dir="rtl">
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="w-full flex flex-col items-center text-center md:items-start md:text-start space-y-3 max-md:mx-auto max-md:max-w-xs sm:max-md:max-w-md">
            <span className="text-brand-red font-black text-xs block tracking-wider">چرا روبیتک؟</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-graphite leading-tight">
              وقتی یک لپ‌تاپ، یک فرصت می‌شود…
            </h2>
            <p className="text-muted-foreground font-medium text-xs sm:text-sm leading-relaxed w-full">
              بسیاری از دانش‌آموزان با انگیزه و با استعداد، تنها به دلیل نداشتن دسترسی به فناوری از بخشی از فرصت‌های آموزشی محروم می‌شوند. در دنیایی که یادگیری، مهارت‌آموزی و حتی ورود به بازار کار به فناوری گره خورده، این فاصله هر روز بیشتر می‌شود.
            </p>
            <p className="text-muted-foreground font-medium text-xs sm:text-sm leading-relaxed w-full">
              روبی‌تک تلاش می‌کند با کمک شبکه‌ای از حامیان و سفیران، لپ‌تاپ‌ها را به دست دانش‌آموزان برساند و شکاف دسترسی به فناوری را کاهش دهد.
            </p>
            <div className="pt-2 w-full flex justify-center md:justify-start">
              <button
                onClick={() => openDonation()}
                className="inline-flex items-center justify-center gap-1 font-black text-xs transition-all cursor-pointer bg-brand-red hover:bg-brand-red-hover text-white rounded-lg py-2.5 px-4 md:bg-transparent md:hover:bg-transparent md:text-brand-red md:rounded-none md:py-0 md:px-0 md:hover:gap-2"
              >
                <span>حمایت از دانش‌آموزان</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="space-y-3 w-full max-w-xs sm:max-w-md mx-auto md:mx-0">
            <div className="bg-transparent md:bg-white dark:bg-brand-charcoal p-4 sm:p-5 rounded-xl text-center md:text-start shadow-none">
              <span className="text-[9px] sm:text-[10px] font-bold text-brand-red block mb-1">مشکل</span>
              <h3 className="text-xs sm:text-sm font-black text-brand-graphite mb-1">
                شکاف دیجیتال رو به رشد
              </h3>
              <p className="text-[11px] sm:text-xs text-neutral-500 font-medium leading-relaxed">
                در مناطق روستایی نسبت دسترسی به لپ‌تاپ کمتر از ۱۰٪ است.
              </p>
            </div>
            <div className="bg-transparent md:bg-white dark:bg-brand-charcoal p-4 sm:p-5 rounded-xl text-center md:text-start shadow-none">
              <span className="text-[9px] sm:text-[10px] font-bold text-brand-red block mb-1">نیاز</span>
              <h3 className="text-xs sm:text-sm font-black text-brand-graphite mb-1">
                دسترسی به ابزار دیجیتال
              </h3>
              <p className="text-[11px] sm:text-xs text-neutral-500 font-medium leading-relaxed">
                بدون لپ‌تاپ، مهارت‌های دیجیتال و آموزش آنلاین ممکن نیست.
              </p>
            </div>
            <div className="bg-transparent md:bg-white dark:bg-brand-charcoal p-4 sm:p-5 rounded-xl text-center md:text-start shadow-none">
              <span className="text-[9px] sm:text-[10px] font-bold text-brand-red block mb-1">راه‌حل</span>
              <h3 className="text-xs sm:text-sm font-black text-brand-graphite mb-1">
                مدل گردش لپ‌تاپ
              </h3>
              <p className="text-[11px] sm:text-xs text-neutral-500 font-medium leading-relaxed">
                هر لپ‌تاپ میان چندین دانش‌آموز گردش می‌کند تا افراد بیشتری به این فرصت دسترسی داشته باشند.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Timeline with interactive Scroll Animation */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-brand-red font-black text-xs block tracking-wider">
              مسیر شکل‌گیری
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold sm:font-black text-brand-graphite">
              چگونه روبیتک متولد شد
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-black max-w-xl mx-auto leading-relaxed">
              مسیر روبیتک از یک ایده ساده شروع شد؛ اینکه هیچ دانش‌آموزی نباید به دلیل نداشتن ابزار، از یادگیری باز بماند.
            </p>
          </div>

          <div ref={timelineRef} className="relative mx-auto max-w-3xl">
            {/* Base vertical track */}
            <div className="absolute left-1/2 top-12 bottom-14 max-sm:top-16.5 max-sm:bottom-16.5 w-0.5 bg-neutral-200 -translate-x-1/2" />
            {/* Animated vertical progress line */}
            <motion.div
              className="absolute left-1/2 top-12 bottom-13 max-sm:top-16.5 max-sm:bottom-16.5 w-0.5 bg-brand-red origin-top -translate-x-1/2"
              style={{ scaleY }}
            />
            {/* Timeline Milestones */}
            <div className="space-y-12 md:space-y-24">
              {timelineSteps.map((step, idx) => {
                const threshold = timelineSteps.length > 1 ? idx / (timelineSteps.length - 1) : 0;
                return (
                  <TimelineItem
                    key={idx}
                    step={step}
                    progress={scaleY}
                    threshold={threshold}
                  />
                );
              })}
            </div>
          </div>

          <div className="relative w-12 h-12 md:w-16 md:h-16 mx-auto mt-20 md:mt-28">
            <img
              alt="Rubitech Logo"
              className="object-contain select-none"
              src="/images/logo.png"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                color: "transparent",
              }}
            />
          </div>
        </div>
      </section>

      {/* Section 4: Statistics with Animated Counters */}
      <section className="bg-brand-red py-12 sm:py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <span className="text-white text-[10px] sm:text-xs font-black block tracking-wider">
              شفافیت و اثربخشی
            </span>
            <h2 className="mt-2 sm:mt-3 text-lg sm:text-2xl md:text-3xl font-black text-white">
              آنچه روبیتک اندازه می‌گیرد
            </h2>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-white/70">
              داده‌هایی واقعی از اثرگذاری واقعی
            </p>
          </div>

          <div className="mt-10 sm:mt-14 grid grid-cols-3 gap-0">
            <div className="relative text-center py-4 sm:py-6">
              <div
                className="text-white text-base sm:text-xl md:text-4xl font-black flex items-center justify-center gap-0.5 md:gap-1"
                dir="ltr"
              >
                <AnimatedCounter value={110} />
                <span className="text-[9px] sm:text-[10px] md:text-base font-bold text-white/70 mr-0.5 md:mr-1">
                  {" "}
                  مدرسه
                </span>
              </div>
              <div className="mt-1 sm:mt-1.5 text-[9px] sm:text-[10px] md:text-sm text-white/80 font-medium px-1">
                لپ‌تاپ فعال
              </div>
            </div>

            <div className="relative text-center py-4 sm:py-6">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 sm:h-10 md:h-16 bg-white/30" />
              <div
                className="text-white text-base sm:text-xl md:text-4xl font-black flex items-center justify-center gap-0.5 md:gap-1"
                dir="ltr"
              >
                <AnimatedCounter value={575998} />
                <span className="text-[9px] sm:text-[10px] md:text-base font-bold text-white/70 mr-0.5 md:mr-1">
                  {" "}
                  ساعت
                </span>
              </div>
              <div className="mt-1 sm:mt-1.5 text-[9px] sm:text-[10px] md:text-sm text-white/80 font-medium px-1">
                ساعت دسترسی به آموزش
              </div>
            </div>

            <div className="relative text-center py-4 sm:py-6">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 sm:h-10 md:h-16 bg-white/30" />
              <div
                className="text-white text-base sm:text-xl md:text-4xl font-black flex items-center justify-center gap-0.5 md:gap-1"
                dir="ltr"
              >
                <AnimatedCounter value={31} />
              </div>
              <div className="mt-1 sm:mt-1.5 text-[9px] sm:text-[10px] md:text-sm text-white/80 font-medium px-1">
                استان تحت پوشش
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Proposal */}
      <section className="bg-background py-24 px-4 transition-colors duration-300">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-brand-red text-sm font-medium block tracking-wider">
            پروپوزال حامیان
          </span>
          <h2 className="mt-3 text-xl md:text-3xl font-black text-brand-graphite leading-tight">
            جزئیات کامل مدل روبیتک
          </h2>
          <p className="mt-3 text-xs md:text-sm text-black max-w-xl mx-auto leading-relaxed px-2">
            اگر می‌خواهید با جزئیات مدل روبیتک و مسیر اثرگذاری آشنا شوید، پروپوزال رسمی را دانلود کنید.
          </p>

          <div className="mt-10 bg-transparent md:bg-white border-none md:border md:border-neutral-200/60 rounded-3xl p-0 md:p-10 transition-colors duration-300 shadow-none">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
                <img
                  alt="pdf-image"
                  className="w-12 h-12 object-contain select-none shrink-0"
                  src="/images/about/pdf.png"
                />
                <div className="flex flex-col text-center md:text-start">
                  <h3 className="text-lg md:text-2xl font-black text-brand-graphite tracking-tight">
                    Rubitech Proposal
                  </h3>
                  <p className="mt-1 text-xs md:text-sm text-neutral-500 leading-relaxed">
                    پروپوزال جامع برای حامیان و سرمایه‌گذاران اجتماعی — شامل مدل عملیاتی، استراتژی اثرگذاری، ساختار مالی و برنامه رشد
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-row items-center justify-center md:justify-start gap-1 sm:gap-2 flex-wrap">
              <span className="bg-brand-blue/10 text-brand-blue text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1.5 rounded-full whitespace-nowrap">
                فرمت PDF
              </span>
              <span className="bg-brand-blue/10 text-brand-blue text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1.5 rounded-full whitespace-nowrap">
                ۵.۲ مگابایت
              </span>
              <span className="bg-brand-blue/10 text-brand-blue text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1.5 rounded-full whitespace-nowrap">
                ۲۴ صفحه
              </span>
              <span className="bg-brand-blue/10 text-brand-blue text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1.5 rounded-full whitespace-nowrap">
                آخرین به‌روزرسانی اردیبهشت ۱۴۰۵
              </span>
            </div>

            <div className="flex my-6 flex-row items-center justify-center md:justify-start gap-3 w-full">
              <a
                className="flex-1 md:flex-initial bg-brand-blue-dark hover:bg-brand-blue-dark-hover text-white font-bold px-5 md:px-8 py-3 rounded-xl flex items-center justify-center gap-2 shadow-none transition-all text-xs md:text-base cursor-pointer"
                download="Rubitech-Proposal.pdf"
                href="https://www.rubitech.org/docs/rubitech-proposal.pdf"
              >
                <Download className="w-4 h-4" />
                <span>دانلود پروپوزال</span>
              </a>
              <Link
                className="border border-brand-graphite hover:bg-neutral-50 text-brand-graphite font-bold px-5 md:px-8 py-2.5 rounded-xl transition-all text-center text-xs md:text-base flex-1 md:flex-initial"
                href="/contact"
              >
                تماس با ما
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
