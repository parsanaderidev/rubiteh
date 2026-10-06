"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useModal } from "@/context/ModalContext";
import { LayoutDashboard, LayoutGrid, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const { openDonation } = useModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { title: "خانه", href: "/" },
    { title: "قصه ما", href: "/about" },
    { title: "ارتباط با ما", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-slate-100 font-ravi" dir="rtl">
      <div className="container mx-auto flex items-center justify-between h-20 md:h-24 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 md:gap-5 lg:gap-6 xl:gap-8 min-w-0 shrink-0">
          {/* Mobile hamburger menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden items-center justify-center w-10 h-10 z-50 relative transition-all active:scale-90 cursor-pointer text-brand-graphite"
            type="button"
            aria-label="منوی ناوبری"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <LayoutGrid className="w-5 h-5" />}
          </button>

          {/* Logos */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <Link className="flex items-center shrink-0" href="/">
              <div className="relative h-9.5 w-11 lg:h-12 lg:w-13.5">
                <img
                  alt="Rubitech Logo"
                  draggable={false}
                  className="object-contain"
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
                  src="/images/logo.png"
                />
              </div>
            </Link>

            <div className="flex items-center gap-2 md:gap-3 shrink-0">
              <div className="h-6.5 lg:h-7.5 w-px bg-slate-200" />
              <div className="relative h-6.5 w-14.5 lg:h-7.5 lg:w-17">
                <img
                  alt="Digikala Mehr"
                  draggable={false}
                  className="object-contain"
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
                  src="/images/digikala-mehr.png"
                />
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-14">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  className={`text-sm lg:text-base transition-colors whitespace-nowrap font-black ${
                    active ? "text-brand-graphite" : "text-neutral-500 hover:text-brand-blue-dark"
                  }`}
                  href={link.href}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center min-w-0 shrink-0">
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <div className="hidden md:flex items-center gap-1.5 sm:gap-2.5">
              <Link
                aria-label="داشبورد"
                className="flex items-center justify-center sm:justify-start h-10 sm:h-11 w-10 sm:w-auto sm:px-3.5 text-brand-graphite border border-neutral-200 hover:bg-neutral-50 active:scale-[0.95] transition-all rounded-xl text-xs font-bold whitespace-nowrap shrink-0"
                href="/login"
              >
                <LayoutDashboard className="w-4 h-4 sm:hidden" />
                <span className="hidden sm:inline">داشبورد</span>
              </Link>
            </div>

            <button
              onClick={() => openDonation("full")}
              className="group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding whitespace-nowrap outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 gap-1.5 bg-brand-blue-dark hover:bg-brand-blue-dark-hover text-white active:scale-[0.95] duration-300 h-10 sm:h-11 px-4 sm:px-6 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md shadow-black/5 cursor-pointer"
            >
              ساخت مدرسه
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 z-40 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in">
          <div className="bg-white border-b border-slate-200 px-6 py-8 shadow-xl flex flex-col gap-6">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-black py-2 border-b border-slate-100 transition-colors ${
                      active ? "text-brand-red" : "text-brand-graphite hover:text-brand-red"
                    }`}
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3 pt-2">
              <Link
                onClick={() => setMobileMenuOpen(false)}
                href="/login"
                className="w-full flex items-center justify-center h-11 border border-neutral-200 rounded-xl text-xs font-bold text-brand-graphite hover:bg-neutral-50"
              >
                ورود به داشبورد
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
