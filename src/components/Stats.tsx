"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
}

function AnimatedCounter({ end, duration = 2, prefix = "", suffix = "" }: CounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let startTime: number;
            let animationFrame: number;

            const animate = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = (timestamp - startTime) / (duration * 1000);

                if (progress < 1) {
                    // Easing function: easeOutExpo
                    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                    setCount(Math.floor(end * easeProgress));
                    animationFrame = requestAnimationFrame(animate);
                } else {
                    setCount(end);
                }
            };

            animationFrame = requestAnimationFrame(animate);

            return () => cancelAnimationFrame(animationFrame);
        }
    }, [end, duration, isInView]);

    return (
        <span ref={ref} className="font-heading font-bold text-4xl md:text-5xl text-slate-900 dark:text-white">
            {prefix}{count}{suffix}
        </span>
    );
}

const stats = [
    { value: 500, suffix: "+", label: "Katılımcı & Öğrenci", color: "from-blue-500/20 to-cyan-500/20" },
    { value: 10, suffix: "+", label: "Aktif Eğitim Başlığı", color: "from-purple-500/20 to-pink-500/20" },
    { value: 20, suffix: "+", label: "Kurumsal İşbirliği", color: "from-emerald-500/20 to-teal-500/20" },
    { value: 100, suffix: "%", label: "Pratik Odaklılık", color: "from-orange-500/20 to-amber-500/20" },
];

export function Stats() {
    return (
        <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-slate-100 dark:divide-slate-800">

                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center justify-center p-4 relative group"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />

                            <AnimatedCounter end={stat.value} suffix={stat.suffix} />

                            <span className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium mt-2 text-center">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}
