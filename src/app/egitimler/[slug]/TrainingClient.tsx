"use client";

import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";
import { Lightbulb, Code, Leaf, Briefcase, FileText, Database, Droplets, Wind, RefreshCw, BarChart, Presentation, Laptop, UserCheck, Globe, Mic, Image as ImageIcon, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ReactNode> = {
    Code: <Code size={48} />,
    Lightbulb: <Lightbulb size={48} />,
    Briefcase: <Briefcase size={48} />,
    Leaf: <Leaf size={48} />,
    FileText: <FileText size={48} />,
    Database: <Database size={48} />,
    Droplets: <Droplets size={48} />,
    Wind: <Wind size={48} />,
    RefreshCw: <RefreshCw size={48} />,
    BarChart: <BarChart size={48} />,
    Presentation: <Presentation size={48} />,
    Laptop: <Laptop size={48} />,
    UserCheck: <UserCheck size={48} />,
    Globe: <Globe size={48} />,
    Mic: <Mic size={48} />,
};

type ServiceType = {
    slug: string;
    icon: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    color: string;
};

export function TrainingClient({ service }: { service: ServiceType }) {
    const whatsappMessage = encodeURIComponent(`${service.title} eğitimi ile ilgili daha fazla bilgi almak istiyorum.`);
    const whatsappUrl = `https://wa.me/905340312088?text=${whatsappMessage}`;

    return (
        <main className="min-h-screen pt-20">
            <Header />

            {/* Dynamic Background */}
            <section className="relative overflow-hidden py-24 text-center">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-200/50 dark:bg-slate-800/20 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
                <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr ${service.color} opacity-10 dark:opacity-5 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/4`} />

                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 flex justify-center"
                    >
                        <div className={`w-28 h-28 rounded-[2rem] flex items-center justify-center text-white bg-gradient-to-br ${service.color} shadow-2xl shadow-${service.color.split('-')[1]}-500/30 ring-4 ring-white/50 dark:ring-slate-900/50`}>
                            {iconMap[service.icon]}
                        </div>
                    </motion.div>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white mb-6"
                    >
                        {service.title}
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
                    >
                        {service.shortDescription}
                    </motion.p>
                </div>
            </section>

            <section className="py-12 pb-24 bg-slate-50 dark:bg-slate-950 relative">
                <div className="container mx-auto px-4 max-w-4xl">

                    {/* Placeholder for Course Image */}
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full aspect-[21/9] md:aspect-[3/1] bg-slate-200 dark:bg-slate-800/80 rounded-3xl mb-16 flex flex-col items-center justify-center border border-slate-300 dark:border-slate-700/50 shadow-inner overflow-hidden relative group"
                    >
                        <ImageIcon size={48} className="text-slate-400 dark:text-slate-600 mb-4 group-hover:scale-110 transition-transform duration-500" />
                        <span className="text-slate-500 dark:text-slate-500 font-medium">Eğitim Görseli Alanı</span>
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    </motion.div>

                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="glass-panel p-8 md:p-12 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 shadow-xl shadow-slate-200/20 dark:shadow-none"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 font-heading text-slate-800 dark:text-slate-100 flex items-center gap-4">
                            <span className={`w-8 h-1 rounded-full bg-gradient-to-r ${service.color} inline-block`} />
                            Eğitim Hakkında
                        </h2>

                        <div className="prose prose-lg dark:prose-invert max-w-none prose-slate">
                            {service.fullDescription.split('\n').map((paragraph, index) => (
                                <p key={index} className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-6 last:mb-0">
                                    {paragraph.trim()}
                                </p>
                            ))}
                        </div>

                        {/* Call to Actions */}
                        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-6 justify-center">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-8 py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-1 w-full sm:w-auto justify-center"
                            >
                                <MessageCircle className="mr-2" size={24} />
                                Detaylı Bilgi Al (WhatsApp)
                            </a>
                            <Link
                                href="/#services"
                                className="px-8 py-4 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors w-full sm:w-auto text-center"
                            >
                                Diğer Eğitimlere Dön
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Contact />

            <footer className="py-8 bg-slate-950 text-center border-t border-slate-800">
                <p className="text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} Ali Kaan Özoğlu. Geliştirici: Fabri-Lab
                </p>
            </footer>
        </main>
    );
}
