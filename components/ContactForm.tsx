"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ContactForm() {
    return (
        <section id="contacto" className="py-24 bg-zinc-950 border-t border-white/10">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-black/40 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden"
                >
                    {/* Noise texture overlay could go here */}

                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            ¿Listo para el futuro?
                        </h2>
                        <p className="text-muted">
                            Agenda una consultoría estratégica o déjanos un mensaje.
                        </p>
                    </div>

                    <form action="https://formspree.io/f/mqkenvba" method="POST" className="space-y-6 max-w-lg mx-auto mb-12">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre completo"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Correo corporativo"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="¿Qué desafío te gustaría resolver?"
                                rows={4}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group"
                        >
                            Enviar Mensaje <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </form>

                    <div className="flex items-center justify-center gap-4 border-t border-white/10 pt-8">
                        <span className="text-muted text-sm">O prefiere agendar directamente:</span>
                        <Link
                            href="https://calendar.google.com"
                            className="flex items-center gap-2 px-5 py-2 border border-white/20 rounded-full text-white hover:bg-white/10 transition-all text-sm font-medium"
                        >
                            <Calendar className="w-4 h-4" />
                            Google Calendar
                        </Link>
                    </div>

                </motion.div>

                {/* Footer */}
                {/* Footer */}
                <footer className="mt-24 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="relative w-6 h-6 overflow-hidden rounded-sm">
                            <Image
                                src="/ZCO-logo.jpg"
                                alt="ZCOdex Logo"
                                fill
                                className="object-cover bg-white p-0.5"
                            />
                        </div>
                        <span className="text-white font-bold">ZCOdex</span>
                    </div>

                    <div className="text-muted text-sm flex gap-6">
                        <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
                        <Link href="/terminos" className="hover:text-white transition-colors">Términos</Link>
                        <Link href="/certificacion-iso" className="hover:text-white transition-colors">ISO 42001</Link>
                    </div>

                    <div className="text-zinc-600 text-xs">
                        © 2026 ZCOdex AI Agency.
                    </div>
                </footer>
            </div>
        </section>
    );
}
