import "./globals.css";
import type { Metadata } from "next";
import { ModalProvider } from "@/context/ModalContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DonationModal from "@/components/DonationModal";

export const metadata: Metadata = {
  title: "روبیتک | هر لپ‌تاپ، یک مدرسه در حرکت!",
  description:
    "روبیتک با تأمین لپ‌تاپ برای دانش‌آموزان روستایی فرصت دسترسی به آموزش دیجیتال را در سراسر ایران فراهم می‌کند.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="font-ravi" data-scroll-behavior="smooth">
      <body className="antialiased text-brand-graphite bg-white font-ravi selection:bg-brand-red/10 selection:text-brand-red">
        <ModalProvider>
          <div className="flex flex-col min-h-screen font-ravi" dir="rtl">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <DonationModal />
          </div>
        </ModalProvider>
      </body>
    </html>
  );
}
