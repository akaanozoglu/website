import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { TrainingClient } from "./TrainingClient";
import { Metadata } from "next";

// Vercel SSG: Build esnasında tüm eğitim sayfalarını statik olarak üretir.
export function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

// Next.js 16: params artık Promise olduğu için await ile alınmalı.
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: "Eğitim Bulunamadı | Ali Kaan Özoğlu",
        };
    }

    return {
        title: `${service.title} | Ali Kaan Özoğlu`,
        description: service.shortDescription,
    };
}

export default async function TrainingDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return <TrainingClient service={service} />;
}
