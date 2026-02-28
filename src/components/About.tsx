"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
    const highlights = [
        "Uygulamalı Eğitimler",
        "Sistematik Problem Çözme",
        "Kullanıcı Merkezli İnovasyon",
        "Etkili Kariyer Gelişimi"
    ];

    return (
        <section id="about" className="py-24 bg-white dark:bg-slate-900/50">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Image/Visual Placeholder - To be replaced with actual image eventually */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[500px] md:h-[600px] w-full max-w-md mx-auto rounded-2xl overflow-hidden glass-panel flex items-center justify-center border-slate-200 dark:border-slate-800"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/40 dark:to-accent-900/40 opacity-50" />
                        <span className="text-slate-400 dark:text-slate-500 font-medium z-10 text-center px-4">
                            [Ali Kaan Özoğlu Fotoğrafı<br />Buraya Gelecek]
                        </span>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="inline-block rounded-lg bg-primary-100 dark:bg-primary-900/40 px-3 py-1 text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                            Hakkımda
                        </div>

                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white leading-tight">
                            Merhaba, ben Ali Kaan Özoğlu.
                        </h2>

                        <div className="space-y-4 text-base md:text-lg text-slate-600 dark:text-slate-300">
                            <p>
                                Kurumlara, topluluklara ve ekiplere geleceğin yetkinliklerini kazandırmaya odaklanan uygulamalı eğitimler veriyorum.
                                Amacım yalnızca bilgi aktarmak değil, katılımcıların düşünme biçimini geliştirmek ve öğrendiklerini gerçek hayatta uygulayabilmelerini sağlamak.
                            </p>
                            <p>
                                Tüm eğitim ve atölyelerim; etkileşimli, uygulama odaklı ve katılımcı profiline göre özelleştirilmiş şekilde tasarlanır.
                                Çünkü kalıcı öğrenmenin, deneyim ve aktif katılımla mümkün olduğuna inanıyorum.
                            </p>
                        </div>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {highlights.map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-slate-700 dark:text-slate-200 font-medium">
                                    <CheckCircle2 className="text-primary-500 h-5 w-5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
