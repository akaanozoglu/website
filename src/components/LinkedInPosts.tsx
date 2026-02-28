"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Heart, MessageCircle, Share2, ExternalLink, Loader2 } from "lucide-react";

interface LinkedInPost {
    id: string;
    content: string;
    linkedinUrl: string;
    postedAt: {
        date: string;
        postedAgoText: string;
    };
    postImages: { url: string }[];
    engagement: {
        likes: number;
        comments: number;
        shares: number;
    };
    author: {
        name: string;
        info: string;
        avatar: { url: string };
    };
}

function formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString("tr-TR", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

function truncate(text: string, maxLen: number): string {
    if (!text) return "";
    if (text.length <= maxLen) return text;
    return text.slice(0, maxLen).trim() + "...";
}

export function LinkedInPosts() {
    const [posts, setPosts] = useState<LinkedInPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("/api/linkedin")
            .then((res) => {
                if (!res.ok) throw new Error("Failed");
                return res.json();
            })
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, []);

    if (error) return null; // Hata durumunda bölümü gizle

    return (
        <section id="linkedin" className="py-24 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-[#0A66C2] flex items-center justify-center">
                            <Linkedin size={22} className="text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white">
                            LinkedIn Paylaşımları
                        </h2>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-lg">
                        Son paylaşımlarım ve profesyonel içeriklerim.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <Loader2 className="w-8 h-8 text-[#0A66C2] animate-spin" />
                        <span className="ml-3 text-slate-500">Paylaşımlar yükleniyor...</span>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post, index) => (
                            <motion.a
                                key={post.id}
                                href={post.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:border-[#0A66C2]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                            >
                                {/* Post Image */}
                                {post.postImages && post.postImages.length > 0 && (
                                    <div className="aspect-video overflow-hidden bg-slate-200 dark:bg-slate-800">
                                        <img
                                            src={post.postImages[0].url}
                                            alt=""
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                )}

                                <div className="p-5 flex flex-col flex-1">
                                    {/* Author & Date */}
                                    <div className="flex items-center gap-3 mb-3">
                                        {post.author?.avatar?.url && (
                                            <img
                                                src={post.author.avatar.url}
                                                alt={post.author.name}
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                        )}
                                        <div className="flex-1 min-w-0">
                                            <p className="font-semibold text-sm text-slate-900 dark:text-white truncate">
                                                {post.author?.name}
                                            </p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                {post.postedAt?.date ? formatDate(post.postedAt.date) : post.postedAt?.postedAgoText}
                                            </p>
                                        </div>
                                        <ExternalLink size={16} className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>

                                    {/* Content */}
                                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1 mb-4">
                                        {truncate(post.content, 200)}
                                    </p>

                                    {/* Engagement */}
                                    {post.engagement && (
                                        <div className="flex items-center gap-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
                                            <span className="flex items-center gap-1">
                                                <Heart size={14} />
                                                {post.engagement.likes}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MessageCircle size={14} />
                                                {post.engagement.comments}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Share2 size={14} />
                                                {post.engagement.shares}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </motion.a>
                        ))}
                    </div>
                )}

                {/* LinkedIn Profil Bağlantısı */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-10 text-center"
                >
                    <a
                        href="https://www.linkedin.com/in/kaanozglu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-medium transition-all hover:shadow-lg hover:shadow-[#0A66C2]/20"
                    >
                        <Linkedin size={18} />
                        Tüm Paylaşımları Gör
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
