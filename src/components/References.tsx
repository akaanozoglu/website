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
    { name: "Kapsül Teknoloji Platformu", src: "/images/referanslar/Kapsül Teknoloji Platformu.PNG" },
    { name: "Sosyal İnovasyon Ajansı", src: "/images/referanslar/Sosyal İnovasyon Ajansı.PNG" },
    { name: "Localvore Biotechnology", src: "/images/referanslar/localvore.png" },
];

function LogoCard({ item }: { item: typeof references[0] }) {
    return (
        <div className="flex-shrink-0 w-[200px] mx-8 flex flex-col items-center justify-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
            <div className="w-[180px] h-[90px] flex items-center justify-center bg-white dark:bg-white/90 rounded-xl p-3">
                <Image
                    src={item.src}
                    alt={item.name}
                    width={180}
                    height={80}
                    className="object-contain max-h-[70px] w-auto"
                />
            </div>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 text-center whitespace-normal leading-tight max-w-[180px]">
                {item.name}
            </span>
        </div>
    );
}

export function References() {
    return (
        <section id="references" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 overflow-hidden">
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

                <div className="flex animate-marquee hover:pause whitespace-nowrap items-start">
                    {/* Logolar (1. Grup) */}
                    {references.map((item, index) => (
                        <LogoCard key={index} item={item} />
                    ))}
                    {/* Logolar (2. Grup - Sonsuz döngü için kopya) */}
                    {references.map((item, index) => (
                        <LogoCard key={`copy-${index}`} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
