"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Send, Mail, MapPin, CalendarDays } from "lucide-react";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simüle edilmiş form gönderimi (Gerçek Vercel + Resend entegrasyonu buraya bağlanacak)
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus("success");
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-slate-900 text-slate-50 relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-600/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
                <div className="mb-16 max-w-2xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-heading font-bold mb-4"
                    >
                        Birlikte Güçlü Bir Öğrenme<br />Deneyimi <span className="text-primary-400">Tasarlayalım.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-400"
                    >
                        Eğer topluluğunuza veya ekibinize çağın gerektirdiği yetkinlikleri kazandırmak istiyorsanız, benimle iletişime geçebilirsiniz.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center text-primary-400 border border-slate-700/50">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1">E-Posta Yoluyla</h4>
                                <p className="text-slate-400 mb-1">Projeleriniz veya sorularınız için.</p>
                                <a href="mailto:hello@alikaan.com" className="text-primary-400 hover:text-primary-300 font-medium transition-colors">
                                    iletisim@alikaanozoglu.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center text-primary-400 border border-slate-700/50">
                                <CalendarDays size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1">Toplantı Planlayın</h4>
                                <p className="text-slate-400 mb-1">Eğitim ihtiyaçlarınızı 15 dakikalık kısa bir görüşmede değerlendirelim.</p>
                                <a href="#" className="text-primary-400 hover:text-primary-300 font-medium transition-colors">
                                    Takvimimi Gör &rarr;
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center text-primary-400 border border-slate-700/50">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1">Konum</h4>
                                <p className="text-slate-400">Türkiye genelinde ve online olarak kurumsal / bireysel eğitimler.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-md"
                    >
                        {submitStatus === "success" ? (
                            <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-12">
                                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-2">
                                    <Send size={32} />
                                </div>
                                <h3 className="text-2xl font-bold">Mesajınız Alındı!</h3>
                                <p className="text-slate-400">En kısa sürede size geri dönüş yapacağım.</p>
                                <Button variant="outline" onClick={() => setSubmitStatus("idle")} className="mt-4 border-slate-600 text-slate-300">
                                    Yeni Mesaj Gönder
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-slate-300">İsim Soyisim</label>
                                        <input
                                            id="name"
                                            required
                                            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                                            placeholder="Adınız Soyadınız"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-slate-300">E-Posta Adresi</label>
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                                            placeholder="adiniz@sirketiniz.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-slate-300">Konu</label>
                                    <input
                                        id="subject"
                                        required
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                                        placeholder="Eğitim / İşbirliği Talebi"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-slate-300">Mesajınız</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                                        placeholder="Hedeflerinizi ve ihtiyaçlarınızı detaylandırabilirsiniz..."
                                    ></textarea>
                                </div>
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full shadow-primary-500/25"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Gönderiliyor..." : (
                                        <>
                                            Mesajı Gönder
                                            <Send className="ml-2 h-4 w-4" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
