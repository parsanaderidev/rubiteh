"use client";

import React, { useState } from "react";
import { useModal } from "@/context/ModalContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check, Clock, Heart } from "lucide-react";

// Payment Method Icons
function PaypalIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M15.607 4.653H8.941L6.645 19.251H1.82L4.862 0h7.995c3.754 0 6.375 2.294 6.473 5.513-.648-.478-2.105-.86-3.722-.86m6.57 5.546c0 3.41-3.01 6.853-6.958 6.853h-2.493L11.595 24H6.74l1.845-11.538h3.592c4.208 0 7.346-3.634 7.153-6.949a5.24 5.24 0 0 1 2.848 4.686M9.653 5.546h6.408c.907 0 1.942.222 2.363.541-.195 2.741-2.655 5.483-6.441 5.483H8.714Z" />
    </svg>
  );
}

function ZelleIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M13.559 24h-2.841a.483.483 0 0 1-.483-.483v-2.765H5.638a.667.667 0 0 1-.666-.666v-2.234a.67.67 0 0 1 .142-.412l8.139-10.382h-7.25a.667.667 0 0 1-.667-.667V3.914c0-.367.299-.666.666-.666h4.23V.483c0-.266.217-.483.483-.483h2.841c.266 0 .483.217.483.483v2.765h4.323c.367 0 .666.299.666.666v2.137a.67.67 0 0 1-.141.41l-8.19 10.481h7.665c.367 0 .666.299.666.666v2.477a.667.667 0 0 1-.666.667h-4.32v2.765a.483.483 0 0 1-.483.483Z" />
    </svg>
  );
}

interface CopyableFieldProps {
  label: string;
  value: string;
  onCopied: () => void;
}

function CopyableField({ label, value, onCopied }: CopyableFieldProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    onCopied();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] sm:text-xs font-bold text-neutral-500 px-1">{label}</label>
      <div className="flex items-center gap-2 h-11 sm:h-12 rounded-xl bg-neutral-50 border border-neutral-200 px-3 sm:px-4">
        <span dir="ltr" className="flex-1 text-xs sm:text-sm font-black text-neutral-800 text-left truncate">
          {value}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="text-neutral-400 hover:text-neutral-700 transition-colors shrink-0 cursor-pointer"
          aria-label="کپی"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}

