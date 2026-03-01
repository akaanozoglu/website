"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Kullanıcının belirttiği sıraya göre logolar
const references = [
    { name: "Konya Büyükşehir Belediyesi", src: "/images/referanslar/Konya Büyükşehir Belediyesi.PNG" },
    { name: "Torku", src: "/images/referanslar/Torku.png" },
    { name: "Selçuk Üniversitesi", src: "/images/referanslar/Selçuk Üniversitesi.PNG" },
    { name: "Konya Teknik Üniversitesi", src: "/images/referanslar/Konya Teknik Üniversitesi.PNG" },
    { name: "Konya Gıda ve Tarım Üniversitesi", src: "/images/referanslar/Konya Gıda ve Tarım Üniversitesi.PNG" },
    { name: "Habitat Derneği", src: "/images/referanslar/Habitat Derneği.PNG" },
    { name: "Kapsül", src: "/images/referanslar/Kapsül Teknoloji Platformu.PNG" },
    { name: "Sia", src: "/images/referanslar/Sosyal İnovasyon Ajansı.PNG" },
    { name: "Kademe", src: "/images/referanslar/Kariyer Destek Eğitim Merkezi.png" },
    { name: "Localvore", src: "/images/referanslar/Localvore Biotechnology.jpg" },
];

export function References() {
    return (
        <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl mb-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-heading font-bold text-slate-900 dark:text-white"
                >
                    Güvenen Kurumlar & Referanslar
                </motion.h2>
            </div>

            <div className="relative w-full flex overflow-hidden">
                {/* Sol-Sağ Gradient maskesi */}
                <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-white via-transparent to-white dark:from-slate-950 dark:via-transparent dark:to-slate-950 w-full" />

                <div className="flex animate-marquee hover:pause whitespace-nowrap">
                    {/* Logolar (1. Grup) */}
                    {references.map((item, index) => (
                        <div key={index} className="flex-shrink-0 w-[200px] h-[100px] mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                            <Image
                                src={item.src}
                                alt={item.name}
                                width={200}
                                height={100}
                                className="object-contain max-h-[80px] w-auto"
                            />
                        </div>
                    ))}
                    {/* Logolar (2. Grup - Sonsuz döngü için kopya) */}
                    {references.map((item, index) => (
                        <div key={`copy-${index}`} className="flex-shrink-0 w-[200px] h-[100px] mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                            <Image
                                src={item.src}
                                alt={item.name}
                                width={200}
                                height={100}
                                className="object-contain max-h-[80px] w-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
