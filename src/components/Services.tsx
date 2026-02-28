"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Lightbulb, Code, Leaf, Briefcase, FileText, Database, ArrowRight, Droplets, Wind, RefreshCw, BarChart, Presentation, Laptop, UserCheck, Globe, Mic } from "lucide-react";
import { servicesData } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
    Code: <Code size={32} />,
    Lightbulb: <Lightbulb size={32} />,
    Briefcase: <Briefcase size={32} />,
    Leaf: <Leaf size={32} />,
    FileText: <FileText size={32} />,
    Database: <Database size={32} />,
    Droplets: <Droplets size={32} />,
    Wind: <Wind size={32} />,
    RefreshCw: <RefreshCw size={32} />,
    BarChart: <BarChart size={32} />,
    Presentation: <Presentation size={32} />,
    Laptop: <Laptop size={32} />,
    UserCheck: <UserCheck size={32} />,
    Globe: <Globe size={32} />,
    Mic: <Mic size={32} />,
};

export function Services() {
    return (
        <section id="services" className="py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-full h-full bg-slate-50 dark:bg-slate-950 -z-10" />
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/5 blur-3xl rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white"
                    >
                        Eğitim & Atölyeler
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600 dark:text-slate-400"
                    >
                        Sadece teorik değil, uygulanabilir ve ölçülebilir etki yaratmayı hedefleyen interaktif eğitim içerikleri sunuyorum.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <Link href={`/egitimler/${service.slug}`} key={service.slug} className="block group">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="h-full glass-panel rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl dark:shadow-none hover:shadow-primary-500/10 cursor-pointer bg-white/50 dark:bg-slate-900/50 flex flex-col relative overflow-hidden"
                            >
                                <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center text-white bg-gradient-to-br ${service.color} shadow-lg shadow-${service.color.split('-')[1]}-500/30 group-hover:scale-110 transition-transform duration-300 z-10 relative`}>
                                    {iconMap[service.icon]}
                                </div>
                                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-3 z-10 relative">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-1 z-10 relative">
                                    {service.shortDescription}
                                </p>
                                <div className="mt-auto flex items-center text-sm font-bold text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors z-10 relative">
                                    İncele <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