// Stage 1: Select Payment Method
function MethodModal({ onClose, onSelect }: { onClose: () => void; onSelect: (method: "paypal" | "zelle") => void }) {
  const methods = [
    { id: "paypal" as const, sub: "PayPal", icon: PaypalIcon, color: "text-[#0070BA]" },
    { id: "zelle" as const, sub: "Zelle", icon: ZelleIcon, color: "text-[#6D1ED4]" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-ravi p-4" dir="rtl">
      <motion.div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="relative bg-white rounded-2xl w-full max-w-md mx-auto z-10 shadow-xl"
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <button
          onClick={onClose}
          className="absolute top-3.5 left-3.5 text-neutral-400 hover:text-neutral-700 transition-colors z-20 cursor-pointer"
          aria-label="بستن"
        >
          <X className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
        </button>
        <div className="p-6 sm:p-8">
          <h3 className="text-sm sm:text-base font-black text-neutral-900 text-center mb-1">
            روش پرداخت را انتخاب کنید
          </h3>
          <p className="text-[11px] sm:text-xs text-neutral-400 font-medium text-center mb-6">
            برای ادامه، یکی از روش‌های پرداخت زیر را انتخاب کنید
          </p>
          <div className="flex items-center justify-center gap-4">
            {methods.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelect(item.id)}
                  className="w-32 h-32 rounded-2xl border-2 border-neutral-200 hover:border-brand-red bg-white flex flex-col items-center justify-center gap-2.5 transition-all active:scale-[0.97] shrink-0 cursor-pointer"
                >
                  <span className={item.color}>
                    <Icon className="w-9 h-9" />
                  </span>
                  <span className="flex flex-col items-center gap-0.5">
                    <span className="text-[10px] font-bold text-neutral-500">پرداخت با</span>
                    <span className="text-xs font-black text-neutral-900">{item.sub}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Stage 2: Zelle Step 1
function ZelleStep1Modal({
  uniqueCode,
  onClose,
  onNext,
  showToast,
}: {
  uniqueCode: string;
  onClose: () => void;
  onNext: () => void;
  showToast: (msg: string) => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-ravi p-4" dir="rtl">
      <motion.div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="relative bg-white rounded-2xl w-full max-w-xl mx-auto z-10 shadow-xl max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <button
          onClick={onClose}
          className="absolute top-3.5 left-3.5 text-neutral-400 hover:text-neutral-700 transition-colors z-20 cursor-pointer"
          aria-label="بستن"
        >
          <X className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
        </button>
        <div className="p-4.5 sm:px-8 sm:pt-8 sm:pb-6">
          <div className="mb-5">
            <h3 className="text-xs sm:text-sm font-black text-neutral-900 text-center">پرداخت با Zelle</h3>
            <p className="text-[10px] sm:text-xs text-neutral-400 font-medium text-center mt-1">مرحله ۱ از ۲</p>
          </div>
          <div className="space-y-3.5">
            <CopyableField
              label="ایمیل دریافت‌کننده (روبیکمپ)"
              value="Info@amorebalancedworld.org"
              onCopied={() => showToast("کپی شد")}
            />
            <CopyableField
              label="کد یکتای شما"
              value={uniqueCode}
              onCopied={() => showToast("کپی شد")}
            />
            <div className="flex items-start gap-2 bg-amber-50 border border-amber-100 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3">
              <p className="text-[10px] sm:text-[11px] text-amber-700 font-medium leading-relaxed">
                مبلغ اهدایی خود را از طریق Zelle به ایمیل بالا ارسال کنید و کد یکتای خود را در قسمت یادداشت/Memo (که در برنامه بانکی شما به‌صورت اختیاری نمایش داده می‌شود) وارد کنید تا پرداخت شما سریع‌تر شناسایی شود.
              </p>
            </div>
          </div>
          <button
            onClick={onNext}
            className="mt-6 w-full h-12 rounded-xl bg-brand-graphite text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-brand-graphite/90 transition-colors active:scale-[0.98] cursor-pointer"
          >
            مرحله بعد
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// Stage 3: Zelle Step 2
const inputStyle =
  "w-full h-10.5 sm:h-12 rounded-xl bg-neutral-50 border border-neutral-200 px-3 sm:px-4 text-xs sm:text-sm focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-neutral-400 transition-colors placeholder:text-neutral-400 placeholder:font-medium shadow-none";

function ZelleStep2Modal({
  onClose,
  onBack,
  onConfirm,
}: {
  onClose: () => void;
  onBack: () => void;
  onConfirm: (payerEmail: string, transactionNumber: string) => void;
}) {
  const [payerEmail, setPayerEmail] = useState("");
  const [transactionNumber, setTransactionNumber] = useState("");
  const [errors, setErrors] = useState<{ payerEmail?: string; transactionNumber?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { payerEmail?: string; transactionNumber?: string } = {};

    if (!payerEmail.trim()) {
      newErrors.payerEmail = "ایمیل الزامی است";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payerEmail)) {
      newErrors.payerEmail = "فرمت ایمیل صحیح نیست";
    }

    if (!transactionNumber.trim()) {
      newErrors.transactionNumber = "شماره تراکنش الزامی است";
    } else if (transactionNumber.length > 100) {
      newErrors.transactionNumber = "شماره تراکنش حداکثر ۱۰۰ کاراکتر";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onConfirm(payerEmail, transactionNumber);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-ravi p-4" dir="rtl">
      <motion.div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="relative bg-white rounded-2xl w-full max-w-xl mx-auto z-10 shadow-xl max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <button
          onClick={onClose}
          className="absolute top-3.5 left-3.5 text-neutral-400 hover:text-neutral-700 transition-colors z-20 cursor-pointer"
          aria-label="بستن"
        >
          <X className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
        </button>
        <div className="p-4.5 sm:px-8 sm:pt-8 sm:pb-6">
          <div className="mb-5">
            <h3 className="text-xs sm:text-sm font-black text-neutral-900 text-center">پرداخت با Zelle</h3>
            <p className="text-[10px] sm:text-xs text-neutral-400 font-medium text-center mt-1">مرحله ۲ از ۲</p>
          </div>
          <p className="text-[10px] sm:text-xs text-neutral-400 font-medium text-center mb-5 leading-relaxed">
            پس از پرداخت، ایمیل تاییدیه‌ای از Zelle دریافت می‌کنید. اطلاعات آن را اینجا وارد کنید تا پرداختتان تایید شود.
          </p>
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] sm:text-xs font-bold text-neutral-500 px-1">
                ایمیلی که با آن پرداخت کردید
              </label>
              <input
                type="email"
                dir="ltr"
                value={payerEmail}
                onChange={(e) => {
                  setPayerEmail(e.target.value);
                  if (errors.payerEmail) setErrors((prev) => ({ ...prev, payerEmail: undefined }));
                }}
                placeholder="you@example.com"
                className={`${inputStyle} text-left`}
              />
              {errors.payerEmail && (
                <p className="text-red-500 text-[10px] sm:text-xs px-1">{errors.payerEmail}</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] sm:text-xs font-bold text-neutral-500 px-1">
                شماره پیگیری تراکنش (Confirmation Number)
              </label>
              <input
                dir="ltr"
                value={transactionNumber}
                onChange={(e) => {
                  setTransactionNumber(e.target.value);
                  if (errors.transactionNumber) setErrors((prev) => ({ ...prev, transactionNumber: undefined }));
                }}
                placeholder="مثلاً 1234567890"
                className={`${inputStyle} text-left`}
              />
              {errors.transactionNumber && (
                <p className="text-red-500 text-[10px] sm:text-xs px-1">{errors.transactionNumber}</p>
              )}
            </div>

            <div className="flex items-center gap-2.5 mt-2.5">
              <button
                type="button"
                onClick={onBack}
                className="w-[30%] h-12 rounded-xl border border-neutral-200 text-neutral-500 font-black text-xs sm:text-sm hover:bg-neutral-50 hover:text-neutral-700 transition-colors active:scale-[0.98] shrink-0 cursor-pointer"
              >
                مرحله قبل
              </button>
              <button
                type="submit"
                className="flex-1 h-12 rounded-xl bg-brand-graphite text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-brand-graphite/90 transition-colors active:scale-[0.98] cursor-pointer"
              >
                تایید
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

// Stage 4: Support Information Form
const notificationOptions = [
  { id: "updates", label: "می‌خواهم به‌روزرسانی‌های تاثیر را دریافت کنم." },
  { id: "delivery", label: "می‌خواهم هنگام تحویل لپ‌تاپ آگاه شوم." },
  { id: "wall", label: "نامم در دیوار حامیان نمایان داده شود." },
];

function SupportModal({
  method,
  onClose,
  showToast,
}: {
  method: "paypal" | "zelle";
  onClose: () => void;
  showToast: (msg: string) => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    school: "",
    email: "",
    mobile: "",
    note: "",
    notifications: [] as string[],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleNotification = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      notifications: prev.notifications.includes(id)
        ? prev.notifications.filter((n) => n !== id)
        : [...prev.notifications, id],
    }));
  };

  const handleFinalAction = (isSkip = false) => {
    if (method === "paypal") {
      showToast("در حال انتقال به درگاه پرداخت...");
      setTimeout(() => {
        window.location.href = "https://www.paypal.com/donate/?hosted_button_id=6R4YWYQBAG6KA";
      }, 2000);
    } else {
      showToast("متشکریم! اطلاعات شما ثبت شد.");
      setTimeout(() => {
        onClose();
      }, 1500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const newErrors: Record<string, string> = {};
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "فرمت ایمیل صحیح نیست";
    }
    if (formData.mobile && !/^09\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "شماره موبایل معتبر نیست";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      handleFinalAction(false);
    }, 500);
  };

  const submitLabel = method === "paypal" ? "ذخیره و ادامه به درگاه پرداخت" : "ذخیره اطلاعات";
  const skipLabel = method === "paypal" ? "فعلاً نه، برو به درگاه" : "نمی‌خوام";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-ravi p-4" dir="rtl">
      <motion.div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="relative bg-white rounded-2xl w-full max-w-xl mx-auto z-10 shadow-xl max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <button
          onClick={onClose}
          className="absolute top-3.5 left-3.5 text-neutral-400 hover:text-neutral-700 transition-colors z-20 cursor-pointer"
          aria-label="بستن"
        >
          <X className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
        </button>
        <div className="p-4.5 sm:px-8 sm:pt-8 sm:pb-6">
          <div className="flex items-start gap-2.5 mb-5 pl-6">
            <div className="bg-red-50 p-1.5 sm:p-2 rounded-xl text-brand-red shrink-0 mt-0.5">
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-black text-neutral-900 leading-tight">
                برای دیده شدن تاثیر اهدای خود با ما در ارتباط باشید
              </h3>
              <p className="text-[10px] sm:text-xs text-neutral-400 font-medium mt-1">
                اطلاعاتتان را وارد کنید تا از تاثیر اهدایتان با خبر بمانید.
                <span className="text-[9px] text-neutral-400 font-bold mr-1">(اختیاری)</span>
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] sm:text-xs font-bold text-neutral-500 px-1">نام شما</label>
                <input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="نام و نام‌خانوادگی"
                  className={inputStyle}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] sm:text-xs font-bold text-neutral-500 px-1">نام مدرسه</label>
                <input
                  value={formData.school}
                  onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                  placeholder="نام مدرسه"
                  className={inputStyle}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] sm:text-xs font-bold text-neutral-500 px-1">ایمیل</label>
                <input
                  type="email"
                  dir="ltr"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                  placeholder="you@example.com"
                  className={`${inputStyle} text-left`}
                />
                {errors.email && <p className="text-red-500 text-[10px] sm:text-xs px-1">{errors.email}</p>}
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] sm:text-xs font-bold text-neutral-500 px-1">شماره موبایل</label>
                <input
                  type="tel"
                  dir="ltr"
                  value={formData.mobile}
                  onChange={(e) => {
                    setFormData({ ...formData, mobile: e.target.value });
                    if (errors.mobile) setErrors((prev) => ({ ...prev, mobile: undefined }));
                  }}
                  placeholder="09123456789"
                  className={`${inputStyle} text-left`}
                />
                {errors.mobile && <p className="text-red-500 text-[10px] sm:text-xs px-1">{errors.mobile}</p>}
              </div>
            </div>

            <p className="text-[10px] sm:text-[11px] text-neutral-400 font-medium px-1 -mt-2">
              لطفاً ایمیل یا شماره موبایل خود را حتماً وارد کنید تا بعداً بتوانید به داشبوردی که اطلاعات حمایت‌هایتان در آن است دسترسی داشته باشید.
            </p>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] sm:text-xs font-bold text-neutral-500 px-1">
                یادداشت برای دانش‌آموز
                <span className="text-[9px] text-neutral-400 font-bold mr-1">(اختیاری)</span>
              </label>
              <textarea
                rows={3}
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                placeholder="یادداشت خود را بنویسید..."
                className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm outline-none focus:border-neutral-400 transition-colors resize-none placeholder:text-neutral-400 placeholder:font-medium"
              />
            </div>

            <div className="space-y-2 pt-0.5">
              {notificationOptions.map((opt) => (
                <label key={opt.id} className="flex items-start gap-2.5 cursor-pointer select-none group">
                  <div className="relative flex items-center shrink-0 mt-0.5">
                    <input
                      type="checkbox"
                      checked={formData.notifications.includes(opt.id)}
                      onChange={() => toggleNotification(opt.id)}
                      className="peer appearance-none w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-md border border-neutral-300 bg-white checked:bg-neutral-900 checked:border-neutral-900 transition-colors cursor-pointer outline-none"
                    />
                    <svg
                      className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-neutral-500 group-hover:text-neutral-800 transition-colors leading-tight">
                    {opt.label}
                  </span>
                </label>
              ))}
            </div>

            <div className="flex items-start gap-2 bg-amber-50 border border-amber-100 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-[10px] sm:text-[11px] text-amber-700 font-medium leading-relaxed">
                پرداخت شما ظرف یک هفته کاری بررسی می‌شود؛ در صورت تایید، درخواست شما در بخش حامیان ثبت می‌شود و مراحل بعدی (ثبت نام مدرسه و غیره) طی خواهد شد.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1.5">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:flex-2 h-10.5 sm:h-12 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.99] disabled:opacity-70 order-1 sm:order-2 shrink-0 cursor-pointer"
              >
                {isSubmitting ? "در حال ذخیره..." : submitLabel}
              </button>
              <button
                type="button"
                onClick={() => handleFinalAction(true)}
                disabled={isSubmitting}
                className="w-full sm:flex-1 h-10.5 sm:h-12 rounded-xl border border-neutral-200 text-xs sm:text-sm font-black text-neutral-400 hover:text-neutral-700 hover:bg-neutral-50 transition-colors disabled:opacity-70 order-2 sm:order-1 shrink-0 flex items-center justify-center cursor-pointer"
              >
                {isSubmitting ? "در حال ذخیره..." : skipLabel}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

