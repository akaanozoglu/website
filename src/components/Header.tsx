"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
    { name: "Hakkımda", href: "#about" },
    { name: "Eğitimler", href: "#services" },
    { name: "İletişim", href: "#contact" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-slate-900/85 backdrop-blur-2xl border-b border-slate-200/60 dark:border-slate-800/60 py-0 shadow-lg shadow-slate-900/5' : 'bg-transparent py-2'}`}>
            <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="font-heading font-bold text-2xl tracking-tight text-slate-900 dark:text-white">
                    Ali Kaan Özoğlu
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg"
                    >
                        Birlikte Çalışalım
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-600 dark:text-slate-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden glass-panel absolute top-20 left-0 w-full border-b border-slate-200/50 dark:border-slate-800/50 pb-4 shadow-xl"
                >
                    <nav className="flex flex-col px-4 gap-4 pt-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-primary-600"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-2 text-center bg-primary-600 text-white w-full py-3 rounded-lg font-medium"
                        >
                            Birlikte Çalışalım
                        </Link>
                    </nav>
                </motion.div>
            )}
        </header>
    );
}
