"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/Button";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/10 dark:bg-primary-500/5 col blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-500/10 dark:bg-accent-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-5xl">
                <div className="flex flex-col items-center text-center space-y-8">

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
                    >
                        Geleceğin <span className="text-gradient">Yetkinliklerini</span>
                        <br className="hidden sm:block" /> Bugün Keşfedin.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-[700px] text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed"
                    >
                        Kurumlara, topluluklara ve ekiplere sadece bilgi aktarmıyor; düşünme biçimini geliştirip, öğrenilenleri gerçek hayata uyarlamanızı sağlıyorum.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
                    >
                        <Button size="lg" className="group" asChild>
                            <a href="#services" className="flex items-center justify-center">
                                Eğitimleri İncele
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <a href="#about" className="flex items-center justify-center">
                                Daha Fazla Bilgi
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer flex flex-col items-center text-slate-400 hover:text-primary-500 transition-colors"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-sm font-medium mb-2">Keşfet</span>
                <ChevronDown size={24} />
            </motion.div>
        </section>
    );
}