// Main DonationModal Flow Coordinator
export default function DonationModal() {
  const { isDonationOpen, closeDonation } = useModal();
  const [stage, setStage] = useState<"method" | "zelleStep1" | "zelleStep2" | "support">("method");
  const [method, setMethod] = useState<"paypal" | "zelle" | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [uniqueCode] = useState(() => {
    const code = Math.floor(10000000 + 90000000 * Math.random());
    return `RUBI-${code}`;
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleClose = () => {
    closeDonation();
    // Reset state after exit animation
    setTimeout(() => {
      setStage("method");
      setMethod(null);
    }, 250);
  };

  const selectMethod = (m: "paypal" | "zelle") => {
    setMethod(m);
    if (m === "paypal") {
      setStage("support");
    } else {
      setStage("zelleStep1");
    }
  };

  if (!isDonationOpen) return null;

  return (
    <>
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] bg-neutral-900 text-white font-ravi text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg border border-neutral-700 pointer-events-none"
            dir="rtl"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {stage === "method" && (
          <MethodModal key="method" onClose={handleClose} onSelect={selectMethod} />
        )}
        {stage === "zelleStep1" && (
          <ZelleStep1Modal
            key="zelle1"
            uniqueCode={uniqueCode}
            onClose={handleClose}
            onNext={() => setStage("zelleStep2")}
            showToast={showToast}
          />
        )}
        {stage === "zelleStep2" && (
          <ZelleStep2Modal
            key="zelle2"
            onClose={handleClose}
            onBack={() => setStage("zelleStep1")}
            onConfirm={() => setStage("support")}
          />
        )}
        {stage === "support" && method && (
          <SupportModal
            key="support"
            method={method}
            onClose={handleClose}
            showToast={showToast}
          />
        )}
      </AnimatePresence>
    </>
  );
}
