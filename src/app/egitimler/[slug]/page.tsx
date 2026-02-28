import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { TrainingClient } from "./TrainingClient";
import { Metadata } from "next";

// Vercel için build esnasında tüm alt sayfaların statik (SSG) üretilmesini zorunlu kılar.
// Böylece deploy sonrası 404 hatalarının önüne geçilir.
export function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const service = servicesData.find((s) => s.slug === params.slug);

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

export default function TrainingDetail({ params }: { params: { slug: string } }) {
    const service = servicesData.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    return <TrainingClient service={service} />;
}
