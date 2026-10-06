import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSupporterBySlug, SUPPORTERS } from "@/data/supporters";
import SupporterDetailClient from "@/components/supporters/SupporterDetailClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SUPPORTERS.filter((s) => s.hasDetailPage).map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const supporter = getSupporterBySlug(slug);

  if (!supporter) {
    return {
      title: "حامی یافت نشد | روبیتک",
    };
  }

  return {
    title: `${supporter.name} | جامعه حامیان و شرکای روبیتک`,
    description: supporter.shortDescription,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const supporter = getSupporterBySlug(slug);

  if (!supporter) {
    notFound();
  }

  return <SupporterDetailClient supporter={supporter} />;
}
