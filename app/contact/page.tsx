"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown, ChevronLeft } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const subjects = [
    "همکاری و حمایت مالی",
    "درخواست لپ‌تاپ (دانش‌آموزی)",
    "همکاری به عنوان سفیر",
    "سایر موضوعات",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setName("");
      setPhone("");
      setEmail("");
      setSubject("");
      setContent("");
      setTimeout(() => setSubmitted(false), 4000);
    }, 800);
  };

  return (
    <div className="flex-1 font-ravi">
      {/* Toast Notification */}
      {submitted && (
        <div
          data-rht-toaster=""
          style={{
            position: "fixed",
            zIndex: 9999,
            top: "24px",
            right: "24px",
            pointerEvents: "auto",
          }}
        >
          <div className="bg-emerald-600 text-white px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3 animate-in slide-in-from-top-4 duration-300">
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <div>
              <p className="text-xs font-black">پیام شما با موفقیت ارسال شد!</p>
              <p className="text-[11px] text-white/90 font-medium">به زودی با شما تماس خواهیم گرفت.</p>
            </div>
          </div>
        </div>
      )}

      <main className="w-full min-h-screen py-10 lg:py-0 lg:flex lg:items-center px-4" dir="rtl">
        <div className="container mx-auto max-w-6xl flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full lg:-translate-y-8 transition-transform">
          {/* Mobile title */}
          <div className="block lg:hidden text-center space-y-3 w-full">
            <h1 className="text-xl sm:text-2xl font-bold sm:font-black text-neutral-900 leading-tight">
              ارتباط با تیم روبیتک
            </h1>
            <p className="text-[11px] sm:text-sm text-neutral-600 font-medium sm:font-bold leading-relaxed max-w-md mx-auto px-2">
              اگر درباره روبیتک سوالی دارید یا می‌خواهید به عنوان دانش‌آموز، سفیر یا حامی مالی همراه ما باشید، کافی است فرم زیر را تکمیل کنید. ما در اولین فرصت با شما تماس می‌گیریم و راهنمایی‌تان می‌کنیم.
            </p>
          </div>

          {/* Form Card */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-xl bg-white rounded-2xl border border-neutral-200/60 p-5 sm:p-8 shadow-xs text-right" dir="rtl">
              <h2 className="text-xl font-black text-brand-graphite mb-6">فرم ارتباط با ما</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col w-full">
                    <label className="text-xs font-bold text-neutral-600 mb-1.5 flex items-center gap-1">
                      <span>نام و نام خانوادگی</span>
                      <span className="text-brand-red font-black">*</span>
                    </label>
                    <input
                      className="min-w-0 py-1 transition-colors w-full h-12 rounded-xl bg-transparent border border-neutral-200 px-4 text-xs font-medium shadow-none outline-none focus:border-neutral-300 focus-visible:border-neutral-300"
                      name="name"
                      required
                      placeholder="نام و نام خانوادگی"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <label className="text-xs font-bold text-neutral-600 mb-1.5 flex items-center gap-1">
                      <span>شماره تماس</span>
                      <span className="text-brand-red font-black">*</span>
                    </label>
                    <input
                      className="min-w-0 py-1 transition-colors w-full h-12 rounded-xl bg-transparent border border-neutral-200 px-4 text-xs font-medium shadow-none outline-none focus:border-neutral-300 focus-visible:border-neutral-300 text-right"
                      inputMode="numeric"
                      maxLength={11}
                      minLength={10}
                      name="phone"
                      required
                      placeholder="شماره تماس"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col w-full">
                    <label className="text-xs font-bold text-neutral-600 mb-1.5">
                      <span>ایمیل</span>
                    </label>
                    <input
                      className="min-w-0 py-1 transition-colors w-full h-12 rounded-xl bg-transparent border border-neutral-200 px-4 text-xs font-medium shadow-none outline-none focus:border-neutral-300 focus-visible:border-neutral-300"
                      dir="ltr"
                      name="email"
                      placeholder="you@example.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col w-full relative">
                    <label className="text-xs font-bold text-neutral-600 mb-1.5 flex items-center gap-1">
                      <span>موضوع</span>
                      <span className="text-brand-red font-black">*</span>
                    </label>
                    <button
                      className="w-full h-12 rounded-xl bg-transparent border border-neutral-200 px-4 text-xs font-bold text-neutral-600 shadow-none outline-none flex items-center justify-between cursor-pointer hover:border-neutral-300"
                      type="button"
                      onClick={() => setIsSubjectOpen(!isSubjectOpen)}
                    >
                      <span className={`text-xs truncate font-bold ${subject ? "text-brand-graphite" : "text-neutral-400"}`}>
                        {subject || "انتخاب موضوع"}
                      </span>
                      <ChevronDown className="h-4 w-4 text-neutral-400 shrink-0" />
                    </button>

                    {isSubjectOpen && (
                      <div className="absolute top-19 left-0 right-0 z-30 bg-white border border-neutral-200 rounded-xl shadow-lg py-1.5 animate-in fade-in zoom-in-95 duration-150">
                        {subjects.map((s) => (
                          <div
                            key={s}
                            onClick={() => {
                              setSubject(s);
                              setIsSubjectOpen(false);
                            }}
                            className="px-4 py-2.5 text-xs font-bold text-neutral-700 hover:bg-neutral-50 hover:text-brand-red cursor-pointer transition-colors"
                          >
                            {s}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col w-full">
                  <label className="text-xs font-bold text-neutral-600 mb-1.5 flex items-center gap-1">
                    <span>توضیحات</span>
                    <span className="text-brand-red font-black">*</span>
                  </label>
                  <textarea
                    className="flex transition-colors placeholder:text-muted-foreground w-full min-h-28 rounded-xl bg-transparent border border-neutral-200 px-4 py-3 text-xs font-medium resize-none shadow-none outline-none focus:border-neutral-300 focus-visible:border-neutral-300"
                    name="content"
                    required
                    placeholder="توضیحات"
                    rows={4}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                <div className="flex justify-center sm:justify-end pt-1">
                  <button
                    className="group/button inline-flex shrink-0 items-center justify-center border border-transparent whitespace-nowrap outline-none select-none h-12 w-full sm:w-auto px-12 rounded-xl bg-brand-red hover:bg-brand-red/90 text-white font-black text-xs shadow-none active:scale-[0.98] transition-all duration-150 disabled:opacity-70 cursor-pointer"
                    disabled={loading}
                    type="submit"
                  >
                    {loading ? "در حال ارسال..." : "ارسال پیام"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Details & Links */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-right w-full">
            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-start space-y-8" dir="rtl">
              <div className="hidden lg:flex items-center gap-1.5 text-xs font-bold text-neutral-400">
                <Link className="hover:text-neutral-600 transition-colors" href="/">
                  خانه
                </Link>
                <ChevronLeft className="w-3.5 h-3.5" />
                <span className="text-neutral-800">ارتباط با ما</span>
              </div>

              <div className="hidden lg:block space-y-3 w-full">
                <h1 className="text-xl sm:text-2xl md:text-4xl font-bold sm:font-black text-neutral-900 leading-tight">
                  ارتباط با تیم روبیتک
                </h1>
                <p className="text-[11px] sm:text-sm text-neutral-600 font-medium sm:font-bold leading-relaxed max-w-md mx-auto lg:mx-0">
                  اگر درباره روبیتک سوالی دارید یا می‌خواهید به عنوان دانش‌آموز، سفیر یا حامی مالی همراه ما باشید، کافی است فرم زیر را تکمیل کنید. ما در اولین فرصت با شما تماس می‌گیریم و راهنمایی‌تان می‌کنیم.
                </p>
              </div>

              <div className="space-y-5 pt-2 sm:pt-4 w-full flex flex-col items-center lg:items-start">
                <div className="w-full max-w-md lg:max-w-none flex flex-col items-center lg:items-start text-center lg:text-start">
                  <div className="space-y-0.5 w-full flex flex-col items-center lg:items-start">
                    <h4 className="text-[10px] sm:text-xs font-black text-neutral-400">شماره تماس</h4>
                    <p className="text-xs sm:text-sm font-black text-neutral-800 leading-relaxed inline-block tracking-wide" dir="ltr">
                      09040280527
                    </p>
                  </div>
                </div>

                <div className="w-full max-w-md lg:max-w-none flex flex-col items-center lg:items-start text-center lg:text-start">
                  <div className="space-y-0.5 w-full flex flex-col items-center lg:items-start">
                    <h4 className="text-[10px] sm:text-xs font-black text-neutral-400">ایمیل سازمانی</h4>
                    <p className="text-xs sm:text-sm font-black text-neutral-800 leading-relaxed inline-block tracking-wide" dir="ltr">
                      rubitech.school@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 pt-1 w-full flex flex-col items-center lg:items-start">
                <h4 className="text-[10px] sm:text-xs font-black text-neutral-400">شبکه‌های اجتماعی</h4>
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <a
                    aria-label="Telegram"
                    className="text-brand-red hover:scale-110 transition-transform duration-200"
                    href="https://t.me/rubitechschool"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 496 512">
                      <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" />
                    </svg>
                  </a>
                  <a
                    aria-label="LinkedIn"
                    className="text-brand-red hover:scale-110 transition-transform duration-200"
                    href="https://www.linkedin.com/company/rubitechhh/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                    </svg>
                  </a>
                  <a
                    aria-label="Instagram"
                    className="text-brand-red hover:scale-110 transition-transform duration-200"
                    href="https://www.instagram.com/rubitech.school"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
