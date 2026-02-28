"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageCarouselProps {
    images: string[];
    title: string;
}

export function ImageCarousel({ images, title }: ImageCarouselProps) {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const next = useCallback(() => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prev = useCallback(() => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    // Otomatik slayt: her 5 saniyede bir sonraki görsel
    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    const variants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.95,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (dir: number) => ({
            x: dir > 0 ? -300 : 300,
            opacity: 0,
            scale: 0.95,
        }),
    };

    if (!images || images.length === 0) return null;

    return (
        <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl group bg-slate-900">
            {/* Görseller */}
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={current}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[current]}
                        alt={`${title} - Slayt ${current + 1}`}
                        fill
                        className="object-cover"
                        priority={current === 0}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Sol-Sağ Okları */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white dark:hover:bg-slate-700"
                    >
                        <ChevronLeft size={20} className="text-slate-700 dark:text-slate-200" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white dark:hover:bg-slate-700"
                    >
                        <ChevronRight size={20} className="text-slate-700 dark:text-slate-200" />
                    </button>
                </>
            )}

            {/* Alt Noktalar (Dots) */}
            {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > current ? 1 : -1);
                                setCurrent(index);
                            }}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === current
                                ? "bg-white scale-125 shadow-lg"
                                : "bg-white/50 hover:bg-white/75"
                                }`}
                        />
                    ))}
                </div>
            )}

            {/* Sayaç */}
            <div className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                {current + 1} / {images.length}
            </div>
        </div>
    );
}
