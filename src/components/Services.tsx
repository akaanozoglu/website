"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code, Leaf, Briefcase, FileText, Database, Mic } from "lucide-react";

const services = [
    {
        icon: <Code size={32} />,
        title: "Algoritmik Düşünme",
        description: "Algoritmik düşünme ile sistematik problem çözme yaklaşımlarını öğrenin.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: <Lightbulb size={32} />,
        title: "Tasarım Odaklı Düşünme",
        description: "Kullanıcı merkezli inovasyon ve yaratıcı çözüm stratejileri geliştirme.",
        color: "from-orange-500 to-pink-500"
    },
    {
        icon: <Briefcase size={32} />,
        title: "Girişimcilik 101",
        description: "Fikirden iş modeline uzanan yapı taşları ve stratejik büyüme adımları.",
        color: "from-purple-500 to-indigo-500"
    },
    {
        icon: <Leaf size={32} />,
        title: "Sürdürülebilirlik Başlıkları",
        description: "Döngüsel ekonomi, karbon/su ayak izi ve iklim değişikliği farkındalığı.",
        color: "from-emerald-500 to-teal-500"
    },
    {
        icon: <FileText size={32} />,
        title: "Kariyer Gelişimi & CV",
        description: "Etkili CV, LinkedIn, portfolyo oluşturma ve proje yazma eğitimleri.",
        color: "from-rose-500 to-red-500"
    },
    {
        icon: <Database size={32} />,
        title: "Teknik ve Kişisel Yetkinlik",
        description: "Excel ile veri yönetimi, diksiyon ve etkili iletişim atölyeleri.",
        color: "from-amber-400 to-orange-500"
    }
];

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
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group glass-panel rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl dark:shadow-none hover:shadow-primary-500/10 cursor-default bg-white/50 dark:bg-slate-900/50"
                        >
                            <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center text-white bg-gradient-to-br ${service.color} shadow-lg shadow-${service.color.split('-')[1]}-500/30 group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-3">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
