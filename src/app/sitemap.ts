import { MetadataRoute } from "next";
import { servicesData } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://alikaanozoglu.com";

    // Ana sayfa
    const routes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];

    // Eğitim detay sayfaları
    const trainingPages = servicesData.map((service) => ({
        url: `${baseUrl}/egitimler/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [...routes, ...trainingPages];
}
